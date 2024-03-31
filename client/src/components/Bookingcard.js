import React from 'react'
import Header from '../components/header'

export default function Bookingcard(props) {
    return (

        <div class="card bg-light" style={{width: 18+'rem', margin: 10 +'px'}}>
      <img src={props.img} class="card-img-top" alt="..." style={{height : 200 }}/>
      <div class="card-body">
        <h5 class="card-title">{props.title}</h5>
        <p class="card-text">{props.text}</p>
        <a href={props.href} class="btn btn-primary">Book Now!</a>
      </div>
    </div>
    
      )
}

