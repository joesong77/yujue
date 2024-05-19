import React from "react";
import './SocialFeedback.css'
import TopicButton from "../../components/TopicButton/TopicButton";

function SocialFeedback() {

    const socialData = [
        {
            id: "a1",
            title: "中華民國退役將官社會服務總會",
            txet: "總會長楊學仁中將頒贈榮譽狀-顧問團副團長",
            image1: "",
            image: "https://i.imgur.com/FIpiw6N.jpg",
            time: "2021年4月28日"

        },
        {
            id: "a2",
            title: "南投縣埔里鎮史港國民小學捐款",
            txet: "宋文華董事長協助募款，捐助史港國小舞蹈才藝經費",
            image1: "",
            image: "https://i.imgur.com/A0gpiQV.jpg",
            time: "2022年10月5日"


        },
        {
            id: "a3",
            title: "財團法人臺中市私立向日葵社會福利慈善事業基金會",
            txet: "宋文華董事長在向日葵基金會擔任董事，長期關注社會需求，積極參加公益活動",
            image1: "",
            image: "https://i.imgur.com/Pb0TAXu.jpg",
            time: "2023年2月1日"

        },
    {
            id: "a4",
            title: "財團法人榮民榮眷基金會",
            txet: "祕書長李世國將軍，頒贈感謝狀",
            image1: "https://i.imgur.com/1TajVhB.jpg",
            image: "https://imgur.com/YcuRgmX.jpg",
            time: "2023年8月31日"


        }, {
            id: "a5",
            title: "臺中市後備指揮部",
            txet: "後備指揮官李育霖上校，頒贈感謝狀",
            text1: "協助本部推動各項全民國防工作，支持國防事務",
            image1: "https://i.imgur.com/rGiR8CI.jpg",
            image: "https://i.imgur.com/aPAVjuf.jpg",
            time: "2024年1月30日"

        }, {
            id: "a6",
            title: "臺中市榮民服務處",
            txet: "陳宗貴處長，頒贈感謝狀",
            text1: "慷慨捐助認養榮民遺孤，贊助之情",
            image1: "https://i.imgur.com/R1tt6Lf.jpg",
            image: "https://i.imgur.com/N4DneXd.jpg",
            time: "2024年3月7日"
        },
        {
            id: "a7",
            title: "花蓮縣震災捐款",
            txet: "花蓮縣政府頒贈感謝狀",
            text1: "將各位捐贈者的愛心善款共募得150萬帶到花蓮，受款單位花蓮縣政府社會局弱勢兒童專戶50萬，花蓮縣家扶中心兒童救助50萬，花蓮縣畢士大教養院孤兒救助50萬，徐蓁蔚縣長親自接待",
            image1: "https://i.imgur.com/0mZGih3.png",
            image: "https://ws.hl.gov.tw/001/Upload/399/relpic/25832/157278/c0af3962-58eb-4146-97ed-7c1d8da3715a.jpg",
            time: "2024年3月7日"
        }

    ]


    return (
        <>
            <TopicButton name='公益活動' />

            <div className="SocialFeedback-main" >


                <section class="product">
                    <div class="container">
                        <ul class="productList">

                            {socialData.map((item) => (

                                <li class="productItem" id={item.id}>
                                    <div class="txt">
                                        <div class="txt_1">
                                            <h3 class="subTitle">{item.title}</h3>
                                            <p>{item.txet}</p>
                                            <p>{item.text1}</p>
                                            <p>{item.time}</p>
                                        </div>
                                        <br></br>

                                        {item.image1 !== "" ? <img src={item.image1} alt="圖文1" class="img1" /> : null}




                                    </div>
                                    <img src={item.image} alt="圖文1" />
 
        
                                </li>
                           
                            

                            ))}

                        </ul>

                    </div>



                    {/* <div class="container">
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
                            <li class="productItem" id="a6">
                                <div class="txt">
                                    <div class="txt_1">
                                        <h3 class="subTitle">臺中市榮民服務處</h3>
                                        <p>陳宗貴處長，頒贈感謝狀</p>
                                        <p>慷慨捐助認養榮民遺孤，贊助之情</p>
                                    </div>
                                    <br></br>


                                    <img src="https://i.imgur.com/R1tt6Lf.jpg" alt="圖文1" />






                                </div>

                                <img src="https://i.imgur.com/N4DneXd.jpg" alt="圖文1" />
                            </li>
                        </ul>
                    </div> */}
                </section>


            </div>

        </>
    )
}


export default SocialFeedback