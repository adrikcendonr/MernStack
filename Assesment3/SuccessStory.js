import React from 'react';

function SuccessStory(props) {
    // Simulate a random value
    const randomValue = Math.random();

    // Call the callback function passed from the parent
    const handleSendValue = () => {
        props.onValueChange(randomValue);
    };

    return (
        <div>
            <h3>Success Story</h3>
            <p>This is a success story to inspire others.</p>
            <button onClick={handleSendValue}>Send Random Value</button>
        </div>
    );
}

export default SuccessStory;
