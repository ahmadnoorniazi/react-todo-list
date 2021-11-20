import React from 'react'
import { API_URL } from './Constants'
class ButtonParent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        this.getApiData()
    }


    getApiData() {
        fetch(API_URL).then(response => response.json())
            .then(data => {
                this.setState({ data: data })
            });
    }
    render() {
        return (
            <div>
                <h1> Cat List</h1>
                {this.state.data.map(item => (
                    <div>
                        <h3>{item.type}</h3>
                        <p>{item.text}</p>
                    </div>
                ))}
            </div>
        )
    }
}

export default ButtonParent;