import React,  {useState, Fragment } from 'react';
import {Card, Form, Button, Alert} from 'react-bootstrap';

import Email from './Email';
import Password from './Password';

function ForgetPassword(props) {
    const [changeMobile, setChangeMobile] = useState(false);
    const [changeEmail, setChangeEmail] = useState(false);
    const [showAlert, setShowAlert] = useState(null);
    const [emailVal, setEmailVal] = useState('');
    const [passwordVal, setPasswordVal] = useState('');

    const showEmail = () => {
        setChangeMobile(!true);
    }

    

    const emailValueChange = (e) => {
        setEmailVal(e.target.value);
    }

    const passwordValueChange = (e) => {
        setPasswordVal(e.target.value);
    }

    const onSubmit = () => {
       // const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
       // const isEmailValid = emailRegex.test(emailVal);
        const isPasswordValid = passwordRegex.test(passwordVal);
        if ( isPasswordValid) {
            // this.setState({ showAlert: true });
            props.history.push('/userpage');
            //setShowAlert(true);
        } else {
            //this.setState({ showAlert: false });
            setShowAlert(false);
        }
    }


    return (
        <Fragment>
        <Card style={{ width: '20rem' }}>
            <Card.Body>
                <Card.Title className='demo'> Reset Login Password</Card.Title><br />
                <Alert variant="warning"><small>For security purposes, no withdrawals are permitted for 24 hours after modification of security methods</small></Alert>
                <Card.Text>
                    <Form>
                        <div style={{ marginRight: '200px' }}>
                            <Button variant="light" size="sm" onClick={showEmail}>Email</Button>{' '}

                            
                        </div>
                       
                        <Password 
                           passwordVal={passwordVal}
                           passwordChange={passwordValueChange}/>
                       
                        
                            <Button variant="danger" size="sm"onClick={onSubmit} block >
                                Next
                            </Button>
                            {
                                showAlert === true && (
                                    <Alert variant="success">Success</Alert>
                                )}{(showAlert === false &&
                                    <Alert variant="warning">Failure</Alert>
                                )}
                            <br />
                            <br />
                        
                            
                    </Form>
                </Card.Text>
                </Card.Body>
            </Card>
            
            <br /><br />
            
    
    </Fragment>
    )

}
export default ForgetPassword;