import * as types from "./ActionTypes";

export function changeFirstLoadingState() {
  // Use this function to display animation page.
  return {
    type: types.CHANGE_FIRST_LOADING_STATE,
  };
}

export function changeInitScrollEvent() {
  // Return object.
  return {
    type: types.CHANGE_INIT_SCROLL_EVENT,
  };
}

export const getMovies = (sort, page) => (dispatch) => {
  dispatch({
    type: types.GET_POST_PENDING,
    page: page, // Variable to see if sort has changed
  });
  return (
    // Use fetch API for network request.
    fetch(
      `https://yts.mx/api/v2/list_movies.json?&sort_by=${sort}&page=${page}`
    )
      .then((response) => response.json())
      .then((json) => {
        dispatch({
          type: types.GET_POST_SUCCESS,
          newMovies: json.data.movies,
          sort: sort,
          page: page,
        });
      })
      .catch((err) => {
        // Exceptions handling.
        dispatch({
          type: types.GET_POST_FAILURE,
          error: err,
        });
      })
  );
};
