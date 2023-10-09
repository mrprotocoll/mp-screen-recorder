<div align="center">
  <h2><b>🕹️🕹️ Chrome Extension: MP-Screen Recorder 🕹️🕹️</b></h2>
  <br/>
</div>

<a name="readme-top"></a>

<!-- TABLE OF CONTENTS -->

# 📗 Table of Contents

- [📖 About the Project](#about-project)
    - [🛠 Built With](#built-with)
        - [Tech Stack](#tech-stack)
    - [🚀 Live Demo](#live-demo)
- [💻 Getting Started](#getting-started)
    - [Setup](#setup)
    - [Prerequisites](#prerequisites)
    - [Install](#install)
    - [Usage](#usage)
- [👥 Authors](#authors)
- [🔭 Future Features](#future-features)
- [🤝 Contributing](#contributing)
- [⭐️ Show your support](#support)
- [🙏 Acknowledgements](#acknowledgements)
- [📝 License](#license)

<!-- PROJECT DESCRIPTION -->

# 📖 MP-Screen Recorder <a name="about-project"></a>

**MP-Screen Recorder** is a Chrome extension that enables users to record their screen, preview, and download the recording if needed.

## 🛠 Built With <a name="built-with"></a>

### Tech Stack <a name="tech-stack"></a>

<details>
  <summary>Client</summary>
  <ul>
    <li><a href="https://html.com/">Html</a></li>
    <li><a href="https://www.w3.org/Style/CSS/Overview.en.html">CSS</a></li>
    <li><a href="https://www.javascript.com/">JavaScript</a></li>
<li><a href="https://developer.chrome.com/docs/extensions/reference/">Chrome API</a></li>
  </ul>
</details>

<!-- Features -->

### Key Features <a name="key-features"></a>

- **Record screen**
- **Enable and Disable camera**
- **Preview and Download Recorded video**

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LIVE DEMO -->

## 🚀 Live Demo <a name="live-demo"></a>

- [Live Demo Link](https://mrprotocoll.github.io/todo-app-react-microverse/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## 💻 Getting Started <a name="getting-started"></a>


### Prerequisites

- **ReactJs**
- **NPM**

In order to run this project you need:

1. To have installed Nodejs in your Code editor. In case you don't have it, go to this <a href="https://nodejs.org/en/">site</a>  and download the setup based on your PC
<p align="left">(<a href="https://nodejs.org/en/">install NodeJs</a>)</p>

### Setup

Clone this repository to your desired folder using the above command:

```sh
  cd my-folder
  git clone https://github.com/mrprotocoll/todo-app-react-microverse.git
```

### Install

Install this project with:

```sh
  cd my-project
  npm install -y
```

### Usage

To run the project, execute the following command:

```sh
  cd my-project
  npm start
```

Open <a href="http://localhost:3000/">http://localhost:3000/</a> to view it in the browser. The page will automatically reload if you make changes to the code. You will see the build errors and lint warnings in the console.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- AUTHORS -->

## 👥 Author <a name="authors"></a>

👤 **Damilare Protocoll [mrprotocoll]**

- GitHub: [@mrprotocoll](https://github.com/mrprotocoll)
- Twitter: [@dprotocoll](https://twitter.com/dprotocoll)
- LinkedIn: [@mrprotocoll](https://www.linkedin.com/in/mrprotocoll)
- Medium: [@mrprotocoll](https://medium.com/@mrprotocoll)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- Features -->
## 🔭 Future Features <a name="future-features"></a>

- [ ] **[Add good UI/UX]**

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## 🤝 Contributing <a name="contributing"></a>

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](../../issues/).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- SUPPORT -->
https://github.com/mrprotocoll/todo-app-react-microverse
## ⭐️ Show your support <a name="support"></a>

If you like this project, please don't forget to follow me and give it a star.

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- ACKNOWLEDGEMENTS -->

## 🙏 Acknowledgments <a name="acknowledgements"></a>

I would like to thank [HNGx](https://internship.zuri.team/)
, all the mentors and the designers that worked on the stage 5 project for inspiring me to create this Chrome extension

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->

## 📝 License <a name="license"></a>

This project is [MIT](./LICENSE) licensed.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<h2>Introduction</h2>

This is a template for creating Chrome extensions with [CRXJS](https://crxjs.dev/vite-plugin/getting-started/vanilla-js/create-project), Vite, and TypeScript.
How does it work? It's simple. Just run the following command:

```sh
  yarn build
```

This will build the extension and place it in the `dist` folder.

To test your extension, you'll need to enable developer mode in Chrome. To do this, go to `chrome://extensions` and enable developer mode. Then, click on `Load unpacked` and select the `dist` folder. Your extension should now be loaded.

This should also work on any Chromium-based browser.

> As long as the browser is Chromium-based, the url `chrome://extensions` should work. If it doesn't, try `edge://extensions` or `opera://extensions` or `brave://extensions`.

This extension was tested on Chrome (Version 111.0.5563.64), Brave (Version 1.49.120), Edge (Version 111.0.1661.41), and Opera (Version 96.0.4693.80).

There are screenshots attached below showing the loaded extension for different Chromium-based browsers .

<h2>Folder & File Structure</h2>

```sh
~/chrome-extension on main
❯ tree --filelimit 10
  ├── index.html
  ├── manifest.json
  ├── node_modules [68 entries exceeds filelimit, not opening dir]
  ├── package.json
  ├── public
  │   └── vite.svg
  ├── src
  │   ├── counter.ts
  │   ├── main.ts
  │   ├── style.css
  │   ├── typescript.svg
  │   └── vite-env.d.ts
  ├── tsconfig.json
  ├── vite.config.js
  └── yarn.lock
```

- `index.html`: The HTML file that will be injected into the extension's popup.
- `manifest.json`: The manifest file that describes the extension.
- `node_modules`: The folder that contains all the dependencies.
- `package.json`: The file that contains all the dependencies.
- `public`: The folder that contains all the static assets.
- `src`: The folder that contains all the source code.
- `tsconfig.json`: The TypeScript configuration file.
- `vite.config.js`: The Vite configuration file.
- `yarn.lock`: The file that contains all the dependencies' versions.

<h2>Screenshots</h2>

