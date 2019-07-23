
import EVENTS from './event';

window.onmessage = (message) => {
  const { data } = message;
  if (data.__type__ && data.__type__ === EVENTS.INJECT_TO_CONTENT) {
    chrome.extension.sendMessage(data.payload);
  }
}


const injectJS = document.createElement('script');
injectJS.src = chrome.runtime.getURL('inject.js');


document.body.appendChild(injectJS);
