import React, { useEffect } from 'react';
import gsap, { TimelineMax, TweenMax } from 'gsap';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import './SliderPage.scss';
import Iframe from 'react-iframe'
const SliderPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
      useEffect(() => {
          TweenMax.to('.home-svg', 4, {opacity: '0', delay:3})
    }, []);
        return (
            <section className="homeSlider">
              <Iframe src="https://www.theasys.io/viewer/k5SP32u5ZxZ8eawJBVrBl4sXDP6QK6/">

              </Iframe>
              <div className="home-svg">
                <img src="http://ictexpo.mn/cdn/MouseGuide2_1601037158.svg"></img>
              </div>
            </section>
        )

}
export default SliderPage;