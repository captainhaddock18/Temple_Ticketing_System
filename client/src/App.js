import React from 'react'
import { useEffect , useState}  from 'react'
import Home from './screens/Home'
import Notfound from './screens/Notfound'
import Login from './screens/Login'
import Register from './screens/Register'
import Booking from './screens/Booking'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

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
        <Route exact path='*' element={<Notfound/>}/>
      </Routes>
    </div>
    </Router>
  )
}
