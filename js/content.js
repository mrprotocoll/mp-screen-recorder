console.log("Hi, HelpMeOut is ready when you are ready")

var recorder = null;
var videoRecorder = null;
var isRecording = false;
var chunkSize = 5000; // Set your desired chunk size in milliseconds
var mediaStream = null;
var videoStream = null;
var id = null;
var timerInterval = null;
var filename = new Date().getTime();
var isLastChunk = false;


chrome.runtime.onMessage.addListener( (message, sender, sendResponse)=>{
    if(message.action === "request_recording"){
        id = generateUUID()
        sendResponse(`processed: ${message.action}`);

        navigator.mediaDevices.getDisplayMedia({
            audio:true,
            video: {
                width:999,
                height: 999
            }
        }).then((stream)=>{
            startScreenRecording(stream);
        })
    }

})
function startScreenRecording(stream){

    mediaStream = stream;
    const options = {mimeType: 'video/webm; codecs=vp8'};
    recorder = new MediaRecorder(stream, options);
    isRecording = true;
    startRecording();

    recorder.ondataavailable = function (event) {
        let recordedBlob = event.data;
        if (recordedBlob.size > 0) {
            sendVideoChunkToServer(recordedBlob, id);
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
}

function startRecording() {
    recorder.start(chunkSize); // Start recording in chunks
    displayControls(); // display controls

    startUserCameraRecording(); // start recoding user camera

    startTimer(); // start counting time

    const stopVideoButton = document.querySelector("#stop_video")
    stopVideoButton.addEventListener("click", ()=>{
        console.log("stopping video");

        // Stop the timer after recording stops
        stopTimer();
        // stop recording
        stopRecording();
    })
}

function stopRecording() {
    if (isRecording) {
        isLastChunk = true
        recorder.stop();
        videoRecorder.stop();
        showModal();
        // document.getElementById('hngsr').style.display = 'none';
    }
}

function displayControls()  {
    const tempElement = document.createElement('div');

    tempElement.innerHTML = Elements.controlsView;
    tempElement.className = 'hngsr-popup';
    tempElement.id = 'hngsr';
    document.body.appendChild(tempElement);
    addCss(`
        .hngsr-popup .record {
            position: fixed;
            bottom: 10px;
            left: 30px;
            display: flex;
            gap: 15px;
            justify-content: start;
            align-items: center;
        }
        
        .hngsr-popup .videoContainer {
            border-radius: 50%;
            width: 156px;
            height: 156px;
            border: 1px solid #B6B6B6;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
            position: relative;
        }
        
        .hngsr-popup #videoElement {
            border-radius: 50%;
            width: 100%;
            height: 100%;
            overflow: hidden;
            position: absolute;
            object-fit: cover;
        }
        .hngsr-popup .controls {
        display: flex;
        border-radius: 200px;
        background: #141414;
        justify-content: center;
        align-items: center;
        gap: 24px;
        padding: 8px 40px 8px 16px;
        margin: 20px;
        width: 551px;
        border: 8px solid #E5E5E5;
        z-index: 99999999;
    }
    
    .hngsr-popup .controls .recording-icon {
        width: 10px;
        height: 10px;
        flex-shrink: 0;
        border-radius: 17px;
        background: #C00404;
        margin: 0 10px;
    }
    
    .hngsr-popup .duration {
        border-right: 1px solid #E8E8E8;
        padding: 16px;
        display: flex;
        color: #FFFFFF;
        justify-content: center;
        align-items: center;
    }
    
    .hngsr-popup .control-icons{
        display: flex;
        column-gap: 24px;
    }
    
    .hngsr-popup .control {
        border-radius: 32px;
        border: 1px solid #FFF;
        background: #FFF;
        display: flex;
        width: 44px;
        height: 44px;
        padding: 10px;
        justify-content: center;
        align-items: center;
        gap: 10px;
        cursor: pointer;
    }
    
    .hngsr-popup .controls p {
        color: #FFFFFF;
        font-family: Work Sans, sans-serif;
        font-size: 12px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        text-align: center;
        padding-top: 3px;
    }
    
    .hngsr-popup .controls .delete {
        border: 1px solid #000;
        background: #4B4B4B;
    }

    `);

    toggleCamera();
}

function startUserCameraRecording() {
    navigator.mediaDevices.getUserMedia({ video: true }).then(stream => {
        document.getElementById('videoContainer').style.display = 'block';

        videoStream = stream;
        const videoElement = document.getElementById('videoElement');
        videoElement.srcObject = stream;
        videoRecorder = new MediaRecorder(stream);
        videoRecorder.start();

        videoRecorder.onstop = function () {
            videoStream.getTracks().forEach(function (track) {
                track.stop();
            });
        }
    });
}

const toggleCamera = () => {
    let camera = true;
    const cameraButton = document.getElementById('hngsr-camera');
    const videoContainer = document.getElementById('videoContainer');
    
    cameraButton.addEventListener('click', function (e){
        e.preventDefault();
        
        if(camera) {
            this.innerHTML = Elements.offCameraIcon;
            videoRecorder.stop();
            videoContainer.style.display = 'none';
        }else{
            this.innerHTML = Elements.onCameraIcon;
            videoContainer.style.display = 'block';
            startUserCameraRecording();
        }

        camera = !camera;
    });
}