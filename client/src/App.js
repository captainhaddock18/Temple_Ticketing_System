import React from 'react'
import { useEffect , useState}  from 'react'
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
  <div>
    {d}
  </div>
  )
}
