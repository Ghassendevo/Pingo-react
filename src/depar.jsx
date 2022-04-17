import { FaLaptopCode, FaFillDrip, FaBlog, FaUserSecret } from "react-icons/fa";
import { Zoom, Fade, Bounce } from 'react-reveal';
const Depar = () => {
    return (
        <div className="depar" id="depar">
            <div className="inDep">
                <p id="pp1">Main Departments</p>
                <h1> Our Main Departments</h1>
                <p>In this department we care about web development and software development. Our formators and senior members will guide you </p>
                <Zoom>
                    <div className="fourDep">
                        <div className="Depar deph">
                            <div id="dep">
                                <div id="ped">
                                    <div class="IconH">
                                        <FaLaptopCode size={25} color='white' />
                                    </div>
                                    <h3>Development</h3>
                                    <p className="shit">In this department we care about web development and software development.</p>
                                </div>
                            </div>
                        </div>
                        <div className="Depar deph">
                            <div id="dep">
                                <div id="ped">
                                    <div class="IconH">
                                        <FaFillDrip size={25} color='white' />
                                    </div>
                                    <h3>Design</h3>
                                    <p className="shit">In this department we care about web development and software development.</p>
                                </div>
                            </div>
                        </div>
                        <div className="Depar deph">
                            <div id="dep">
                                <div id="ped">
                                    <div class="IconH">
                                        <FaBlog size={25} color='white' />
                                    </div>
                                    <h3>Spons</h3>
                                    <p className="shit">In this department we care about web development and software development.</p>
                                </div>
                            </div>
                        </div>
                        <div className="Depar deph">
                            <div id="dep">
                                <div id="ped">
                                    <div class="IconH">
                                        <FaUserSecret size={25} color='white' />
                                    </div>
                                    <h3>Security</h3>
                                    <p className="shit">In this department we care about web development and software development.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Zoom>
            </div>

        </div>

    )
}
export default Depar;