import React from "react";
import './ServiceItem.css'
import Avatar from '@mui/material/Avatar';




function ServiceItem() {
    const  DataJson = [
       
        {
            id: 1,
            image: "https://i.imgur.com/rpnylU3.png",
            Title: "業主顧問-發包",
        },
        {
            id: 2,
            image: "https://i.imgur.com/E3YWIOy.png",
            Title: "業主顧問-設計",
        },
        {
            id: 3,
            image: "https://i.imgur.com/gV4NJ1I.png",
            Title: "業主顧問-施工",
        },
       
       

    ]
    return (
        <>

            <div className="ServiceItem-main" >
                  {DataJson.map((item) => (
                <div>
                    <Avatar alt="Remy Sharp" src={item.image} sx={{ width: 150, height: 150 }} />
                    <h3>{item.Title}</h3>

                </div>
                  ))}



            </div>

        </>
    )
}


export default ServiceItem