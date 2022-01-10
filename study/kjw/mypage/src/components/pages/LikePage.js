import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import img1 from '../../assets/img/my_test1.png';
import img2 from '../../assets/img/my_test2.png';
import img3 from '../../assets/img/my_test3.png';

<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
  integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
  crossorigin="anonymous"
/> 

const LikePageCSS = styled.div`

    .body{
        margin-left: 20%;
        margin-right: 20%;
    }

    div {
        text-align: center;
    }

    .body1 {
        width: 100%;
        height: 200px;
        /* background-color: lightsteelblue; */
        display: flex;
        align-items: center;
        position: relative;
        /* font-family: 'Gothic A1', sans-serif; */
    }

    .body1_1 {
        width: 150px;
        height: 150px;
        border-radius: 50%;
        display: inline-block;
        margin: 50px;
        /* padding: 50px; */
    }

    .body1_1 img {
        border: solid #344CB7 2px;
        border-radius: 50%;
    }

    .body1_2 {
        width: 50%;
        display: inline-block;
    }

    .option {
        /* background-color: cadetblue; */
        height: 50px;
        display: flex;
        align-items: center;
        position: relative;
        border-top: solid lightgray 1px;
    }
    .option1 {
        padding: 25px;
        color: black;
        display: block;
        margin-left: auto;
        font-family: 'Roboto', sans-serif;
    }

    .option2 {
        padding: 25px;
        color: black;
        display: block;
        margin-right: auto;
        font-family: 'Roboto', sans-serif;
    }

    .container {
        padding: 30px;
        /* margin: 150px; */
        background-color: rgb(226, 226, 226);
        font-family: 'Roboto', sans-serif;
    }

    .col-md-4 {
        margin-bottom: 30px;
    }

    /* .Nav_modal {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: gray;
    position: fixed;
    opacity: 0.9;
    }

    .Nav_modalin {
        width: 186px;
        height: 186px;
        background-color: white;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        position: fixed;
        border-radius: 14px;
        font-family: "Jalnan";
    }
    
    .Nav_modbtn {
        border: 0px;
        background-color: white;
    } */
    
`

function MyPage() {

    const [modal, setModal] = useState(false);  // 모달창을 켜고 닫는 스위치

    function modalChange() {
        setModal (!modal);   //! 느낌표 기호는 true 왼쪽에 붙이면 false로 바꿔주고, false왼쪽에선 true
      }  

    return (
        <>
        {/* 한글폰트 링크 */}
        {/* <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Gothic+A1&family=Roboto:wght@900&display=swap" rel="stylesheet"></link> */}

        {/* 영문폰트 링크 */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@1,900&display=swap" rel="stylesheet" />

        <LikePageCSS>
        <div className='body'>
            <div className='body1'> 
                <div className='body1_1'>
                    <img src={img1} width='100%'></img>
                </div>

                <div className='body1_2'>
                <button onClick={modalChange}>Modal</button>
                {/* 버튼 클릭하면 나오고 다시 없애는거 해보기 */}

                {
                modal === true
                ? <Modal modalChange={modalChange}/>
                : null  // 텅빙 html 이라는 뜻
                // if 대신 삼항연산자 JSX안의 {} 내에서 쓰기 가능
                // 조건식 ? 참일때 실행할 코드 : 거짓일때 실행할 코드
                }
                </div>
            </div>

            <br />
            
            {/* ==================== */}

            <div className='option'>
                <Link className='option1' style={{ textDecoration: 'none' }} to="/mypage">📑 Mine</Link>
                <Link className='option2' style={{ textDecoration: 'none' }} to="/like">❤️ Like</Link>
            </div>

            {/* ==================== */}

            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <img src={img1} width='100%'></img>
                    </div>

                    <div className="col-md-4">
                        <img src={img1} width='100%'></img>
                    </div>

                    <div className="col-md-4">
                        <img src={img1} width='100%'></img>
                    </div>

                    <div className="col-md-4">
                        <img src={img2} width='100%'></img>
                    </div>

                    <div className="col-md-4">
                        <img src={img2} width='100%'></img>
                    </div>

                    <div className="col-md-4">
                        <img src={img2} width='100%'></img>
                    </div>

                    <div className="col-md-4">
                        <img src={img3} width='100%'></img>
                    </div>
                    <div className="col-md-4">
                        <img src={img3} width='100%'></img>
                    </div>
                    <div className="col-md-4">
                        <img src={img3} width='100%'></img>
                    </div>
                </div>
            </div>
        </div>
        </LikePageCSS>

        </>
    )
}

function Modal(props) { 
    return(
        <>

      <div className='Nav_modal'>
        <div className = "Nav_modalin">
            <p>Modal test</p>
            <p>옆 페이지 수정</p>
            <p>한글폰트 적용test</p>
            <button onClick={props.modalChange}className="Nav_modbtn">X</button>
        </div>
      </div>
      </>
    )
  }

export default MyPage;