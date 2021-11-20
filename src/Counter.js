import React from 'react'

class Counter extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: this.props.counterValue
        }
    }

    static getDerivedStateFromProps(props, state) {
        console.log("before render")
        return { value: props.counterValue }
    }

    componentDidMount() {
        console.log("after first render")
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("shouldComponentUpdate")
        return false
    }

    render() {
        console.log("In render")

        return (
            <div>
                <p>State : {this.state.value}</p>
                <p>prop : {this.props.counterValue}</p>
            </div>
        )
    }
}

export default Counter