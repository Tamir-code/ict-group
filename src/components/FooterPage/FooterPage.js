import React, { useEffect } from 'react';
import gsap, { TimelineMax } from 'gsap';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import './FooterPage.scss'

const FooterPage = () => {
        return (
            <section className="footerPage">
                <div className="footer-section">
                <div className="container">
                    {/* <div className="footerRow1">
                        <div className="l-row">
                            <h1>Засгийн газрын тохируулагч агентлаг</h1>
                            <h1>
                            Харилцаа холбоо, мэдээллийн технологийн газар
                            </h1>
                        </div>
                        <div className="r-row">
                            <ul>
                                <li>
                                    <Link to="/">Бидний тухай</Link>
                                </li>
                                <li>
                                    <Link to="/">Байгууллагууд</Link>
                                </li>
                                <li>
                                    <Link to="/">Хөтөлбөр</Link>
                                </li>
                            </ul>
                        </div>
                    </div> */}
                    <div className="footerLinks">
                        <div className="gridLinks">
                            <div className="gridWidget">
                                <h1>Email</h1>
                                <p>info@cita.gov.mn</p>
                            </div>

                            <div className="gridWidget text-center">
                                <h1>Хаяг байршил</h1>
                                <p>Монгол улс Улаанбаатар хот 15160, Төв шуудан, Сүхбаатарын талбай</p>
                            </div>
                            <div className="gridWidget text-right">
                                <h1>Холбоо барих</h1>
                                <p>+ (976) 11 330781</p>
                               
                            </div>

                        </div>
                    </div>
                    <div className="copyright">
                        <p>© 2020 ICTEXPO Зохиогчийн эрх хуулиар хамгаалагдсан</p>
    
                    </div>
                </div>
                </div>
            </section>
        )

}
export default FooterPage;