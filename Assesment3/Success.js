// Success.js
import React, { Component } from 'react';
import SuccessChild from './SuccessChild';
import SuccessStory from './SuccessStory'; // Import SuccessStory component

class Success extends Component {
    handleRandomValue = (value) => {
        console.log("Received value from SuccessStory:", value);
    };

    render() {
        const quotes = [
            "Success is not final; failure is not fatal: It is the courage to continue that counts. - Winston S. Churchill",
            "The way to get started is to quit talking and begin doing. - Walt Disney",
            "Don't be afraid to give up the good to go for the great. - John D. Rockefeller",
        ];

        const name = "Adrik Cendon";
        const address = "Miami,Florida";

        return (
            <div>
                <h1>Success Quotes</h1>
                <ul>
                    {quotes.map((quote, index) => (
                        <li key={index}>{quote}</li>
                    ))}
                </ul>
                <SuccessChild name={name} address={address} />
                <SuccessStory onValueChange={this.handleRandomValue} />
            </div>
        );
    }
}

export default Success;


