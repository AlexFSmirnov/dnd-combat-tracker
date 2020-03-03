import { combineReducers } from 'redux';
import { characters } from './characters';
import { npcs } from './npcs';

const rootReducer = combineReducers({
    characters,
    npcs,
});

export default rootReducer;
