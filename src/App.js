import './App.css';

function Header(props) {
  return (
    <header>
      <h1>
        {props.names} Edward Naidoo
      </h1>
    </header>
  );
}

function Main() {
  return (
    <section>
      <p>
        This is my first react website
      </p>
    </section>
  );
}

function App() {
  return (
    <div className="App">
      <Header names="Bing Bong" />
      <Main />
    </div>
  );
}

export default App;
