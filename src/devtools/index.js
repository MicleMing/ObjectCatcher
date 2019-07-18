/**
 * devtools
 */
import React from 'react';
import { render } from 'react-dom';
import DevToolsAPP from './app';

function initAPP(shell) {
  shell.connect((data) => {
    render(<DevToolsAPP data={data} />, document.getElementById('devtools'));
  })
}

export function initDevTools(shell) {
  initAPP(shell);
}
