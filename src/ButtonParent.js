import React from 'react'
import Counter from './Counter'

class ButtonParent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            counter: 5
        }
        this.handleCounter = this.handleCounter.bind(this)
        this.handleDecrement = this.handleDecrement.bind(this)
    }

    handleCounter() {
        this.setState({ counter: this.state.counter + 1 })
    }

    handleDecrement() {
        this.setState({ counter: this.state.counter - 1 })
    }

    render() {
        return (
            <div>
                <button onClick={this.handleCounter}>
                    +
                </button>
                <Counter counterValue={this.state.counter} />
                <button onClick={this.handleCounter}>
                    -
                </button>
            </div>
        )
    }
}

export default ButtonParent;