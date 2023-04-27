import React from "react";
import './About.css'
import TopicButton from "../../components/TopicButton/TopicButton";
function About() {
    return (
        <>

            <div >
                <TopicButton name="關於宇爵"/>
                <blockquote>
                    宇爵公司於民國112年臺中市成立,是提供專業營建、機電、空調工程等工程方面的諮詢服務公司，其主要目的是為客戶提供專業建議和技術支援，
                    協助他們在工程項目中達成成功。隨著經濟全球化和城市化進程的加速，工程顧問公司的市場需求也逐漸增加。
                    未來，工程顧問公司將繼續發揮其專業優勢和技術創新能力，擴大業務規模和服務領域。除了傳統的營建、機電、空調工程等領域，還將開展新興領域的業務，
                    如智慧城市、綠色建築、可持續能源等，並將為客戶提供更加全面、專業、創新的解決方案。同時，宇爵也將注重推動科技創新和人才培養，
                    不斷提升自身的核心競爭力，實現更加健康、可持續、繁榮的發展。
                </blockquote>

  
                <div className="left-menu">
                   <p>資本額 : 新台幣陸拾萬元整</p> 
                   <p>統編 : 93778504</p>
                   <p>地址 : 台中市北屯區軍福十五路</p>
                   <p>E-mail : yujyueh@gmail.com</p>
                     
               
                </div>
                
         


            </div>

        </>
    )
}

export default About