import React from 'react'
import Footer from "../Root/Footer";
import Header from "../Root/Header";
import {NavLink, withRouter} from "react-router-dom";

const DrowUp = props => {

    const data = props.location.state;

    return (
        <div className={'DrowUp'}>
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
                                <div className="orderform">
                                    <h2>Contact information</h2>
                                    <div className="row">
                                        <div className="inputbox">
                                            <input type="text" />
                                            <label>Email</label>
                                        </div>
                                        <p>
                                            <input type="checkbox" />
                                            <label>Keep me up to date on news and exclusive offers</label>
                                        </p>
                                    </div>
                                    <h2>Shipping address</h2>
                                    <div className="row flex">
                                        <div className="item inputbox wide">
                                            <input type="text" />
                                            <label>First name</label>
                                        </div>
                                        <div className="item inputbox wide">
                                            <input type="text" />
                                            <label>Last name</label>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="inputbox">
                                            <input type="text" />
                                            <label>Address</label>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="inputbox">
                                            <input type="text" />
                                            <label>City</label>
                                        </div>
                                    </div>
                                    <div className="row flex">
                                        <div className="item inputbox wide">
                                            <input type="text" />
                                            <label>Country/Region</label>
                                        </div>
                                        <div className="item inputbox wide">
                                            <input type="text" />
                                            <label>Postcode</label>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="inputbox">
                                            <input type="text" />
                                            <label>Phone</label>
                                        </div>
                                    </div>
                                    <div className="row flex">
                                        <div className="item inputbox">
                                            <button className="button">Continue to payment</button>
                                        </div>
                                        <div className="item wide backlink">'
                                            <NavLink to={'/cart'}>Back to cart</NavLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="item summary">
                            <h2>
                                <span>Order summary</span>
                            </h2>
                            <table>
                                {data.cart.map((item, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{item.name}</td>
                                            <td className="count">
                                                <span>x</span>
                                                {item.count}
                                            </td>
                                            <td>€{item.price}</td>
                                        </tr>
                                    )
                                })}
                            </table>
                            <hr />
                                <div className="flex totalrow">
                                    <div className="item wide">
                                        <h2 className="--text-left">Total</h2>
                                    </div>
                                    <div className="item">
                                        <h2>€{data.total + 5}</h2>
                                    </div>
                                </div>
                        </div>
                    </section>
                </div>
            </section>
            <Footer />
        </div>
    )
};

export default withRouter(DrowUp);