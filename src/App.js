import React, {useState, useEffect}from 'react';
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

function Emotion() {
    const [emotion, setEmotion] = useState('Happy');
    const [secemotion, setSecEmotion] = useState('Tired');
    
    useEffect(() => {
      console.log(`It is ${emotion} around here!`)
    }, [emotion]);
    useEffect(() => {
      console.log(`It is ${secemotion} around here!`)
    }, [secemotion]);
    
  return (
    <>
      <h1>
        I am currently {emotion} and {secemotion}
      </h1>
      <button onClick={() => setEmotion("Angry")}>Angry</button>
      <button onClick={() => setEmotion("Sad")}>Sad</button>
      <button onClick={() => setEmotion("Confused")}>Confused</button>
    
      <button onClick={() => setSecEmotion("Angsty")}>Angsty</button>
      <button onClick={() => setSecEmotion("Wierd")}>Wierd</button>
      <button onClick={() => setSecEmotion("Furious")}>Furious</button>
    </>
  );
}

function CheckBox() {
  return(
    <>
      <input type="checkbox"/>
    </>
  );
}

function App() {

  return (
    <>
      <Emotion />
      <Header />
      <CheckBox />
    </>
  );
}

export default App;
