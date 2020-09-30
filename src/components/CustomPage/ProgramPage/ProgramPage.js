import React, { useEffect } from 'react';
import gsap, { TimelineMax } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import './ProgramPage.scss';
import HeaderPage from '../../HeaderPage/HeaderPage';
import SpeakerPage from '../SpeakerPage/SpeakerPage';
import { programList } from './Data/Data';
import Iframe from 'react-iframe'
gsap.registerPlugin(ScrollTrigger);
const ProgramPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    useEffect(() => {

        gsap.timeline()
            .from(
                '#title-anim1',
                1,
                {
                    y: 100,
                    delay: 1,
                    opacity: 0,
                },
            )



        let sec5 = gsap.timeline({
            scrollTrigger: {
                trigger: '.page-header',
                start: 'center center',
                end: 'bottom top',
                scrub: 1.5,
                markers: false,
            },
        });
        sec5.fromTo('#title-anim1',
            { opacity: 1, scale: 1, y: 0 },
            { opacity: 0.5, scale: 1.1, duration: 1, y: -70, stagger: 0.2 },
        )

        let sec6 = gsap.timeline({
            scrollTrigger: {
                trigger: '.r-sec1',
                start: 'center center',
                end: 'bottom top',
                scrub: 1.5,
                pin: true,
                markers: false,
            },
        });
        sec6.fromTo('#img-anim11',
            { opacity: 1, scale: 1, y: 0 },
            { opacity: 0.5, scale: 1.1, duration: 1, y: 0, stagger: 0.2 },
        )
        let sec7 = gsap.timeline({
            scrollTrigger: {
                trigger: '#r-sec1-id',
                start: 'center center',
                end: 'bottom top',
                scrub: 1.5,
                pin: true,
                markers: false,
            },
        });
        sec7.fromTo('#img-anim11',
            { opacity: 1, scale: 1, y: 0 },
            { opacity: 0.5, scale: 1.1, duration: 1, y: 0, stagger: 0.2 },
        )

    }, []);
    return (
        <section className="programPage">
            <HeaderPage></HeaderPage>
            <div className="page-header">
            <video autoPlay muted loop>
                    <source src="http://ictexpo.mn/cdn/Hutulburardtal.mp4" type="video/mp4">
                    </source>
                </video>
                {/* <Iframe src='https://www.theasys.io/viewer/fGFPZQsKdO50hHUMOGtaXBsRzAnn61/'></Iframe> */}
                <div className="caption-box">
                    <h2>ICT EXPO 2020</h2>
                    <h1>ICT EXPO 2020 ХӨТӨЛБӨР</h1>
                    <p>
                    Энэ жилийн үзэсгэлэн уламжлалт болон цахим гэсэн хоёр хэлбэрээр зохион байгуулагдана.
                    </p>
                </div>
            </div>
            <div className="header-back">
                <div className="back-btn">
                    <svg width="19" height="9" viewBox="0 0 19 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.146446 4.14645C-0.0488148 4.34171 -0.0488148 4.65829 0.146446 4.85355L3.32843 8.03553C3.52369 8.2308 3.84027 8.2308 4.03553 8.03553C4.2308 7.84027 4.2308 7.52369 4.03553 7.32843L1.20711 4.5L4.03553 1.67157C4.2308 1.47631 4.2308 1.15973 4.03553 0.964466C3.84027 0.769204 3.52369 0.769204 3.32843 0.964466L0.146446 4.14645ZM18.5 4L0.5 4V5L18.5 5V4Z" fill="white"></path></svg>
                    <Link to="/">Нүүр хуудас</Link>
                </div>
                {/* <div className="back-btn">
                    <Link to="/CompanyListPage">Байгууллагууд</Link>
                </div> */}
            </div>

            <div className="grid-container">
                <div className="body-box">
                    <div className="grid-col" id="grid-pin1">
                        <div className="l-sec">
                            <div className="sec1">
                                <div className="logo-box">
                                    <img src=""></img>
                                    <p>“ЦАХИМ ҮНДЭСТЭН” ХЭЛЭЛЦҮҮЛЭГ</p>
                                    <p>
                                    Нийгэм эдийн засгийн салбар хоорондын уялдаа холбоог бодлого төлөвлөлт, технологи, түншлэлээр хангах, үндэсний цахим шилжилт, мэдээллийн технологид суурилсан инноваци шингэсэн бүтээгдэхүүн үйлчилгээгээр эдийн засгийн өсөлтийг дэмжих чиглэлээр хэлэлцэх.
                                    </p>
                                </div>
                                <div className="desc-box">
              
                                    {programList.map((list, index) => {
                                        return (
                                            <div className="desc-widget">
                                                <div className="w-box">
                                                    <div className="event-time">
                                                        <p>{list.startDate} - {list.endDate}</p>
                                                    </div>
                                                </div>
                                                <div className="w-box">
                                                    <div className="w-box-c">
                                                    <h1>{list.title}</h1>
                                                    <p>{list.description} </p>
                                                    </div>
                                                </div>
                                                <div className="w-box">
                                                    <div className="w-box-layout">
                                                    <div className="w-img-box">
                                                        <img src={list.image}></img>
                                                    </div>
                                                    <div className="w-text-box">
                                                        <h1>{list.name}</h1>
                                                        <p>{list.career} </p>
                                                    </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>

                            </div>
                            <div className="sec2">
                                <div className="title">
                                    <h1>Илтгэгчид</h1>
                                </div>
                                <SpeakerPage />
                            </div>


                        </div>
                        <div className="r-sec">
                            <div className="r-sec1">
                                <div className="img-box">
                                    <img id="img-anim11" src="http://ictexpo.mn/cdn/crafting-creative-culture-jeff-veen-mtpcon.jpg"></img>
                                </div>
                                <div className="r-sec-title">
                                    <h1>ICT FORUM ХӨТӨЛБӨР</h1>
                                </div>

                            </div>

                        </div>
                    </div>



                    <div className="grid-col">
                        <div className="r-sec">
                            <div className="r-sec1" id="r-sec1-id">
                                <div className="img-box">
                                    <img src="http://ictexpo.mn/cdn/crafting-creative-culture-jeff-veen-mtpcon.jpg"></img>
                                </div>
                                <div className="r-sec-title">
                                    <h1 className="text-right">ICT EXPO ХӨТӨЛБӨР</h1>
                                </div>

                            </div>

                        </div>
                        <div className="l-sec">
                            <div className="sec1">
                                <div className="logo-box">
                                    <img src=""></img>
                                    <p>UP Tech ХХК нь Virtual Reality буюу Хиймэл бодит орчин технологийг хөгжүүлж, нийгэмд олон төрлийн шийдэл санал болгож, үнэ цэнэ бүтээх зорилготойгоор үйл ажиллагаагаа явуулж байна. Манай байгууллага нь Монголын соёл, бизнесүүдийг олон улсад VR технологоор дамжуулан бодитоор сурталчилан танилцуулах боломжыг бүрдүүлэн ажиллаж байна.</p>
                                </div>
                                <div className="desc-box">
                                    <div className="desc-widget">
                                        <h1>НЭЭЛТ</h1>
                                        <p>09.00 - 09.30</p>
                                        <p>Мэндчилгээ дэвшүүлж нээлтийн үг хэлнэ. </p>
                                    </div>
                                    <div className="desc-widget">
                                        <h1>СПОНСОР БАЙГУУЛЛАГУУДЫГ ТАНИЛЦУУЛАХ</h1>
                                        <p>09.30 – 10.30</p>
                                        <p>Ерөнхий спонсор байгууллагуудыг танилцуулна. Ерөнхий спонсор байгууллагын удирдлагууд үг хэлж мэндчилгээ дэвшүүлнэ </p>
                                    </div>
                                    <div className="desc-widget">
                                        <h1>УРЛАГИЙН ТОГЛОЛТ</h1>
                                        <p>10.30 – 11.00 </p>
                                        <p>Royal dance бүжгийн клуб үзүүлбэр үзүүлнэ </p>
                                    </div>
                                    <div className="desc-widget">
                                        <h1>Хэлэлцүүлэг</h1>
                                        <p>11.30 – 12.30</p>
                                        <p>2020 оны тренд технологийн сэдвээр хэлэлуүүлэг болно. Илтгэчид болон спонсор байгууллагын удирдлагууд </p>
                                    </div>
                                    <div className="desc-widget">
                                        <h1>Хаалт</h1>
                                        <p>12.30 – 13.00</p>

                                    </div>
                                </div>


                            </div>

                            {/* <div className="sec3">
                                <div className="title">
                                    <h1>ONLINE STORIES</h1>
                                </div>
                                <div className="grid-col">
                                    <div className="col1-box">
                                        <svg width="43" height="43" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="21.54" cy="21.8284" r="20.4066" stroke="black" stroke-width="1.2" />
                                            <path d="M10.4 22.7831L16.9248 29.1488L32.6797 14.5078" stroke="black" />
                                        </svg>
                                        <h1>Creative problem-solving</h1>
                                        <p>
                                            We enjoy working on hard problems together because the hardest challenges are often the most rewarding.
                                    </p>
                                    </div>
                                    <div className="col1-box">
                                        <svg width="43" height="43" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="21.54" cy="21.8284" r="20.4066" stroke="black" stroke-width="1.2" />
                                            <path d="M10.4 22.7831L16.9248 29.1488L32.6797 14.5078" stroke="black" />
                                        </svg>
                                        <h1>Creative problem-solving</h1>
                                        <p>
                                            We enjoy working on hard problems together because the hardest challenges are often the most rewarding.
                                    </p>
                                    </div>
                                    <div className="col1-box">
                                        <svg width="43" height="43" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="21.54" cy="21.8284" r="20.4066" stroke="black" stroke-width="1.2" />
                                            <path d="M10.4 22.7831L16.9248 29.1488L32.6797 14.5078" stroke="black" />
                                        </svg>
                                        <h1>Creative problem-solving</h1>
                                        <p>
                                            We enjoy working on hard problems together because the hardest challenges are often the most rewarding.
                                    </p>
                                    </div>
                                    <div className="col1-box">
                                        <svg width="43" height="43" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="21.54" cy="21.8284" r="20.4066" stroke="black" stroke-width="1.2" />
                                            <path d="M10.4 22.7831L16.9248 29.1488L32.6797 14.5078" stroke="black" />
                                        </svg>
                                        <h1>Creative problem-solving</h1>
                                        <p>
                                            We enjoy working on hard problems together because the hardest challenges are often the most rewarding.
                                    </p>
                                    </div>
                                </div>
                            </div> */}

                        </div>

                    </div>
                </div>
            </div>



        </section>
    )
}
export default ProgramPage;