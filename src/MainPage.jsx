import './App.css';
import React, { Component, Fragment } from 'react';
import { Button, Card } from 'react-bootstrap';

class MainPage extends Component {
    render() {
        return (
            <div className="main"  style={{backgroundImage: `url("https://th.bing.com/th/id/Ra6ca421789a3f82d6a833537694ba08b?rik=ABxnEN8qY2Rszg&riu=http%3a%2f%2fgetwallpapers.com%2fwallpaper%2ffull%2fa%2f9%2f2%2f450149.jpg&ehk=9hwWdnThMg10aXz5AiTkpiEIAGfBx%2fllPgQWx9Netbw%3d&risl=&pid=ImgRaw")`}}>
               
            
            <Fragment>

                <Card className="card1">
                    <Card.Img variant="top" src="https://prabhubank.com/assets/backend/uploads/Product/Prabhu-1250x220px-welcome.jpg" height='200px' />
                    <Card.ImgOverlay>
                      
                    </Card.ImgOverlay>
                    
                </Card>
                <Card className="card2">
                    <Card.Img variant="top" src="https://th.bing.com/th/id/Re2e8a7fe038a3394750e8b132cf4ebc4?rik=Hl2tGUsjB3b6pA&riu=http%3a%2f%2fclipground.com%2fimages%2fnational-bank-clipart-4.jpg&ehk=JHzGR70BSJVaTsR93AffpG9LrYOlb5a2idvXmo%2bbmYc%3d&risl=&pid=ImgRaw" height='200px' />
                </Card>
                <br />
            </Fragment>
            </div>
        )
    }
}
export default MainPage;