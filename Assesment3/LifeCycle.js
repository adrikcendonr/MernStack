import React, { Component } from 'react';

class LifeCycle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: 'Initial data'
        };
    }

    componentDidMount() {
        // Simulating a state update with the same value
        setTimeout(() => {
            this.setState({ data: 'Initial data' });
        }, 2000);
    }

    shouldComponentUpdate(nextProps, nextState) {
        // Check if the state is actually different from the current state
        if (this.state.data === nextState.data) {
            console.log('State is duplicate. Preventing re-render.');
            return false; // Prevents re-render
        }
        return true;
    }

    render() {
        console.log('Rendering...');
        return (
            <div>
                <h2>Efficient Component</h2>
                <p>{this.state.data}</p>
            </div>
        );
    }
}

export default LifeCycle;
