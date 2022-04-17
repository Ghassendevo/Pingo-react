import img from './new/aboutid.svg'
import { FaCheck, FaAngleRight, FaStreetView, FaUserCog, FaChalkboardTeacher } from 'react-icons/fa'
import Fade from 'react-reveal/Fade';
import backI from './new/geometrical.png'
import mission from './new/mission.svg'
import out from './new/rec.png'
const About = () => {
    return (
            <div className="about" id='about'>
                <div className="first_about">
                    <div className="in_about1">
                        <img src={img} style={{ width: '60%' }} />
                    </div>
                    <div className="in_about2">
                        <img src={backI} id='backI' />
                        <Fade right>
                            <p id='about_p1'> About us</p>
                            <h1>Short story about Pingo It club</h1>
                        </Fade>
                        <Fade up>
                            <p id='about_p2'> Pingo-IT is a team of clever creatives, sharp developpers working together to create an amazing content and make sure the world sees it.</p>

                            <div>
                                <div className="forh">
                                    <div class="linkH">
                                        <FaCheck className='facheck' style={{ color: '#02b2b2' }} />
                                    </div>
                                    <div id='an'>
                                        Communication Skills to getting in touch
                                    </div>
                                </div>
                                <div className="forh">
                                    <div class="linkH">
                                        <FaCheck className='facheck' style={{ color: '#02b2b2' }} />
                                    </div>
                                    <div id='an'>
                                        Share knowledge
                                    </div>
                                </div>
                                <div className="forh">
                                    <div class="linkH">
                                        <FaCheck className='facheck' style={{ color: '#02b2b2' }} />
                                    </div>
                                    <div id='an'>
                                        Create events and workshops
                                    </div>
                                </div>
                                <div className="forh">
                                    <div class="linkH">
                                        <FaCheck className='facheck' style={{ color: '#02b2b2' }} />
                                    </div>
                                    <div id='an'>
                                        Better information
                                    </div>
                                </div>
                                <div className="learnmore">
                                    <p>LEARN MORE</p>
                                    <div className="ilearn">
                                        <FaAngleRight style={{ color: 'black', fontSize: '19px' }} />
                                    </div>
                                </div>
                            </div>
                        </Fade>
                    </div>

                </div>
                <div className="second_about">
                    <img src={out} className="ko" />
                    <div className='in_aboutt2'>

                        <Fade left>
                            <p id='aboup2'>Our Mission & Vision</p>
                            <h1>  Better Information and knowledge</h1>
                        </Fade>
                        <Fade up>
                            <p>"Learn as though you would never be able to master it; hold it as though you would be in fear of losing it."</p>

                            <div id='inabout'>
                                <div className="moin">
                                    <div>
                                        <div className="headerinf">
                                            <FaStreetView id='i' style={{ color: '#059fa3', fontSize: '30px' }} />
                                        </div>
                                        <h4 style={{ fontFamily: 'Mulish, sans-serif', letterSpacing: '0.5px', marginTop: '20px', textTransform: 'uppercase' }}>
                                            Professional satff</h4>
                                        <p style={{ fontFamily: 'Mulish, sans-serif', color: '#7d7d7d', lineHeight: '1.6em', letterSpacing: '0.5px', marginTop: '-10px' }}>
                                            The pain itself is a lot of pain, it is the main focus.</p>
                                    </div>
                                </div>
                                <div className="moin">
                                    <div>
                                        <div className="headerinf">
                                            <FaUserCog id='i' style={{ color: '#059fa3', fontSize: '30px' }} />
                                        </div>
                                        <h4 style={{ fontFamily: 'Mulish, sans-serif', letterSpacing: '0.5px', marginTop: '20px', textTransform: 'uppercase' }}>
                                            Professional satff</h4>
                                        <p style={{ fontFamily: 'Mulish, sans-serif', color: '#7d7d7d', lineHeight: '1.6em', letterSpacing: '0.5px', marginTop: '-10px' }}>
                                            The pain itself is a lot of pain, it is the main focus.</p>
                                    </div>
                                </div>
                                <div className="moin">
                                    <div>
                                        <div className="headerinf">
                                            <FaChalkboardTeacher id='i' style={{ color: '#059fa3', fontSize: '30px' }} />
                                        </div>
                                        <h4 style={{ fontFamily: 'Mulish, sans-serif', letterSpacing: '0.5px', marginTop: '20px', textTransform: 'uppercase' }}>
                                            Professional satff</h4>
                                        <p style={{ fontFamily: 'Mulish, sans-serif', color: '#7d7d7d', lineHeight: '1.6em', letterSpacing: '0.5px', marginTop: '-10px' }}>
                                            The pain itself is a lot of pain, it is the main focus.</p>
                                    </div>
                                </div>
                                <div className="moin">
                                    <div>
                                        <div className="headerinf">
                                            <FaUserCog id='i' style={{ color: '#059fa3', fontSize: '30px' }} />
                                        </div>
                                        <h4 style={{ fontFamily: 'Mulish, sans-serif', letterSpacing: '0.5px', marginTop: '20px', textTransform: 'uppercase' }}>
                                            Professional satff</h4>
                                        <p style={{ fontFamily: 'Mulish, sans-serif', color: '#7d7d7d', lineHeight: '1.6em', letterSpacing: '0.5px', marginTop: '-10px' }}>
                                            The pain itself is a lot of pain, it is the main focus.</p>
                                    </div>
                                </div>
                            </div>
                        </Fade>
                    </div>
                    <div id='forInImg'>
                        <img src={mission} width="100%" />
                    </div>
                </div>
            </div >
    )
}
export default About;