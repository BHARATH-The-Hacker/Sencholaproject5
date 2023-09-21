import Carousel from 'react-bootstrap/Carousel';
import React from 'react';
import images from '../images/1.jpg';
import images1 from '../images/2.jpg';
import images2 from '../images/3.jpg';
import images3 from '../images/4.jpg';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function HomePage() {
    return (
        <div className="container-fluid">
          {/* NAVIGATION BAR */}
        <Navbar expand="lg" className="bg-body-tertiary fw-bold fixed-top">
        <Container>
          <Navbar.Brand  href="/"><h3><span><i class="bi bi-award"></i></span> NCA...🏏</h3></Navbar.Brand>
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

      {/* MAIN */}
      <Carousel>
        <Carousel.Item>
           <img src={images} className='w-100 vh-100' alt="background" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img src={images1} className='w-100 vh-100' alt="background" />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img src={images2} className='w-100 vh-100' alt="background" />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img src={images3} className='w-100 vh-100' alt="background" />
          <Carousel.Caption>
            <h3>Forth slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </div>
    );
  }
  
  export default HomePage;