const Elements =  {
    controlsView:  `
<div class="record">
    <div class="videoContainer" id="videoContainer">
        <video id="videoElement" autoplay></video>
    </div>
        
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
                        <button class="control" id="hngsr-camera">
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
            </div>
</div>`,
    offCameraIcon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.63 7.58008C16.63 7.58008 16.66 6.63008 16.63 6.32008C16.46 4.28008 15.13 3.58008 12.52 3.58008H6.21C3.05 3.58008 2 4.63008 2 7.79008V16.2101C2 17.4701 2.38 18.7401 3.37 19.5501L4 20.0001" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16.7398 10.95V16.21C16.7398 19.37 15.6898 20.42 12.5298 20.42H7.25977" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M22.0002 6.73999V15.81C22.0002 17.48 20.8802 18.06 19.5202 17.1L16.7402 15.15" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M22.02 2.18994L2.02002 22.1899" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,
    onCameraIcon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M15.75 10.5L20.4697 5.78033C20.9421 5.30786 21.75 5.64248 21.75 6.31066V17.6893C21.75 18.3575 20.9421 18.6921 20.4697 18.2197L15.75 13.5M4.5 18.75H13.5C14.7426 18.75 15.75 17.7426 15.75 16.5V7.5C15.75 6.25736 14.7426 5.25 13.5 5.25H4.5C3.25736 5.25 2.25 6.25736 2.25 7.5V16.5C2.25 17.7426 3.25736 18.75 4.5 18.75Z" stroke="#0F172A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>`,
    recordingModal: `<div class="modal">
    <div class="modal-blur"></div>
    <div class="modal-body container">
        <div class="heading">
            <ul class="close">
                <li class="close-item"></li>
                <li class="close-item"></li>
            </ul>
        </div>
        <div class="output">
            <div class="video">
                <div class="player">
                    <video id="videoOutput">
                        <source src="https://hngs5.mrprotocoll.me/storage/videos/1696225131_motivation_quickie_-_this_speech_will_pump_you_up_in_30_seconds.mp4">
                    </video>
                    <div class="progress-bg">
                        <div id="progressBar"></div>
                    </div>

                    <div class="video-controls">
                        <div class="duration">
                            <p><span id="currentTime">0:30</span> / <span id="totalDuration">3:00</span></p>
                        </div>
                        <div class="control-settings">
                            <button id="hngsr-play">
                                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.4697 22.25C6.82557 22.25 2.21973 17.6536 2.21973 12C2.21973 6.34645 6.82557 1.75 12.4697 1.75C18.1139 1.75 22.7197 6.34645 22.7197 12C22.7197 17.6539 18.1236 22.25 12.4697 22.25ZM12.4697 2.25C7.09358 2.25 2.71973 6.62386 2.71973 12C2.71973 17.3761 7.09358 21.75 12.4697 21.75C17.8459 21.75 22.2197 17.3761 22.2197 12C22.2197 6.62386 17.8459 2.25 12.4697 2.25Z" fill="#292D32" stroke="#141414"/>
                                    <path d="M12.6305 8.45315L12.6307 8.45329L15.5305 10.1232C16.5362 10.703 17.0002 11.4603 17.0002 12.23C17.0002 12.9906 16.5352 13.7575 15.5305 14.3368L12.6307 16.0067L12.6307 16.0066L12.624 16.0106C12.0688 16.342 11.5263 16.49 11.0602 16.49C10.7055 16.49 10.3716 16.4018 10.0793 16.2364C9.41774 15.8506 8.99023 15.067 8.99023 13.91V10.56C8.99023 9.39798 9.41123 8.61615 10.0715 8.23225C10.7307 7.84904 11.6231 7.87234 12.6305 8.45315ZM12.386 15.5854L12.386 15.5854L12.3898 15.5833L15.2898 13.9133L15.2913 13.9124C15.9607 13.5237 16.5102 12.9429 16.5102 12.24C16.5102 11.5346 15.9466 10.9543 15.2944 10.5694L15.2944 10.5694L15.2898 10.5667L12.3935 8.89887C11.949 8.63282 11.4907 8.46999 11.0602 8.46999C10.8152 8.46999 10.5507 8.52299 10.3241 8.66055C9.71109 9.01933 9.49023 9.78674 9.49023 10.56V13.91C9.49023 14.6664 9.70794 15.4543 10.3315 15.8038C10.9435 16.1627 11.7305 15.9554 12.386 15.5854Z" fill="#292D32" stroke="#141414"/>
                                </svg>
                                <span>Play</span>
                            </button>
                            <button>
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                                    <path d="M10.7872 19.3375L10.7855 19.3364L7.86552 17.5064L7.86557 17.5064L7.85725 17.5014C7.58807 17.3399 7.27007 17.2401 6.94 17.2401H5.5C4.37908 17.2401 3.58544 16.9334 3.07105 16.4191C2.55667 15.9047 2.25 15.111 2.25 13.9901V9.99011C2.25 8.86918 2.55667 8.07554 3.07105 7.56116C3.58544 7.04678 4.37908 6.74011 5.5 6.74011H6.93C7.26007 6.74011 7.57806 6.64036 7.84725 6.47885L7.8473 6.47893L7.85552 6.47378L10.7745 4.64443C10.7747 4.64432 10.7748 4.6442 10.775 4.64409C12.1442 3.79088 13.3628 3.69653 14.2678 4.19755C15.1729 4.69854 15.74 5.77758 15.74 7.40011V16.5701C15.74 18.1808 15.1639 19.2722 14.2662 19.7736L14.2661 19.7735L14.2556 19.7796C13.9025 19.9883 13.4927 20.0901 13.05 20.0901C12.3766 20.0901 11.5981 19.8502 10.7872 19.3375ZM8.12156 17.0919L8.12448 17.0938L11.0445 18.9238L11.045 18.9241C12.0535 19.5544 13.1789 19.8331 14.0334 19.3568C14.8844 18.8825 15.25 17.7914 15.25 16.6001V7.41011C15.25 6.21416 14.8871 5.11707 14.0307 4.65184C13.179 4.17904 12.0569 4.44377 11.044 5.0867L8.11617 6.90538L8.11611 6.90528L8.10716 6.91111C7.76424 7.13441 7.35041 7.25011 6.93 7.25011H5.5C4.65353 7.25011 3.93049 7.42751 3.42895 7.92905C2.9274 8.43059 2.75 9.15364 2.75 10.0001V14.0001C2.75 14.8466 2.9274 15.5696 3.42895 16.0712C3.93049 16.5727 4.65353 16.7501 5.5 16.7501H6.93C7.35846 16.7501 7.76473 16.8649 8.12156 17.0919Z" fill="#292D32" stroke="#141414"/>
                                    <path d="M18.2988 15.852L18.3 15.8503C20.0037 13.5824 20.0037 10.4176 18.3 8.14972L18.3 8.14972L18.2988 8.1481C18.2194 8.04321 18.2373 7.88564 18.3522 7.79857C18.4568 7.71932 18.6138 7.73694 18.701 7.85105C20.527 10.2933 20.5267 13.7084 18.7001 16.1503C18.6489 16.2184 18.5802 16.25 18.5003 16.25C18.4541 16.25 18.4062 16.2382 18.3471 16.1975C18.2368 16.1097 18.2206 15.9553 18.2988 15.852Z" fill="#292D32" stroke="#141414"/>
                                    <path d="M20.1289 18.352L20.1304 18.35C22.9337 14.6123 22.9337 9.38781 20.1304 5.65003L20.1304 5.65002L20.1289 5.6481C20.0494 5.54321 20.0674 5.38564 20.1823 5.29857C20.287 5.21927 20.4441 5.23697 20.5313 5.35129C23.467 9.26338 23.4667 14.7381 20.5305 18.6499L20.5255 18.6565L20.5207 18.6633C20.4872 18.7111 20.4211 18.75 20.3304 18.75C20.2842 18.75 20.2362 18.7382 20.1772 18.6975C20.0668 18.6097 20.0506 18.4553 20.1289 18.352Z" fill="#292D32" stroke="#141414"/>
                                </svg>
                                <span>Volume</span>
                            </button>

                            <button>
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                                    <path d="M12.5 15.25C10.7061 15.25 9.25 13.7939 9.25 12C9.25 10.2061 10.7061 8.75 12.5 8.75C14.2939 8.75 15.75 10.2061 15.75 12C15.75 13.7939 14.2939 15.25 12.5 15.25ZM12.5 9.25C10.9839 9.25 9.75 10.4839 9.75 12C9.75 13.5161 10.9839 14.75 12.5 14.75C14.0161 14.75 15.25 13.5161 15.25 12C15.25 10.4839 14.0161 9.25 12.5 9.25Z" fill="#292D32" stroke="#141414"/>
                                    <path d="M9.79506 21.6259L9.79505 21.6259L9.78974 21.6273C9.28935 21.7623 8.77942 21.6906 8.34725 21.4313L8.34729 21.4312L8.33943 21.4267L6.61942 20.4367L6.61883 20.4364C6.12587 20.1535 5.76895 19.6938 5.61296 19.1306C5.46627 18.565 5.54116 17.9913 5.82369 17.4989L5.82465 17.4972C5.98974 17.2069 6.10884 16.9076 6.156 16.6179C6.20286 16.3301 6.18369 16.0141 6.02135 15.7372C5.71133 15.2083 5.03815 15.03 4.4 15.03C3.21614 15.03 2.25 14.0639 2.25 12.88V11.12C2.25 9.93618 3.21614 8.97004 4.4 8.97004C5.03815 8.97004 5.71133 8.79176 6.02135 8.2629C6.3349 7.72803 6.14497 7.04845 5.82247 6.49909C5.54025 6.00592 5.46658 5.42245 5.61336 4.86799L5.61381 4.86625C5.75952 4.30769 6.11339 3.84907 6.6158 3.56545L6.6158 3.56546L6.61834 3.56401L8.34834 2.57401L8.34837 2.57406L8.35501 2.57013C9.24208 2.04416 10.4272 2.3472 10.9696 3.26453L10.9696 3.26454L10.9713 3.26729L11.0893 3.46398C11.42 4.03416 11.9019 4.47504 12.515 4.47504C13.1294 4.47504 13.6119 4.0324 13.9427 3.46056C13.9427 3.4605 13.9428 3.46045 13.9428 3.46039L14.0513 3.2729C14.0516 3.27253 14.0518 3.27216 14.052 3.27178C14.5945 2.3478 15.777 2.04447 16.6739 2.57945L16.6738 2.5795L16.6806 2.58339L18.4006 3.57339L18.4012 3.57373C18.8941 3.85658 19.2511 4.31626 19.407 4.87951C19.5537 5.44513 19.4788 6.01881 19.1963 6.51121L19.1954 6.51289C19.0303 6.80323 18.9112 7.1025 18.864 7.39221C18.8171 7.68003 18.8363 7.99597 18.9987 8.2729C19.3087 8.80176 19.9819 8.98004 20.62 8.98004C21.8039 8.98004 22.77 9.94618 22.77 11.13V12.89C22.77 14.0739 21.8039 15.04 20.62 15.04C19.9818 15.04 19.3087 15.2183 18.9987 15.7472C18.6851 16.2821 18.875 16.9616 19.1975 17.511C19.4824 18.0087 19.5608 18.5901 19.4084 19.1355L19.4084 19.1355L19.4062 19.1438C19.2605 19.7024 18.9066 20.161 18.4042 20.4446L18.4017 20.4461L16.6751 21.4341C16.3657 21.6044 16.0395 21.69 15.71 21.69C15.55 21.69 15.3823 21.6675 15.2042 21.6256C14.7097 21.4879 14.3 21.1782 14.0387 20.7428L13.9207 20.546C13.5899 19.9759 13.1081 19.535 12.495 19.535C11.8806 19.535 11.398 19.9778 11.0672 20.5497L10.9592 20.7362C10.9589 20.7367 10.9586 20.7372 10.9583 20.7377C10.6931 21.1869 10.2813 21.5004 9.79506 21.6259ZM14.3567 20.2895L14.3573 20.2906L14.4659 20.4781C14.4661 20.4786 14.4664 20.479 14.4667 20.4795C14.6561 20.8101 14.9704 21.043 15.3387 21.1351C15.6931 21.2237 16.0696 21.1839 16.3933 20.9911L18.1199 19.9931C18.4901 19.7795 18.7775 19.4226 18.8931 18.9889C19.0063 18.5644 18.951 18.1179 18.7331 17.7402L18.7322 17.7387C18.2242 16.8653 18.2069 16.0507 18.5341 15.4781C18.8586 14.9102 19.5688 14.52 20.59 14.52C21.5061 14.52 22.24 13.7862 22.24 12.87V11.11C22.24 10.2067 21.509 9.46004 20.59 9.46004C19.5688 9.46004 18.8586 9.06986 18.5341 8.50197C18.2069 7.9294 18.2242 7.11483 18.7322 6.24143L18.7331 6.2399C18.951 5.86223 19.0063 5.41565 18.8931 4.99121C18.7776 4.55819 18.5025 4.21601 18.142 3.99421L18.1353 3.99003L18.1283 3.98608L16.403 2.99874C15.7278 2.5948 14.8551 2.83623 14.4595 3.50568L14.4595 3.50567L14.4573 3.50952L14.3473 3.69952L14.3467 3.70056C13.8372 4.5854 13.1503 5.00004 12.49 5.00004C11.8308 5.00004 11.1449 4.58668 10.6357 3.70467L10.5281 3.50908L10.524 3.50162L10.5196 3.4943C10.1304 2.84037 9.26766 2.60931 8.59931 2.99743C8.5991 2.99755 8.5989 2.99767 8.59869 2.99779L6.87014 3.99695C6.87005 3.997 6.86995 3.99706 6.86986 3.99711C6.86983 3.99713 6.86981 3.99714 6.86978 3.99716C6.49973 4.21077 6.2125 4.56764 6.09688 5.00121C5.9837 5.42565 6.03902 5.87223 6.2569 6.24991L6.25779 6.25143C6.76579 7.12483 6.78306 7.9394 6.45588 8.51197C6.13137 9.07986 5.4212 9.47004 4.4 9.47004C3.48386 9.47004 2.75 10.2039 2.75 11.12V12.88C2.75 13.7833 3.48103 14.53 4.4 14.53C5.4212 14.53 6.13137 14.9202 6.45588 15.4881C6.78306 16.0607 6.76579 16.8753 6.25779 17.7487L6.25691 17.7502C6.03902 18.1279 5.9837 18.5744 6.09688 18.9989C6.21235 19.4319 6.48753 19.7741 6.84795 19.9959L6.85474 20L6.86166 20.004L8.58504 20.9902C8.91615 21.192 9.30356 21.2352 9.65373 21.1445C10.0345 21.0485 10.336 20.7987 10.5251 20.4932L10.529 20.4869L10.5327 20.4806L10.6422 20.2914C10.6423 20.2913 10.6424 20.2912 10.6424 20.291C11.1537 19.4123 11.8419 18.99 12.5 18.99C13.1603 18.99 13.8472 19.4047 14.3567 20.2895Z" fill="#292D32" stroke="#141414"/>
                                </svg>
                                <span>Settings</span>
                            </button>
                        </div>
                    </div>
                </div>

                <div class="transcript">
                    <h2>Transcript</h2>
                    <label>
                        <select>
                            <option>English</option>
                        </select>
                    </label>

                    <div class="content">
                        <div class="flex-gap script">
                            <span>0:01</span>
                            <p>First step. Open Facebook on your desktop or mobile device and locate "Marketplace" in the left-hand menu or at the top of the </p>
                        </div>

                        <div class="flex-gap script">
                            <span>0:10</span>
                            <p>First step. Open Facebook on your desktop or mobile device and locate "Marketplace" in the left-hand menu or at the top of the </p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="content">
                <h2>Your video is ready!</h2>

                <h5>Name</h5>
                <div class="name flex-gap">
                    <h3>Untitled_Video_20232509 </h3>
                    <div>
                        <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.167 2.66675H12.5003C5.83366 2.66675 3.16699 5.33341 3.16699 12.0001V20.0001C3.16699 26.6667 5.83366 29.3334 12.5003 29.3334H20.5003C27.167 29.3334 29.8337 26.6667 29.8337 20.0001V17.3334" stroke="#120B48" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M21.8865 4.02676L11.3798 14.5334C10.9798 14.9334 10.5798 15.7201 10.4998 16.2934L9.92651 20.3068C9.71317 21.7601 10.7398 22.7734 12.1932 22.5734L16.2065 22.0001C16.7665 21.9201 17.5532 21.5201 17.9665 21.1201L28.4732 10.6134C30.2865 8.80009 31.1398 6.69343 28.4732 4.02676C25.8065 1.36009 23.6998 2.21343 21.8865 4.02676Z" stroke="#120B48" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M20.3799 5.53345C21.2732 8.72011 23.7666 11.2134 26.9666 12.1201" stroke="#120B48" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                </div>

                <div class="url flex-gap">
                    <input type="text" placeholder="https://www.mprortocoll.me/Untitled_Video_20232509">
                        <button><svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                            <path d="M4.66699 12.4998H3.83366C3.39163 12.4998 2.96771 12.3242 2.65515 12.0117C2.34259 11.6991 2.16699 11.2752 2.16699 10.8332V3.33317C2.16699 2.89114 2.34259 2.46722 2.65515 2.15466C2.96771 1.8421 3.39163 1.6665 3.83366 1.6665H11.3337C11.7757 1.6665 12.1996 1.8421 12.5122 2.15466C12.8247 2.46722 13.0003 2.89114 13.0003 3.33317V4.1665M9.66699 7.49984H17.167C18.0875 7.49984 18.8337 8.24603 18.8337 9.1665V16.6665C18.8337 17.587 18.0875 18.3332 17.167 18.3332H9.66699C8.74652 18.3332 8.00033 17.587 8.00033 16.6665V9.1665C8.00033 8.24603 8.74652 7.49984 9.66699 7.49984Z" stroke="#120B48" stroke-width="1.67" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg> Copy</button>
                </div>

                <h3>Share your video</h3>
                <div class="share flex-gap">
                    <button class="">
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                            <g clip-path="url(#clip0_577_919)">
                                <path d="M24.5 11.9993C24.5 5.37187 19.1274 -0.000705719 12.5 -0.000705719C5.87258 -0.000705719 0.5 5.37187 0.5 11.9993C0.5 17.9888 4.88823 22.9533 10.625 23.8535V15.468H7.57813V11.9993H10.625V9.35554C10.625 6.34805 12.4165 4.68679 15.1576 4.68679C16.4705 4.68679 17.8438 4.92117 17.8438 4.92117V7.87429H16.3306C14.8399 7.87429 14.375 8.7993 14.375 9.74829V11.9993H17.7031L17.1711 15.468H14.375V23.8535C20.1118 22.9533 24.5 17.9888 24.5 11.9993Z" fill="#1877F2"/>
                                <path d="M17.1711 15.4688L17.7031 12H14.375V9.74899C14.375 8.80001 14.8399 7.875 16.3306 7.875H17.8438V4.92188C17.8438 4.92188 16.4705 4.6875 15.1576 4.6875C12.4165 4.6875 10.625 6.34875 10.625 9.35625V12H7.57812V15.4688H10.625V23.8542C11.2359 23.9501 11.8621 24 12.5 24C13.1379 24 13.7641 23.9501 14.375 23.8542V15.4688H17.1711Z" fill="white"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_577_919">
                                    <rect width="24" height="24" fill="white" transform="translate(0.5)"/>
                                </clipPath>
                            </defs>
                        </svg>
                        Facebook
                    </button>
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="22" viewBox="0 0 21 22" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.5859 3.87197C15.7061 1.98972 13.2059 0.952615 10.542 0.95166C5.05283 0.95166 0.58547 5.41855 0.58356 10.9092C0.582605 12.6644 1.04147 14.3776 1.91288 15.8874L0.5 21.0481L5.77909 19.6634C7.2335 20.457 8.87128 20.8748 10.5377 20.8753H10.542C16.0302 20.8753 20.4981 16.4079 20.5 10.9173C20.5009 8.25627 19.4662 5.7547 17.5859 3.87244V3.87197ZM10.542 19.1935H10.5387C9.05367 19.1931 7.59689 18.7939 6.32583 18.0399L6.02357 17.8604L2.89078 18.6822L3.72686 15.6277L3.53013 15.3144C2.70169 13.9966 2.26383 12.4734 2.26479 10.9097C2.2667 6.3463 5.97963 2.63337 10.5454 2.63337C12.7561 2.63432 14.8342 3.49619 16.3969 5.06091C17.9598 6.62516 18.8197 8.7051 18.8188 10.9163C18.8168 15.4802 15.1039 19.1931 10.542 19.1931V19.1935ZM15.0819 12.9948C14.8332 12.8702 13.6099 12.2685 13.3816 12.1855C13.1534 12.1024 12.9877 12.0609 12.822 12.3101C12.6563 12.5594 12.1793 13.1199 12.0342 13.2856C11.889 13.4518 11.7438 13.4723 11.4951 13.3477C11.2463 13.223 10.4446 12.9604 9.49395 12.1129C8.75433 11.453 8.25483 10.6384 8.10972 10.3892C7.96456 10.1399 8.09444 10.0053 8.21856 9.8816C8.33028 9.76988 8.46733 9.59083 8.59194 9.44566C8.71661 9.30049 8.75767 9.19644 8.84072 9.03071C8.92383 8.86455 8.88228 8.71944 8.82022 8.59477C8.75811 8.47016 8.26061 7.24538 8.05289 6.74738C7.85089 6.26227 7.64561 6.32816 7.49328 6.32004C7.34811 6.31288 7.18244 6.31145 7.01628 6.31145C6.85011 6.31145 6.58078 6.37352 6.35256 6.62277C6.12433 6.87199 5.48162 7.4741 5.48162 8.69838C5.48162 9.92266 6.37311 11.1064 6.49772 11.2725C6.62233 11.4387 8.25244 13.9517 10.7483 15.0299C11.3418 15.2863 11.8054 15.4395 12.1669 15.5542C12.7628 15.7437 13.3052 15.717 13.734 15.653C14.212 15.5814 15.2061 15.0509 15.4133 14.4698C15.6206 13.8887 15.6206 13.3902 15.5585 13.2865C15.4964 13.1829 15.3303 13.1204 15.0815 12.9958L15.0819 12.9948Z" fill="#25D366"/>
                        </svg>
                        WhatsApp
                    </button>

                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                            <path d="M10.5 20C16.0228 20 20.5 15.5228 20.5 10C20.5 4.47715 16.0228 0 10.5 0C4.97715 0 0.5 4.47715 0.5 10C0.5 15.5228 4.97715 20 10.5 20Z" fill="url(#paint0_linear_577_929)"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M5.0173 9.89096C7.93008 8.6137 9.87712 7.78815 10.8584 7.38317C13.631 6.23052 14.2073 6.02803 14.5812 6.01245C14.659 6.01245 14.846 6.02803 14.9706 6.12149C15.064 6.19937 15.0952 6.3084 15.1108 6.38628C15.1263 6.46416 15.1419 6.6355 15.1263 6.77569C14.9706 8.3489 14.3319 12.1963 13.9893 13.9564C13.8491 14.704 13.5687 14.9533 13.3039 14.9844C12.7276 15.0311 12.2759 14.595 11.7151 14.2368C10.8428 13.6604 10.3444 13.3022 9.48771 12.7414C8.5064 12.0872 9.14503 11.729 9.70578 11.1526C9.84596 10.9969 12.4161 8.676 12.4628 8.45793C12.4628 8.42678 12.4784 8.33332 12.4161 8.2866C12.3538 8.23987 12.2759 8.25544 12.2136 8.27102C12.1201 8.28659 10.7182 9.22117 7.99238 11.0592C7.5874 11.3396 7.22914 11.4642 6.90204 11.4642C6.54378 11.4642 5.85842 11.2617 5.34441 11.0903C4.72135 10.8878 4.22291 10.7788 4.26964 10.4361C4.30079 10.2648 4.55001 10.0779 5.0173 9.89096Z" fill="white"/>
                            <defs>
                                <linearGradient id="paint0_linear_577_929" x1="0.5" y1="9.99276" x2="20.4855" y2="9.99276" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#2AABEE"/>
                                    <stop offset="1" stop-color="#229ED9"/>
                                </linearGradient>
                            </defs>
                        </svg>
                        Telegram
                    </button>
                </div>

                <div class="button_cont">
                    <button id="hngr-download">SAVE VIDEO</button>
                </div>
            </div>
        </div>
    </div>
</div>`,
    playIcon: `<svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.4697 22.25C6.82557 22.25 2.21973 17.6536 2.21973 12C2.21973 6.34645 6.82557 1.75 12.4697 1.75C18.1139 1.75 22.7197 6.34645 22.7197 12C22.7197 17.6539 18.1236 22.25 12.4697 22.25ZM12.4697 2.25C7.09358 2.25 2.71973 6.62386 2.71973 12C2.71973 17.3761 7.09358 21.75 12.4697 21.75C17.8459 21.75 22.2197 17.3761 22.2197 12C22.2197 6.62386 17.8459 2.25 12.4697 2.25Z" fill="#292D32" stroke="#141414"/>
                <path d="M12.6305 8.45315L12.6307 8.45329L15.5305 10.1232C16.5362 10.703 17.0002 11.4603 17.0002 12.23C17.0002 12.9906 16.5352 13.7575 15.5305 14.3368L12.6307 16.0067L12.6307 16.0066L12.624 16.0106C12.0688 16.342 11.5263 16.49 11.0602 16.49C10.7055 16.49 10.3716 16.4018 10.0793 16.2364C9.41774 15.8506 8.99023 15.067 8.99023 13.91V10.56C8.99023 9.39798 9.41123 8.61615 10.0715 8.23225C10.7307 7.84904 11.6231 7.87234 12.6305 8.45315ZM12.386 15.5854L12.386 15.5854L12.3898 15.5833L15.2898 13.9133L15.2913 13.9124C15.9607 13.5237 16.5102 12.9429 16.5102 12.24C16.5102 11.5346 15.9466 10.9543 15.2944 10.5694L15.2944 10.5694L15.2898 10.5667L12.3935 8.89887C11.949 8.63282 11.4907 8.46999 11.0602 8.46999C10.8152 8.46999 10.5507 8.52299 10.3241 8.66055C9.71109 9.01933 9.49023 9.78674 9.49023 10.56V13.91C9.49023 14.6664 9.70794 15.4543 10.3315 15.8038C10.9435 16.1627 11.7305 15.9554 12.386 15.5854Z" fill="#292D32" stroke="#141414"/>
            </svg>
            <span>Play</span>`,
    pauseIcon: `<div class="control"><svg xmlns="http://www.w3.org/2000/svg" width="2" height="14" viewBox="0 0 2 14" fill="none">
                                <path d="M1 1.5L1 12.5" stroke="black" stroke-width="2" stroke-linecap="round"/>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="2" height="14" viewBox="0 0 2 14" fill="none">
                                <path d="M1 1.5L1 12.5" stroke="black" stroke-width="2" stroke-linecap="round"/>
                            </svg></div> <span>Pause</span>`
};

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
function downloadRecording(blob) {
    document.getElementById('hngr-download').addEventListener('click', function (){
        let a = document.createElement("a");
        let url = URL.createObjectURL(blob);
        a.style.display = "none";
        a.href = url;
        a.download = "screen-recording.webm"

        document.body.appendChild(a);
        a.click();

        document.body.removeChild(a);

        URL.revokeObjectURL(url);
    })
}

const showModal = () => {
    const container = document.getElementById('#hngsr');
    container.innerHTML = Elements.recordingModal;
    var video = document.getElementById("videoOutput");

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