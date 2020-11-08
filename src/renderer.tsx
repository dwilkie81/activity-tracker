import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { App } from './components/App';
import { configureReceivers } from './ipc/receiver';

const domContainer = document.querySelector('#app');
ReactDOM.render(<App />, domContainer);

configureReceivers();