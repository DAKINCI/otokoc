import React, { Component } from 'react'
import { connect } from 'react-redux';
import { UncontrolledDropdown, DropdownItem, DropdownMenu, DropdownToggle, NavItem, NavLink, Badge } from 'reactstrap';
import cartReducer from "../../redux/reducers/cartReducer"
import { bindActionCreators } from "redux"
import * as cartActions from "../../redux/actions/cartActions"
import {Link} from "react-router-dom"
import alertify from "alertifyjs"


class CartSummary extends Component {
    removeFromCart(product){
        this.props.actions.removeFromCart(product);
        alertify.error(product.productName + " sepetten silindi")
    
    }
    renderEmpty() {
        return (
            <NavItem>
                <NavLink> Sepetiniz boş </NavLink>
            </NavItem>
        )
    }

   
    renderSummary() {
        return (
            <UncontrolledDropdown
                inNavbar
                nav
            >
                <DropdownToggle caret nav >
                    Sepetiniz
                </DropdownToggle>
                <DropdownMenu right>
                    {
                        this.props.cart.map(cartItem => (
                            <DropdownItem key={cartItem.product.id}> 
                            

                            {cartItem.product.productName} 
                            <Badge color="success"> {cartItem.quantity} </Badge>
                            </DropdownItem>
                        ))
                    }


                    <DropdownItem divider />
                    <DropdownItem><Link to={"./cart/CartDetail"}>
                        Sepete Git</Link>
                    </DropdownItem>
                </DropdownMenu>
            </UncontrolledDropdown>

        );
    }
    render() {
        return (
            <div>
                {
                    this.props.cart.length > 0 ? this.renderSummary() : this.renderEmpty()
                }

            </div>
        );
    }
}
function mapStateToProps(state) {
    return {
        cart: state.cartReducer

    }
}

function mapDispatchToProps(dispatch) {
    return{
        actions:{
            removeFromCart: bindActionCreators(cartActions.removeFromCart, dispatch)
        }

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CartSummary,cartReducer);
