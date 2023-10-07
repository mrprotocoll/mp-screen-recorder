document.addEventListener("DOMContentLoaded", ()=>{
    // GET THE SELECTORS OF THE BUTTONS
    const startVideoButton = document.querySelector("button#start_video")
    // const stopVideoButton = document.querySelector("button#stop_video")

    // adding event listeners

    startVideoButton.addEventListener("click", ()=>{
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
            chrome.tabs.sendMessage(tabs[0].id, {action: "request_recording"},  function(response){
                if(!chrome.runtime.lastError){
                    console.log(response)
                } else{
                    console.log(chrome.runtime.lastError, 'error line 14')
                }
            })
        } )
    })


    // stopVideoButton.addEventListener("click", ()=>{
    //     chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
    //         chrome.tabs.sendMessage(tabs[0].id, {action: "stopvideo"},  function(response){
    //             if(!chrome.runtime.lastError){
    //                 console.log(response)
    //             } else{
    //                 console.log(chrome.runtime.lastError, 'error line 27')
    //             }
    //         })
    //     } )
    // })

    // function to close modal when close button is clicked
    const closeModal = () => {
        document.querySelector('.hngsr-popup .close').addEventListener('click', () => {
            console.log("close");
            document.querySelector('#modal-section').innerHTML = '';
        });
    };

    closeModal();

    var video = document.getElementById("videoOutput");
    var playButton = document.getElementById("hngsr-play");
    let play = false;
    const pauseIcon = `<div class="control"><svg xmlns="http://www.w3.org/2000/svg" width="2" height="14" viewBox="0 0 2 14" fill="none">
                                <path d="M1 1.5L1 12.5" stroke="black" stroke-width="2" stroke-linecap="round"/>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="2" height="14" viewBox="0 0 2 14" fill="none">
                                <path d="M1 1.5L1 12.5" stroke="black" stroke-width="2" stroke-linecap="round"/>
                            </svg></div> <span>Pause</span>`;

    const playIcon = `<svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.4697 22.25C6.82557 22.25 2.21973 17.6536 2.21973 12C2.21973 6.34645 6.82557 1.75 12.4697 1.75C18.1139 1.75 22.7197 6.34645 22.7197 12C22.7197 17.6539 18.1236 22.25 12.4697 22.25ZM12.4697 2.25C7.09358 2.25 2.71973 6.62386 2.71973 12C2.71973 17.3761 7.09358 21.75 12.4697 21.75C17.8459 21.75 22.2197 17.3761 22.2197 12C22.2197 6.62386 17.8459 2.25 12.4697 2.25Z" fill="#292D32" stroke="#141414"/>
                <path d="M12.6305 8.45315L12.6307 8.45329L15.5305 10.1232C16.5362 10.703 17.0002 11.4603 17.0002 12.23C17.0002 12.9906 16.5352 13.7575 15.5305 14.3368L12.6307 16.0067L12.6307 16.0066L12.624 16.0106C12.0688 16.342 11.5263 16.49 11.0602 16.49C10.7055 16.49 10.3716 16.4018 10.0793 16.2364C9.41774 15.8506 8.99023 15.067 8.99023 13.91V10.56C8.99023 9.39798 9.41123 8.61615 10.0715 8.23225C10.7307 7.84904 11.6231 7.87234 12.6305 8.45315ZM12.386 15.5854L12.386 15.5854L12.3898 15.5833L15.2898 13.9133L15.2913 13.9124C15.9607 13.5237 16.5102 12.9429 16.5102 12.24C16.5102 11.5346 15.9466 10.9543 15.2944 10.5694L15.2944 10.5694L15.2898 10.5667L12.3935 8.89887C11.949 8.63282 11.4907 8.46999 11.0602 8.46999C10.8152 8.46999 10.5507 8.52299 10.3241 8.66055C9.71109 9.01933 9.49023 9.78674 9.49023 10.56V13.91C9.49023 14.6664 9.70794 15.4543 10.3315 15.8038C10.9435 16.1627 11.7305 15.9554 12.386 15.5854Z" fill="#292D32" stroke="#141414"/>
            </svg>
            <span>Play</span>`;

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
})

