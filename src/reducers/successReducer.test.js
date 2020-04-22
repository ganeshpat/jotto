import { actionTypes } from '../actions';
import successReducer from './successReducer';

test('returns default initial state when no action is passed', ()=>{
    const newState = successReducer(undefined, {});
    expect(newState).toBe(false);
})

test('return state of true on receiving an action type of "CORRECT_GUESS', ()=>{
    const newState = successReducer(undefined, { type: actionTypes.CORRECT_GUESS});
    expect(newState).toBe(true);
})
