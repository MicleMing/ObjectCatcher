//Handle request from devtools   
chrome.extension.onConnect.addListener(function (port) {
  chrome.extension.onMessage.addListener(function (message, sender) {
    port.postMessage(message);
  });
});
