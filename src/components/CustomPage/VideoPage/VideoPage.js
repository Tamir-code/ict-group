import React, { useEffect } from 'react';
import gsap, { TimelineMax, Timeline } from 'gsap';
import ParticlesBg from "particles-bg";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import './VideoPage.scss';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
const VideoPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    let config = {
        num: [4, 7],
        rps: 0.1,
        radius: [5, 40],
        life: [1.5, 3],
        v: [2, 3],
        tha: [-40, 40],
        alpha: [1.6, 0],
        scale: [.1, 0.4],
        position: "all",
        color: ["random", "#b70a62"],
        cross: "dead",
        // emitter: "follow",
        random: 15
      };

    useEffect(() => {

      



        let sec4 = gsap.timeline({
            scrollTrigger: {
                trigger: '.videoPage',
                start: 'top top',
                end: 'bottom top',
                scrub: 1.5,
                pin: true,
                markers: false,
            },
        });
        sec4.fromTo('.caption-box', 
            { y: '100', duration: 2, opacity: 0 }, 
            { y: '0', opacity: 1 });

        gsap.set(".video-box", {xPercent: -50, yPercent: -50});
        gsap.to(".video-box", {scale: 0.6667, opacity: 1.9, scrollTrigger: {
        trigger: ".videoPage",
        pin: ".videoPage",
        scrub: true
}})
    }, []);
    return (
        <section className="videoPage">
            <div className="video-box">
                <video autoPlay muted loop>
                    <source src="http://ictexpo.mn/cdn/VideoTemp.mp4" type="video/mp4">
                    </source>
                </video>
            </div>
            <div className="caption-box">
                <h1>ICT EXPO 2020-г ЗАСГИЙН ГАЗРЫН ТОХИРУУЛАГЧ АГЕНТЛАГ ХАРИЛЦАА ХОЛБОО, МЭДЭЭЛЛИЙН ТЕХНОЛОГИЙН ГАЗАР 14 ДЭХ ЖИЛДЭЭ ЗОХИОН БАЙГУУЛАХ ГЭЖ БАЙНА.</h1>

            </div>
            {/* <ParticlesBg type="custom" config={config} bg={true} /> */}
        </section>
    )
}
export default VideoPage;