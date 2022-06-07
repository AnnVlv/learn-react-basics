import React from 'react';

class CounterClass extends React.Component {
    get counter() {
        return this.state.counter;
    }

    constructor(props) {
        super(props);

        this.state = {
            counter: 0,
        };

        this.add = this.add.bind(this);
        this.sub = this.sub.bind(this);
    }

    add() {
        this.setState({
            ...this.state,
            counter: this.counter + 1,
        });
    }

    sub() {
        this.setState({
            ...this.state,
            counter: this.counter - 1,
        });
    }

    render() {
        return (
            <div>
                <h2>Counter {this.counter}</h2>
                <button onClick={this.add}>+</button>
                <button onClick={this.sub}>-</button>
            </div>
        );
    }
}

export default CounterClass;
