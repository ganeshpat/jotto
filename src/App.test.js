import React from 'react';
import { shallow } from 'enzyme';

import { storeFactory } from '../test/testUtils';
import App, { UnconnectedApp } from './App';

const setup = (state ={}) => {
  const store = storeFactory(state);
  const wrapper = shallow(<App store={store} />).dive().dive();
  return wrapper;
}

describe('redux properties',() => {

  test('has access to success state' ,() => {
    const success = true;
    const wrapper = setup({success});
    const successProp = wrapper.instance().props.success;
    expect(successProp).toBe(success); 
  })

  test('has a secret word state', () => {
    const secretword = 'party';
    const wrapper = setup({secretword});
    const secretwordProp = wrapper.instance().props.secretword;
    expect(secretwordProp).toBe(secretword);
  })

  test('has access to guessed words state', () => {
    const guessedWords = [
      { guessedWord: 'train', letterMatchCount: 3}
    ];
    const wrapper = setup({ guessedWords });
    const guessedWordProps = wrapper.instance().props.guessedWords;
    expect(guessedWordProps).toEqual(guessedWords);
  })

  test('getSecret word action creator is a function on the props', () => {
    const wrapper = setup();
    const getSecretWordProp = wrapper.instance().props.getSecretWord;
    expect(getSecretWordProp).toBeInstanceOf(Function);
  })

})

test('getSecretWord runs on the App mount', () => {
    const getSecretWordMock = jest.fn();

    const props ={
      getSecretWord: {getSecretWordMock},
      success: false,
      guessedWords: []
    }
    // set up App component with getSecretworkMock as getSecretWord prop
    const wrapper = shallow(< UnconnectedApp {...props} />)
    // run lif cycle method
    wrapper.instance().componentDidMount();

    // check if the mock ran only once
    const getSecretWordCount = getSecretWordMock.mock.calls.length;
    expect(getSecretWordCount).toBe(1);

})