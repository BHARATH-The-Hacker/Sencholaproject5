import React from 'react';
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

 function Signup() {
  return (
<div>
    {/* NAVIGATION BAR */}
    <Navbar expand="lg" className="bg-body-tertiary fw-bold fixed-top">
    <Container>
      <Navbar.Brand href="/"><h3><span><i class="bi bi-award"></i></span> NCA...🏏</h3></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav>
           <Nav.Link  href="/">Home</Nav.Link>
              <Nav.Link  href="/Login">SignIn</Nav.Link> 
              <Nav.Link  href="/Signup">SignUp</Nav.Link> 
          </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>

    {/* SIGNUP PAGE */}
    <div className='signup container-fluid template d-flex mt-5 justify-content-center align-items-center vh-100 bg-info'>
       <div className="container p-5 rounded bg-white"> 
            <form action="#" className='was-validated container-fluid-sm' method="post">
            <h3 className='text-center'>Sign Up</h3>
            <div className='mb-2'>
                <label htmlFor="fname">First Name</label>
                <input type="text" className="form-control rounded-3 my-2" placeholder='Enter First Name' id="" required />
            </div>
            <div className='mb-2'>
                <label htmlFor="lname">Last Name</label>
                <input type="text" className="form-control rounded-3 my-2" placeholder='Enter Last Name' id="" required />
            </div>
            <div className='mb-2'>
                <label htmlFor="email">Email</label>
                <input type="email" className="form-control rounded-3 my-2" placeholder='Enter Email' id="" required />
            </div>
            <div className='mb-2'>
                <label htmlFor="password">Password</label>
                <input type="password" className="form-control rounded-3 my-2" placeholder='Enter Password' id="" required />
            </div>
            
            <div className="d-grid">
                <button className='btn btn-primary my-2'>Create Account</button>
            </div>
            <p className='text-end mt-2'>
                Already Registerd<Link to="/Login" className='ms-2'>Sign-in</Link>
            </p>
            </form>
        </div> 
    </div>
</div>
         )
}
export default Signup;