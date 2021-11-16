import React from 'react'


class EditField extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: ""
        }

        this.handleChange = this.handleChange.bind(this)
    }

    static getDerivedStateFromProps(props, state) {
        // console.log("propssss", props, "thisssss", this.state)
        // return { value: props.itemName }
    }

    handleChange(e) {
        this.setState({ value: e.target.value })
    }

    render() {
        const { handleUpdate, itemName, itemId } = this.props
        return (
            <div>
                <input type="text" value={this.state.value} onChange={this.handleChange} />
                <button type="button" onClick={handleUpdate}>Update</button>
            </div>
        )
    }
};

export default EditField;