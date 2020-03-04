import { combineReducers } from 'redux';
import { characters } from './characters';
import { npcs } from './npcs';
import { ui } from './ui';

const rootReducer = combineReducers({
    characters,
    npcs,
    ui,
});

export default rootReducer;
