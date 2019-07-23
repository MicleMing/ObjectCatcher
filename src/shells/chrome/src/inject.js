import EVENTS from './event';

let timer = setInterval(() => {
  if (window.phone) {
    clearInterval(timer);
    console.log('post to content', phone.accountInfo.info);
    window.postMessage({
      __type__: EVENTS.INJECT_TO_CONTENT,
      payload: phone.accountInfo.info
    })
  }
}, 2000);
