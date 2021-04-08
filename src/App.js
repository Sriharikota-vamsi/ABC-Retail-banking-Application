import logo from './logo.svg';
import './App.css';
import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Link, Switch, Route, Redirect } from 'react-router-dom';
import { Button, Navbar, NavDropdown, Nav } from 'react-bootstrap';
import {connect} from 'react-redux';
import UserLogin from './UserLogin';
import AdminLogin from './AdminLogin';
import ForgetPassword from './ForgetPassword';
import MainPage from './MainPage';
import Home from './Home';
import AddUser from './AddUsers';
import EditUser from './EditUser';
import Users from './Users';
import AdminLoginInformation from './AdminLoginInformation';
import Userpage from './UserPage';
import SavingsAddAmount from './SavingsAddAmount';
import CurrentAddAmountBalance from './CurrentAddAmountBalance';
import SavingsWithDrawAmount from './SavingsWithDrawAmount';
import CurrentWithdrawBalance from './CurrentWithdrawBalance';
import UserView from './UserView';
import About from './About';
import Contact from './Contact';
import MiniStatement from './MiniStatement';


class App extends Component {
  
  render() {
    return (
      <Fragment>
        <Router>
          <div className="App">
            <Navbar bg="dark" variant="dark" sticky="top">
              <div className="navbar">
              <Navbar.Brand  href="#home" >ABC Retail Banking</Navbar.Brand>

              </div>
              <Nav className="mr-auto">
                {/* <Nav.Link>
                  <Link to="/admin">Admin</Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to="/user">User</Link>
                </Nav.Link>
                
                <Nav.Link>
                  <Link to="/home">UserPage</Link>
                </Nav.Link> */}
                <Nav.Link>
                  <Link class="nav-link active" aria-current="page" to="/loginInfo">Home</Link>
                </Nav.Link>
                <Nav.Link>
                  <Link class="nav-link active" aria-current="page" to="/about">About</Link>
                </Nav.Link>
                <Nav.Link>
                  <Link class="nav-link active" aria-current="page" to="/contact">Contact</Link>
                </Nav.Link>
              </Nav>
              <Navbar.Text>{this.props.userData}</Navbar.Text>
              <Nav.Link>
                  <Link class="nav-link active" aria-current="page" to="/main">Logout</Link>
              </Nav.Link>
            </Navbar>
            
            
            <Switch>
              <Route exact path="/"><Redirect to="/main" /></Route>
              <Route path="/about" component={About}></Route>
              <Route path="/contact" component={Contact}></Route> 
              <Route path="/main" component={MainPage}></Route> 
              <Route path="/admin" component={AdminLogin}></Route>
              <Route path="/user" component={UserLogin}></Route>
             
              <Route path="/ResetLogin1" component={ForgetPassword}></Route>
              
        
              <Route path="/loginInfo" component={AdminLoginInformation}></Route>
              
              <Route path="/userpage" component={Userpage}></Route> 
            
              <Route path="/addamount" component={SavingsAddAmount}></Route> 
              <Route path="/currentadd" component={CurrentAddAmountBalance}></Route>
              <Route path="/subamount" component={SavingsWithDrawAmount}></Route> 
              <Route path="/currentsub" component={CurrentWithdrawBalance}></Route> 
              <Route path="/view/:id" component={UserView}></Route>  
               

              <Route path="/home" component={Home}></Route>
              <Route path="/add" component={AddUser}></Route>
              <Route path="/edit/:id" component={EditUser}></Route>
              <Route path="/users/:id" component={Users}></Route>
              <Route path="/history/:id" component={MiniStatement}></Route>

              

              <Route path="**">
                <div>404 not found</div>
              </Route>
            </Switch>
          
          </div>
          
        </Router>

      </Fragment>
    );
  }
}
//export default App;
const mapStateToProps = (state) => {
  return ({userData: state.userData})
}
export default connect(mapStateToProps)(App);