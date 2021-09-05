import React from 'react';
import './index.css';
import store from "./redux/state";
import ReactDOM from "react-dom";
import App from "./App";
import state from "./redux/state";


let rerenderEntireTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App appState={state}
           dispatch = {store.dispatch.bind(store)} />
    </React.StrictMode>,
    document.getElementById('root')
  );
}
rerenderEntireTree(store.getState());
store.subscribe(rerenderEntireTree);


