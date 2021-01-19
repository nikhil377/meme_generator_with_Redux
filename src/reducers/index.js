import {combineReducers} from 'redux';
import {RECIEVE_MEMES} from '../actions';

function memes(state=[],action){
    switch(action.type){
        case RECIEVE_MEMES:
            return action.memes;
        default:
           return state;
    }
}

const rootReducers = combineReducers({memes});

export default rootReducers;