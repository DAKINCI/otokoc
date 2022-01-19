import React, { Component} from 'react'
import { bindActionCreators } from "redux"
import { connect } from 'react-redux';
import * as cartActions from "../../redux/actions/cartActions"
import {  Table, Button } from 'reactstrap'
import alertify from "alertifyjs"



class CartDetail extends Component {
   
  

    
removeFromCart(product){
    this.props.actions.removeFromCart(product);
    alertify.error(product.productName + " sepetten silindi")

}




    render() {
        return (
            
            <div>
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
                            <th>
                                Quantity
                            </th>

                            <th></th>
                            
                        </tr>
                    </thead>
                       
                           
                           

                    <tbody>
                        {this.props.cart.map(cartItem =>(

                        <tr key={cartItem.product.id}>
                            <th scope="row"> {cartItem.product.id} </th>
                            <td>{cartItem.product.productName}</td>
                            <td>{cartItem.product.unitPrice}</td>
                            <td>{cartItem.quantity}</td>
                            
                            
                            
                            <td><Button color="danger" onClick={()=>this.removeFromCart(cartItem.product)}>-</Button></td>
                        </tr>

                        ))}
                    </tbody>
                          
               <thead>
                   <tr>
                   <th scope="row">Ara Toplam:</th>
                   <th></th>
                   <td>
                                {this.props.cart.reduce((total, cartItem)=>total+(parseFloat(cartItem.product.unitPrice)*cartItem.quantity),0)}

                                </td>
                   </tr>
               
                   <tr>
                   <th scope="row">KDV:</th>
                   <th>%18</th>

                   <td>
                                {(this.props.cart.reduce((total, cartItem)=>total+(parseFloat(cartItem.product.unitPrice)*cartItem.quantity),0)*18/100)}

                                </td>
                   </tr>
               

               
                   <tr>
                   <th scope="row">Toplam:</th>
                   <th></th>
                   <td>
                                {this.props.cart.reduce((total, cartItem)=>total+(parseFloat(cartItem.product.unitPrice)*cartItem.quantity),0)+
                                (this.props.cart.reduce((total, cartItem)=>total+(parseFloat(cartItem.product.unitPrice)*cartItem.quantity),0)*18/100)}
                                </td>
                                <td></td>
                                <th></th>
                   </tr>
               </thead>

                
                    
                    
                    
                </Table>
                
                

                
            </div>
        )
    }
    


}


function mapStateToProps(state) {
    return {
        cart: state.cartReducer,
        

    }
}

  
    

function mapDispatchToProps(dispatch) {
    return {
        actions: {
            removeFromCart: bindActionCreators(cartActions.removeFromCart, dispatch),
            

        }

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CartDetail);
