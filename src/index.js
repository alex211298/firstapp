import React from 'react';
import './index.css';
import store from "./redux/reduxStore";
import ReactDOM from "react-dom";
import App from "./App";


let rerenderEntireTree = () => {
  ReactDOM.render(
    <React.StrictMode>
      <App store = {store} />
    </React.StrictMode>,
    document.getElementById('root')
  );
}
rerenderEntireTree(store.getState());
store.subscribe(() =>{
  let state = store.getState();
  rerenderEntireTree(state);
});


