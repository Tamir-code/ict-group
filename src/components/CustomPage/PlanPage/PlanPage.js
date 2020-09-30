import React, { useEffect } from 'react';
import gsap, { TimelineMax } from 'gsap';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import './PlanPage.scss'
import { Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
const PlanPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
        return (
            <Element name="test1">
                            <section className="planPage">
                <div className="grid-col">
                    <div className="left-col">
                        <div className="img-box">
                            <img src="http://ictexpo.mn/cdn/hero-12.png"></img>
                        </div>
                    </div>
                    <div className="right-col">
                        <div className="content-box">
                            <h1>ICT EXPO-2020 14 ДЭХ ЖИЛДЭЭ ЗОХИОН БАЙГУУЛНА</h1>
                            <p>
                            Энэ жилийн үзэсгэлэн уламжлалт болон цахим гэсэн хоёр хэлбэрээр зохион байгуулагдана
                            </p>
                            <Link to="" className="more-btn">Хөтөлбөр</Link>
                        </div>
                    </div>
                </div>
            </section>
            </Element>
        )
}
export default PlanPage;