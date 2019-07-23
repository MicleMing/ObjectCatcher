/**
 * chrome shell
 */
import { initDevTools } from '../../../devtools';

const panels = chrome.devtools.panels;
const port = chrome.extension.connect({
  name: "dev2background"
});

const shell = {
  connect(cb) {
    port.onMessage.addListener(function (msg) {
      cb(msg)
    });
    panels.create('yoyo', 'img/icon.png', 'devtools.html', function (panel) { })
  }
}

initDevTools(shell);
