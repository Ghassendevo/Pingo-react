import React, { useEffect, useState } from "react";
import { ReactDOM } from "react";
import exp from "./new/user-experience.png"
import Reveal from 'react-reveal';
import AnimatedNumber from 'react-animated-number';
import solve from './new/solved.png'
import event from './new/event.png'
import trophy from './new/trophy.png'
const Info = () => {
    const [count, setCount] = useState(false)
    const startCount = () => {
        setCount(true)
    }
    return (
        <Reveal onReveal={startCount}>
            <div className="info" id="info" >
                <div>
                    <div className="irrT">
                        <div>
                            <img src={exp} width="30px" alt="" />
                            <spam id="Members">
                                {count && <AnimatedNumber component="text" duration={1000} value={60} formatValue={n => n.toFixed(0)} />}
                            </spam>
                            <p style={{ fontFamily: 'Mulish ,sans-serif', color: '#059fa3', letterSpacing: '0.5px', marginTop: '10px', textAlign:'center' }}> Pingo Members</p>
                        </div>
                    </div>
                    <div className="irrT">
                        <div>
                            <img src={solve} width="30px"  />
                            <spam id="Members">
                                {count && <AnimatedNumber component="text" duration={1000} value={980} formatValue={n => n.toFixed(0)} />}
                            </spam>
                            <p style={{ fontFamily: 'Mulish ,sans-serif', color: '#059fa3', letterSpacing: '0.5px', marginTop: '10px', textAlign:'center' }}> Pingo Solve</p>
                        </div>
                    </div>
                    <div className="irrT">
                        <div>
                            <img src={event} width="30px" />
                            <spam id="Members" >
                                {count && <AnimatedNumber component="text" duration={1000} value={5} formatValue={n => n.toFixed(0)} />}
                            </spam>
                            <p style={{ fontFamily: 'Mulish ,sans-serif', color: '#059fa3', letterSpacing: '0.5px', marginTop: '10px', textAlign:'center' }}>Events</p>
                        </div>
                    </div>
                    <div className="irrT">
                        <div>
                            <img src={trophy} width="30px"  />
                            <spam id="Members">
                                {count && <AnimatedNumber component="text" duration={1000} value={40} formatValue={n => n.toFixed(0)} />}
                            </spam>
                            <p style={{ fontFamily: 'Mulish ,sans-serif', color: '#059fa3', letterSpacing: '0.5px', marginTop: '10px', textAlign:'center' }}>Experience</p>
                        </div>
                    </div>
                </div>
            </div>
        </Reveal>
    )
}
export default Info;