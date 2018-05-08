import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from "./containers/App";



/*import App from './App';*/
/*The "./App" syntax means the "App" file is in the same folder and it is a JS file. If it doesnt have anything after it, 
it automatically assumes it is a JS file. 
./App.js would also work*/



import registerServiceWorker from './registerServiceWorker';
import "tachyons";

ReactDOM.render(<App />, document.getElementById('root'));

registerServiceWorker();
