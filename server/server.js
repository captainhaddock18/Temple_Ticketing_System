const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const cookieparser = require('cookie-parser');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');


app.use(bodyParser.json());
// Connect to MongoDB
mongoose.connect("mongodb+srv://tharakhegde:aZ0zNERVBkO45F7s@messages.mzo5tcp.mongodb.net/", {
  dbName: "backend",
}).then(() => {
  console.log("Database connected!");
}).catch((err) => {
  console.log(err);
});

// Mongoose user model
const userSchema = new mongoose.Schema({
  name: String,
  email: String, 
  phone: Number, 
  temple: String,
  date: String, 
  startHour: Number,
  startMinute: Number 
});

const user = mongoose.model("tickets", userSchema);

// Middleware
app.use(cookieparser());
app.use(express.static(path.join(__dirname, '..', 'client', 'public'))); // Serve static files from React public directory
app.use(express.urlencoded({ extended: true }));

// API routes
// Your authentication middleware and other routes here...

// Serve React index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'client', 'public', 'index.html'));
});

app.get('/booking', (req, res)=>{
    res.end("hi there this is server!");
})

app.post('/api/booking', (req, res) => {
    const {name , email , phone , temple, date , startHour, startMinute} = req.body;
    user.create({
        name: name,
        email: email, 
        phone: phone,
        temple: temple, 
        date: date, 
        startHour: startHour, 
        startMinute: startMinute
    })
    res.end();
    
    // Process form data here
    // Respond to the client as needed
  });
  
// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
