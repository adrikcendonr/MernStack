//1. what is virtual dom - optional

/*The Virtual DOM is a concept primarily used in React to enhance performance and the developer experience.
It's an in-memory replica of the actual Document Object Model (DOM). When changes in a React application occur,
they are first made to the Virtual DOM. React then employs an algorithm to compare the updated Virtual DOM with
its previous state, identifying the minimum number of changes needed. This process allows for efficient,
batched updates to the actual DOM, significantly reducing direct manipulation and improving performance. 
The Virtual DOM thus offers a more efficient way of updating the user interface in web applications, making it a 
key element in modern web development.
*/

//2. how react renders dom in conservative manner - optional

/*
React handles updating what you see on a website (the DOM) in a smart way to make things faster. 
Every time something changes (like when you click a button), 
React doesn't rebuild the whole tree. Instead, it builds a copy of the tree in its memory (this is the Virtual DOM) 
and only changes the specific spots that need to be updated. Then, it quickly compares this copy with the real tree 
and figures out the fewest changes needed to make the real tree look like the copy. This way, it avoids doing extra 
work, which makes your website run smoother and faster. 
*/

//3. create a class component named - Success and show some quotes on success in it
import React, { Component } from 'react';

class Success extends Component {
    render() {
        return (
            <div>
                <h2>Success Quotes</h2>
                <p>"Success is falling nine times and getting up ten" - Jon Bon Jovi</p>
                <p>"The way to get started is to quit talking and begin doing." - Walt Disney</p>
                <p>"Opportunities don't happen. You create them." - Chris Grosser</p>
            </div>
        );
    }
}

export default Success;

//4. create a functional component SuccessChild, make it child of Success and pass Name and Address to it from Success

import React from 'react';

const SuccessChild = ({ name, address }) => {
    return (
        <div>
            <h3>Details:</h3>
            <p>Name: {name}</p>
            <p>Address: {address}</p>
        </div>
    );
};

export default SuccessChild;

//Modify the Success Class component above

import React, { Component } from 'react';
import SuccessChild from './SuccessChild'; // Import SuccessChild component

class Success extends Component {
    render() {
        // Sample name and address
        const name = "Adrik Cendon";
        const address = "Miami";

        return (
            <div>
                <h2>Success Quotes</h2>
                <p>"Success is falling nine times and getting up ten" - Jon Bon Jovi</p>
                <p>"The way to get started is to quit talking and begin doing." - Walt Disney</p>
                <p>"Opportunities don't happen. You create them." - Chris Grosser</p>
                <SuccessChild name={name} address={address} />
            </div>
        );
    }
}

export default Success;

//5. create SuccessStory as another component, pass this as props in SuccessChild from Success component

import React from 'react';

const SuccessStory = () => {
    return (
        <div>
            <h3>Success Story</h3>
            <p>This is an inspiring success story that motivates and encourages perseverance.</p>
        </div>
    );
};

export default SuccessStory;

//Modify SuccesChild 

import React from 'react';

const SuccessChild = ({ name, address, storyComponent }) => {
    return (
        <div>
            <h3>Details:</h3>
            <p>Name: {name}</p>
            <p>Address: {address}</p>
            {storyComponent}
        </div>
    );
};

export default SuccessChild;

//Modify Success

import React, { Component } from 'react';
import SuccessChild from './SuccessChild';
import SuccessStory from './SuccessStory'; // Import SuccessStory component

class Success extends Component {
    render() {
        const name = "Adrik Cendon";
        const address = "Miami";
        const storyComponent = <SuccessStory />; // Create an instance of SuccessStory

        return (
            <div>
                <h2>Success Quotes</h2>
                <p>"Success is falling nine times and getting up ten" - Jon Bon Jovi</p>
                <p>"The way to get started is to quit talking and begin doing." - Walt Disney</p>
                <p>"Opportunities don't happen. You create them." - Chris Grosser</p>
                <SuccessChild name={name} address={address} storyComponent={storyComponent} />
            </div>
        );
    }
}

export default Success;


//6. create UserSignIn component using uncontrolled way, should be class component

import React, { Component } from 'react';

class UserSignIn extends Component {
    constructor(props) {
        super(props);

        // Creating refs to store the text input DOM element
        this.usernameInput = React.createRef();
        this.passwordInput = React.createRef();
    }

    handleSubmit = (event) => {
        event.preventDefault();
        alert(`Username: ${this.usernameInput.current.value}, Password: ${this.passwordInput.current.value}`);
        // Here you can also handle the sign-in logic
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h2>User Sign-In</h2>
                <div>
                    <label>
                        Username:
                        <input type="text" ref={this.usernameInput} />
                    </label>
                </div>
                <div>
                    <label>
                        Password:
                        <input type="password" ref={this.passwordInput} />
                    </label>
                </div>
                <button type="submit">Sign In</button>
            </form>
        );
    }
}

export default UserSignIn;

//7. create Product component to accept ProductName and ProductPrice


import React from 'react';

const Product = ({ productName, productPrice }) => {
    return (
        <div>
            <h3>Product Name: {productName}</h3>
            <p>Price: ${productPrice}</p>
        </div>
    );
};

export default Product;


//Can be used by passing 
<Product productName="Example Product" productPrice="99.99" />

//8. pass a random value from SuccessStory component back to Success
import React from 'react';
import Product from './Product'; // Make sure the path is correct based on your file structure

function App() {
    return (
        <div className="App">
            <h1>Welcome to Our Product Page</h1>
            <Product productName="Super Widget" productPrice="29.99" />
            <Product productName="Mega Gadget" productPrice="49.99" />
            {/* More Product components can be added here if needed */}
        </div>
    );
}

export default App;

//9. Create a class component and show all the lifecycle hooks;

const SuccessStory = ({ onGenerateRandomValue }) => {
    const generateAndSendValue = () => {
        const randomValue = Math.random(); // Generate a random value
        onGenerateRandomValue(randomValue); // Call the callback function with the random value
    };

    return (
        <div>
            <h3>Success Story</h3>
            <p>This is an inspiring success story that motivates and encourages perseverance.</p>
            <button onClick={generateAndSendValue}>Generate Random Value</button>
        </div>
    );
};

export default SuccessStory;

//10. Make a state change, the state should be duplicate and then stop it to call render method to improve efficiency.
