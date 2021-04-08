import React, { useState, Fragment } from 'react';
import { Navbar, Nav, Form, FormControl, Button, Row, Col, Toast, Card, Carousel} from 'react-bootstrap';


import UserLogin from './UserLogin';
import AdminLogin from './AdminLogin';
import {Link} from 'react-router-dom';
import Footer from './Footer';

function AdminLoginInformation(props) {
    const [show, setShow] = useState(false);
    return (
        <div className="bg" >
        <Fragment>
            <Navbar bg="light" expand="lg" sticky="top">
                <Navbar.Brand href="#home">Welcome!</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                       
                    
                    
                        <br />
                       
                                 <Link  class="btn btn-primary mr-2" to='/admin'>Admin Login</Link><br/>
                              
                               <Link class="btn btn-primary mr-2" to='/user'>User Login</Link>
                            
                        
                    
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <div style={{ marginRight: '10%', marginBottom: '10%' , marginLeft: '10%'}}>
            <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src=" https://th.bing.com/th/id/Rce4b8a5b96e420fb79348f555ad0d6e9?rik=T8rY%2fb4UXyDaOQ&riu=http%3a%2f%2fwww.viscomm.co.in%2fimg%2fwork%2fICICI-Startup%2fICICI-Startup_1.jpg&ehk=xJK0bOU60aIEs7W%2fcPcFjIEX61rwISAg6p%2fXzqOk9H4%3d&risl=&pid=ImgRaw" height="300"
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                            
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://www.icicibank.com/managed-assets/images/personal/payments/save-tax-banner-D.jpg"  height="300"
                            alt="Second slide"
                           
                        />

                        <Carousel.Caption>
                           
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://tse3.mm.bing.net/th?id=OIP.nuiN7ZXyfep17m71tI9csAHaCq&pid=ImgDet&rs=1" height="300"
                            alt=" Third slide"
                        />
                        <Carousel.Caption>
                           
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>

               

            </div>
            <div>
                <Footer/>
            </div>
        </Fragment>
    </div>
    )
}
// render(<LoginInfo />);
export default AdminLoginInformation;