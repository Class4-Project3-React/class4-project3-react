import React, { useState } from 'react';
// import { SliderData } from './SliderData';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import styled from 'styled-components';
import Img1 from '../../../assets/img/leisure1.png'
import Img2 from '../../../assets/img/leisure2.png'
import Img3 from '../../../assets/img/leisure3.png'
import Img4 from '../../../assets/img/leisure4.png'
import Img5 from '../../../assets/img/leisure5.png'

const Main11 = styled.div`
.right-arrow {
  position: absolute;
  top: 50%;
  right: 32px;
  font-size: 3rem;
  color: black;
  z-index: 10;
  cursor: pointer;
  user-select: none;
  }

  .left-arrow {
  position: absolute;
  top: 50%;
  left: 32px;
  font-size: 3rem;
  color: black;
  z-index: 10;
  cursor: pointer;
  user-select: none;
}
`




const ImageSliderLeisure = ({ slides }) => {

    const SliderData = [
        {
          image: Img1
        },
        {
          image:Img2
        },
        {
          image:Img3
        },
        {
          image:Img4
        },
        {
          image:Img5
        }
      ];
    // const ImgDataCross ={
    //     "images" : [
    //         "crossfit1",
    //         "crossfit2",
    //         "crossfit3"
            
    //     ]
    // }

    // const MyImagesC = ImgDataCross.images.map( img =>{
    //     return <img src={require('./components/img/' + img +'.png')} />
    // })

  const [current, setCurrent] = useState(0);
  const length = slides.length;

// 지정 이미지수 넘어가면 처음으로 돌아가기
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
    console.log("cliick")

  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }
  return (
    <div className='slider'>
      <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
      <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} />
      {SliderData.map((slide, index) => {
        return (
            <>
                <div className={index === current ? 'slide active' : 'slide' } key={index} >
                {index === current && (
                  <img src={slide.image} alt='travel imge' className='image' max-width="100%" width="auto" display="table"/>
                )}
                </div>
            </>
        )          
      })}
    </div>
  );
};

export default ImageSliderLeisure;