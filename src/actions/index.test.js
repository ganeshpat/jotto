import {correctGuess, actionTypes} from './';

describe('CorrectGuess', () =>{
    test('returns an action with type `CORRECT_GUESS`', ()=>{
        const action = correctGuess();
        expect(action).toEqual({ type: actionTypes.CORRECT_GUESS});
    })
})
