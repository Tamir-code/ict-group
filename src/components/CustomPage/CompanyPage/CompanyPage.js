import React, { useEffect } from 'react';
import gsap, { TimelineMax } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import './CompanyPage.scss'
import { companyLogo } from '../../Data/Data';
import Iframe from 'react-iframe';
import { logoList } from './Data';
gsap.registerPlugin(ScrollTrigger);
const CompanyPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    useEffect(() => {
        gsap.to(".x1", { x: (i) => 6 * i, repeat: -1, yoyo: true, duration: 6 });
    }, []);
    return (
        <section className="companyPage">
            <div className="grid-col">
                <div className="top-box">
                    {logoList.map((list, index) => {
                        return (
                            <div className="img-box">
                                <img className="x1" src={list.image}></img>
                            </div>
                        )
                    })}
                </div>
                <div className="content-box">
                    <h1>Оролцогч байгууллага</h1>
                    <p>
                        Энэ жилийн үзэсгэлэн уламжлалт болон цахим гэсэн хоёр хэлбэрээр зохион байгуулагдана
                        </p>
                    <div className="more-btn">
                        <Link to="/CompanyListPage">Байгууллагууд</Link>
                    </div>
                </div>




            </div>
        </section>
    )
}
export default CompanyPage;