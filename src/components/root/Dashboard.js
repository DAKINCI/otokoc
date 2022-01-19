import React, { Component } from 'react'
import { Row, Col } from 'reactstrap'
import ProductsList from '../product/ProductsList'
import CategoryList from '../Categories/CategoryList'
import CartDetail from '../cart/CartDetail'




export default class Dashboard extends Component {
    render() {
        return (
            <div>
                <Row >   <CategoryList/>
                </Row>
                
                <Row > 
                <Col xs="8" > 
                 <ProductsList/> </Col>
                 <Col  xs="4">   <CartDetail/></Col>
                </Row>
                 

                
                
            </div>
        )
    }
}
