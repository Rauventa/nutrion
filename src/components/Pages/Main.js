import React from 'react';
import test1 from '../../images/test1.png'
import test2 from '../../images/test2.png'
import test3 from '../../images/test3.png'
import mix from '../../images/mix.png'
import box from '../../images/box.png'
import onepack from '../../images/onepack.png'
import insta1 from '../../images/insta1.png'
import insta2 from '../../images/insta2.png'
import insta3 from '../../images/insta3.png'
import insta4 from '../../images/insta4.png'
import insta5 from '../../images/insta5.png'
import Footer from "../Root/Footer";
import Header from "../Root/Header";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

const Main = () => {
    SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
    return (
        <div className={'Main'}>
            <header>
                <div className="wrap">
                    <Header />
                    <section className="hero flex" data-verticalheading="NEUTRAL">
                        <div className="item textcontent wide">
                            <div className="inner --maxwfixed">
                                <h1>Neutral taste and no smell</h1>
                                <p>
                                    <small className="--accent">mix with anything</small>
                                </p>
                                <p>
                                    ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                </p>
                                <p>
                                    <a href="/">learn more</a>
                                </p>
                            </div>
                        </div>
                        <div className="item foto">
                            <Swiper
                                navigation={{
                                    prevEl: '.prev',
                                    nextEl: '.next'
                                }}
                                pagination={{
                                    el: '.pagination',
                                    renderBullet: function (index, className) {
                                        return (
                                            // eslint-disable-next-line no-useless-concat
                                            '<div class="' + 'control ' + '">' +
                                            // eslint-disable-next-line no-useless-concat
                                            '<span class="'+ className + ' bullet' +'"></span>' +
                                            '</div>'
                                        )
                                    }
                                }}
                            >
                                <SwiperSlide>
                                    <img src={box}  alt={'img'}/>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src={box}  alt={'img'}/>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src={box}  alt={'img'}/>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src={box}  alt={'img'}/>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src={box}  alt={'img'}/>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                        <div className="item slidercontrols">
                            <div className={'pagination'}></div>
                            <div className="sliderarrows">
                                <svg className="--back icon prev" width="1px" height="1px">
                                    <use href="#sliderarrow"/>
                                </svg>
                                <svg className="icon next" width="1px" height="1px">
                                    <use href="#sliderarrow"/>
                                </svg>
                            </div>
                        </div>
                    </section>
                </div>
                <section className="productlist">
                    <svg className="line" width="1px" height="1px">
                        <use href="#line"/>
                    </svg>
                    <div className="wrap">
                        <div className="flex productlist">
                            <div className="item product">
                                <h2>3GO HydraMax</h2>
                                <div className="flex productdesc">
                                    <div className="item text">
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                            tempor
                                        </p>
                                        <p>
                                            <span className="price">€38.99</span>
                                        </p>
                                        <p>
                                            <a href="/">buy now</a>
                                        </p>
                                    </div>
                                    <div className="item foto">
                                        <img src={onepack}  alt={'img'}/>
                                    </div>
                                </div>
                            </div>
                            <div className="item product">
                                <h2>3GO Carbofuel</h2>
                                <div className="flex productdesc">
                                    <div className="item text">
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                            tempor
                                        </p>
                                        <p>
                                            <span className="price">€38.99</span>
                                        </p>
                                        <p>
                                            <a href="/">buy now</a>
                                        </p>
                                    </div>
                                    <div className="item foto">
                                        <img src={onepack}  alt={'img'}/>
                                    </div>
                                </div>
                            </div>
                            <div className="item product">
                                <h2>3GO Protein</h2>
                                <div className="flex productdesc">
                                    <div className="item text">
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                            tempor
                                        </p>
                                        <p>
                                            <span className="price">€38.99</span>
                                        </p>
                                        <p>
                                            <a href="/">buy now</a>
                                        </p>
                                    </div>
                                    <div className="item foto">
                                        <img src={onepack}  alt={'img'}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </header>
            <section className="mixsamples">
                <div className="wrap">
                    <div className="flex mixcontent">
                        <div className="item wide text">
                            <h1>Mix 3Go products with anything</h1>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                exercitation.
                            </p>
                            <p>
                                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                                reprehenderit iiat nulla pariatur.
                            </p>
                        </div>
                        <div className="item foto">
                            <img src={mix}  alt={'img'}/>
                        </div>
                    </div>
                </div>
            </section>
            <section className="fullvideo">
                <div className="embed-container">
                    {/* eslint-disable-next-line jsx-a11y/iframe-has-title */}
                    <iframe
                        width="560" height="315" src="https://www.youtube.com/embed/1-eh9GLOZF8" frameBorder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                </div>
            </section>
            <section className="testimonials">
                <div className="wrap">
                    <h1>Testimonials</h1>
                    <div className="reviewscontainer">
                        <div className="flex reviews">
                            <div className="item foto">
                                <img src={test1} alt={'img'}/>
                            </div>
                            <div className="item text wide">
                                <p>
                                    <small className="date">
                                        <svg className="icon" width="1px" height="1px">
                                            <use href="#time"/>
                                        </svg>
                                        May 15, 2020
                                    </small>
                                    <br/>
                                    <b>Shane Pratt</b>
                                </p>
                                <p>
                                    <i>
                                        “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                        exercitation.”
                                    </i>
                                </p>
                            </div>
                        </div>
                        <div className="flex reviews">
                            <div className="item foto">
                                <img src={test2} alt={'img'}/>
                            </div>
                            <div className="item text wide">
                                <p>
                                    <small className="date">
                                        <svg className="icon" width="1px" height="1px">
                                            <use href="#time"/>
                                        </svg>
                                        May 15, 2020
                                    </small>
                                    <br/>
                                    <b>Steve Jones</b>
                                </p>
                                <p>
                                    <i>
                                        “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                        exercitation.”
                                    </i>
                                </p>
                            </div>
                        </div>
                        <div className="flex reviews">
                            <div className="item foto">
                                <img src={test3} alt={'img'}/>
                            </div>
                            <div className="item text wide">
                                <p>
                                    <small className="date">
                                        <svg className="icon" width="1px" height="1px">
                                            <use href="#time"/>
                                        </svg>
                                        May 15, 2020
                                    </small>
                                    <br/>
                                    <b>Martin Webb</b>
                                </p>
                                <p>
                                    <i>
                                        “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                        exercitation.”
                                    </i>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="instafeed">
                <div className="wrap">
                    <h1>Instagram</h1>
                    <div className="grid-container">
                        <div className="area3">
                            <img src={insta1} alt={'insta1'}/>
                        </div>
                        <div className="area4">
                            <img src={insta2} alt={'insta2'}/>
                        </div>
                        <div className="area-6">
                            <img src={insta3} alt={'insta3'}/>
                        </div>
                        <div className="area1">
                            <img src={insta4} alt={'insta4'}/>
                        </div>
                        <div className="area2">
                            <img src={insta5} alt={'insta5'}/>
                        </div>
                        <div className="area5">
                            <img src={insta5} alt={'insta5'}/>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
};

export default Main;