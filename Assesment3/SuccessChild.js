// SuccessChild.js
import React from 'react';

function SuccessChild(props) {
    return (
        <div>
            <h3>Details</h3>
            <p>Name: {props.name}</p>
            <p>Address: {props.address}</p>
            {props.story}
        </div>
    );
}

export default SuccessChild;
