import React from 'react';
import './App.css';

function secretComponent() {
  return <h1>Secret stuff, you see, you die. BING BONG.</h1>;
}
function normalComponent() {
  return <p>Hello </p>
}

function yesComponent() {
  return <h1>Not so secret things. You good.</h1>;
}

function App(props) {
  <normalComponent />
  if (props.authorized) {
    return <secretComponent />
  } else {
    return <yesComponent />
  }
}

export default App;
