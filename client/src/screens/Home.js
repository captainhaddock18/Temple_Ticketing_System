import React from 'react'
import { useEffect , useState}  from 'react'
import Header from '../components/header';
import Footer from '../components/footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import { Link } from "react-router-dom";

export default function Home() {

  const [backendData, setBackendData]  = useState([{}])
  
  useEffect(()=>{
    fetch("/api").then(
      Response => Response.json()
    ).then(
      data => {
        setBackendData(data)
      }
    )
  }, [])

let d = JSON.stringify(backendData);
  
return (
  <div>
    <Header/>
    <div style={{ backgroundColor: 'rgb(222, 226, 230)'}}>
      <div className="container" style={{ paddingTop : 20, paddingBottom : 20}}>
    <Carousel indicators={true} interval={5000} pause={false} wrap={true}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={require("../images/tirupati.jpg")}
          alt="First slide"
          style={{width : '1000px', height : '600px'}}
        />
        <Carousel.Caption>
          <h3>Sri Venkateswara Swami Temple</h3>
          <p>Tirumala, Tirupati, Andhra Pradesh</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={require("../images/basara.jpg")}
          alt="Second slide"
          style={{width : '1000px', height : '600px'}}
        />
        <Carousel.Caption>
          <h3>Gnana Saraswati Temple</h3>
          <p>Basara, Telangana</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={require("../images/yadagirigutta.avif")}
          alt="Third slide"
          style={{width : '1000px', height : '600px'}}
        />
        <Carousel.Caption>
          <h3>Sri Lakshmi Narasimha Swamy Temple</h3>
          <p>Small town of Yadagirigutta, Telangana</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
    </div>



    <div className="text-secondary px-4 py-2 text-center" style={{ backgroundColor: 'rgb(222, 226, 230)'}}>
      <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg" style={{backgroundColor:'#41C9E2'}}>
        <h1 className="display-5 fw-bold " style={{color : '#36454F'}}>Who are we?</h1>
        <div className="col-lg-6 mx-auto" style={{color : '#36454F'}}>
          <p className="fs-5 mb-4">We are your gateway to seamless temple dharshan. Our team is dedicated to simplify the process of accessing temple services and events for bakth from all all arounf the world. With our user-friendly platform, we aim to enhance your temple experience by providing easy access to ticket bookings, essential information, and timely updates.</p>
        </div>
      </div>
    </div>

    <div style={{ backgroundColor: 'rgb(222, 226, 230)'}}>
      <div class="container py-5">

        <div class="row align-items-md-stretch">
        <div class="col-md-6">
            <div class="h-100 p-5 bg-body-tertiary border rounded-3">
              <h2>Ticket Booking</h2>
              <p>Whether you're planning a visit to a temple, attending a cultural festival, or participating in a special ceremony, our platform makes it easy to secure your spot and ensure a memorable experience.</p>
              <Link to="/booking" class="btn btn-outline-secondary">Take Me</Link>
              {/* <button class="btn btn-outline-secondary" type="button">Take Me</button> */}
            </div>
          </div>
          <div class="col-md-6">
            <div class="h-100 p-5 bg-body-tertiary border rounded-3">
              <h2>Check Availability</h2>
              <p>Whether you're planning ahead or looking for last-minute opportunities, our website helps you find the perfect event to attend.<br/><br/></p>
              <Link to="/booking" class="btn btn-outline-secondary">Take Me</Link>
              {/* <button class="btn btn-outline-secondary" type="button">Take Me</button> */}
            </div>
          </div>
        </div>
      </div>
    </div>



    <Footer/>
  </div>
  )
}
