import React from 'react';
import { AppRegistry } from 'proton-native';
import App from './src/components/App';

AppRegistry.registerComponent('App', <App />); // and finally render your main component

// ================================================================================
// This is for hot reloading (this will be stripped off in production by webpack)
// THIS SHOULD NOT BE CHANGED
if (module.hot) {
  module.hot.accept(['./src/components/App'], function() {
    const app = require('./src/components/App')['default'];
    AppRegistry.updateProxy(app);
  });
}
