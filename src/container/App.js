import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

import * as actions from '../actions/index';
import FirstLoadingAnimation from '../components/FirstLoadingAnimation'
import SortNavigationBar from '../components/SortNavigationBar';
import MovieList from '../components/MovieList';
import Loading from '../components/Loading';

class App extends Component {
    componentDidMount() {
        // Run changeFirstLoadingState function after few seconds.
        setTimeout(() => {
            this.props.changeFirstLoadingState()
        }, 3600);
    };

    render() {
        if(this.props.isFirstLoading) {
            // Display first loading animation page.
            return (
                <div className='first-loading-animation'>
                    <FirstLoadingAnimation />
                </div>
            );
        }
        else {
            return (
                <div>
                    <SortNavigationBar
                        // Variables of SortNavigationBar
                        getMovies={this.props.getMovies}
                    />
                    <MovieList
                        // Variables of MovieList
                        movies={this.props.movies}
                        sort={this.props.sort}
                        page={this.props.page}
                        pending={this.props.pending}
                        initScrollEvent={this.props.initScrollEvent}
                        // Function of MovieList
                        changeInitScrollEvent={this.props.changeInitScrollEvent}
                        getMovies={this.props.getMovies}
                    />
                    { /* Display loading spinner when network request is in progress */ }
                    { this.props.pending ?
                        <Loading
                            // Variables of Loading
                            error={this.props.error}
                        />
                    :
                        <div />
                    }
                </div>
            );
        }
    };
};

// Map state to props.
const mapStateToProps = (state) => {
    return {
        movies: state.getMovies.data.movies,
        sort: state.getMovies.data.sort,
        page: state.getMovies.data.page,
        pending: state.getMovies.pending,
        error: state.getMovies.error,
        isFirstLoading: state.ui.isFirstLoading,
        initScrollEvent: state.ui.initScrollEvent
    };
};

// Map dispatch to props.
const mapDispatchToprops = (dispatch) => {
    //changeFirstLoadingState()
    //changeInitScrollEvent()
    //getMovies(sort, page)
    return bindActionCreators(actions, dispatch);
};

// Connect React Component to Redux Store.
export default connect(mapStateToProps, mapDispatchToprops)(App);
