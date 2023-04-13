import React from 'react';
import './Performance.css'

function Proformance() {

    const caseJson = [
        {
            id: 1,
            image: "https://i.imgur.com/rzHBV8V.jpg",
            caseName: "九區堂營區",
        },
        {
            id: 2,
            image: "https://i.imgur.com/W2SC2mj.jpg",
            caseName: "大漢營區",
        },
        {
            id: 3,
            image: "https://i.imgur.com/8COfysH.jpg",
            caseName: "后里營區",
        },
        {
            id: 4,
            image: "https://i.imgur.com/Goq8A2L.jpg",
            caseName: "育勤營區",
        },
        {
            id: 5,
            image: "https://i.imgur.com/dIbsGSJ.jpg",
            caseName: "屏北暨太麻里",
        },
        {
            id: 6,
            image: "https://i.imgur.com/iR433T1.jpg",
            caseName: "凌雲崗營區",
        },
        {
            id: 7,
            image: "https://i.imgur.com/2URxvPc.jpg",
            caseName: "淡水營區",

        },

    ]
    return (
        <>
            <div className='performanceMain' >
                {caseJson.map((item) => (
                    <div key={item.id}  className='caseMain'>

                        <img src={item.image} width={300} height={200} alt={item.caseName} />
                        <h4>{item.caseName}</h4>
                        <p>統包團隊顧問</p>


                    </div>
                ))}
            </div>

        </>
    )
}


export default Proformance