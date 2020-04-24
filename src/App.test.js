import React from 'react';
import { shallow } from 'enzyme';

import { storeFactory } from '../test/testUtils';
import App from './App';

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