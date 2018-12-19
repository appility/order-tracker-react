//import WeakMap from 'core-js/library/es6/weak-map';
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import 'raf/polyfill'
import App from './App';

function run() {
	ReactDOM.render(
	    <App />,
		document.getElementById('root'))
  removeLoadingClass()
  toggleDebugging()
}

function removeLoadingClass() {
  if (document.documentElement.classList) {
    document.documentElement.classList.remove('loading')
  }
}

function toggleDebugging() {
  if( window.location.search.substring(1) === 'debug') {
    window.debug = true
  }
}


// Check if polyfill required
if (!window.Map || !window.Set || !window.WeakMap || !window.WeakSet) {
  require.ensure([], () => {
  	require('core-js/es6/map');
  	require('core-js/es6/set');
    run();
  });
} else {
  // Polyfill wasn't needed, carry on
  run();
}
