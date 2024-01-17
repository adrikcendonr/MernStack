import React from 'react';
import Product from './Product'; // Adjust path as necessary
import UserSignIn from './UserSignIn'; // Adjust path as necessary
import Success from './Success'; // Adjust path as necessary

function App() {
    return (
        <div>
            <h1>Welcome to Our Application</h1>
            <Product ProductName="Example Product" ProductPrice="29.99" />
            <UserSignIn />
            <Success />
        </div>
    );
}

export default App;
