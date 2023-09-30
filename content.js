console.log("Hi, I have been injected whoopie!!!")

var recorder = null;
var isRecording = false;
var chunkSize = 5000; // Set your desired chunk size in milliseconds
var mediaStream = null;
var checksum = null;
var id = null;
chrome.runtime.onMessage.addListener( (message, sender, sendResponse)=>{
    if(message.action === "request_recording"){
        console.log("requesting recording")
        id = generateUUID()
        sendResponse(`processed: ${message.action}`);

        navigator.mediaDevices.getDisplayMedia({
            audio:true,
            video: {
                width:9999999999,
                height: 9999999999
            }
        }).then((stream)=>{
            startStreamingOnApproved(stream)
        })
    }

    if(message.action === "stopvideo"){
        console.log("stopping video");
        sendResponse(`processed: ${message.action}`);
        stopRecording()
    }

})
function startStreamingOnApproved(stream, id){

    mediaStream = stream;
    recorder = new MediaRecorder(stream);
    isRecording = true;

    recorder.ondataavailable = function (event) {
        let recordedBlob = event.data;
        if (recordedBlob.size > 0) {
            if (!checksum) {
                // Calculate the checksum of the first chunk
                calculateChecksum(recordedBlob)
                    .then(result => {
                        checksum = result;
                        sendVideoChunkToServer(recordedBlob, true);
                    });
            } else {
                sendVideoChunkToServer(recordedBlob, false);
            }
        }
    }

    recorder.onstop = function () {
        mediaStream.getTracks().forEach(function (track) {
            if (track.readyState === "live") {
                track.stop();
            }
        });
        isRecording = false;
    }

    recorder.start(chunkSize); // Start recording in chunks
}

function sendVideoChunkToServer(chunk, isFirstChunk) {
    const endpoint = 'http://localhost:8000/api/v1/recordings/'+ id + '/stream';
    const formData = new FormData();
    formData.append('file', chunk, 'example_chunk.mp4');

    if (!isFirstChunk) {
        formData.append('checksum', checksum);
    }

    fetch(endpoint, {
        method: 'POST',
        body: formData,
    })
        .then((response) => {
            if (response.ok) {
                console.log('Video chunk uploaded successfully.');
            } else {
                console.error('Error uploading video chunk:');
            }
        })
        .catch((error) => {
            console.error('Network error:', error);
        });
}
function stopRecording() {
    if (isRecording) {
        recorder.stop();
    }
}

function generateUUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0,
            v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}