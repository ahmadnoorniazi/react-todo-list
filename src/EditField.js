import React from 'react'


class EditField extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: this.props.itemName
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleUpdateValue = this.handleUpdateValue.bind(this)
    }

    handleChange(e) {
        this.setState({ value: e.target.value })
    }

    handleUpdateValue(value, id) {
        this.props.handleUpdate(value, id)
        this.props.onEdit()
    }

    render() {
        const { handleUpdate, itemName, itemId } = this.props
        return (
            <div>
                <input type="text" value={this.state.value} onChange={this.handleChange} />
                <button type="button" onClick={() => this.handleUpdateValue(this.state.value, itemId)}>Update</button>
            </div>
        )
    }
};

export default EditField;