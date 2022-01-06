import React, {useState} from 'react';
import { Link, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import img1 from '../../assets/img/my_test1.png';
import img2 from '../../assets/img/my_test2.png';
import img3 from '../../assets/img/my_test3.png';

<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
  integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
  crossorigin="anonymous"
/>

const MyPageCSS = styled.div`

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
        background-color: lightsteelblue;
        display: flex;
        align-items: center;
        position: relative;
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
        border: solid black 2px;
        width: 70%;
        display: inline-block;
    }

    .body1_2 p{
        /* margin-left: 0; */
    }

    .body1_2_content {
        display: inline-block;
        border: solid black 5px;
    }
    
    /* .body1_2_modal {
        display: inline-block;
        border: solid black 5px;
    } */

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

        <MyPageCSS>
        <div className='body'>
            <div className='body1'> 
                <div className='body1_1'>
                    <img src={img1} width='100%'></img>
                </div>

                <div className='body1_2'>
                    <div className='body1_2_content'>
                        <p> 이름 : <input /></p>
                        <p> 관심운동 : <input /></p>
                        <p> 이런식? : <input /></p>
                    </div>
                        <button onClick={modalChange}>Modal</button>
                
                    <div className='body1_2_modal'>
                        {
                        modal === true
                        ? <Modal modalChange={modalChange}/>
                        : null  // 텅빙 html 이라는 뜻
                        // if 대신 삼항연산자 JSX안의 {} 내에서 쓰기 가능
                        // 조건식 ? 참일때 실행할 코드 : 거짓일때 실행할 코드
                        }
                    </div>
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
                        <h4>test1</h4>
                        <p>근데 이미지가 안들어감. why?</p>
                    </div>
                    <div className="col-md-4">
                        <h4>test2</h4>
                        <p>외부링크만 들어가지는데 왜그런지 모륵겠다. 그렇다는건 .. 이거를 직접 코드짜서 구조를 잡아야할듯</p>
                    </div>
                    <div className="col-md-4">
                        <h4>test3</h4>
                        <p>이제 여기 이미지에 db이미지를 넣고 클릭했을때 해당 db가 떠야하는거네</p>
                    </div>
                    <div className="col-md-4">
                        <h4>test4</h4>
                        <p>text test</p>
                    </div>
                    <div className="col-md-4">
                        <h4>test5</h4>
                        <p>이제 여기 이미지에 db이미지를 넣고 클릭했을때 해당 db가 떠야하는거네</p>
                    </div>

                </div>
            </div>
        </div>
        </MyPageCSS>

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
            <p>옆 페이지 수정</p>
            <p>옆 페이지 수정</p>
    
            <button onClick={props.modalChange}className="Nav_modbtn">X</button>
        </div>
      </div>
      </>
    )
  }

export default MyPage;