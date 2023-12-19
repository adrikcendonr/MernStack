import React from 'react';

class PersonalInfo extends React.Component {
    render() {
        return (
            <div>
                <h1>My Personal Information</h1>
                <p>Name: John Doe</p>
                <p>Address: 123 Main St, Anytown, USA</p>
                <p>Email: johndoe@example.com</p>
                {/* Add more personal details here */}
            </div>
        );
    }
}

export default PersonalInfo;
