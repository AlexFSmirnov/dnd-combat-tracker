import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(<App />);
serviceWorker.unregister();
