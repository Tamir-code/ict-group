import React, { useEffect, useState } from 'react';
import gsap, { TimelineMax } from 'gsap';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './ComingPage.scss'
import BgPage from './BgPage';
import CountPage from './CountPage'

import RentPage from './RentPage';
const ComingPage = (props) => {
    const {
        buttonLabel,
        className
    } = props;

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);
    useEffect(() => {
        gsap.timeline()
            .from(
                '.logo-center',
                1,
                {
                    y: 10,
                    delay: 1,
                    opacity: 0,
                },
            )


            .from(
                '.description h1',
                1,
                {
                    y: 40,
                    delay: 1,
                    opacity: 0,
                },

            )
    }, []);


    return (
        <section className="coming-soon">
            <div className="container-fluid p-0">
                <div className="b1">
                    <div className="b1-left">
                        <a href="https://www.cita.gov.mn/" target="_blank">
                            <img src={require('../assets/w-logo.png')}></img>
                        </a>
                    </div>
                    <div className="b1-right">
                        <div className="c-btn">
                            {/* <Button color="danger" onClick={toggle}>Талбай захиалга</Button> */}
                            <Button color="danger" href="https://ictexpo.mn/rent/">Талбай захиалга</Button>

                        </div>
                    </div>
                </div>
                <div className="header">
                    <div className='left-sec'>
                        <div className="logo-center">
                            <img src={require('../assets/logo.svg')}></img>
                        </div>
                    </div>
                    {/* <div className="right-sec">
                            <div className="c-btn">
                                <a href="">
                                    Талбай захиалга
                                </a>
                            </div>
                        </div> */}
                </div>


                <div className="description">
                    <div className="container">
                        <div className="row align-items-center justify-content-center">
                            <div className="col-ms-12 col-lg-8">

                                <h1>
                                    ICT-EXPO-2020
                            10-р сарын 09-11-нд Мишээл экспо төвд 14 дэх жилдээ зохион байгуулагдах гэж байна</h1>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="count-section">
                    <div className="container-m">
                        {/* <CountPage3 /> */}
                        <CountPage></CountPage>
               
                        <div className="plan-pop">

                            <Modal isOpen={modal} toggle={toggle} className={className}>
                                <ModalHeader toggle={toggle}>ТАЛБАЙ ЗАХИАЛГА</ModalHeader>
                                <ModalBody>
                                    {/* <CountPage2 /> */}
                                    <h1 style={{textAlign: 'center', textTransform: 'uppercase', fontSize: '18px'}}>Талбайн захиалга авч эхлэх хугацаа: <br></br>2020 оны 09-р сарын 23-ны 10 цаг</h1>
                                    <div className="plan-img-box">
                                    <img src="http://ictexpo.mn/cdn/expo20%20plan.svg"></img>
                                    </div>
                                </ModalBody>
                                {/* <ModalFooter>
                                    <Button color="primary" onClick={toggle}>Do Something</Button>{' '}
                                    <Button color="secondary" onClick={toggle}>Cancel</Button>
                                </ModalFooter> */}
                            </Modal>
                        </div>
                    </div>
                </div>
                {/* <BgPage></BgPage> */}
            </div>
        </section>
    )

}

export default ComingPage