import './App.css';

function secretComponent() {
  return <h1>Secret stuff, you see, you die. BING BONG.</h1>;
}

function yesComponent() {
  return <h1>Not so secret things. You good.</h1>;
}

function App(props) {
  if (props.authorized) {
    <secretComponent />
  } else {
    <yesComponent />
  }
}

export default App;
