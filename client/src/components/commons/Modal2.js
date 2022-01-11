import React, {useRef, useEffect, useCallback} from "react";
import {useSpring, animated} from 'react-spring'
import styled from "styled-components";
import {MdClose} from 'react-icons/md'
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
// import { SliderData } from './SliderData';
import ImageSlider from "./ImageSlider";
// import ImageSlider1 from "./ImageSlider1";


// import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';


const Background = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalWrapper = styled.div`
  width: 800px;
  height: 500px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: relative;
  z-index: 10;
  border-radius: 10px;

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

  .ImgSlider slides{
    width: 100%;
  height: 100%;
  border-radius: 10px 0 0 10px;
  background: #000;
  background-color: grey;
  }
  
`;

// 모달 이미지 설정 해보기
const ImageSlider1  = styled.slides`
  width: 100%;
  height: 100%;
  border-radius: 10px 0 0 10px;
  background: #000;
  background-color: grey;
`;


const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.8;
  color: #141414;
  p {
    margin-bottom: 1rem;
  }
  button {
    padding: 10px 24px;
    background: #141414;
    color: #fff;
    border: none;
  }
`;

const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
`;

// 이미지 데이터
const SliderHomeData ={
  "images" : [
      "crossfit1",
      "crossfit2",
      "crossfit3",
      "climbing1",
      "ski2"
      
  ]
}

const SliderCrossfitData ={
  "images" : [
      "sport1",
      "sport2",
      "sport3"
      
  ]
}

const SliderSportData ={
  "images" : [
      "crossfit1",
      "crossfit2",
      "crossfit3"
      
  ]
}

const SliderClimbingData ={
  "images" : [
      "crossfit1",
      "crossfit2",
      "crossfit3"
      
  ]
}

const SliderHikingData ={
  "images" : [
      "crossfit1",
      "crossfit2",
      "crossfit3"
      
  ]
}

const SliderLeisureData ={
  "images" : [
      "crossfit1",
      "crossfit2",
      "crossfit3"
      
  ]
}


const SliderHome = SliderHomeData.images.map( img =>{
  return <img src={require('../../assets/img/' + img +'.png')} />
})

const SliderCross = SliderCrossfitData.images.map( img =>{
  return <img src={require('../../assets/img/' + img +'.png')} />
})

const SliderSport = SliderSportData.images.map( img =>{
  return <img src={require('../../assets/img/' + img +'.png')} />
})

const SliderClimbing = SliderClimbingData.images.map( img =>{
  return <img src={require('../../assets/img/' + img +'.png')} />
})

const SliderHiking = SliderHikingData.images.map( img =>{
  return <img src={require('../../assets/img/' + img +'.png')} />
})

const SliderLeisure = SliderLeisureData.images.map( img =>{
  return <img src={require('../../assets/img/' + img +'.png')} />
})



export const Modal2 = ({showModal, setShowModal  }) => {
    
    const modalRef = useRef()


    // 애니메이션 가쟈오기, 구성
    const animation = useSpring({
        config: {
            duration: 250
        },
        // 모달 표시 아니면 0
        // true or false
        opacity: showModal ? 1:0,
        transform: showModal? `translateY(0%)` : `translateY(-100%)`

    })

    // 모달 바깥 부분 클릭시 clsoe
    const closeModal = e => {
        if(modalRef.current ===e.target) {
            setShowModal(false);
        }
    }

    // callback,escape 영역
    // 배열전달
    const keyPress = useCallback( e => {
        if(e.key === 'Escape' && showModal) {
            setShowModal(false)
            console.log('click');
        }
    },[setShowModal,showModal]);

    // 함수호출
    // 위에 함수가 100번이라도 재호출 되면 짜증나므로
    useEffect(() => {
        document.addEventListener('keydown', keyPress);
        return () => document.removeEventListener('keydown',keyPress);
    },[keyPress])

    
    return (
        <>
          {showModal ? (
            <Background ref={modalRef} onClick={closeModal}>
              {/* <animated.div style={animation}> */}
                <ModalWrapper showModal={showModal}>
                  <ImageSlider slides={SliderCross} className="ImageSlider" />
                  <ModalContent>
                    <h1>Just Do</h1>
                    <p>Get your life more fresh</p>
                    <br/>
                    <br/>
                    <button>Click me (누르면 이동 사이트)? </button>
                  </ModalContent>
                  <CloseModalButton
                    aria-label='Close modal'
                    onClick={() => setShowModal(prev => !prev)}
                  />
                </ModalWrapper>
              {/* </animated.div> */}
            </Background>
          ) : null}
          
        </>
      );
    };