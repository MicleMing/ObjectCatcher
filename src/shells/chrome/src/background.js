//Handle request from devtools   
chrome.extension.onConnect.addListener(function (port) {
  console.log('background connect')
  chrome.extension.onMessage.addListener(function (message, sender) {
    console.log('recieve from content')
    port.postMessage(message);
  });
});
