import React, { useRef, useState } from "react";
import { ReactDOM } from "react";
import './App.css'
import logo from './new/6546.png'
import menu from './assets/menu.png'
import del from './new/delete.png'
import img from "./assets/menu.png"
import img2 from "./new/delete.png"
import home from "./new/home.png"
import article from "./new/article.png"
import work from "./assets/work-time.png"
import staff from "./new/cleaning-staff.png"
import { SlideDown } from 'react-slidedown'
import 'react-slidedown/lib/slidedown.css'
import { CSSTransition } from 'react-transition-group';
const Header = () => {
    const respdown = useRef()
    const [resp, setResp] = useState(false)
    const [thiss, setThiss] = useState('none')
    const [border, setBorder] = useState({
        borderHome: true,
        borderAbout: false,
        borderMem: false,
        borderTeam: false,
        borderWork: false,
    })
    const show = () => {
        setResp(true)
        setThiss('block')
    }
    const close = () => {
        setResp(false)
        setThiss('none')
    }
    const setStateHome = (e) => {
        setBorder({
            borderHome: true,
            borderAbout: false,
            borderMem: false,
            borderTeam: false,
            borderWork: false,
        })
    }
    const setStateAbout = (e) => {
        setBorder({
            borderHome: false,
            borderAbout: true,
            borderMem: false,
            borderTeam: false,
            borderWork: false,
        })
    }
    const setStateMem = (e) => {
        setBorder({
            borderHome: false,
            borderAbout: false,
            borderMem: true,
            borderTeam: false,
            borderWork: false,
        })
    }
    const setStateTeam = (e) => {
        setBorder({
            borderHome: false,
            borderAbout: false,
            borderMem: false,
            borderTeam: true,
            borderWork: false,
        })
    }
    const setStateWork = (e) => {
        setBorder({
            borderHome: false,
            borderAbout: false,
            borderMem: false,
            borderTeam: false,
            borderWork: true,
        })
    }
    return (
        <header>
            <div className="inHeader">
                <div>
                    <img src={logo} width="200" height="40" alt="" />
                </div>
                <div className="inHeaderArrrow">
                    {
                        !resp ? (
                            <img style={{ width: '40px' }} src={img} onClick={show} />
                        ) : (

                            <img style={{ width: '40px', height: '35px', marginTop: '2px', }} onClick={close} src={img2} />
                        )
                    }
                </div>
                <div className="navs">
                    <div onClick={setStateHome}>
                        <a href="#home" className={border.borderHome ? 'navS' : 'navA'}>Home</a>
                        {
                            border.borderHome ? (
                                <div className="borderWork">
                                </div>
                            ) : (
                                <div className="bordderWork">
                                </div>
                            )
                        }
                    </div>
                    <div onClick={setStateAbout}>
                        <a href="#about" className={border.borderAbout ? 'navS' : 'navA'}>About us</a>
                        {
                            border.borderAbout ? (
                                <div className="borderWork">
                                </div>
                            ) : (
                                <div className="bordderWork">
                                </div>
                            )
                        }
                    </div>
                    <div onClick={setStateMem}>
                        <a href="#members" className={border.borderMem ? 'navS' : 'navA'}>Members</a>
                        {
                            border.borderMem ? (
                                <div className="borderWork">
                                </div>
                            ) : (
                                <div className="bordderWork">
                                </div>
                            )
                        }
                    </div>
                    <div onClick={setStateTeam}>
                        <a href="#team" className={border.borderTeam ? 'navS' : 'navA'} onClick={setStateTeam}>Our Team</a>
                        {
                            border.borderTeam ? (
                                <div className="borderWork">
                                </div>
                            ) : (
                                <div className="bordderWork">
                                </div>
                            )
                        }
                    </div>
                    <div onClick={setStateWork}>
                        <a href="#workshop" className={border.borderWork ? 'navS' : 'navA'} onClick={setStateWork}>Workshop</a>
                        {
                            border.borderWork ? (
                                <div className="borderWork">
                                </div>
                            ) : (
                                <div className="bordderWork">
                                </div>
                            )
                        }
                    </div>
                    <div>
                        <a className="touch" href="#contactus">
                            <p>Get in Touch </p>
                        </a>
                    </div>
                </div>
            </div>
            <CSSTransition
                in = {true}
                timeout={100}
                classNames="fadein"
                unmountOnExit
            >
                <div className="RespElement" style={{display:thiss}} ref={respdown}>
                    <div className="divRes">
                        <img src={home} style={{ marginLeft: '10px', width: "20px" }} />
                        <a onClick={setStateHome} id="respHome" className={border.borderHome ? 'respnavs' : 'respnava'} href="#home">Home</a>
                    </div>
                    <div className="divRes">
                        <img src={article} style={{ marginLeft: '10px', width: "20px" }} />
                        <a onClick={setStateAbout} className={border.borderAbout ? 'respnavs' : 'respnava'} href="#about">About</a>
                    </div>
                    <div className="divRes">
                        <img src={work} style={{ marginLeft: "10px", width: "20px" }} />
                        <a onClick={setStateMem} className={border.borderMem ? 'respnavs' : 'respnava'} href="#member">Members</a>
                    </div>
                    <div className="divRes">
                        <img src={staff} style={{ marginLeft: "10px", width: "20px" }} alt="" />
                        <a onClick={setStateTeam} id="respStaff" className={border.borderTeam ? 'respnavs' : 'respnava'} href="#team">Our Team</a>
                    </div>
                    <div className="divRes">
                        <img src={work} style={{ marginLeft: "10px", width: "20px" }} alt="" />
                        <a onClick={setStateWork} id="respWork" className={border.borderWork ? 'respnavs' : 'respnava'} href="#workshop">Workshop</a>
                    </div>
                    <div className="divRes">
                        <a style={{ color: "rgba(0, 0, 0, 0.781)" }} id="respHome" className="respnava" href="#contactus">Take To touch</a>
                    </div>
                </div>
            </CSSTransition>

        </header>
    )
}
export default Header;