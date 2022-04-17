import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import Flickity from 'react-flickity-component'
import 'flickity/dist/flickity.min.css';
import SwiperCore, { Navigation, Pagination, EffectFade, Autoplay } from "swiper";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
const Team = () => {
    const flickityOptions = {
        initialIndex: 2,
        wrapAround: true,
        autoPlay: 3000
    }
    return (
        <div className="team" id='team'>
            <div className="Pte">
                <p id="team_p1">
                    Best Team</p>
                <h1 >
                    Our Pingo Team</h1>
                <p>
                    In this department we care about web development and software development. Our formators and senior members will guide you </p>
            </div>
            <Flickity
                className={'carousel'} // default ''
                elementType={'div'} // default 'div'
                options={flickityOptions} // takes flickity options {}
                disableImagesLoaded={false} // default false
                reloadOnUpdate // default false
                static // default false
            >

                <div class="carousel-cell">
                    <div>
                        <img src={require("./assets/4.jpg")} style={{ width: '200px', height: '200px', borderRadius: '50%' }} />
                        <div className='in_cour'>
                            <h3> Rayen Hajjem</h3>
                            <p> Humain Resources</p>
                        </div>
                        <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-evenly' }}>
                            <a href="#" class="LinksTo">
                                <FaFacebookF id='slide_i1' />
                            </a>
                            <a href="#" class="LinksTo">
                                <FaTwitter id='slide_i1' />
                            </a>
                            <a href="#" class="LinksTo">
                                <FaLinkedinIn id='slide_i1' />
                            </a>
                            <a href="#" class="LinksTo">
                                <FaInstagram id='slide_i1' />
                            </a>
                        </div>
                    </div>
                </div>
                <div class="carousel-cell">
                    <div>
                        <img src={require("./assets/2.jpg")} style={{ width: '200px', height: '200px', borderRadius: '50%' }} />
                        <div className='in_cour'>
                            <h3> Roua Toumi</h3>
                            <p> Vice Chair</p>
                        </div>
                        <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-evenly' }}>
                            <a href="#" class="LinksTo">
                                <FaFacebookF id='slide_i1' />
                            </a>
                            <a href="#" class="LinksTo">
                                <FaTwitter id='slide_i1' />
                            </a>
                            <a href="#" class="LinksTo">
                                <FaLinkedinIn id='slide_i1' />
                            </a>
                            <a href="#" class="LinksTo">
                                <FaInstagram id='slide_i1' />
                            </a>
                        </div>
                    </div>
                </div>
                <div class="carousel-cell">
                    <div>
                        <img src={require("./assets/1.jpg")} style={{ width: '200px', height: '200px', borderRadius: '50%' }} />
                        <div className='in_cour'>
                            <h3> Seif Slimen</h3>
                            <p> Chair</p>
                        </div>
                        <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-evenly' }}>
                            <a href="#" class="LinksTo">
                                <FaFacebookF id='slide_i1' />
                            </a>
                            <a href="#" class="LinksTo">
                                <FaTwitter id='slide_i1' />
                            </a>
                            <a href="#" class="LinksTo">
                                <FaLinkedinIn id='slide_i1' />
                            </a>
                            <a href="#" class="LinksTo">
                                <FaInstagram id='slide_i1' />
                            </a>
                        </div>
                    </div>

                </div>
                <div class="carousel-cell">
                    <div>
                        <img src={require("./assets/5.jpg")} style={{ width: '200px', height: '200px', borderRadius: '50%' }} />
                        <div className='in_cour'>
                            <h3>  Mouadh Briki</h3>
                            <p> Event manager</p>
                        </div>
                        <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-evenly' }}>
                            <a href="#" class="LinksTo">
                                <FaFacebookF id='slide_i1' />
                            </a>
                            <a href="#" class="LinksTo">
                                <FaTwitter id='slide_i1' />
                            </a>
                            <a href="#" class="LinksTo">
                                <FaLinkedinIn id='slide_i1' />
                            </a>
                            <a href="#" class="LinksTo">
                                <FaInstagram id='slide_i1' />
                            </a>
                        </div>
                    </div>

                </div>
                <div class="carousel-cell">
                    <div>
                        <img src={require("./assets/3.jpg")} style={{ width: '200px', height: '200px', borderRadius: '50%' }} />
                        <div className='in_cour'>
                            <h3>  Ghada Chenini</h3>
                            <p> Secretary & Treasurer</p>
                        </div>
                        <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-evenly' }}>
                            <a href="#" class="LinksTo">
                                <FaFacebookF id='slide_i1' />
                            </a>
                            <a href="#" class="LinksTo">
                                <FaTwitter id='slide_i1' />
                            </a>
                            <a href="#" class="LinksTo">
                                <FaLinkedinIn id='slide_i1' />
                            </a>
                            <a href="#" class="LinksTo">
                                <FaInstagram id='slide_i1' />
                            </a>
                        </div>
                    </div>
                </div>
            </Flickity>
        </div>
    )
}
export default Team;
