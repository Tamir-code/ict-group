import React, { useEffect } from 'react';
import gsap, { TimelineMax } from 'gsap';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './HomePage.scss'
import FooterPage from '../FooterPage/FooterPage';
import HeaderPage from '../HeaderPage/HeaderPage';
import HomeSlider from './SliderPage/SliderPage';
import NewsPage from '../CustomPage/NewsPage/NewsPage'
import PlanPage from '../CustomPage/PlanPage/PlanPage';
import CompanyPage from '../CustomPage/CompanyPage/CompanyPage';
import VideoPage from '../CustomPage/VideoPage/VideoPage';
import AboutPage from '../CustomPage/AboutPage/AboutPage';
import InfoPage from '../CustomPage/InfoPage/InfoPage';
import SpeakerPage from '../CustomPage/SpeakerPage/SpeakerPage'
import { Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
gsap.registerPlugin(ScrollTrigger);
const HomePage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    useEffect(() => {

        let speak11 = gsap.timeline({
            scrollTrigger: {
                trigger: '.video-desk',
                start: 'top bottom',
                end: 'bottom center', 
                scrub: true,
                markers: false,
            },
        });
        speak11.fromTo('.tt-box h1', 
        {
            x: "2000px",
            duration: 2
        },
        {
            x: "-100px"
        }
        )



    }, []);
    return (
        <section className="mainPage">
            <HeaderPage />
            <div className="homePage">
                <HomeSlider />
                <AboutPage />
                <div className="home-speaker" id="home-speaker-pin">
                    <div className="top-box" id="title-anim9">
                        <h1>SPEAKERS</h1>
                        <p>
                            2020 оны тренд технологийн сэдвээр хэлэлцүүлэг болно. Илтгэгчид болон спонсор байгууллагын удирдлагууд оролцоно
                        </p>
                    </div>
                    <SpeakerPage />
                </div>
                <div id="home-company-anim">
                    <CompanyPage />
                </div>
                <NewsPage />
                {/* <InfoPage /> */}
                {/* <PlanPage /> */}
                {/* <div className="video-desk">
                    <div className="tt-box">
                    <h1>ICT EXPO 2020</h1>
                    <h1></h1>
                    </div>
                </div> */}
                <VideoPage />
                <section id="section05" class="scroll-home">
                    <Link to="test1" smooth={true} duration={1000}><span></span></Link>
                </section>
            </div>
            <FooterPage />

        </section>
    )

}
export default HomePage;