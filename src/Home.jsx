import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, Button, Nav, Navbar, Row , Col , Form,Input} from 'react-bootstrap';
import {Link} from 'react-router-dom';

const Home = () => {
    const [users, setUsers] = useState([]);
    const [show, setShow] = useState(false);
    const[searchTerm,setsearchTerm]=useState("");

    useEffect(() => {
        loadUsers();
    }, []);

    const loadUsers = async () => {
        const result = await axios.get("http://localhost:3003/users");
        setUsers(result.data.reverse());
    }

    const deleteUser = async id => {
        await axios.delete(`http://localhost:3003/users/${id}`);
        loadUsers();
    }
    return (
        <div className='home'>
        <Navbar bg="light" expand="lg" sticky="top">
        <Navbar.Brand href="#home">Welcome to our bank!</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                
            </Nav>
            <input type="text" placeholder="Search names here...." className="form-control" style={{marginTop:50,marginBottom:20,width:"20%"}}
            onChange={(e)=>{
                setsearchTerm(e.target.value);
            }}/>
            
            <Form inline>
            <Link className= "btn btn-primary" to="/add">AddUser</Link>
            </Form>
        </Navbar.Collapse>
    </Navbar>
        <div className='home' style={{ marginLeft: '20px', marginTop: '20px'}}>
            
            <h3>User Details</h3>
            <Table striped bordered hover variant="" style={{}}>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>User Name</th>
                        <th>Email</th>
                        <th>Mobile No</th>
                        <th>Pan Card</th>
                        <th>Account No</th>
                        <th>Balance</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.filter((val)=>{
                            if(searchTerm===''){
                                return val;
                            }else if(
                                val.name.toLowerCase().includes(searchTerm.toLowerCase())||
                                val.email.toLowerCase().includes(searchTerm.toLowerCase())
                            ){
                                return val;
                            }

                            
                        }).map((user, index) => (
                            <tr>
                            <th>{index + 1}</th>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td>{user.phone}</td>
                            <td>{user.pan}</td>
                            <td>{user.account}</td>
                            <td>{user.balance}</td>
                            <td>
                                <Link class="btn btn-primary mr-2" to={`/view/${user.id}`}>View</Link>
                                <Link class="btn btn-outline-primary mr-2" to={`/edit/${user.id}`}>Edit</Link>
                                <Link class="btn btn-danger" onClick={() => deleteUser(user.id)}>Delete</Link>
                            </td>
                            </tr>
                        ))
                    }
                </tbody>
                
            </Table>
            </div>
        
        {/* <Link className= "btn btn-outline-light" to="/add">AddUser</Link> */}
        </div>
    )
}
export default Home;