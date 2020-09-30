import React, { useEffect } from 'react';
import gsap, { TimelineMax } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import './CompanyListPage.scss'
import HeaderPage from '../../HeaderPage/HeaderPage';
import { companyList1, companyList2, companyList0 } from './Data';
gsap.registerPlugin(ScrollTrigger);
const CompanyListPage = () => {
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
        <div>

        <section className="companyList">
            <HeaderPage></HeaderPage>
            <div className="page-header">
                <div>
                    
                </div>
                <div className="caption-box">
                    <h2>ICT EXPO 2020</h2>
                    <h1>ОРОЛЦОГЧ БАЙГУУЛЛАГА</h1>
                    <p>
                    Энэ жилийн үзэсгэлэн уламжлалт болон цахим гэсэн хоёр хэлбэрээр зохион байгуулагдана. Нийт 00 байгуулага оролцоно
                    </p>
                </div>
            </div>
            <div className="header-back">
                <div className="back-btn">
                    <svg width="19" height="9" viewBox="0 0 19 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.146446 4.14645C-0.0488148 4.34171 -0.0488148 4.65829 0.146446 4.85355L3.32843 8.03553C3.52369 8.2308 3.84027 8.2308 4.03553 8.03553C4.2308 7.84027 4.2308 7.52369 4.03553 7.32843L1.20711 4.5L4.03553 1.67157C4.2308 1.47631 4.2308 1.15973 4.03553 0.964466C3.84027 0.769204 3.52369 0.769204 3.32843 0.964466L0.146446 4.14645ZM18.5 4L0.5 4V5L18.5 5V4Z" fill="white"></path></svg>
                    <Link to="/">Нүүр хуудас</Link>
                </div>
            </div>
            <div className="grid-container">
                <div className="body-box">
                    <div className="company-title">
                        <h1>
                            Ерөнхий ивээн тэтгэгч
                        </h1>
                    </div>
                <div className="grid-col">
                        {companyList0.map((list, index) => {
                            return(
                                <div className="company-box">
                                    <Link to={list.handle}>
                                    <div className="img-box">
                                    <img src={list.image} alt={list.altText}></img>
                                </div>
                                {/* <div className="title-box">
                                    <h1>{list.name}</h1>
                                </div> */}
                                <div className="more-btn">
                                    <Link to={list.handle}>Танилцуулга</Link>
                                </div>
                                    </Link>
                                </div>
                            )
                        })}

                    </div>
                    </div>
                    <div className="body-box">
                    <div className="company-title">
                        <h1>
                            Ивээн тэтгэгч
                        </h1>
                    </div>
                <div className="grid-col">
                        {companyList1.map((list, index) => {
                            return(
                                <div className="company-box">
                                    <Link to={list.handle}>
                                    <div className="img-box">
                                    <img src={list.image} alt={list.altText}></img>
                                </div>
                                {/* <div className="title-box">
                                    <h1>{list.name}</h1>
                                </div> */}
                                <div className="more-btn">
                                    <Link to={list.handle}>Танилцуулга</Link>
                                </div>
                                    </Link>
                                </div>
                            )
                        })}

                    </div>
                    </div>
                    <div className="body-box">
                    <div className="company-title">
                        <h1>
                            Оролцогч байгууллагууд
                        </h1>
                    </div>
                    <div className="grid-col">
                        {companyList2.map((list, index) => {
                            return(
                                <div className="company-box">
                                    <Link to={list.handle}>
                                    <div className="img-box">
                                    <img src={list.image} alt={list.altText}></img>
                                </div>
                                {/* <div className="title-box">
                                    <h1>{list.name}</h1>
                                </div> */}
                                <div className="more-btn">
                                    <Link to={list.handle}>Танилцуулга</Link>
                                </div>
                                    </Link>
                                </div>
                            )
                        })}

                    </div>
                    </div>
                </div>

        </section>
    
        </div>
    
    )
}
export default CompanyListPage;