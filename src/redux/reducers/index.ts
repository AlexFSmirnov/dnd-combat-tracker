import { combineReducers } from 'redux';
import { beyondCharacters } from './beyondCharacters';
import { customCharacters } from './customCharacters';
import { ui } from './ui';
import { encounter } from './encounter';

const rootReducer = combineReducers({
    beyondCharacters,
    customCharacters,
    ui,
    encounter,
});

export default rootReducer;
