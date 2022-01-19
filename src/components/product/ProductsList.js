import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Badge, Table, Button } from 'reactstrap'
import { bindActionCreators } from "redux"
import * as productActions from "../../redux/actions/productActions"
import * as cartActions from "../../redux/actions/cartActions"
import alertify from "alertifyjs"



class ProductsList extends Component {

    componentDidMount() {
        this.props.actions.getProducts();
        

    }
    

    addToCart = (product) => {
        this.props.actions.addToCart({ quantity: 1, product })
        alertify.success(product.productName + " sepete eklendi")
        

        
    }
    

    render() {
        return (
            <div>
                <h3>
                    
                    <Badge color="success">
                        {
                            this.props.currentCategory.categoryName
                        }
                    </Badge>                </h3>
                <Table>
                    <thead>
                        <tr>
                            <th>
                                #
                            </th>
                            <th>
                                Product Name
                            </th>
                            <th>
                                Price
                            </th>
                            
                            
                            

                        </tr>
                    </thead>
                    <tbody>
                        {this.props.products.map(product => (

                            <tr key={product.id}>
                                <th scope="row"> {product.id} </th>
                                <td>{product.productName}</td>
                                <td>{product.unitPrice}</td>
                                
                                
                                
                                <td><Button color="success" onClick={() => this.addToCart(product)}>Sepete ekle</Button></td>


                            </tr>

                        ))}

                        

                    </tbody>
                </Table>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        currentCategory: state.changeCategoryReducers,
        products: state.productListReducer,
        
    }
    
}

function mapDispatchToProps(dispatch) {
    return {
        actions: {
            getProducts: bindActionCreators(productActions.getProducts, dispatch),
            addToCart: bindActionCreators(cartActions.addToCart, dispatch),
            
        }

    }

}

export default connect(
    mapStateToProps, mapDispatchToProps)
    (ProductsList)
