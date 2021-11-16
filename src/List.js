import React from 'react'

class List extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: "",
            list: [],
            currentId: 1
        }

        this.handleInput = this.handleInput.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

    handleInput(e) {
        this.setState({ value: e.target.value })
    }

    handleClick() {
        const inputValue = { id: this.state.currentId, label: this.state.value }
        const updatedList = [...this.state.list, inputValue]
        this.setState({ list: updatedList, currentId: this.state.currentId + 1 })
    }

    render() {
        return (
            <div>
                <h1> Todo List</h1>
                <div>
                    <input type="text" value={this.state.value} onChange={this.handleInput} />
                    <button type="button" onClick={this.handleClick}>Add</button>
                </div>
            </div>
        )
    }

}

export default List;