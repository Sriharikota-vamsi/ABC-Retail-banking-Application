import React, { Fragment, useState, useEffect } from 'react';
import { Navbar, Button, Card, Form, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import MiniStatement from './MiniStatement';

function SavingsAddAmount() {
    const [user, setUser] = useState({
        id: '',
        name: ' ',
        username: ' ',
        email: ' ',
        phone: ' ',
        website: ' ',
        balance: 0

    });
    const [amount, setAmount] = useState('');

    const { id } = useParams();
    useEffect(() => {
        const res = sessionStorage.getItem('user');
        let user = JSON.parse(res);
        getUser(user.id);
    }, []);

    const getUser = async (id) => {
        const res = await axios.get(`http://localhost:3003/users/${id}`);
        setUser(res.data);
    }

    const onSubmit = async e => {
        e.preventDefault();
        let date=new Date;
        let obj={
            "type":'',
            "accountType":'',
            "dateTime":date,
            "amount":0
        }
        obj.amount=amount;
        if(parseInt(amount)>0){
            obj.type="Debit";
        }else{
            obj.type="Credit";
        }
        obj.accountType="Savings";
        user.transaction.push(obj);
        user.balance = parseInt(user.balance) + parseInt(amount);
        await axios.put(`http://localhost:3003/users/${user.id}`, user);
        getUser(user.id);
        alert('Amount added successfully');

    }
    
    const inputvalchange = (e) => {
        setAmount(e.target.value);

    }
    return (
        <Fragment>
        <div>
            
            <center>
              <div className='addamount'>
                <h3>Account No: {user.account}</h3>
                <h4>Add Amount</h4>
                <Card style={{ width: '22rem',  marginLeft: "55px" }}>
                    <Card.Body style={{backgroundImage: `url("https://www.xmple.com/wallpaper/gradient-white-linear-blue-1920x1080-c2-00ced1-f5f5f5-a-90-f-14.svg")` ,backgroundSize: 'cover'}}>
                    <Card.Text>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label style={{ float: 'left' }}>UserID: {user.name}</Form.Label>
                            {/* <Form.Control type="email" placeholder="Enter Username" /> */}

                        </Form.Group>
                        <Form.Group controlId="formBasicEBal">
                            <Form.Label style={{ marginRight: "200px" }}>Saving Balance: {user.balance}</Form.Label>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label style={{ marginRight: "270px" }}>Amount</Form.Label>
                            <Form.Control type="number" placeholder="Amount" onChange={inputvalchange} />
                        </Form.Group>

                        <Button class="btn btn-outline-primary" variant="primary" onClick={onSubmit} block >Submit</Button>
                    </Form>
                    </Card.Text>
                    </Card.Body>
                </Card>
                <br/>
                <Link class='btn btn-outline-primary btnAdd' to={'/userpage'} block >Back to UserPage</Link> 
                </div>
            </center>
        </div>
        <div>
            
        
    </div>
    </Fragment>
    )
}
export default SavingsAddAmount;