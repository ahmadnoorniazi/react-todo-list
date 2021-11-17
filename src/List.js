import React from 'react'
import ListItem from './ListItem'
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
        this.handleDelete = this.handleDelete.bind(this)
        this.handleUpdate = this.handleUpdate.bind(this)

    }

    handleInput(e) {
        this.setState({ value: e.target.value })
    }

    handleClick() {
        const inputValue = { id: this.state.currentId, label: this.state.value }
        const updatedList = [...this.state.list, inputValue]
        this.setState({ list: updatedList, currentId: this.state.currentId + 1, value: "" })
    }

    handleDelete(id) {
        const updatedData = this.state.list.filter(item => item.id !== id)
        this.setState({ list: updatedData, currentId: this.state.currentId - 1 })
    }

    handleUpdate(name, id) {
        const updatedData = this.state.list.map(item => {
            if (item.id === id) {
                item.label = name
                return item
            } else {
                return item
            }
        })
        this.setState({ list: updatedData })
    }
    render() {
        console.log("this.stateee", this.state)
        return (
            <div>
                <h1> Todo List</h1>
                <div>
                    <input type="text" value={this.state.value} onChange={this.handleInput} />
                    <button type="button" onClick={this.handleClick}>Add</button>
                </div>
                <h1>All Items</h1>
                {this.state.list.map(item => (
                    <ListItem
                        key={item.id}
                        item={item}
                        onDelete={() => this.handleDelete(item.id)}
                        handleUpdate={this.handleUpdate}
                    />
                ))}
            </div>
        )
    }

}

export default List;