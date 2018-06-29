import React, {Component} from 'react';
import House from './House'
import {Link} from 'react-router-dom'
import axios from 'axios'

class Dashboard extends Component {
constructor(){
    super()
    this.state={
        homes:[]
    }
}
    componentDidMount(){
        axios.get('/api/houses').then(houses=>{
            this.setState({
                homes:this.state.homes.push(houses)
            })
        }).catch(err=>console.log(err))
    }
    render(){
        return(
            <div>
                Dashboard
            <Link to='/wizard'>
            <button>Add Property</button>
            </Link>
            {/* {this.state.houses} */}
                <House houses={this.state.homes}/>
                </div>

        )
    }
}
export default Dashboard