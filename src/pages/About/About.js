import React from "react";
import './About.css'
import TopicButton from "../../components/TopicButton/TopicButton";




function About() {
    return (
        <>

            <div >
                <TopicButton name="關於宇爵" />

                <div className="about-article">


                    <blockquote>
                        宇爵公司於民國112年臺中市成立,是提供專業營建、機電、空調工程等工程方面的諮詢服務公司，其主要目的是為客戶提供專業建議和技術支援，
                        協助他們在工程項目中達成成功。隨著經濟全球化和城市化進程的加速，工程顧問公司的市場需求也逐漸增加。
                        未來，工程顧問公司將繼續發揮其專業優勢和技術創新能力，擴大業務規模和服務領域。除了傳統的營建、機電、空調工程等領域，還將開展新興領域的業務，
                        如智慧城市、綠色建築、可持續能源等，並將為客戶提供更加全面、專業、創新的解決方案。同時，宇爵也將注重推動科技創新和人才培養，
                        不斷提升自身的核心競爭力，實現更加健康、可持續、繁榮的發展。
                    </blockquote>


                    <br />

                    <div className="about-organize">
                        <div>
                            組織架構圖
                        </div>
                        <img src="https://i.imgur.com/QT8EAyN.jpg" alt="宇爵工程組織架構圖" width={500} height={600}  />
                

                    </div>


                    {/* <Typography variant="h4" gutterBottom sx={{ color: '#569DAA', textShadow: '0.2em 0.2em 0.2em ' }}>
                        經營者的話
                    </Typography>
                    <Typography variant="h5" gutterBottom sx={{ color: '#569DAA', textShadow: '0.2em 0.2em 0.2em ' }}>
                        誠信 負責
                    </Typography>
                    <blockquote>
                        本公司堅持的理念就是『誠信　負責』，將客戶託付的每一個工程案件，當成自己的事務盡心、盡力來完成，希望能做到讓客戶滿意及信賴。
                        透過菁英技術團隊創造卓越工程品質，秉持誠信、謙卑、熱忱的優良傳統，深耕台灣、服務人群，將多年累積的豐沛技術與經驗，朝向「團隊、企業、踏實、求新」的目標大步邁進，近年更積極參與綠能工程建設，落實環境永續發展理念，以提升國人生活品質，創造更美好的家園！。
                        


                    </blockquote> */}




                </div>


                {/* 
                <div className="left-menu">
                    <p>資本額 : 新台幣陸拾萬元整</p>
                    <p>統編 : 93778504</p>
                    <p>地址 : 台中市北屯區軍福十五路</p>
                    <p>E-mail : yujyueh@gmail.com</p>


                </div> */}




            </div>

        </>
    )
}

export default About