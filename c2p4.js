class Parent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {state: 0 };

        this.outputEvent = this.outputEvent.bind(this);
    }
    outputEvent(event) {
        // the event context comes from the Child
        this.setState({ state: this.state.state++ });
    }

    render() {
        const variable = 5;
        return (
            <div>
                state: { this.state.state }
                <Child clickHandler={this.outputEvent} />
            </div>
        );
    }
}

class Child extends React.Component {
    render() {
        return (
            <button onClick={this.props.clickHandler}>
                Add One More
            </button>
        );
    }
}





ReactDOM.render(
    <Parent />,
    document.getElementById('container')
);