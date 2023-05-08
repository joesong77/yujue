import React from "react";

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar'

//
import Typography from '@mui/material/Typography';
//
import './Home.css'


function Home() {
    const newJson = [
        {
            id: 1,
            image: "https://i.imgur.com/Km7VyBC.jpg",
            caseName: "賀！宇爵董事長新任台中向日葵理事長",
        },
        {
            id: 2,
            image: "https://i.imgur.com/Km7VyBC.jpg",
            caseName: "賀！宇爵董事長新任台中向日葵理事長",
        },
        {
            id: 3,
            image: "https://i.imgur.com/aq9BUSt.jpg",
            caseName: "捐贈母校新興國小70週年校慶活動經費",
        },


    ]
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
                    <SwiperSlide><img src="https://i.imgur.com/oxRenuu.jpg" alt="a" width={"100%"} height={"100%"} /></SwiperSlide>
                    <SwiperSlide><img src="https://i.imgur.com/YFl5b3S.jpg" alt="b" width={"100%"} height={"100%"} /></SwiperSlide>
                    {/* <SwiperSlide>Slide 3</SwiperSlide> */}


                </Swiper>



            </div>
            <br />
            <div className="news-title" >

                <Typography variant="h4" gutterBottom>
                    最新消息
                </Typography>
            </div>

            <div className="news-main" >
                {newJson.map((item) => (

                    <div className="news-image-list">
                        <img src={item.image} alt="aaa" width={300} height={200} />
                        <p>{item.caseName}</p>
                        <button className="news-image-list-btn">閱讀更多</button>
                    </div>
                ))}

            </div>

            <div className="about">

                <div className="about-flex">
                    <div className="about-list">



                        <Typography variant="h4" gutterBottom>
                            關於宇爵
                        </Typography>
                        <div className="about-list-txt">
                            提供專業營建、機電、空調工程等工程方面的諮詢服務公司，其主要目的是為客戶提供專業建議和技術支援，
                            協助他們在工程項目中達成成功。
                        </div>
                        <br />
                        <a href="/about">
                        <button className="about-btn"  >公司沿革</button>
                        </a>


                    </div>
                    <div className="about-right">

                        <img src="https://i.imgur.com/IWuiv1o.jpg" alt="工程圖" width={480} height={400} className="about-right-img" />
                    </div>


                </div>


            </div>
            {/* <div>
                代表作品
            </div> */}



        </>
    )
}


export default Home