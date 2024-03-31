import React from 'react'
import { useEffect , useState}  from 'react'
import Home from './screens/Home'
import Notfound from './screens/Notfound'
import Login from './screens/Login'
import Register from './screens/Register'
import Booking from './screens/Booking'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Bookingform from './screens/Bookingform'
import Ticket from './screens/Ticket'
import Bookingform1 from './screens/Bookingform1'
import Bookingform2 from './screens/Bookingform2'
import Bookingform3 from './screens/Bookingform3'
import Bookingform4 from './screens/Bookingform4'
import Bookingform5 from './screens/Bookingform5'
import Bookingform6 from './screens/Bookingform6'
import Bookingform7 from './screens/Bookingform7'
import Bookingform8 from './screens/Bookingform8'

export default function App() {

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
  <Router>
    <div>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path='/login' element={<Login/>}/>
        <Route exact path='/booking' element={<Booking/>}/>
        <Route exact path='/register' element={<Register/>}/>
        <Route exact path='/bookingform' element={<Bookingform/>}/>
        <Route exact path='/ticket' element={<Ticket/>}/>
        <Route exact path='/bookingform1' element={<Bookingform1/>}/>
        <Route exact path='/bookingform2' element={<Bookingform2/>}/>
        <Route exact path='/bookingform3' element={<Bookingform3/>}/>
        <Route exact path='/bookingform4' element={<Bookingform4/>}/>
        <Route exact path='/bookingform5' element={<Bookingform5/>}/>
        <Route exact path='/bookingform6' element={<Bookingform6/>}/>
        <Route exact path='/bookingform7' element={<Bookingform7/>}/>
        <Route exact path='/bookingform8' element={<Bookingform8/>}/>
        <Route exact path='*' element={<Notfound/>}/>
      </Routes>
    </div>
    </Router>
  )
}
