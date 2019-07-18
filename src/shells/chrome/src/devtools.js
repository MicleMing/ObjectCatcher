/**
 * chrome shell
 */
import { initDevTools } from '../../../devtools';

const panels = chrome.devtools.panels;
//Created a port with background page for continous message communication
var port = chrome.extension.connect({
  name: "Sample Communication" //Given a Name
});
//Posting message to background page
port.postMessage("Request Tab Data");
//Hanlde response when recieved from background page


const shell = {
  connect(cb) {
    port.onMessage.addListener(function (msg) {
      console.log("Tab Data recieved is  " + msg);
      chrome.devtools.inspectedWindow.eval('console.log(window)')
    });
    panels.create('yoyo', 'img/icon.png', 'devtools.html', function (panel) { })
  }
}

initDevTools(shell);
