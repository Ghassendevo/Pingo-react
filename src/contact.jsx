import { FaAngleRight } from "react-icons/fa";
const Contact = () => {
    return (
        <div className="imgPin" id="contactus">
            <div className="pino">
                <div style={{width: '90%',height: '80%',}}>
                    <div style={{lineHeight: '20px'}}>
                        <p id="contact_pingo">Contact Pingo</p>
                        <h1 id="h1_contact">
                            We are here for you</h1>
                    </div>
                    <div className="Opin">
                        <div id="pingoC">
                            <div>
                                <img src={require("./new/social-care.gif")} style={{width:"70px",}} />
                            </div>
                            <div style={{marginLeft: '5px', flexDirection:'column',}}>
                                <p id="pp_cotact"> YOUR NAME</p>
                                <input className="contact_in" type="text" placeholder="Enter Your Name" />
                            </div>
                        </div>
                        <div id="pingoC">
                            <div >
                                <img src={require("./new/mailing.gif")} style={{width:"70px"}}  />
                            </div>
                            <div style={{marginLeft: '5px'}}>
                                <p id="pp_cotact"> YOUR EMAIL</p>
                                <input className="contact_in" type="text" placeholder="Enter Your Email" />
                            </div>
                        </div>
                        <div id="pingoC">
                            <div >
                                <img src={require("./new/idea.gif")} style={{width:"70px"}}  />
                            </div>
                            <div style={{marginLeft: '5px'}}>
                                <p id="pp_cotact">YOUR OBJECT</p>
                                <input className="contact_in" type="text" placeholder="Enter Your Object" />
                            </div>
                        </div>
                        <div id="pingoC">
                            <div >
                                <img src={require("./new/message.gif")} style={{width:"70px"}} />
                            </div>
                            <div style={{marginLeft: '5px'}}>
                                <p id="pp_cotact">
                                    YOUR MESSAGE</p>
                                <input class="contact_in" type="text" placeholder="Enter Your Message" />
                            </div>
                        </div>
                        <div className="learnmore" style={{marginLeft: 'auto',marginRight: 'auto',width: '250px',}}>
                            <p style={{fontFamily: 'Work Sans,sans-serif',color: 'white'}}>CONTACT PINGO</p>
                            <div className="ilearn">
                                <FaAngleRight  style={{color: 'black',fontSize: '19px'}} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="backPin">
            </div>
        </div>

    )
}

export default Contact;