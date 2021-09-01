import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import ExpandableList from './components/ExpandableList';
import list from "./data";

ReactDOM.render(
  <React.StrictMode>
    <ExpandableList list={list}/>
  </React.StrictMode>,
  document.getElementById('root')
);


