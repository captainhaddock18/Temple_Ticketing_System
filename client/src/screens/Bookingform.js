import React, {useState} from 'react'
import Header from '../components/header'
import { withRouter } from 'react-router-dom'; // Import withRouter HOC
export default function Bookingform(props) {


    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        temple: props.temple,
        date: '',
        people: '',
        startHour: '',
        startMinute: '',
        
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        fetch('/api/booking', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        })
          .then(response => response.json())
          .then(data => {
            console.log('Form data sent to server:', data);
            // handle response from server if needed
          })
          .catch(error => {
            console.error('Error sending form data to server:', error);
          });

          localStorage.setItem('formData', JSON.stringify(formData));
          window.location.href = '/ticket';
      };



  return (
    <div>
        <Header/>
<body class="container bg-light">

  <div class="text-center pt-5">
    <img src="https://e7.pngegg.com/pngimages/737/429/png-clipart-brass-colored-decor-illustration-tirumala-venkateswara-temple-lords-mobile-krishna-shiva-ganesha-lord-krishna-gold-metal-thumbnail.png" alt="network-logo" width="72" height="72" />
    <h2>Booking Form {props.temple}</h2>
    <p>
      Fill the Form to and complete payments to get an E-ticket for the {props.temple}
    </p>
  </div>



  <div class="card">

    <div class="card-body p-4">

      <form id="bookingForm" action="#" method=""  onSubmit={handleSubmit} class="needs-validation" novalidate autocomplete="off">
         
        <div class="row"> 
          <div class = "container p-2"> 
          <label for="inputName">Name</label>
          <input type="text" class="form-control" id="inputName" name="name" placeholder="Your name" value={formData.name} onChange={handleChange} required />
          <small class="form-text text-muted">Please fill your name</small>
          </div>

          <div class = "container p-2"> 
          <label for="inputEmail">Email</label>
          <input type="email" class="form-control" id="inputEmail" name="email" placeholder="Enter email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" value={formData.email} onChange={handleChange} required />
          <small class="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>


          <div class = "container p-2"> 
          <label for="inputPhone">Phone</label>
          <input type="tel" class="form-control" id="inputPhone" name="phone" placeholder="099xxxxxxx" pattern="\d{3}\d{3}\d{4}" value={formData.phone} onChange={handleChange} required />
          <small class="form-text text-muted">We'll never share your phone number with anyone else.</small>
          </div>
        

 
          <div class="row">
          <div class="form-group col-md-7 p-2">
            <label for="inputDate">Date</label>
            <input type="date" class="form-control" id="inputDate" name="date" value={formData.date} onChange={handleChange} required />
            <small class="form-text text-muted">Please choose date and time for meeting.</small>

          </div>
          </div>

          <div class="row">
          <div class="form-group col-md-7 p-2">
            <label>Choose number of people</label>
           
            <select class="form-control mr-1" id="people" name="people" value={formData.people} onChange={handleChange} required>
  <option value="" disabled selected>Upto 5</option>
  <option value="1">1</option>
  <option value="2">2</option>
  <option value="3">3</option>
  <option value="1">4</option>
  <option value="2">5</option>
  {/* Add more options as needed */}
</select>

            
     </div>
     </div>
          
          <div class="row">
          <div class="form-group col-md-10 p-10">
            <label>Choose Time</label>
            <div class="d-flex flex-row justify-content-between align-items-center">
              <select class="form-control mr-1" id="inputStartTimeHour" name="startHour" value={formData.startHour} onChange={handleChange} required>
                <option value="" disabled selected>Hour</option>
                <option value="08">08</option>
                <option value="09">09</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
                <option value="13">13</option>
                <option value="14">14</option>
                <option value="15">15</option>
              </select>
              <div class="pl-1 pr-2">:</div>
              <select class="form-control" id="inputStartTimeMinute" name="startMinute" value={formData.startMinute} onChange={handleChange} required>
                <option value="" disabled selected>Min</option>
                <option value="00">00</option>
                <option value="00">30</option>
              </select>
            </div>
          </div>
          </div>
     
          </div>






        <hr />

      
         

         
        <button class="btn btn-primary btn-block col-lg-5" type="submit">Submit</button>
         
      </form>
       
    </div>
     
  </div>

  <footer>
    <div class="my-4 text-muted text-center">
      <p>© Tharak and Varshit company</p>
    </div>
  </footer>


   

   

</body>
        
        
        
    </div>



  )
}
