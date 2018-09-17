/**
 * chrome shell
 */
import { initDevTools } from 'app';

initDevTools({
  connect(cb) {
    cb();
    chrome.devtools.panels.create('yoyo', 'img/icon.png', 'devtools.html', function (panel) {
    });
  }
})
