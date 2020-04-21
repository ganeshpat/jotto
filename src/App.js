import React,  { Component } from 'react';
import GuessedWords from './Guessedwords';
import Congrats from './Congrats';
import './App.css';

class App extends Component {
  render(){
  return (
    <div className="container">
      <h2>Jotto</h2>
      <Congrats success={true} />
      <GuessedWords guessedWords={[
        { guessedWord: 'train', letterMatchCount: 3}
      ]} />
    </div>
  );
}
}

export default App;
