import React from 'react';
import './Performance.css'

function Proformance() {

    const caseJson = [
        {
            id: 1,
            image: "https://i.imgur.com/55ERKcf.jpg",
            caseName: "育勤營區第二階段統包工程",
        },
        {
            id: 2,
            image: "https://i.imgur.com/55ERKcf.jpg",
            caseName: "凌雲崗營區新建統包工程",
        }
    ]
    return (
        <>
            <div className='performanceMain' >
                {caseJson.map((item) => (
                    <div key={item.id}  className='caseMain'>

                        <img src={item.image} width={300} alt={item.caseName} />
                        <p>{item.caseName}</p>


                    </div>
                ))}
            </div>

        </>
    )
}


export default Proformance