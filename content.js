chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "getCurrentTime") {
    const video = document.querySelector("video");
    if (video) {
      const currentTime = Math.floor(video.currentTime);
      sendResponse({ time: currentTime });
    } else {
      sendResponse({ time: null });
    }
  }
});