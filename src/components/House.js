import React from 'react'
import axios from 'axios'
export default function House (props) {
    // console.log(props)
    var handleDelete=(id)=>{
        axios.delete(`/api/houses/${id}`).then(()=>{})
        props.loadHouses()
    }
    var houses = props.houses.map((a)=> <div key = {a.id} className='OneHouse'>
    <button onClick = {()=>handleDelete(a.id)}>X</button>
        <p>Property Name:{a.name}</p>
        <p>Address: {a.address}</p>
        
        <p>City: {a.city}</p>
        
        <p>State: {a.state}</p>
        
        <p>Zip: {a.zip}</p>
        <p>id: {a.id}</p>
        
    </div>)
    return (
        <div>

        {houses}           

            

        </div>
    )
}