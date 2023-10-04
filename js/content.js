console.log("Hi, HelpMeOut is ready when you are ready")

var recorder = null;
var isRecording = false;
var chunkSize = 5000; // Set your desired chunk size in milliseconds
var mediaStream = null;
var checksum = null;
var id = null;
var timerInterval = null;
var filename = new Date().getTime();
var isLastChunk = false;

const controls = `
<div class="controls">
    <div class="duration">
        <time id="timer">00:00:00</time>
        <div class="recording-icon"></div>
    </div>
    <div class="control-icons">
        <div>
            <button class="control">
                <svg xmlns="http://www.w3.org/2000/svg" width="2" height="14" viewBox="0 0 2 14" fill="none">
                    <path d="M1 1.5L1 12.5" stroke="black" stroke-width="2" stroke-linecap="round"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="2" height="14" viewBox="0 0 2 14" fill="none">
                    <path d="M1 1.5L1 12.5" stroke="black" stroke-width="2" stroke-linecap="round"/>
                </svg>
            </button>
            <p>Pause</p>
        </div>

        <div>
            <button class="control" id="stop_video">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M5.25 7.5C5.25 6.25736 6.25736 5.25 7.5 5.25H16.5C17.7426 5.25 18.75 6.25736 18.75 7.5V16.5C18.75 17.7426 17.7426 18.75 16.5 18.75H7.5C6.25736 18.75 5.25 17.7426 5.25 16.5V7.5Z" stroke="#0F172A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
            <p>Stop</p>
        </div>
        <div>
            <button class="control">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M15.75 10.5L20.4697 5.78033C20.9421 5.30786 21.75 5.64248 21.75 6.31066V17.6893C21.75 18.3575 20.9421 18.6921 20.4697 18.2197L15.75 13.5M4.5 18.75H13.5C14.7426 18.75 15.75 17.7426 15.75 16.5V7.5C15.75 6.25736 14.7426 5.25 13.5 5.25H4.5C3.25736 5.25 2.25 6.25736 2.25 7.5V16.5C2.25 17.7426 3.25736 18.75 4.5 18.75Z" stroke="#0F172A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
            <p>Camera</p>
        </div>
        <div>
            <button class="control">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M12 18.75C15.3137 18.75 18 16.0637 18 12.75V11.25M12 18.75C8.68629 18.75 6 16.0637 6 12.75V11.25M12 18.75V22.5M8.25 22.5H15.75M12 15.75C10.3431 15.75 9 14.4069 9 12.75V4.5C9 2.84315 10.3431 1.5 12 1.5C13.6569 1.5 15 2.84315 15 4.5V12.75C15 14.4069 13.6569 15.75 12 15.75Z" stroke="#0F172A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
            <p>Mic</p>
        </div>

        <button class="control delete">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M14.7404 9L14.3942 18M9.60577 18L9.25962 9M19.2276 5.79057C19.5696 5.84221 19.9104 5.89747 20.25 5.95629M19.2276 5.79057L18.1598 19.6726C18.0696 20.8448 17.0921 21.75 15.9164 21.75H8.08357C6.90786 21.75 5.93037 20.8448 5.8402 19.6726L4.77235 5.79057M19.2276 5.79057C18.0812 5.61744 16.9215 5.48485 15.75 5.39432M3.75 5.95629C4.08957 5.89747 4.43037 5.84221 4.77235 5.79057M4.77235 5.79057C5.91878 5.61744 7.07849 5.48485 8.25 5.39432M15.75 5.39432V4.47819C15.75 3.29882 14.8393 2.31423 13.6606 2.27652C13.1092 2.25889 12.5556 2.25 12 2.25C11.4444 2.25 10.8908 2.25889 10.3394 2.27652C9.16065 2.31423 8.25 3.29882 8.25 4.47819V5.39432M15.75 5.39432C14.5126 5.2987 13.262 5.25 12 5.25C10.738 5.25 9.48744 5.2987 8.25 5.39432" stroke="#BEBEBE" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </button>
    </div>
</div>`

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
            startStreamingOnApproved(stream);
        })
    }

})
function startStreamingOnApproved(stream, id){

    mediaStream = stream;
    const options = {mimeType: 'video/webm; codecs=vp8'};
    recorder = new MediaRecorder(stream, options);
    isRecording = true;
    startRecording();

    recorder.ondataavailable = function (event) {
        let recordedBlob = event.data;
        if (recordedBlob.size > 0) {
            sendVideoChunkToServer(recordedBlob);
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

    // start counting time
    startTimer();

    const stopVideoButton = document.querySelector("#stop_video")
    stopVideoButton.addEventListener("click", ()=>{
        console.log("stopping video");

        // Stop the timer after recording stops
        stopTimer();
        // stop recording
        stopRecording();
    })
}

function sendVideoChunkToServer(chunk) {
    // hngs5.mrprotocoll.me
    const endpoint = 'http://localhost:8000/api/v1/recordings/'+ id + '/chunk';
    const formData = new FormData();

    formData.append('file', chunk, 'vid.webm');
    formData.append('isLastChunk', isLastChunk);

    fetch(endpoint, {
        method: 'POST',
        body: formData,
        // body: chunk,
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
        isLastChunk = true
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

function displayControls()  {
    console.log("appended")
    const tempElement = document.createElement('div');

    tempElement.innerHTML = controls;
    tempElement.className = 'hngsr-popup';
    document.body.appendChild(tempElement);
}

function startTimer() {
    let seconds = 0;
    let minutes = 0;
    let hours = 0;

    const timerElement = document.getElementById('timer');

    timerInterval = setInterval(function() {
        seconds++;

        if (seconds >= 60) {
            seconds = 0;
            minutes++;
            if (minutes >= 60) {
                minutes = 0;
                hours++;
            }
        }

        timerElement.textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }, 1000); // Update the timer every second
}

function stopTimer() {
    clearInterval(timerInterval);
}
