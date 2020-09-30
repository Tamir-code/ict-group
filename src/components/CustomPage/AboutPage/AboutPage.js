import React, { useEffect } from 'react';
import gsap, { TimelineMax } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import './AboutPage.scss'
import { companyLogo } from '../../Data/Data';
gsap.registerPlugin(ScrollTrigger);
const AboutPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    useEffect(() => {

        // let sec4 = gsap.timeline({
        //     scrollTrigger: {
        //         trigger: '.aboutPage',
        //         start: 'top top',
        //         end: 'bottom bottom',
        //         scrub: 3.5,
        //         pin: true,
        //         markers: false,
        //     },
        // });
        // sec4.to('#img-anim1', {y: -100})



    }, []);
    return (
        <section className="aboutPage">
            <div className="expo1">
                <div className="grid-col">
                    <div className="left-col">
                        <div className="img-box" id="img-anim1">
                            <img src="http://ictexpo.mn/cdn/_RJ_9136.jpg"></img>
                        </div>
                    </div>
                    <div className="right-col">
                        <div className="content-box">
                            <span>ICT EXPO 2020  Хөтөлбөр</span>
                            <div className="title-box">
                                <h1>ICT EXPO</h1>
                                <h1 style={{ color: 'rgb(184,10,97)', marginLeft: '15px' }}>2020</h1>
                            </div>
                            <p>
                                Харилцаа холбоо, мэдээллийн технологийн салбарын хамгийн том үзэсгэлэн Ict еxpo-2020 оны 10-р Сарын 9-11 өдрүүдэд зохион байгуулагдана.
                        </p>
                            <div className="more-btn">
                                <Link to="/ProgramPage">Хөтөлбөр</Link>
                            </div>

                        </div>


                    </div>
                </div>
            </div>

            <div className="expo2">
                <div className="grid-col">
                    <div className="left-col">
                    <div className="content-box">
                            <span>ICT EXPO 2020 FORUM  Хөтөлбөр</span>
                            <div className="title-box">
                                <h1>ICT EXPO FORUM <span>2020</span></h1>
  
                            </div>
                            <p>
                                Харилцаа холбоо, мэдээллийн технологийн салбарын хамгийн том үзэсгэлэн Ict еxpo-2020 оны 10-р Сарын 9-11 өдрүүдэд зохион байгуулагдана.
                            </p>

                        </div>
                    </div>
                    <div className="right-col">
                    <div className="img-box" id="img-anim1">
                        <video autoPlay muted loop>
                        <source src="http://ictexpo.mn/cdn/VideoTemp.mp4" type="video/mp4">
                        </source>
                        </video>
                        </div>



                    </div>
                </div>
            </div>

        </section>
    )
}
export default AboutPage;