import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Movie from './Movie';

import './MovieList.css';

export default class MovieList extends Component {
    componentWillMount() {
        // Bring first movie information.
        this.props.getMovies(this.props.sort, this.props.page);
    };

    componentDidMount() {
        // Function for handling scroll events.
        window.addEventListener('scroll', this._handleScroll);
    };

    componentWillUnmount() {
        // Remove envent listener when component unmount.
        window.removeEventListener('scroll', this._handleScroll);
    };

    _handleScroll = (event) => {
        // To prevent scroll event when page is refreshed.
        if(!this.props.initScrollEvent) {
            // When scroll reaches end, it brings up more movie information. (Infinite scroll)
            if(!this.props.pending && ((window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight - 200)) {
                this.props.getMovies(this.props.sort, this.props.page);
            }
        }
        this.props.changeInitScrollEvent();
    };

    _renderMovies = () => {
        // Render this.props.movies array.
        const movies = this.props.movies.map(movie => {
            return (
                <Movie
                    title = {movie.title_english}
                    poster = {movie.large_cover_image}
                    key = {movie.id}
                    genres = {movie.genres}
                    synopsis = {movie.synopsis}
                />
            );
        });
        return movies;
    };

    render() {
        return (
            <div className='movie-list'>
                {this._renderMovies()}
            </div>
        );
    };
}

MovieList.propTypes = {
    movies: PropTypes.array.isRequired,
    sort: PropTypes.string,
    page: PropTypes.number,
    pending: PropTypes.bool.isRequired,
    initScrollEvent: PropTypes.bool.isRequired,
    changeInitScrollEvent: PropTypes.func.isRequired,
    getMovies: PropTypes.func.isRequired
}
