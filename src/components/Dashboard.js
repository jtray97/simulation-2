import React, {Component} from 'react';
import House from './House'
import {Link} from 'react-router-dom'
import axios from 'axios'

class Dashboard extends Component {
constructor(){
    super()
    this.state={
        houses:[]
    }
    this.loadHouses= this.loadHouses.bind(this)
}
    loadHouses(){
        
        axios.get('/api/houses').then(houses=>{
            console.log(houses.data)
            this.setState({
                houses:[...houses.data]
            })
        })

    }
    componentDidMount(){
        this.loadHouses()
    }
    render(){
        return(
            <div>
                Dashboard
            <Link to='/wizard'>
            <button>Add Property</button>
            </Link>
            <House houses= {this.state.houses} loadHouses = {this.loadHouses}/>
            
                
                </div>

        )
    }
}
export default Dashboard