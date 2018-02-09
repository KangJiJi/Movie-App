import React from 'react';
import PropTypes from 'prop-types';

import './Loading.css';

export default function Loading({error}) {
    if(error) {
        // If fetch API encounters an error, it display error page.
        return <div className='error'>ERROR</div>;
    }
    else {
        // If fetch API does not encounters an error, it display loading spinner.
        return (
            <div className='loading'>
                <div className='loading__spinner'>
                    <svg width="100" height="100">
                        <circle cx="50" cy="12" r="10" stroke="#2E2E2E" strokeWidth="3" fill="#FF989F" />
                        <circle cx="77" cy="23" r="10" stroke="#2E2E2E" strokeWidth="3" fill="#FF989F" />
                        <circle cx="88" cy="50" r="10" stroke="#2E2E2E" strokeWidth="3" fill="#FF989F" />
                        <circle cx="77" cy="77" r="10" stroke="#2E2E2E" strokeWidth="3" fill="#FF989F" />
                        <circle cx="50" cy="88" r="10" stroke="#2E2E2E" strokeWidth="3" fill="#FF989F" />
                        <circle cx="23" cy="77" r="10" stroke="#2E2E2E" strokeWidth="3" fill="#FF989F" />
                        <circle cx="12" cy="50" r="10" stroke="#2E2E2E" strokeWidth="3" fill="#FF989F" />
                        <circle cx="23" cy="23" r="10" stroke="#2E2E2E" strokeWidth="3" fill="#FF989F" />
                    </svg>
                </div>
            </div>
        );
    }
}

Loading.propTypes = {
    error: PropTypes.bool.isRequired
}
