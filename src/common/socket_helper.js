/**
 * Function which takes a Blob, converts it to a file, and base64 encodes it.
 */
function blobToBase64(blob) {
    return new Promise((resolve) => {
      const reader = new FileReader();
  
      reader.onloadend = () => {
        if (!reader.result) return;
  
        const result = reader.result;
        resolve(result.split(',')[1]);
      };
      reader.readAsDataURL(blob);
    });
}

async function createAndSendMessage(blob, frame, ws) {
    const data = await blobToBase64(blob);
    // specifies Face Model only, as we are processing images (the captured video frames)
    const models = { face: {} };
    // payload_id is included in the response— used as reference to ensure responses are handled in order
    const payload_id = `${frame}`;
  
    const message = JSON.stringify({ data, models, payload_id });
    ws.send(message);
}

function toBlobCallback(blob, ws) {
    if (ws.readyState !== WebSocket.OPEN) return;
    createAndSendMessage(blob, frameCount, ws);
}


export default {toBlobCallback, blobToBase64, createAndSendMessage}

