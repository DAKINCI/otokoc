import React from "react";
import { Container } from "reactstrap";
import Navi from "../navi/Navi";
import Dashboard from "./Dashboard";
import { Routes, Route} from "react-router-dom";
import CartDetail from "../cart/CartDetail";




function App() {
    return ( 
        
        <Container>
            <Navi/>
            
            <Routes>
            <Route path='/' exact element={<Dashboard/>} />
            <Route path='/product' exact element={<Dashboard/>} />
            <Route path='/cart' exact element={<CartDetail/>} />

            </Routes>
            
        </Container>
        );
}


export default App;