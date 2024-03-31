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
            <Bookingcard img={require("../images/tirupati.jpg")} title="Tirupati" text="Sri Venkateswara Swami Temple" href="/bookingform1" />
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 mb-4" >
            <Bookingcard img={require("../images/basara.jpg")} title="Basara" text="Gnana Saraswati Temple" href="/bookingform2"/>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 mb-4" >
            <Bookingcard img={require("../images/yadagirigutta.avif")} title="Yadagirigutta" text="Lakshmi Narasimha Swamy Temple" href="/bookingform3"/>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 mb-4" >
            <Bookingcard img={require("../images/sun_temple.jpeg")} title="Puri" text="Konark Sun Temple" href="/bookingform4"/>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
            <Bookingcard img={require("../images/kedarnath.jpeg")} title="Kedarnath" text="Kedarnath Temple" href="/bookingform5"/>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
            <Bookingcard img={require("../images/varanasi.jpeg")} title="Varanasi" text="Vishalakshi Temple" href="/bookingform6"/>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 mb-4" >
            <Bookingcard img={require("../images/mahabalipuram.jpeg")} title="Mahabalipuram" text="Shore Temple" href="/bookingform7"/>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 mb-4" >
            <Bookingcard img={require("../images/ayodhya.avif")} title="Ayodhya" text="Ram Mandir" href="/bookingform8"/>
          </div>
    </div>
    </div>
      </div>
  )
}