import React from "react";
import { ReactDOM, useEffect } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import SwiperCore, { Navigation, Pagination, EffectFade, Autoplay } from "swiper";
import und from './assets/undraw_speech_to_text_re_rw02.svg'
import und2 from './new/undraw_world_re_768g.svg'
import und3 from './new/undraw_deliveries_2r4y.svg'
import { FaLayerGroup } from "react-icons/fa";
import { Zoom, Fade , Bounce } from 'react-reveal';
const Home = () => {
    
    return (
        <>
            <div className="backImg">
                <p style={{ visibility: 'hidden' }}>s</p>
            </div>
            <Swiper className="swiper" id="home"
                modules={[Pagination, Navigation, EffectFade, Autoplay]}
                navigation={true}
                pagination={{
                    dynamicBullets: true,
                    clickable: true
                }}
                speed={1000}
                autoplay={{ delay: 3000 }}
                scrollbar={{ draggable: true }}
            >
                <SwiperSlide className="slideOne">
                    <div className="insideSwiper">
                        <div className="inswiper" >
                            <Fade left>
                                <p id="p1">  You are not alone</p>
                                <h1 style={{ fontSize: '50px' }}> Changing lives through learning and inventing </h1>
                                <p>"Learn as though you would never be able to master it; hold it as though you would be in fear of losing it." Confucius </p>
                                <div className="btn_main">
                                    <div className="btnT">
                                        <p>Get a touch </p>
                                        <div className="hovt">
                                            <FaLayerGroup />
                                        </div>
                                    </div>
                                </div>
                            </Fade>
                        </div>
                        <div className="inswiper2">
                            <img src={und} width={460} height={400} />
                        </div>

                    </div>
                </SwiperSlide>
                <SwiperSlide className="slideOne">
                    <div className="insideSwiper">
                        <div className="inswiper" data-aos="fade-up"
                            data-aos-delay="50"
                            data-aos-duration="800">
                            <p id="p1">We supporting you</p>
                            <h1> W'll help you to find the best solution </h1>
                            <p>"Learn as though you would never be able to master it; hold it as though you would be in fear of losing it." Confucius</p>
                            <div className="btn_main">
                                <div className="btnT">
                                    <p>Get a touch </p>
                                    <div className="hovt">
                                        <FaLayerGroup />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="inswiper2">
                            <img src={und2} width={460} height={400} />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="slideOne">
                    <div className="insideSwiper">
                        <div className="inswiper">
                            <p id="p1">You are not alone</p>
                            <h1>  Changing lives through learning and inventing </h1>
                            <p> "Learn as though you would never be able to master it; hold it as though you would be in fear of losing it." Confucius</p>
                            <div className="btn_main">
                                <div className="btnT">
                                    <p>Get a touch </p>
                                    <div className="hovt">
                                        <FaLayerGroup />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="inswiper2">
                            <img src={und3} width={460} height={400} />
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper >
        </>
    )
}
export default Home;