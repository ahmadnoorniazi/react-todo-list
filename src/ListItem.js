import React from 'react'
import EditField from './EditField';

class ListItem extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            isEdit: false
        }

        this.handleEdit = this.handleEdit.bind(this)

    }

    handleEdit() {
        this.setState({ isEdit: !this.state.isEdit })
    }


    render() {
        console.log("props", this.props)
        const { item, onDelete, handleUpdate } = this.props

        return (
            <div>
                <div>{item.label}</div>
                <div>
                    <button type="button" onClick={this.handleEdit}>Edit</button>
                    <button type="button" onClick={onDelete}>Delete</button>
                </div>
                <div>
                    {this.state.isEdit &&
                        <EditField handleUpdate={handleUpdate} itemName={item.label} itemId={item.id} onEdit={this.handleEdit} />

                    }
                </div>
            </div>
        )
    }
}

export default ListItem