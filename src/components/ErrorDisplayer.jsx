import React from 'react';

const ErrorDisplayer = ({err}) => {
    console.dir(err, 'in error displayer')
    return (
        <div>
            <h3>{err ? err: 'Path Not Found'}</h3> 
        </div>
    );
};

export default ErrorDisplayer;

