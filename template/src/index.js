import React from 'react';
import ReactDOM from 'react-dom';
import { IframeMessageProxy } from 'iframe-message-proxy';
import { ResizeObserver } from 'resize-observer';
import { applyPolyfills, defineCustomElements } from 'blip-ds/loader';
import { setHeight } from './services/common-service';
import './assets/styles/app.scss';
import './translate'; // i18n

import App from './App';

IframeMessageProxy.listen();

const ROOT_ID = 'root';
const ROOT_DIV = document.getElementById(ROOT_ID);
const DOCUMENT_OBSERVER = new ResizeObserver(() => {
    setHeight(ROOT_DIV.scrollHeight);
});
DOCUMENT_OBSERVER.observe(ROOT_DIV);

ReactDOM.render(<App />, document.getElementById(ROOT_ID));

applyPolyfills().then(() => {
    defineCustomElements(window);
});
