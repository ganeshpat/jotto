import { storeFactory } from '../test/testUtils';
import { guessWord } from './actions';

describe ('guessWord action dispatcher', () => {
    const secretword = 'party';
    const unsuccessfulGuess = 'train';

    let store;
    const initialState = { secretword };
    beforeEach(()=>{
        store = storeFactory(initialState);
    })

    describe('no guessed words', ()=>{
        test('updates state correctly for unsuccessful guess', ()=>{
            store.dispatch(guessWord(unsuccessfulGuess));
            const newState = store.getState()
            const expectedState = {
                ...initialState,
                success: false,
                guessedWords: [{
                    guessedWord: unsuccessfulGuess,
                    letterMatchCount: 3,
                }]
            }
           expect(newState).toEqual(expectedState);
        })

        test('updates state correctly for successful guess', ()=>{
            store.dispatch(guessWord(secretword));
            const newState = store.getState()
            const expectedState = {
                secretword,
                success: true,
                guessedWords: [{
                    guessedWord: secretword,
                    letterMatchCount: 5,
                }]
            }
           expect(newState).toEqual(expectedState);

        })

    })


    describe('some guessed words', ()=>{
        const guessedWords= [
            {
                guessedWord: 'agile', letterMatchCount: 1
            }
        ]
        const initialState= { guessedWords, secretword }
        let store;
        beforeEach(() => {
            store = storeFactory(initialState);
        })

        test('updates state correctly for unsuccessful guess', ()=>{
            store.dispatch(guessWord(unsuccessfulGuess));
            const newState =store.getState();
            const expectedState = {
                secretword,
                success: false,
                guessedWords: [...guessedWords, { guessedWord: unsuccessfulGuess, letterMatchCount: 3}]
            }
            expect(newState).toEqual(expectedState); 
        })

        test('updates state correctly for successful guess', ()=>{
            store.dispatch(guessWord(secretword));
            const newState =store.getState();
            const expectedState = {
                secretword,
                success: true,
                guessedWords: [...guessedWords, { guessedWord: secretword, letterMatchCount: 5}]
            }
            expect(newState).toEqual(expectedState); 
        })
    })

});