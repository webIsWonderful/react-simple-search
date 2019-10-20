import '@babel/polyfill';
import React from 'react';
import { render } from 'react-dom';

import App from 'src/components/App';

const rootComponent = <App />;

const target = document.getElementById('root');

render(rootComponent, target);
