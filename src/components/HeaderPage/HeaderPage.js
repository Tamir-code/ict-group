import React, { useEffect } from 'react';
import gsap, { TimelineMax } from 'gsap';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import './HeaderPage.scss'

const HeaderPage = () => {
        return (
            <section className="headerPage">
                <div className="logoWidget">
                    <img src="http://ictexpo.mn/cdn/logo.00e482bd.svg"></img>
                </div>
                <div className="burgerMenu">

                    <div className="menuGrid">
                        <ul>
                            <li>
                                <Link to="/HomePage">ICT Expo</Link>
                            </li>
                            <li>
                                <Link to="/CompanyListPage">Байгууллагууд</Link>
                            </li>
                            <li>
                                <Link to="/ProgramPage">Хөтөлбөр</Link>
                            </li>
                            <li>
                                <a href="http://www.uptech.mn/vr_projects/turshilt/Misheel.html?fbclid=IwAR3NfB7nExF7ED5mliQaklauTEscARkcAS80yziw4fINQt7OWDlNRxiZXwo">VR EXPO</a>
                            </li>
                        </ul>
                    </div>
                    <div className="burgerMenuWrap">
                        <div className="menuBox">
                            <div className="burgerBox">
                            <div className="menuInner"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )

}
export default HeaderPage;