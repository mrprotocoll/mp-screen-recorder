const addCss = css => document.head.appendChild(document.createElement('style')).innerHTML = css;

function sendVideoChunkToServer(chunk, id = null) {
    const endpoint = 'http://localhost:8000/api/v1/recordings/'+ id + '/chunk';
    const formData = new FormData();

    formData.append('file', chunk, filename+'.webm');
    formData.append('isLastChunk', isLastChunk);

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

function generateUUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0,
            v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
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

// download video recording
function downloadRecording(url) {
    document.getElementById('hngr-download').addEventListener('click', function (){
        let a = document.createElement("a");
        a.style.display = "none";
        a.href = url;
        a.download = "screen-recording.webm"

        document.body.appendChild(a);
        a.click();

        document.body.removeChild(a);

        URL.revokeObjectURL(url);
    })
}

const showModal = (blob) => {
    const container = document.getElementById('hngsr');
    container.innerHTML = Elements.recordingModal;
    var video = document.getElementById("videoOutput");

    let url = URL.createObjectURL(blob);
    video.src = url;
    // add styling
    addCss(`
    .hngsr-popup .output {
    display: grid;
    grid-template-columns: 55% 43%;
    gap: 40px;
}

.hngsr-popup .flex-gap {
    display: flex;
    justify-content: start;
    column-gap: 15px;
    align-items: center;
}

.hngsr-popup .output .content h5 {
    color: #727272;
    font-family: Sora, sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin-top: 40px;
}

.hngsr-popup .output .name h3{
    color: #413C6D;
    font-family: Sora, sans-serif;
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
}

.hngsr-popup .output h2{
    color: #141414;
    font-family: Sora, sans-serif;
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
}

.hngsr-popup .output .url {
    margin: 64px 0px;
}

.hngsr-popup .output .url input {
    border-radius: 16px;
    border: 0.5px solid #E7E7ED;
    background: rgba(182, 179, 198, 0.20);
    width: 500px;
    padding: 15px 12px;
}

.hngsr-popup .url input::placeholder {
    color: #4B4B4B;
    font-family: Work Sans, sans-serif !important;
    font-size: 16px !important;
    font-style: normal;
    font-weight: 400;
    line-height: 25.8px;
}

.hngsr-popup .url button {
    border-radius: 8px;
    border: 1px solid var(--hngsr-pri-200);
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 8px;
    padding: 10px 18px;
}

.hngsr-popup .share {
    margin: 20px 0;
}

.hngsr-popup ul {
    margin: 0;
    list-style-type: none;
}

.hngsr-popup .share button{
    border-radius: 6px;
    border: 1px solid var(--hngsr-pri-200);
    column-gap: 8px;
    padding: 12px 16px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.hngsr-popup .video .player {
    border-radius: 8px;
    border: 1px solid  var(--hngsr-pri-200);
    margin-bottom: 80px;
}

.hngsr-popup #videoOutput {
    height: 393px;
    width: 100%;
}

.hngsr-popup .video #progressBar {
    background: var(--hngsr-pri);
    width: 100%;
    height: 4px;
    z-index: 999;
    border-radius: 24px;
    transition: width 0.3s ease-in-out;
}

.hngsr-popup .video .progress-bg {
    background: #DFE0E1;
    width: 100%;
    height: 4px;
    border-radius: 24px;
    margin-top: -16px;
}

.hngsr-popup .video-controls {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 24px 40px;
}

.hngsr-popup .video-controls .duration p {
    color: #939393;
    font-family: Inter, sans-serif;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
}

.hngsr-popup .control-settings {
    display: flex;
    justify-content: space-between;
    align-items: center;
    column-gap: 40px;
}

.hngsr-popup .control-settings button {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: transparent;
    border: 0;
    row-gap: 3px;
    color: #141414;
}

.hngsr-popup .transcript {
    margin: 20px 0;
}

.hngsr-popup .transcript h2{
    color: #000;
    font-family: Sora, sans-serif;
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
}

.hngsr-popup .transcript select {
    border-radius: 4px;
    border: 1px solid #CFCFCF;
    padding: 8px;
    margin: 10px 0;
}

.hngsr-popup .transcript select option {
    color: #9D9D9D;
    font-family: Work Sans, sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}

.hngsr-popup .transcript .script {
    padding: 10px 0;
}

.hngsr-popup .script p {
    color: #000;
    font-family: Inter, sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 163.023%;
}

.hngsr-popup button {
    cursor: pointer;
}
/* Modal  */
.hngsr-popup .modal {
    background: #c1c7d0c9;
    height: 100vh;
    width: 100vw;
    position: fixed;
    z-index: 7;
    padding: 50px 0;
    overflow: auto;
    top: 0;
    left: 0;
}

.hngsr-popup .container {
    max-width: 1170px;
    padding-left: 24px;
    padding-right: 24px;
    margin: 0 auto;
}

.hngsr-popup .modal-body {
    width: 100%;
    position: relative;
    z-index: 9;
    display: flex;
    justify-content: center;
    flex-direction: column;
    overflow: auto;
    background: #FFFFFF;
    border-radius: 30px;
    padding: 10px 40px 40px 40px;
}

.hngsr-popup .modal-blur {
    position: fixed;
    z-index: 2;
    width: 100vw;
    height: 100vh;
    backdrop-filter: blur(5px);
}

.hngsr-popup .modal .heading {
    display: flex;
    justify-content: end;
    align-items: center;
    padding-bottom: 20px;
}

.hngsr-popup .modal .close {
    display: flex;
    cursor: pointer;
    flex-direction: column;
    justify-content: space-between;
    height: 20px;
    width: 20px !important;
    margin-bottom: 20px;
}

.hngsr-popup .close .close-item:focus,
.close .close-item:hover {
    border: 1px solid #000;
    cursor: pointer;
}

.hngsr-popup .close .close-item:nth-of-type(1) {
    rotate: -45deg;
    margin-top: 18px;
}

.hngsr-popup .close .close-item:nth-of-type(2) {
    rotate: 45deg;
    margin-top: -3px;
}

.hngsr-popup .modal .close .close-item {
    border: 1px solid #bebaba;
}
`);

    playAndPauseVideo(video);

    videoProgressBar(video);

    downloadRecording(url)

    // close modal
    document.querySelector('.hngsr-popup .close').addEventListener('click', () => {
        console.log("close");
        container.innerHTML = '';
    });
};

function playAndPauseVideo(video) {
    var playButton = document.getElementById("hngsr-play");
    let play = false;

    playButton.addEventListener('click', function (e){
        e.preventDefault();
        if(play) {
            video.pause()
            this.innerHTML = playIcon;
        }else{
            video.play();
            this.innerHTML = pauseIcon;
        }
        play = !play;
    })
}

function videoProgressBar(video) {
    var progressBar = document.getElementById("progressBar");
    var currentTime = document.getElementById("currentTime");
    var totalDuration = document.getElementById("totalDuration");

    video.addEventListener("timeupdate", function() {
        // Calculate the percentage of video played
        var progress = (video.currentTime / video.duration) * 100;

        // Update the progress bar width
        progressBar.style.width = progress + "%";

        // Update the current time
        var minutes = Math.floor(video.currentTime / 60);
        var seconds = Math.floor(video.currentTime % 60);
        currentTime.innerText = minutes + ":" + (seconds < 10 ? "0" : "") + seconds;

        // Update the total duration
        var totalMinutes = Math.floor(video.duration / 60);
        var totalSeconds = Math.floor(video.duration % 60);
        totalDuration.innerText = totalMinutes + ":" + (totalSeconds < 10 ? "0" : "") + totalSeconds;
    });
}