import React from "react";

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar'
//

//
import './Home.css'

function Home() {
    return (
        <>
          

            <div className="main">
                <Swiper
                    // install Swiper modules
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={30}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                    className="swiper"

                >
                    <SwiperSlide><img src="https://i.imgur.com/D6ClOhf.jpg" alt="a"  width={"100%"} height={"100%"} /></SwiperSlide>
                    <SwiperSlide><img src="https://i.imgur.com/YFl5b3S.jpg" alt="b" width={"100%"} height={"100%"} /></SwiperSlide>
                    <SwiperSlide>Slide 3</SwiperSlide>
              

                </Swiper>
                <div>
                    
                    
                </div>
            </div>



        

        </>
    )
}


export default Home