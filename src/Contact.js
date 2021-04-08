import React from 'react';
import './App.css';
import { Container ,Table} from 'react-bootstrap';

function Contact(){
    return(
        <Container className="about">
        
          <h1> ABC Retail Banking help Lines</h1>
                
            <p> Bank Personal Loan Customer Care Number
       ICICI Personal Loan Customer Care
    ICICI Bank personal loan customer care number is 1860-120-7777. Callers can check their loan details or application status by 
    dialling this number. For any unresolved queries, you
 can call 1800-200-3344 between 9:00 a.m. to 6:00 p.m. (from Monday to Friday).

ICICI Bank Customer Care Numbers by City
If you are a customer from one of the following cities, you can get in touch with ICICI Customer Care through the following helpline numbers for any queries regarding ICICI Bank Personal Loans:
        </p>
        <Table striped bordered hover size="sm">
  <thead>
    <tr>
      <th> Personal Banking</th>
      <th>Private Banking</th>
      <th>Business</th>
      </tr>
  </thead>
  <tbody>
    <tr>
      <td>All India :1860-120-7777</td>
      <td>All India : 1800-103-8181</td>
      <td>1860-120-6699</td>
      
      
    </tr>
    </tbody>
    </Table>
    <div>
             <img src={'https://prabhubank.com/assets/backend/uploads/Product/Prabhu-1250x220px-welcome.jpg'} />
          </div>


        </Container>
    )
}
export default Contact;