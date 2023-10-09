chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab)=>{
    if(changeInfo.status === "complete" && /^http/.test(tab.url)){
        chrome.scripting.executeScript({
            target: {tabId},
            files: ["./js/elements.js","./js/helpers.js","./js/content.js"]
        }).then(()=>{
            console.log("scripts injected")
        }).catch(err=> console.log(err, "couldn't inject script"))
    }
})
