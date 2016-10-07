
import React from 'react';
import { render } from 'react-dom';
import { renderRoutes } from './routes';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();


render(renderRoutes(), document.getElementById('root'));
