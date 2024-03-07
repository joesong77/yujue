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
            image: "https://i.imgur.com/N4DneXd.jpg",
            caseName: "臺中市榮服處部頒證",
            link: "/socialFeedback/#a6"
        },
        {
            id: 2,
            image: "https://i.imgur.com/aPAVjuf.jpg",
            caseName: "臺中市後備指揮部頒證",
            link: "/socialFeedback/#a5"
        },
        {
            id: 3,
            image: "https://i.imgur.com/YcuRgmX.jpg",
            caseName: "財團法人榮民榮眷基金會頒證",
            link: "/socialFeedback/#a4"
        },
          {
            id: 4,
            image: "https://i.imgur.com/FIpiw6N.jpg",
            caseName: "中華民國退役將官社會服務總會頒證",
            link: "/socialFeedback/#a3"
        },

        {
            id: 5,
            image: "https://i.imgur.com/DO3rYmD.jpg",
            caseName: "賀！董事長新任臺中向日葵董事",
            link: "/socialFeedback/#a1"
        },
        {
            id: 6,
            image: "https://i.imgur.com/A0gpiQV.jpg",
            caseName: "南投縣埔里鎮史港國民小學捐款",
            link: "/socialFeedback/#a2"
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

                <Swiper
                    // install Swiper modules

                    spaceBetween={20}
                    slidesPerView={3}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                    className="swiper"

                >
                    {newJson.map((item) => (
                        <SwiperSlide>


                            <div className="news-image-list">
                                <img src={item.image} alt="最新消息圖示" className="news-image-list-img" />
                                <p className="news-image-list-txt">{item.caseName}</p>
                                <button className="news-image-list-btn" >
                                    <a href={item.link} className="news-image-list-a" >
                                        閱讀更多</a>
                                </button>
                            </div>




                        </SwiperSlide>
                    ))}

                    {/* <SwiperSlide>Slide 3</SwiperSlide> */}


                </Swiper>


            </div>

            <div className="about">

                <div className="about-flex">
                    <div className="about-list">



                        <Typography variant="h4" gutterBottom>
                            關於宇爵
                        </Typography>
                        <div className="about-list-txt">

                            專業工程顧問，提供營建、機電、空調工程諮詢服務。致力於技術創新、擴大業務領域，為客戶提供全面解決方案。推動科技創新、人才培養，實現可持續發展。
                        </div>
                        <br />
                        <a href="/about">
                            <button className="about-btn"  >公司沿革</button>
                        </a>


                    </div>
                    <div className="about-right">

                        <img src="https://i.imgur.com/yVrhVbT.jpg" alt="工程圖" width={480} height={400} className="about-right-img" />
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