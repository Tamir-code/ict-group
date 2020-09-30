import React, { useEffect } from 'react';
import gsap, { TimelineMax } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import './InfoPage.scss'
import { companyLogo } from '../../Data/Data';
gsap.registerPlugin(ScrollTrigger);
const InfoPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    useEffect(() => {
        let sec4 = gsap.timeline({
            scrollTrigger: {
                trigger: ".contentBox",
                scrub: true,
                pin: true,
                start: "center center",
                end: "bottom -100%",
                toggleClass: "active",
                ease: "power2",
                markers: false
            },
        });
        sec4.to('.hero', {scale: 1.5, duration: 1.5})
         
         
    }, []);
    return (
        <section className="infoPage">
            <div className="contentBox">
                <h1 className="hero">Oroltsog baiguullaguud</h1>
            </div>
        </section>
    )
}
export default InfoPage;