import React from 'react';
import PropTypes from 'prop-types';

import Dotdotdot from 'react-dotdotdot';

import './Movie.css'

export default function Movie({title, poster, genres, synopsis}) {
    // Display information about one movie.
    return (
        <div className='movie'>
            <div className='movie__col'>
                <MoviePoster poster={poster} alt={title} />
            </div>
            <div className='movie__col'>
                <h1>{title}</h1>
                <div className='movie__genres'>
                    {genres.map((genre, index) => <MovieGenre genre={genre} key={index} />)}
                </div>
                <div className='movie__synopsis'>
                    <Dotdotdot clamp={8}>
                        {synopsis}
                    </Dotdotdot>
                </div>
            </div>
        </div>
    );
}

function MoviePoster({poster, alt}) {
    // Display movie poster image.
    return (
        <img src={poster} alt={alt} title={alt} className='movie__poster' />
    );
}

function MovieGenre({genre}) {
    // Display movie genre list.
    return (
        <span className='movie__genre'>{genre}</span>
    );
}

Movie.propTypes = {
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.array.isRequired,
    synopsis: PropTypes.string.isRequired
}

MoviePoster.propTypes = {
    poster: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired
}

MovieGenre.propTypes = {
    genre: PropTypes.string.isRequired
}
