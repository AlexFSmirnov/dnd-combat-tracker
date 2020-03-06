import { combineReducers } from 'redux';
import { characters } from './characters';
import { npcs } from './npcs';
import { ui } from './ui';
import { encounter } from './encounter';

const rootReducer = combineReducers({
    characters,
    npcs,
    ui,
    encounter,
});

export default rootReducer;
