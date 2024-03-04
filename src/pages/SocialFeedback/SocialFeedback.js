import React from "react";
import './SocialFeedback.css'
import TopicButton from "../../components/TopicButton/TopicButton";

function SocialFeedback() {


    return (
        <>
            <TopicButton name='公益活動' />

            <div className="SocialFeedback-main" >


                <section class="product">

                    <div class="container">
                        <ul class="productList">
                            <li class="productItem" id="a1">
                                <div class="txt" >
                                    <div class="txt_1">
                                        <h3 class="subTitle">財團法人臺中市私立向日葵社會福利慈善事業基金會</h3>
                                        <p>宋文華董事長在向日葵基金會擔任董事，長期關注社會需求，積極參加公益活動</p>
                                    </div>
                                </div>
                                <img src="https://i.imgur.com/Pb0TAXu.jpg" alt="圖文1" />

                            </li>

                            <li class="productItem" id="a2">
                                <div class="txt">
                                    <div class="txt_1">
                                        <h3 class="subTitle">南投縣埔里鎮史港國民小學捐款</h3>
                                        <p>宋文華董事長協助募款，捐助史港國小舞蹈才藝經費</p>
                                    </div>

                                </div>
                                <img src="https://i.imgur.com/A0gpiQV.jpg" alt="圖文1" />
                            </li>
                            <li class="productItem" id="a3">
                                <div class="txt">
                                    <div class="txt_1">
                                        <h3 class="subTitle">中華民國退役將官社會服務總會</h3>
                                        <p>總會長楊學仁中將頒贈榮譽狀-顧問團副團長</p>
                                    </div>

                                </div>

                                <img src="https://i.imgur.com/FIpiw6N.jpg" alt="圖文1" />
                            </li>
                            <li class="productItem" id="a4">
                                <div class="txt">

                                    <div class="txt_1">

                                        <h3 class="subTitle">財團法人榮民榮眷基金會</h3>
                                        <p>祕書長李世國將軍，頒贈感謝狀</p>


                                    </div>
                                    <br></br>

                                    <img src="https://i.imgur.com/1TajVhB.jpg" alt="圖文1" />


                                </div>

                                <img src="https://i.imgur.com/YcuRgmX.jpg" alt="圖文1" />
                            </li>
                            <li class="productItem" id="a5">
                                <div class="txt">
                                    <div class="txt_1">
                                        <h3 class="subTitle">臺中市後備指揮部</h3>
                                        <p>後備指揮官李育霖上校，頒贈感謝狀</p>

                                        <p>協助本部推動各項全民國防工作，支持國防事務</p>
                                    </div>
                                    <br></br>


                                    <img src="https://i.imgur.com/rGiR8CI.jpg" alt="圖文1" />






                                </div>

                                <img src="https://i.imgur.com/aPAVjuf.jpg" alt="圖文1" />
                            </li>
                        </ul>
                    </div>
                </section>


            </div>

        </>
    )
}


export default SocialFeedback