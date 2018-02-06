import * as types from '../actions/ActionTypes';

const uiInitialState = {
    isFirstLoading: true,
    initScrollEvent: true
}

export default function reducer(state = uiInitialState, action) {
    switch(action.type) {
        case types.CHANGE_FIRST_LOADING_STATE:
            // To display first animation page.
            return {
                ...state,
                isFirstLoading: false
            }
        case types.CHANGE_INIT_SCROLL_EVENT:
            // To prevent scroll event when page is refreshed.
            return {
                ...state,
                initScrollEvent: false
            };
        default:
            // Return state when default.
            return state;
    }
}
