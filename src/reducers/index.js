import { combineReducers } from 'redux';
import getMovies from './getMovies';
import ui from './ui';

const reducers = combineReducers ({
    // Combine getMovies.js, ui.js reducers.
    getMovies, ui
});

export default reducers;
