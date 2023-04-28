import React from 'react';
import './Performance.css'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import TopicButton from '../../components/TopicButton/TopicButton';

function Proformance() {

    const caseJson = [
        {
            id: 1,
            image: "https://i.imgur.com/rzHBV8V.jpg",
            caseName: "陸軍八軍團-九曲堂營區",
        },
        {
            id: 2,
            image: "https://i.imgur.com/W2SC2mj.jpg",
            caseName: "陸軍司令部教準部-大漢營區",
        },
        {
            id: 3,
            image: "https://i.imgur.com/8COfysH.jpg",
            caseName: "軍備局-后里營區",
        },
        {
            id: 4,
            image: "https://i.imgur.com/Goq8A2L.jpg",
            caseName: "軍備局-育勤二營區",
        },
        {
            id: 5,
            image: "https://i.imgur.com/dIbsGSJ.jpg",
            caseName: "海軍-屏北暨太麻里營區",
        },
        {
            id: 6,
            image: "https://i.imgur.com/iR433T1.jpg",
            caseName: "陸軍六軍團-凌雲崗營區",
        },
        {
            id: 7,
            image: "https://i.imgur.com/2URxvPc.jpg",
            caseName: "陸軍六軍團-淡水營區",

        },

    ]
    return (
        <>
         <TopicButton name='工程實績'/>
            <div className='performanceMain' >
                {/* {caseJson.map((item) => (
                    <div key={item.id}  className='caseMain'>

                        <img src={item.image} width={300} height={200} alt={item.caseName} />
                        <h4>{item.caseName}</h4>
                        <p>統包團隊顧問</p>


                    </div>
                ))} */}

                <ImageList  cols={3}  gap={2} rowHeight={'auto'} className='image-List'>

                    {caseJson.map((item) => (
                        <ImageListItem key={item.image} >
                            <img
                                src={`${item.image}?w=248&fit=crop&auto=format`}
                                srcSet={`${item.image}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                alt={item.caseName}
                                loading="lazy"
                                width={400}
                                height={150}

                            />
                            <ImageListItemBar
                                title={item.caseName}
                                subtitle='統包團隊顧問'

                            />
                        </ImageListItem>
                    ))}
                </ImageList>

             
            </div>

        </>
    )
}


export default Proformance