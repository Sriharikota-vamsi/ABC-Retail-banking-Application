import React,{useState,useEffect} from 'react';
import './App.css';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import {Button,Card,Table} from 'react-bootstrap';

function MiniStatement(){
    const[user,setUser]=useState({
        username:'',
        balance:'',
        currentbalance:'',
        transaction:[]
    });
    const from=sessionStorage.getItem('from');
    const{id}=useParams();

    useEffect(()=>{
    loadUser();
},[]);



const loadUser=async()=>{
    const res=await axios.get('http://localhost:3003/history/${id}');
    setUser(res.data.reverse());
}
return(
    <div
    style={{
        backgroundImage:'url("https://i.ytimg.com/vi/UXz6HjFhsoQ/maxresdefault.jpg")'
    }}>
        <div>
            <h3><center>Transaction History</center></h3>
            <Link class='btn btn-outline-primary btnAdd' to={'/userPage'} block>Previous</Link>
            <Card className="miniCard" style={{backgroundColor:"lightblue"}}>
                <p><center>Account Holder Name:<b>{user.username}</b></center></p>
                {from==='Current'?<p><center>Account Balance:<b>{user.currentbalance}</b></center></p>:<p><center>Account Balance:<b>{user.balance}</b></center></p>}
               
        <Table stripped bordered hover variant="primary">
            <thead>
                <tr>
                    <th>Transaction Type</th>
                    <th>Amount</th>
                    <th>Account Type</th>
                    <th>Date and Time</th>
                </tr>
            </thead>
            <tbody>
                {
                    user.transaction.map(tran=>tran.accountType===from?(
                        <tr>
                            <td>{tran.type}</td>
                            <td>{tran.amount}</td>
                            <td>{tran.accountType}</td>
                            <td>{tran.dateTime}</td>
                        </tr>
                    ):(<tr>

                    </tr>)
                    )
                }
            </tbody>
        </Table>
        </Card>
        </div>
        </div>

)




}
export default MiniStatement;