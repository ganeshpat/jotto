import React,  { Component } from 'react';
import { connect } from 'react-redux';
import GuessedWords from './Guessedwords';
import Congrats from './Congrats';
import { getSecretWord } from './actions';
import Input from './input';
import './App.css';

export class UnconnectedApp extends Component {

  componentDidMount(){
    this.props.getSecretWord();
  }

  render(){
  return (
    <div className="container">
      <h2>Jotto</h2>
      <div>The secret word is {this.props.secretWord}</div>
      <Congrats success={this.props.success} />
      <Input />
      <GuessedWords guessedWords={this.props.guessedWords} />
    </div>
  );
}
}

const mapStateToProps = (state) => {
  const { success, guessedWords, secretWord} = state;
  return { success, guessedWords, secretWord};
}

export default connect(mapStateToProps, {getSecretWord})(UnconnectedApp);
