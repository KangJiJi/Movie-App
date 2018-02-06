import * as types from '../actions/ActionTypes';

const getMovieInitialState = {
    pending: false,
    error: false,
    data: {
        movies: [],
        sort: 'year',
        page: 1
    }
}

export default function reducer(state = getMovieInitialState, action) {
    switch(action.type) {
        case types.GET_POST_PENDING:
            // Start of fetch API.
            return {
                ...state,
                pending: true,
                error: false,
                data: {
                    // Remove movies when click SortNavigationBar.
                    movies: action.page === 1 ? [] : state.data.movies
                }
            };
        case types.GET_POST_SUCCESS:
            // Success of fetch API.
            return {
                ...state,
                pending: false,
                data: {
                    // When action.page is 1, new array should be shown instead of existing movie array.
                    movies: action.page === 1 ? action.newMovies : [...state.data.movies, ...action.newMovies],
                    sort: action.sort,
                    page: action.page + 1
                }
            };
        case types.GET_POST_FAILURE:
            // Failure of fetch API.
            return {
                ...state,
                pending: false,
                error: action.error
            };
        default:
            // Return state when default.
            return state;
    }
}
