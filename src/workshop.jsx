import him from './new/coding.png'
import sec from './new/internet-security.png'
import { FaArrowRight, FaAngleRight } from "react-icons/fa";
import { Bounce, Zoom, Fade, } from 'react-reveal';
import Pulse from 'react-reveal/Pulse';
import { GrClose } from "react-icons/gr";
import { useState } from 'react'
const Toggle = ({ type }) => {
    return (
        <>
            <Pulse >
                <div className="forimages">
                    {
                        type == 'html' ? (
                            <div className="forHtmlCss">
                                <img src={require("./assets/html1.jpg")} className="imgHtmlCss" />
                                <img src={require("./assets/html2.jpg")} className="imgHtmlCss" />
                                <img src={require("./assets/html3.jpg")} className="imgHtmlCss" />
                                <img src={require("./assets/html4.jpg")} className="imgHtmlCss" />
                                <img src={require("./assets/html5.jpg")} className="imgHtmlCss" />
                                <img src={require("./assets/html6.jpg")} className="imgHtmlCss" />
                                <img src={require("./assets/html11.jpg")} className="imgHtmlCss" />
                                <img src={require("./assets/html12.jpg")} className="imgHtmlCss" />
                                <img src={require("./assets/js.jpg")} className="imgHtmlCss" />
                            </div>
                        ) : (
                            type == 'js' ? (
                                <div className="forimgJs">
                                    <img src={require("./assets/js.jpg")} className="imgHtmlCss" />
                                    <img src={require("./assets/js1.jpg")} className="imgHtmlCss" />
                                    <img src={require("./assets/js2.jpg")} className="imgHtmlCss" />
                                    <img src={require("./assets/js3.jpg")} className="imgHtmlCss" />
                                    <img src={require("./assets/js4.jpg")} className="imgHtmlCss" />
                                    <img src={require("./assets/js5.jpg")} className="imgHtmlCss" />
                                    <img src={require("./assets/js6.jpg")} className="imgHtmlCss" />
                                    <img src={require("./assets/js11.jpg")} className="imgHtmlCss" />
                                    <img src={require("./assets/js.jpg")} className="imgHtmlCss" />
                                </div>
                            ) : (
                                type == 'security' ? (
                                    <div className="forimgJs">
                                        <img src={require("./assets/sec1.jpg")} className="imgHtmlCss" />
                                        <img src={require("./assets/sec2.jpg")} className="imgHtmlCss" />
                                        <img src={require("./assets/sec3.jpg")} className="imgHtmlCss" />
                                        <img src={require("./assets/sec4.jpg")} className="imgHtmlCss" />
                                        <img src={require("./assets/sec5.jpg")} className="imgHtmlCss" />
                                        <img src={require("./assets/sec6.jpg")} className="imgHtmlCss" />
                                        <img src={require("./assets/sec7.jpg")} className="imgHtmlCss" />
                                        <img src={require("./assets/js11.jpg")} className="imgHtmlCss" />
                                        <img src={require("./assets/js.jpg")} className="imgHtmlCss" />
                                    </div>
                                ) : (
                                    <div className="forimgJs">
                                        <img src={require("./assets/ouverture21.jpg")} className="imgHtmlCss" />
                                        <img src={require("./assets/ouverture22.jpg")} className="imgHtmlCss" />
                                        <img src={require("./assets/ouverture23.jpg")} className="imgHtmlCss" />
                                        <img src={require("./assets/ouverture24.jpg")} className="imgHtmlCss" />
                                        <img src={require("./assets/autre1.jpg")} className="imgHtmlCss" />
                                        <img src={require("./assets/autre3.jpg")} className="imgHtmlCss" />
                                        <img src={require("./assets/autre5.jpg")} className="imgHtmlCss" />
                                        <img src={require("./assets/autre6.jpg")} className="imgHtmlCss" />
                                        <img src={require("./assets/autre7.jpg")} className="imgHtmlCss" />
                                        <img src={require("./assets/autre8.jpg")} className="imgHtmlCss" />
                                        <img src={require("./assets/autre9.jpg")} className="imgHtmlCss" />
                                        <img src={require("./assets/autre1.jpg")} className="imgHtmlCss" />
                                    </div>
                                )
                            )
                        )
                    }
                </div>
            </Pulse >
        </>
    )
}
const Workshop = () => {
    const [blur, setBlur] = useState("workshop")
    const [Showimg, setShowImg] = useState(false)
    const [type, setType] = useState('')
    const _blur = (e) => {
        switch (e) {
            case 'html':
                setType('html')
                break;
            case 'js':
                setType('js')
                break;
            case 'security':
                setType('security')
                break;
            case 'more':
                setType('more')
                break;
            default:
                break;
        }
        setBlur('workshop_blur')
        setShowImg('true')
    }
    const _unblur = () => {
        setShowImg(false)
        setBlur('workshop')
    }
    return (
        <>
            {Showimg &&
                <>
                    <div id='god'>
                        <div id="closeImg" onClick={_unblur}>
                            <div className="btnclose">
                                <GrClose id='iii' />
                            </div>
                        </div>
                    </div>
                    <Toggle type={type} />
                </>
            }
            <div className={blur} id="workshop">
                <div>
                    <div className="wsh">
                        <p id='wsh_p'>  Main Workshops</p>
                        <h1 >  Our Main Workshops</h1>
                        <p> In this department we care about web development and software development. Our formators and senior members will guide you </p>

                    </div>
                </div>
                <Fade in>
                    <div className="Alog">
                        <div className="workDes" id="getSec">
                            <img src={him} className="him" />
                            <div style={{ width: '90%', height: '85%', zIndex: '2' }}>
                                <div className="lolEnd">
                                    <img src={require('./new/code.png')} style={{ width: '50%' }} />
                                </div>
                                <div style={{ marginTop: '20px' }}>
                                    <h3 style={{ fontFamily: 'Mulish , sans-serif', color: 'rgba(0, 0, 0, 0.795)', textAlign: 'left' }}>
                                        HTML & CSS</h3>
                                </div>
                                <p style={{ fontFamily: 'Mulish, sans-serif', fontWeight: 100, color: '#7d7d7d', letterSpacing: '1px', lineHeight: '1.8', textAlign: 'left', textAlign: 'left', }} className="shit">In this department we care about web development and software development.
                                </p>
                                <p className="seeImg" onClick={e => _blur('html')}>SEE IMAGES <FaArrowRight style={{ marginLeft: '5px' }} /></p>
                            </div>
                        </div>
                        <div className="workDes" id="getSec">
                            <img src={him} className="him" />
                            <div style={{ width: '90%', height: '85%', zIndex: '2' }}>
                                <div className="lolEnd">
                                    <img src={require('./new/depart.png')} style={{ width: '50%' }} />
                                </div>
                                <div style={{ marginTop: '20px' }}>
                                    <h3 style={{ fontFamily: 'Mulish , sans-serif', color: 'rgba(0, 0, 0, 0.795)', textAlign: 'left' }}>
                                        JAVASCRIPT</h3>
                                </div>
                                <p style={{ fontFamily: 'Mulish, sans-serif', fontWeight: 100, color: '#7d7d7d', letterSpacing: '1px', lineHeight: '1.8', textAlign: 'left', textAlign: 'left', }} className="shit">In this department we care about web development and software development.
                                </p>
                                <p className="seeImg" onClick={e => _blur('js')}>SEE IMAGES <FaArrowRight style={{ marginLeft: '5px' }} /></p>
                            </div>
                        </div>
                        <div className="workDes" id="getSec">
                            <img src={him} className="him" />
                            <div style={{ width: '90%', height: '85%', zIndex: '2' }}>
                                <div className="lolEnd">
                                    <img src={sec} style={{ width: '50%' }} />
                                </div>
                                <div style={{ marginTop: '20px' }}>
                                    <h3 style={{ fontFamily: 'Mulish , sans-serif', color: 'rgba(0, 0, 0, 0.795)', textAlign: 'left' }}>
                                        SECURITY</h3>
                                </div>
                                <p style={{ fontFamily: 'Mulish, sans-serif', fontWeight: 100, color: '#7d7d7d', letterSpacing: '1px', lineHeight: '1.8', textAlign: 'left', textAlign: 'left', }} className="shit">In this department we care about web development and software development.
                                </p>
                                <p className="seeImg" onClick={e => _blur('security')}>SEE IMAGES <FaArrowRight style={{ marginLeft: '5px' }} /></p>
                            </div>
                        </div>
                        <div onClick={e => _blur('more')} className="learnmore" id="moreimg" style={{ marginLeft: 'auto', marginRight: 'auto', }}>
                            <p style={{ fontFamily: 'Mulish, sans-serif', color: 'white', }}  > MORE IMAGES</p>
                            <div className="ilearn">
                                <FaAngleRight style={{ color: 'black', fontSize: '19px' }} />
                            </div>
                        </div>
                    </div>
                </Fade>
            </div >
        </>
    )
}

export default Workshop;