import React from 'react'
import Header from '../components/header'
import Bookingcard from '../components/Bookingcard'

export default function Booking() {
  return (
    <div>
    <Header/>
    <div className="container">
        <div className="d-flex flex-wrap justify-content-around" >
        <div className="col-lg-3 col-md-4 col-sm-6 mb-4"  >
            <Bookingcard img={require("../images/tirupati.jpg")} title="Tirupati" text="Visit the Saptachalam Hills!" />
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 mb-4" >
            <Bookingcard img={require("../images/tirupati.jpg")} title="Tirupati" text="Visit the Saptachalam Hills!" />
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 mb-4" >
            <Bookingcard img={require("../images/tirupati.jpg")} title="Tirupati" text="Visit the Saptachalam Hills!" />
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 mb-4" >
            <Bookingcard img={require("../images/tirupati.jpg")} title="Tirupati" text="Visit the Saptachalam Hills!" />
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
            <Bookingcard img={require("../images/tirupati.jpg")} title="Tirupati" text="Visit the Saptachalam Hills!" />
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
            <Bookingcard img={require("../images/tirupati.jpg")} title="Tirupati" text="Visit the Saptachalam Hills!" />
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 mb-4" >
            <Bookingcard img={require("../images/tirupati.jpg")} title="Tirupati" text="Visit the Saptachalam Hills!" />
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 mb-4" >
            <Bookingcard img={require("../images/tirupati.jpg")} title="Tirupati" text="Visit the Saptachalam Hills!" />
          </div>
    </div>
    </div>
      </div>
  )
}