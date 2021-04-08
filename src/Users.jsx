import React, { Fragment, useState, useEffect, cloneElement } from 'react';
import { Form, Button, Card, ListGroup, ListGroupItem, Row, Col, CardColumns,Table,img } from 'react-bootstrap';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import MiniStatement from './MiniStatement';


const Users = (props) => {
    const [user, setUser] = useState({
        name: ' ',
        username: ' ',
        email: ' ',
        phone: ' ',
        website: ' ',
        aadhar: ' ',
        pan: '',
        balance: ' ',
        cType: ' ',
        sType: ' ',
        currentbalance: '0',
        account: ''

    });
    const [showButton, setShowBotton] = useState(null);

    const { id } = useParams();
    useEffect(() => {
        loadUser();
    }, []);

    const loadUser = async () => {
        const res = await axios.get(`http://localhost:3003/users/${id}`);
        setUser(res.data);
    }
    const userButton = () => {
        props.history.push('/addamount');
    }
    const currentAddAmount = () => {
        props.history.push('/currentadd');
    }
    const userButton1 = () => {
        props.history.push('/subamount');
    }
    const currentWithAmount = () => {
        props.history.push('/currentsub');
    }
    
    
    const currentButton = () => {
        setShowBotton(!true);
    }
    const savingsButton = () => {
        setShowBotton(true);
    }
    const setData=(flag)=>{
        sessionStorage.setItem('from',flag)
    }
    return (
        <center>


            <div className="userpage">
                <h2>User Name:{user.name}</h2>
                <h3 > User Id :{id}</h3>
                <h3 > Account No :{user.account}</h3>
               
                <CardColumns>
                    <Card style={{ width: '10rem' }}>
                        <Card.Img variant="top" src="https://res.cloudinary.com/dipmwqfxq/w_275,h_275,c_fit,f_auto,q_99/cci/2019/11/personal-checking-black.png" height='150px' width='15px' />
                        <Card.ImgOverlay>
                            <Card.Title style={{ textAlign: 'center' }}></Card.Title>
                            <Card.Text style={{ color: 'white', fontFamily: 'serif', fontSize: '40px', textAlign: 'center', marginTop: '90px' }} ><Button variant="primary" size="sm" onClick={currentButton} block>Current</Button></Card.Text>
                        </Card.ImgOverlay>

                    </Card >
                    <Card style={{ width: '10rem' }} className="">
                        <Card.Img variant="top" src="https://media.consumeraffairs.com/files/news/Savings_account_concept_sitthiphong_Fotolia.jpg" height='150px' width='15px' />
                        <Card.ImgOverlay>
                            <Card.Title style={{ textAlign: 'center' }}></Card.Title>
                            <Card.Text style={{ color: 'white', fontFamily: 'serif', fontSize: '40px', textAlign: 'center', marginTop: '90px' }} ><Button variant="primary" size="sm" onClick={savingsButton} block>Savings</Button></Card.Text>
                        </Card.ImgOverlay>

                    </Card>
                    <Card style={{ width: '10rem' }} className="">
                        <Card.Img variant="top" src="https://media.consumeraffairs.com/files/news/Savings_account_concept_sitthiphong_Fotolia.jpg" height='150px' width='15px' />
                        

                    </Card>
                </CardColumns>

               
                
                <br />
               



              
                <div className='demo' style={{ width: '60rem', marginLeft: "40px" }}>
                    {
                        showButton === true && (
                            <div>
                                <hr />
                                <button class="btn btn-outline-primary btnAdd" onClick={userButton}>Add Amount</button><br/><br/>
                                <button class="btn btn-outline-primary btnAdd" onClick={userButton1}>Withdraw Amount</button>
                                <br /><br />
                               <Link class='btn btn-outline-primary' onClick={setData('Savings')} to={'/history/${user.id}'}>MiniStatement</Link>
                                
                               
                                <br></br>
                                

  
<Table striped bordered hover size="sm">
  <thead>
    <tr>
      <th> Name</th>
      <th>User Name</th>
      <th>Email</th>
      <th>Phone</th>
      <th>Account No</th>
      <th>Pan No</th>
      <th>Balance</th>
      <th>Account Type</th>

  
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{user.name}</td>
      <td>{user.username}</td>
      <td>{user.email}</td>
      <td>{user.phone}</td>
      <td>{user.account}</td>
      <td>{user.pan}</td>
      <td>{user.balance}</td>
      <td>{user.sType}</td>
      
    </tr>
    </tbody>
    </Table>

                            
                            </div>
                        )}{(showButton === false &&
                            <div>
                                <hr />
                                <button class="btn btn-outline-primary btnAdd" onClick={currentAddAmount}>Add Amount</button><br/>
                                <button class="btn btn-outline-primary btnAdd" onClick={currentWithAmount}>Withdraw Amount</button>
                                <br /><br />
                                <Link class='btn btn-outline-primary' onClick={setData('Current')} to={'/history/${user.id}'}>MiniStatement</Link>
                               
                                <br></br>
                                <Table striped bordered hover size="sm">
  <thead>
    <tr>
      <th> Name</th>
      <th>User Name</th>
      <th>Email</th>
      <th>Phone</th>
      <th>Account No</th>
      <th>Pan No</th>
      <th>Balance</th>
      <th>Account Type</th>

  
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{user.name}</td>
      <td>{user.username}</td>
      <td>{user.email}</td>
      <td>{user.phone}</td>
      <td>{user.account}</td>
      <td>{user.pan}</td>
      <td>{user.currentbalance}</td>
      <td>{user.cType}</td>
      
    </tr>
    </tbody>
    </Table>
                            </div>
                        )}
                </div>
               

         <div>
             <img src={'https://prabhubank.com/assets/backend/uploads/Product/Prabhu-1250x220px-welcome.jpg'} />
          </div>

            </div><br />

            
        </center>

    )

}
export default Users;