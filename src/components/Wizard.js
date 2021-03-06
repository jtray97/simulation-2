import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'

class Wizard extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            address: '',
            city: '',
            state: '',
            zip: 0,

        };
        this.handleNameChange = this.handleNameChange.bind(this)
        this.handleAddressChange = this.handleAddressChange.bind(this)
        this.handleCityChange = this.handleCityChange.bind(this)
        this.handleStateChange = this.handleStateChange.bind(this)
        this.handleZipChange = this.handleZipChange.bind(this)
        this.handleCompleteClick = this.handleCompleteClick.bind(this)


    }
    handleNameChange(val) {
        this.setState({ name: val })
    }

    handleAddressChange(val) {
        this.setState({address:val})
    }
    handleCityChange(val) {
        this.setState({city:val})
        
    }
    handleStateChange(val) {
        this.setState({state:val})
        
    }
    handleZipChange(val) {
        this.setState({zip:val})

    }

    handleCompleteClick() {
        axios.put('/api/houses',
        {name:this.state.name, 
            address:this.state.address, 
            city:this.state.city, 
            state:this.state.state, 
            zip:this.state.zip})
    }

    handleCancel() {
        this.setState({
            name: '',
            address: '',
            city: '',
            state: '',
            zip: 0,
        })
    }
    render() {
        return (
            <div>
                <h1>Add New listing</h1>
                <Link to='/'><button onClick={() => this.handleCancel}>Cancel</button></Link>

                <h2>Property Name</h2>
                <input type="text" onChange={(e) => this.handleNameChange(e.target.value)} />

                <h2>Address</h2>
                <input type="text" onChange={(e) => this.handleAddressChange(e.target.value)} />

                <h2>City</h2>
                <input type="text" onChange={(e) => this.handleCityChange(e.target.value)} />

                <h2>State</h2>
                <input type="text" onChange={(e) => this.handleStateChange(e.target.value)} />

                <h2>Zip</h2>
                <input type="text" onChange={(e) => this.handleZipChange(e.target.value)} />

                <button onClick={this.handleCompleteClick}>Complete</button>
            </div>
        )
    }
}
export default Wizard