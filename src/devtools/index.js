/**
 * devtools
 */
import React from 'react';
import { render } from 'react-dom';
import DevToolsAPP from './app';

function initAPP(shell) {
  shell.connect(() => {
    render(<DevToolsAPP />, document.getElementById('devtools'));
  })
}

export function initDevTools(shell) {
  initAPP(shell);
}
