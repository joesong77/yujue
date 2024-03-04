import React from "react";
import './ServiceItem.css'
// import Avatar from '@mui/material/Avatar';
import TopicButton from "../../components/TopicButton/TopicButton";



function ServiceItem() {
    const DataJson = [

        {
            id: 1,
            image: "https://i.imgur.com/rpnylU3.png",
            Title: "業主顧問-發包",
            Text: [{
                Itext: "專案開發"
            }, {
                Itext: "可行性研究"
            }, {
                Itext: "專案管理"
            }, {
                Itext: "主計畫規劃"
            }, {
                Itext: "總顧問"
            }, {
                Itext: "工程規劃"
            }]


        },
        {
            id: 2,
            image: "https://i.imgur.com/E3YWIOy.png",
            Title: "業主顧問-設計",
            Text: [{
                Itext: "設計顧問"
            }, {
                Itext: "監造顧問"
            }, {
                Itext: "環境影響評估顧問"
            }]
        },
        {

            id: 3,
            image: "https://i.imgur.com/gV4NJ1I.png",
            Title: "業主顧問-施工",
            Text: [{
                Itext: "營建管理"
            }, {
                Itext: "施工監造"
            }, {
                Itext: "計畫管理"
            }, {
                Itext: "風險管理"
            }, {
                Itext: "工程現況評估"
            }, {
                Itext: "營運測試"
            }, {
                Itext: "設施管理諮詢"
            }, {
                Itext: "工地現勘及調查"
            }]
        },



    ]
    return (
        <>
            <TopicButton name='服務項目' />

            {/* <div className="ServiceItem-main" >
                  {DataJson.map((item) => (
                <div>
                    <Avatar alt="Remy Sharp" src={item.image} sx={{ width: 150, height: 150 }} />
                    <h3>{item.Title}</h3>

                </div>
                  ))}



            </div> */}
            <br />
            <br />
            <div className="ServiceItem-imgList">

                {DataJson.map((item) => (
                    <div className="ServiceItem-imgList-container">
                        <img src={item.image} alt="aa" className="ServiceItem-imgList-img" />
                        <p className="ServiceItem-imgList-tip">
                            {item.Title}
                        </p>
                        {item.Text.map((item2)=> (
                        <div className="ServiceItem-imgList-txt">
                            

                            <ul>
                                <li>
                                    {item2.Itext}
                                    
                                </li>
                            </ul>
                        </div>
                          ))}


                    </div>

                ))}
             

            </div>

        </>
    )
}


export default ServiceItem