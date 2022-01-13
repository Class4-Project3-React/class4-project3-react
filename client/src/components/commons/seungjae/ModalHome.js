import React, {useRef, useEffect, useCallback} from "react";
import styled from "styled-components";
import {MdClose} from 'react-icons/md'
import ImageSliderHome from "./ImageSliderHome";


const Background = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  top:0;
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

  .ImgSlider slides{
    width: 100%;
  height: 100%;
  border-radius: 10px 0 0 10px;
  background: #000;
  background-color: grey;
  }
  
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
      "climbing1",
      "climbing2",
      "climbing3"
      
  ]
}


const SliderHome = SliderHomeData.images.map( img =>{
  return <img src={require('../../../assets/img/' + img +'.png')} />
})


export const ModalHome = ({showModal, setShowModal  }) => {
    
    const modalRef = useRef()

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
        {/* 삼항 연산자로 배경화면 클릭 or 메인내용 클릭 */}
          {showModal ? (
            // 백그라운드 클릭시 클로우즈 모달 실행
            <Background ref={modalRef} onClick={closeModal}>
                {/* 이미지 데이터 가져오기 */}
                <ModalWrapper showModal={showModal}>
                  <ImageSliderHome slides={SliderHome} className="ImageSlider" />
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
            </Background>
          ) : null}
          
        </>
      );
    };