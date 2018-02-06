import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class SortNavigationBar extends Component {
    _handleChangeSort = (sort) => {
        // Change store's sort and bring movie information.
        this.props.getMovies(sort, 1);
    };

    render() {
        return (
            <div>
                <ul>
                    <li><a onClick={this._handleChangeSort.bind(this, 'year')}>Year</a></li>
                    <li><a onClick={this._handleChangeSort.bind(this, 'rating')}>Rating</a></li>
                    <li><a onClick={this._handleChangeSort.bind(this, 'title')}>Title</a></li>
                    <li><a onClick={this._handleChangeSort.bind(this, 'like_count')}>like Count</a></li>
                </ul>
            </div>
        );
    };
}

SortNavigationBar.propTypes = {
    getMovies: PropTypes.func.isRequired
}
