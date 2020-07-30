import React, {useEffect, useState} from 'react';
import Footer from "../Root/Footer"
import Header from "../Root/Header";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import CartItem from "./CartItem";

const Cart = props => {

    const [total, setTotal] = useState(null);

    useEffect(() => {
        const total =
            props.cart.reduce(function(a,b) {
                return Number(a + (b.count * b.price))
            }, 0);

        setTotal(total)
    }, [props.cart]);

    const pushData = () => {
        props.history.push({
            pathname: '/cart/information',
            state: {
                cart: props.cart,
                total
            }
        });
    };

    return (
        <div className={'Cart'}>
            <section className="productinfo --cart">
                <div className="wrap">
                    <Header />
                    <section className="hero flex" data-verticalheading="CART">
                        <div className="item textcontent wide">
                            <div className="inner">
                                <h1>PRODUCT CART</h1>
                                <p>
                                    <small className="--accent">mix with anything</small>
                                </p>
                                {props.cart.length !== 0 ?
                                    <div>
                                        {props.cart.map((item, index) => {
                                            return (
                                                <CartItem
                                                    key={index}
                                                    name={item.name}
                                                    count={item.count}
                                                    price={item.price}
                                                    contentFirst={item.contentFirst}
                                                    contentSecond={item.contentSecond}
                                                />
                                            )
                                        })}
                                        <div className="flex productcart">
                                            <div className="item foto">
                                                <svg className="icon truck" width="1px" height="1px">
                                                    <use href="#truck"/>
                                                </svg>
                                            </div>
                                            <div className="item wide">
                                                <h2>Delivery</h2>
                                                <div className="orderline flex">
                                                    <div className="item wide quant">*In all EU countries</div>
                                                    <div className="item price">€5</div>
                                                </div>
                                            </div>
                                        </div>
                                        <hr/>
                                        <div className="flex productcart">
                                            <div className="item wide">
                                                <div className="orderline flex">
                                                    <div className="item wide quant">
                                                        <h2>Subtotal</h2>
                                                    </div>
                                                    <div className="item price">
                                                        <h2>€{total + 5}</h2>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <button className="button --box" onClick={pushData}>Check Out</button>
                                    </div>
                                    :
                                    <div style={{minHeight: '100vh'}}>
                                        <p>Still nothing here</p>
                                    </div>
                                }
                            </div>
                        </div>
                    </section>
                </div>
            </section>
            <Footer />
        </div>
    )
};

function mapStateToProps(state) {
    return {
        cart: state.mainReducer.cart
    }
}

export default withRouter(connect(mapStateToProps)(Cart));