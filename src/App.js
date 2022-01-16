import React from 'react';
import './App.css';


function normalComponent() {
  <p>Hello </p>
}

function yesComponent() {
  <h1>Not so secret things. You good.</h1>;
}

function App() {
  return (
    <normalComponent />,
    <secretComponent />,
    <yesComponent />
  );
}

export default App;
