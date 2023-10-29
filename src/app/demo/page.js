"use client"
import { useRef } from 'react'
import React from 'react'
import Webcam from 'react-webcam'
import Header from '@/common/Header'
import {
  XYPlot,
  XAxis,
  YAxis,
  HorizontalGridLines,
  VerticalGridLines,
  LineSeries
} from 'react-vis';


// Bandaid import fix
import dynamic from 'next/dynamic'
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });


const videoConstraints = {
  width: { min: 480 },
  height: { min: 720 },
  aspectRatio: 1
};



const scanFrequency = 5; // seconds

const videoDemoUrl = "https://www.youtube.com/watch?v=3MqYE2UuN24"

export default function Home() {



  const webcamRef = useRef(null);  // reference to webcam
  const websocketRef = useRef(null);


  const [streaming, setStreaming] = React.useState(false);  // whether or not we are streaming
  const [res, setRes] = React.useState([]);  // response from websocket
  const [demoState, setDemoState] = React.useState("collect");  // collect | upload | analyze
  const [loading, setLoading] = React.useState(false)
  
  const minX = Math.min(...res.map((point) => point.x));
  const maxX = Math.max(...res.map((point) => point.x));
  const minY = Math.min(...res.map((point) => point.y));
  const maxY = Math.max(...res.map((point) => point.y));

  let ws = null; // websocket connection
  const apiKey = process.env.NEXT_PUBLIC_API_KEY;
  const wsURL = `wss://api.hume.ai/v0/stream/models?apikey=${apiKey}`;



  function extractEngagement(res) {
    if (!res.face.predictions) return [];
    const { emotions } = res.face.predictions[0];
     const interest = emotions.find((emotion) => emotion.name === 'Interest').score;
    return interest;
  }


  function connect() {
    ws = new WebSocket(wsURL)
    createCallbacks();

    // save this websocket connection
    websocketRef.current = ws;
    // (ws, "after reference save");

  }

  function createCallbacks() {
    // define callback function
    ws.onopen = () => {
      console.log("WebSocket connection established");
      setStreaming(true)
    }
    ws.onmessage = (event) => {
      const res = JSON.parse(event.data);
      const time = res.payload_id;
      // // ensure we are handling responses in order
      // if (frame < latestFrame) return;
      // latestFrame = frame;
      console.log(res);
      const new_engagement_point = {x: time, y: extractEngagement(res)};
      setRes((list) => [...list, new_engagement_point]);
      console.log(new_engagement_point);
    }
    ws.addEventListener('close', (event) => {
      if (streaming || event.code === 1006) {
        console.log('WebSocket reconnecting...', event);
        setTimeout(() => {
          connect();
        }, 3000);
      }
      // IF video is playing when streaming is stopped then pause the video
      console.log('Websocket connection closed', event)
    })

    ws.addEventListener('error', (error) => {
      console.error('WebSocket error:', error);
    });
  }



  // capture image from webcam and returns base64 encoded webp
  const capture = React.useCallback(
    () => {
      const imageSrc = webcamRef.current.getScreenshot();
      if (imageSrc == null)
        return;
      // only include the <data> portion of </data> data:[<mediatype>][;base64],<data>
      const imageSrcSplit = imageSrc.split(',')[1];
      return imageSrcSplit;
    },
    [webcamRef]
  );


  // video player


  // connect to websocket when video is played
  const onPlay = () => {
    connect();
  };

  // disconnect from websocket when video is paused
  const onPause = () => {
    setStreaming(false);
    websocketRef.current.close(1000, 'video stopped');
  };

  const onProgress = ({played, playedSeconds, loaded, loadedSeconds}) => {
    // send image to websocket if we have played 5 seconds more than the last time we sent an image
    if (streaming && Math.floor(playedSeconds) % scanFrequency === 0) {
      const src = capture(); // returns base64 encoded image
      if (src == null)
        return 
      const models = { face: {} };
      const payload_id = Math.floor(playedSeconds).toString();
      const message = JSON.stringify({"data": src, models, payload_id });
      // console.log("sending this message " + message)
      websocketRef.current.send(message);
      console.log("sending image to websocket")
    } 
  }

  const onEnded = () => {
    setStreaming(false);
    websocketRef.current.close(1000, 'video ended');
    setDemoState('upload');
  }


  function collectUI() {
    return (
      <div className='flex justify-items-center align-middle flex-col pt-12 gap-6' >

        <div className='flex justify-around align-middle flex-row gap-3'>

          <div className='flex justify-center align-middle flex-col'>
            <ReactPlayer className="max-h-fit" height={400} url={videoDemoUrl} light={true} onPlay={onPlay} onPause={onPause}  onProgress={onProgress}/>
          </div>

          {/* Square aspect ratio */}
          <div className='flex justify-center align-middle flex-col items-center'>
            <Webcam  ref={webcamRef}     videoConstraints={videoConstraints} width={400} height={720} />   
          </div>


        </div> 

        <div className="relative isolate  flex flex-row items-center justify-center  border-emerald-300/70">
        <XYPlot width={600} height={200} xDomain={[minX, maxX]} yDomain={[minY, maxY]}>
      <HorizontalGridLines />
      <VerticalGridLines />
      <XAxis title="X Axis" />
      <YAxis title="Y Axis" />
      <LineSeries
       data={res}
       color="green"           // Set line color to green
       strokeWidth={4}         // Set line thickness
       style={{ fill: 'none' }} // Remove fill underneath/above the line
       />
    </XYPlot>
        </div>
        <div>
          {/* h1 centered below webcam */}
          <div className='flex justify-center'>
            <h1 className='text-2xl font-extrabold text-green-300 text-center px-3'> { `Current Engagement: ${res.length > 0 ? res[res.length - 1].y : "No data yet"}`} </h1>  
          </div>
        </div>
      </div>
    )
  }

  function uploadUI () {
    return (
  <div className="relative isolate px-6 pt-14 lg:px-8">
    <div className="relative isolate px-6 pt-14 lg:px-8 text-center flex flex-col gap-7 justify-center align-middle items-center">
      <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl">Ready to syntehsize with general engagement graph?</h1>
      <button href="#" onClick={onUpload} className="rounded-md bg-emerald-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-emerald-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600 max-w-[50%]">Upload</button>
    </div>
    </div>
    )
  }

  const onUpload = () => {
    // TODO: Upload res to server to process
    setDemoState('analyze');
    // setLoading(true);
    // Todo: Download new consolidated graph data
  }

  function analyzeUI() {
    return (
      <XYPlot width={600} height={200} xDomain={[minX, maxX]} yDomain={[minY, maxY]}>
        <HorizontalGridLines />
        <VerticalGridLines />
        <XAxis title="X Axis" />
        <YAxis title="Y Axis" />
        <LineSeries
        data={res}
        color="green"           // Set line color to green
        strokeWidth={4}         // Set line thickness
        style={{ fill: 'none' }} // Remove fill underneath/above the line
        />
      </XYPlot>
    )
  }


  return (
    <div className="bg-white h-screen flex items-center justify-center">
      <Header/>
      {demoState === 'collect' && collectUI()}
      {demoState === 'upload' && uploadUI()}
      {demoState === 'analyze' && analyzeUI()} 
    </div>
  )
}