import React from 'react';
import PropTypes from 'prop-types';

export default function Loading({error}) {
    if(error) {
        // If fetch API encounters an error, it display error page.
        return <div className='Error'>ERROR</div>;
    }
    else {
        // If fetch API does not encounters an error, it display loading spinner.
        return (
            <div className='Loading'>
                I'm Loading
            </div>
        );
    }
}

Loading.propTypes = {
    error: PropTypes.bool.isRequired
}
