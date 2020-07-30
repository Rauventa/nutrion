import React from 'react'
import Header from "../Root/Header";
import Footer from "../Root/Footer";
import box from '../../images/box.png';
import onepack from '../../images/onepack.png';
import {withRouter} from "react-router-dom";
import CatalogItem from "./CatalogItem";

const Catalog = () => {

    const items = [
        {
            name: '3GO PROTEIN',
            prefix: '--protein',
            price: 38.99,
            contentFirst: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            contentSecond: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        },
        {
            name: '3GO HYDRAMAX',
            prefix: '--hydramax',
            price: 38.99,
            contentFirst: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            contentSecond: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        },
        {
            name: '3GO CARBOFUEL',
            prefix: '--carbofuel',
            price: 38.99,
            contentFirst: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            contentSecond: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        }
    ];

    return (
        <div className={'Catalog'}>
            <section className={`productinfo --hydramax`}>
                <div className="wrap">
                    <Header />
                    {items.map((item, index) => {
                        return (
                            <section className="hero flex" data-verticalheading="PRODUCT" key={index}>
                                <div className="item textcontent wide">
                                    <div className="inner">
                                        <h1>{item.name}</h1>
                                        <p>
                                            <small className="--accent">mix with anything</small>
                                        </p>
                                        <div className="flex productpresentation">
                                            <div className="item foto">
                                                <img src={box} alt={'img'} />
                                            </div>
                                            <div className="item foto">
                                                <img src={onepack} alt={'img'}/>
                                            </div>
                                            <div className="item wide">
                                                <p>{item.contentFirst}</p>
                                                <p>{item.contentSecond}</p>
                                            </div>
                                        </div>
                                        <CatalogItem
                                            name={item.name}
                                            price={item.price}
                                            contentFirst={item.contentFirst}
                                            contentSecond={item.contentSecond}
                                        />
                                    </div>
                                </div>
                                <div className="item ingredients">
                                    <h2>
                                        <span>ingredients</span>
                                    </h2>
                                    <table>
                                        <tr>
                                            <td>Water</td>
                                            <td>3%</td>
                                        </tr>
                                        <tr>
                                            <td>Calcium Carbonate</td>
                                            <td>3%</td>
                                        </tr>
                                        <tr>
                                            <td>Gluconic Acid</td>
                                            <td>3%</td>
                                        </tr>
                                        <tr>
                                            <td>Water</td>
                                            <td>3%</td>
                                        </tr>
                                        <tr>
                                            <td>Sodium Alginate</td>
                                            <td>3%</td>
                                        </tr>
                                        <tr>
                                            <td>Water</td>
                                            <td>3%</td>
                                        </tr>
                                        <tr>
                                            <td>Caffeine</td>
                                            <td>3%</td>
                                        </tr>
                                        <tr>
                                            <td>Water</td>
                                            <td>3%</td>
                                        </tr>
                                        <tr>
                                            <td>Caffeine</td>
                                            <td>3%</td>
                                        </tr>
                                    </table>
                                </div>
                            </section>
                        )
                    })}
                </div>
            </section>
            <Footer />
        </div>
    )
};

export default withRouter(Catalog);