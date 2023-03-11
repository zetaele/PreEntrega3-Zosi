import React from 'react';

import './Spinner.css';

const Spinner = ({ body = 'Loading...' }) => {
    return (
        <div className="spinner-container ">
            <div className="d-flex justify-content-center mb-4">
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
            <div className="d-flex justify-content-around">
                {body}
            </div>
        </div>
    );
}

export default Spinner;
