import React from 'react';
import PropTypes from 'prop-types';

export default function Movie({title, poster, genres, synopsis}) {
    // Display information about one movie.
    return (
        <div className="Movie">
            <div className="Movie__Column">
                <MoviePoster poster={poster} alt={title} />
            </div>
            <div className="Movie__Column">
                <h1>{title}</h1>
                <div className="Movie__Genres">
                    {genres.map((genre, index) => <MovieGenre genre={genre} key={index} />)}
                </div>
                <div className="Movie__Synopsis">
                    {synopsis}
                </div>
            </div>
        </div>
    );
}

function MoviePoster({poster, alt}) {
    // Display movie poster image.
    return (
        <img src={poster} alt={alt} title={alt} className="Movie__Poster" />
    );
}

function MovieGenre({genre}) {
    // Display movie genre list.
    return (
        <span className="Movie__Genre">{genre}</span>
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
