import React, { Component } from 'react';

class LifecycleTest extends Component {
    constructor(props) {
        super(props);
        console.log('LifecycleTest Constructor');
    }
    render() {
        return <p>I only show up if the conditional is true!</p>;
    }
}

export default LifecycleTest;
