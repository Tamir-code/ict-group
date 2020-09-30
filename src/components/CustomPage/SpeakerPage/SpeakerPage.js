import React, { useEffect } from 'react';
import gsap, { TimelineMax } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { speakerList } from '../ProgramPage/Data/Data'
import './SpeakerPage.scss'
gsap.registerPlugin(ScrollTrigger);
const SpeakerPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    useEffect(() => {
        let sec4 = gsap.timeline({
            scrollTrigger: {
                trigger: '#pin-sec1',
                start: 'top top',
                end: 'bottom top',
                scrub: 1.5,
                pin: true,
                markers: false,
            },
        });
        sec4.fromTo('.dfdf',
            {
                y: '0',
                scale: '1',
                duration: 2,

            },
            {
                scale: '1.2',
                y: 100

            });
    }, []);
    return (
        <section className="speakerPage">
            <div className="speaker-grid-col">
                {speakerList.map((list, index) => {
                    return (
                        <div className="col-box">
                            <div className="img-box">
                                <img src={list.image} alt={list.altText}></img>
                            </div>
                            <div className="desk-box">
                                <h1>{list.name}</h1>
                                <span>{list.career}</span>
                                {/* <div className="p-title">
                                    <h4>Сэдэв: </h4>
                                    <p>{list.description}</p>
                                </div> */}
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}
export default SpeakerPage;