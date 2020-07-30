import React from 'react'
import logo from "../../images/logo.png";
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";
import {addToCart} from "../../store/actions/mainActions";

const Header = props => {
    return (
        <section className="flex topbar">
            <div className="item logobox wide">
                <div className="logo">
                    <NavLink to={'/'} exact>
                        <img src={logo} alt={'img'}/>
                    </NavLink>
                </div>
            </div>
            <div className="item menubox">
                <ul className="nav">
                    <li>
                        <NavLink className="--active" to={'/'} exact>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/'} >FAQ</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/'} >Delivery</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/shop'}>Shop</NavLink>
                    </li>
                    <li style={{position: 'relative'}}>
                        <NavLink className="boxlink" to={'/cart'}>
                            <svg className="icon" width="1px" height="1px">
                                <use href="#cart"/>
                            </svg>
                        </NavLink>
                        {props.cart.length !== 0 ?
                            <div className={'badge'}>
                                <small>{props.cart.length}</small>
                            </div> :
                            null
                        }
                    </li>
                </ul>
            </div>
            <div className="item mobilemenu">
                <div id="hamburger" tabIndex="1" role="button">
                    <span/>
                    <span/>
                    <span/>
                </div>
            </div>
        </section>
    )
};

function mapStateToProps(state) {
    return {
        cart: state.mainReducer.cart
    }
}
function mapDispatchToProps(dispatch) {
    return {
        addToCart: () => dispatch(addToCart())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);