import React from 'react';
import {Link} from 'react-router-dom'; 

export default function Header(){
  return (
    <div className="sticky-top">
        <div style={{ backgroundColor: '#008DDA'}}>
            <div className="navbar navbar-expand-lg " style={{ backgroundColor: '#41C9E2', height: 60, borderRadius: '0 0 50px 50px', boxShadow: '0px 0px 10px 10px rgba(0,0,0,0.2)'}}>
            <div className="container">
                <div className = "row">
                <Link className="nav-link active" aria-current="page" to="/">Ticketing System</Link>
                </div>
            </div>
            </div>
            <div className="navbar navbar-expand-lg"style={{color: 'white'}}>
            <div className="container">
                {/* <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
                <svg className="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"><use xlink:href="#bootstrap"></use></svg>
                </a> */}

                <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                <li><Link className="nav-link" aria-current="page" to="/" style={{color : 'white'}}>Home</Link></li>
                <li><Link className="nav-link active" aria-current="page" to="/booking" style={{color : 'white'}}>Ticket-Booking</Link></li>
                {/* <li><Link className="nav-link active" aria-current="page" to="/booking" style={{color : 'white'}}>Check-Availability</Link></li> */}
                <li><Link className="nav-link active" aria-current="page" to="/" style={{color : 'white'}}>Updates</Link></li>
                <li><Link className="nav-link active" aria-current="page" to="/" style={{color : 'white'}}>About</Link></li>
                </ul>   

                <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
                {/* <input type="search" className="form-control form-control-dark text-bg-dark" placeholder="Search..." aria-label="Search"> */}
                </form>

                <div className="text-end">
                <Link to="/login" className="btn btn-outline-light me-2">Login</Link>
                <Link to="/register" className="btn btn-warning">Sign-up</Link>
                {/* <button type="button" className="btn btn-outline-light me-2"></button> */}
                {/* <button type="button" className="btn btn-warning">Sign-up</button> */}
                </div>
            </div>
            {/* <div className="container" style={{color : 'white'}}>
                <div className = "row">
                    <a className="navbar-brand" href="#" >Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav" >
                        <a className="nav-link" aria-current="page" href="/">Home</a>
                        <a className="nav-link" href="#">Features</a>
                        <a className="nav-link" href="#">Pricing</a>
                        <a className="nav-link disabled">Disabled</a>
                    </div>
                    </div>
                        <div className="text-end">
                            <button type="button" className="btn btn-outline-light me-2">Login</button>
                            <button type="button" className="btn btn-warning">Sign-up</button>
                        </div>
                </div>
                </div> */}
            </div>
        </div>
    </div>

  );
};
