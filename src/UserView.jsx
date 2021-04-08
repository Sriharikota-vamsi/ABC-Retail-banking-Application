import React, { Fragment, useState, useEffect } from 'react';
import { Form, Button, Card, ListGroup, ListGroupItem,Table } from 'react-bootstrap';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';


const UserView = (props) => {
    const [user, setUser] = useState({
                    name: "",
                    username: "",
                    email: "",
                    phone: "",
                    pan: "",
                    account:"",
                    balance:""
                });
                const { id } = useParams();
                useEffect(() => {
                    loadUser();
                }, []);
        
                const loadUser = async () => {
                    const res = await axios.get(`http://localhost:3003/users/${id}`);
                    setUser(res.data);
                }
        
                return (
                    <Fragment>
        
                        <Card style={{ width: '60rem' ,margin:"50px" }}>
                            <Card.Body  style={{backgroundImage: `url("https://tse1.mm.bing.net/th/id/OIP.H0NVrax7veWobmgwuLM3wQHaDt?pid=ImgDet&rs=1")` ,backgroundSize: 'cover'}}>
                                <Card.Title className='demo'>User Id</Card.Title><br />
                                <Card.Text>
                                  
                                    <Table striped bordered hover size="sm">
  <thead>
    <tr>
      <th> Name</th>
      <th>User Name</th>
      <th>Email</th>
      <th>Phone</th>
      <th>Pan No</th>
      <th>Account No</th>
      <th>Balance</th>
      

  
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{user.name}</td>
      <td>{user.username}</td>
      <td>{user.email}</td>
      <td>{user.phone}</td>
      <td>{user.pan}</td>
      <td>{user.account}</td>
      <td>{user.balance}</td>
     
      
    </tr>
    </tbody>
    <br />
                                        <Link className="btn btn-primary" to="/home">Back to Home</Link>
    </Table>
                                </Card.Text>
                            </Card.Body>
                        </Card>
        
        
        
        
            </Fragment>


 )

}
export default UserView;