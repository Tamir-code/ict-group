import React, { useEffect } from 'react';
import gsap, { TimelineMax } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import "swiper/css/swiper.css";
import Swiper from "react-id-swiper";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import './NewsPage.scss'
import { newsList } from './Data';
gsap.registerPlugin(ScrollTrigger);
const NewsPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    //   useEffect(() => {
    //     let sec4 = gsap.timeline({
    //         scrollTrigger: {
    //             trigger: '.df',
    //             start: 'top top',
    //             end: 'bottom top',
    //             scrub: 1.5,
    //             pin: true,
    //             markers: false,
    //         },
    //     });
    //     sec4.fromTo('#newsPage-anim', 
    //         { 
    //             y: 350, 
    //             scale: '1',
    //             duration: 2, 

    //         }, 
    //         { 
    //             scale: '1',
    //             y: 0

    //         });

    // }, []);

    const params = {
        slidesPerView: 1,
        spaceBetween: 0,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    }
    return (
        <section className="newsPage">
            <Swiper
                {...params}
            >
                {newsList.map((list, index) => {
                    return (
                        <div className="grid-col">
                            <div className="right-col">
                                <div className="content-box">
                                    <div className="news-col">
                                        <div className="img-box">
                                            <img src={list.image}></img>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="left-col" id="newsPage-anim">
                                <div className="content-box">
                                    <div className="title">
                                        <h1>{list.title}</h1>
                                    </div>
                                    <p>
                                        {list.subBody}
                                    </p>
                                    <div className="more-btn">
                                        <Link to="/">Цааш үзэх</Link>
                                    </div>
                                </div>
                            </div>


                        </div>
                    )
                })}



            </Swiper>
        </section>
    )
}
export default NewsPage;