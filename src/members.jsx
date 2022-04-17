import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import { FreeMode, Navigation, Thumbs, Pagination } from "swiper";
import { useState, useRef } from "react";
const Members = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null)

    return (
        <div className="members">
            <img src={require("./new/social-media.gif")} class="TT" />
            <div className="in_mem">
                <p id="meme_p">Active Members</p>
                <h1>Our Happy Members Of The Week </h1>
                <p > In this department we care about web development and software development. Our formators and senior members will guide you </p>
            </div>
            <Swiper
                style={{
                    "--swiper-navigation-color": "#fff",
                    "--swiper-pagination-color": "#fff",
                }}
                loop={true}
                spaceBetween={10}
                navigation={true}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs, Pagination]}
                scrollbar={{ draggable: true }}

                className="mySwiper2"
            >
                <SwiperSlide className="mem_slide">
                    <div>
                        <img src={require("./members/Paya.jpg")} width="95%" height="95%" style={{ borderRadius: '50%' }} />
                    </div>
                </SwiperSlide>
                <SwiperSlide className="mem_slide">
                    <div>
                        <img src={require("./members/amine.png")} width="95%" height="95%" style={{ borderRadius: '50%' }} />
                    </div>
                </SwiperSlide>
                <SwiperSlide className="mem_slide">
                    <div>
                        <img src={require("./members/saif.jpg")} width="95%" height="95%" style={{ borderRadius: '50%' }} />
                    </div>
                </SwiperSlide>
                <SwiperSlide className="mem_slide">
                    <div>
                        <img src={require("./members/rima.jpg")} width="95%" height="95%" style={{ borderRadius: '50%' }} />
                    </div>
                </SwiperSlide>
                <SwiperSlide className="mem_slide">
                    <div>
                        <img src={require("./members/salima.jpg")} width="95%" height="95%" style={{ borderRadius: '50%' }} />
                    </div>
                </SwiperSlide>
                <SwiperSlide className="mem_slide">
                    <div>
                        <img src={require("./members/yassine.jpg")} width="95%" height="95%" style={{ borderRadius: '50%' }} />
                    </div>
                </SwiperSlide>
                <SwiperSlide className="mem_slide">
                    <div>
                        <img src={require("./members/ali.jpg")} width="95%" height="95%" style={{ borderRadius: '50%' }} />
                    </div>
                </SwiperSlide>
                <SwiperSlide className="mem_slide">
                    <div>
                        <img src={require("./members/abdelhak.jpg")} width="95%" height="95%" style={{ borderRadius: '50%' }} />
                    </div>
                </SwiperSlide>
                <SwiperSlide className="mem_slide">
                    <div>
                        <img src={require("./members/maram.jpg")} width="95%" height="95%" style={{ borderRadius: '50%' }} />
                    </div>
                </SwiperSlide>
            </Swiper>
            <Swiper
                onSwiper={setThumbsSwiper}
                loop={true}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                pagination={{
                    dynamicBullets: true,
                    clickable: true,
                }}
                className="mySwiper2"
            >
                <SwiperSlide className="mem_slide">
                    <div>
                        ghassen abdellauoui
                    </div>
                </SwiperSlide>
                <SwiperSlide className="mem_slide">
                    <div>
                        ghassen sdsdsdsds
                    </div>
                </SwiperSlide>
                <SwiperSlide className="mem_slide">
                    <div>
                        ghassen abdellauoui
                    </div>
                </SwiperSlide>
                <SwiperSlide className="mem_slide">
                    <div>
                        ghassen sdsdsdsds
                    </div>
                </SwiperSlide>
                <SwiperSlide className="mem_slide">
                    <div>
                        ghassen abdellauoui
                    </div>
                </SwiperSlide>
                <SwiperSlide className="mem_slide">
                    <div>
                        ghassen sdsdsdsds
                    </div>
                </SwiperSlide>
                <SwiperSlide className="mem_slide">
                    <div>
                        ghassen abdellauoui
                    </div>
                </SwiperSlide>
                <SwiperSlide className="mem_slide">
                    <div>
                        ghassen sdsdsdsds
                    </div>
                </SwiperSlide>

            </Swiper>
        </div>


    )
}
export default Members;