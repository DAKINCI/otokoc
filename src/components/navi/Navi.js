import React from "react";
import {
    Collapse,
    Navbar,
    NavItem,
    Nav} from 'reactstrap';


    export default class Navi extends React.Component {
        constructor(props) {
            super(props);

            this.toggle = this.toggle.bind(this);
            this.state = {
                isOpen: false
            };
        }
        toggle() {
            this.setState({
                isOpen: !this.state.isOpen
            });
        }
        render(){
return (
            <div>
  <Navbar
    color="white"
    expand="md"
    light >
    
    
    <Collapse navbar>
      <Nav
        className="me-auto"  navbar >
         </Nav>
      
        <NavItem>
        <img src={require('./otokoclogo.png')} alt="logo" />
        </NavItem>
        </Collapse>
  </Navbar>
</div>
)}
    }

