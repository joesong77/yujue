import React from "react";
import './ServiceItem.css'
// import Avatar from '@mui/material/Avatar';
import TopicButton from "../../components/TopicButton/TopicButton";



function ServiceItem() {
    const  DataJson = [
       
        {
            id: 1,
            image: "https://i.imgur.com/rpnylU3.png",
            Title: "業主顧問-發包",
            Text:"專案開發⎟可行性研究⎟專案管理⎟主計畫規劃⎟總顧問⎟工程規劃"
            
    
        },
        {
            id: 2,
            image: "https://i.imgur.com/E3YWIOy.png",
            Title: "業主顧問-設計",
            Text:"基本設計⎟細部設計⎟設計覆核"
        },
        {
            id: 3,
            image: "https://i.imgur.com/gV4NJ1I.png",
            Title: "業主顧問-施工",
            Text:"營建管理⎟施工監造⎟計畫管理⎟風險管理⎟工程現況評估⎟現場試驗及實驗室試驗模擬分析⎟現場儀器裝設及監測⎟營運測試⎟環境影響評估⎟設施管理諮詢⎟工址踏勘及調查"
        },
       
       

    ]
    return (
        <>
        <TopicButton name='服務項目'/>
     
            {/* <div className="ServiceItem-main" >
                  {DataJson.map((item) => (
                <div>
                    <Avatar alt="Remy Sharp" src={item.image} sx={{ width: 150, height: 150 }} />
                    <h3>{item.Title}</h3>

                </div>
                  ))}



            </div> */}
            <br/>
            <br/>
            <div className="ServiceItem-imgList">

              {DataJson.map((item) => (
                <div className="ServiceItem-imgList-container">
                <img src={item.image} alt="aa"    className="ServiceItem-imgList-img" />
                <p className="ServiceItem-imgList-tip">
                    {item.Title}
                </p>
                <p className="ServiceItem-imgList-txt"> {item.Text}</p>

                </div>

              ))}

            </div>

        </>
    )
}


export default ServiceItem