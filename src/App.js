import React, {useState}from 'react';
import './App.css';


function Header() {
  return (
    <header>
      <h1>
        Hello
      </h1>
    </header>
  );
}

function App() {
  const [emotion, setEmotion] = useState('Happy');

  return (
    <>
      <h1>
        I currently am {emotion}
      </h1>
      <button onClick={() => setEmotion("Angry")}>Angry</button>
      <Header />,
    </>
  );
}

export default App;
