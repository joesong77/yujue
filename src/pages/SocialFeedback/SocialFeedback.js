import React from "react";
import './SocialFeedback.css'
import TopicButton from "../../components/TopicButton/TopicButton";

function SocialFeedback() {
    return (
        <>
          <TopicButton name='公益活動'/>

            <div className="SocialFeedback-main" >
           

                <section class="product">
              
                    <div class="container">
                        <ul class="productList">
                            <li class="productItem">
                                <div class="txt">
                                    <h3 class="subTitle">財團法人臺中市私立向日葵社會福利慈善事業基金會</h3>
                                    <p>宋文華董事長在向日葵基金會擔任董事，長期關注社會需求，積極參加公益活動</p>
                                    
                                </div>
                                <img src="https://i.imgur.com/Pb0TAXu.jpg" alt="圖文1"/>

                            </li>
                          
                            <li class="productItem">
                                <div class="txt">
                                    <h3 class="subTitle">南投縣埔里鎮史港國民小學捐款</h3>
                                    <p>宋文華董事長協助募款，捐助史港國小舞蹈才藝經費</p>
                                   
                                </div>
                                <img src="https://i.imgur.com/A0gpiQV.jpg" alt="圖文1"/>
                            </li>
                            <li class="productItem">
                                <div class="txt">
                                    <h3 class="subTitle">中華民國退役將官社會服務總會</h3>
                                    <p>顧問團副團長授證</p>
                                   
                                </div>

                                <img src="https://i.imgur.com/FIpiw6N.jpg" alt="圖文1"/>
                            </li>
                        </ul>
                    </div>
                </section>


            </div>

        </>
    )
}


export default SocialFeedback