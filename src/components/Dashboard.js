import React, {Component} from 'react';
import House from './House'
import {Link} from 'react-router-dom'

class Dashboard extends Component {
    handleAddProperty(){

    }
    render(){
        return(
            <div>
                Dashboard
            <Link to='/wizard'>
            <button>Add Property</button>
            </Link>
                
                
                </div>

        )
    }
}
export default Dashboard