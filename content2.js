console.log("Hi, I have been injected whoopie!!!")

var recorder = null
function onAccessApproved(stream){

    recorder = new MediaRecorder(stream);

    recorder.start();

    recorder.ondataavailable = function(event){
        let recordedBlob  = event.data;
        // let url = URL.createObjectURL(recordedBlob);
        sendVideoToServer(recordedBlob);
    }

    recorder.onstop = function(){
        stream.getTracks().forEach(function(track){
            if(track.readyState === "live"){
                track.stop()
            }
        })
    }
}

function sendVideoToServer(videoBlob) {
    const endpoint = 'http://localhost:8000/api/v1/recordings';
    const formData = new FormData();
    blob = new Blob([videoBlob])
    formData.append('file', blob, 'examplett.mp4');
    fetch(endpoint, {
        method: 'POST',
        body: formData,
    })
        .then((response) => {
            if (response.ok) {
                console.log('Video uploaded successfully.');
            } else {
                console.error('Error uploading video:');
            }
        })
        .catch((error) => {
            console.error('Network error:', error);
        });
}

chrome.runtime.onMessage.addListener( (message, sender, sendResponse)=>{

    if(message.action === "request_recording"){
        console.log("requesting recording")

        sendResponse(`processed: ${message.action}`);

        navigator.mediaDevices.getDisplayMedia({
            audio:true,
            video: {
                width:9999999999,
                height: 9999999999
            }
        }).then((stream)=>{
            onAccessApproved(stream)
        })
    }

    if(message.action === "stopvideo"){
        console.log("stopping video");
        sendResponse(`processed: ${message.action}`);
        if(!recorder) return console.log("no recorder")

        recorder.stop();


    }

})