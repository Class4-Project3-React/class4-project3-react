import React, { useState } from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom';
import img1 from '../../assets/img/my_test1.png'


const ProfileCSS = styled.div`

    .body{
        margin-left: 20%;
        margin-right: 20%;
        text-align: center;
    }

    .container {
        height: 200px;
    }

    .col-md-4 {
        background-color: lightcoral;
        height: 200px;
        display: flex;
        align-items: center;
        position: relative;
    }

    .profile {
        display: inline-block;
        background-color: white;
        width: 150px;
        height: 150px;
        border-radius: 50%;
        margin-left:auto;
        margin-right: auto;
    }

    .profile img {
        border: solid #344CB7 2px;
        border-radius: 50%;
    }

    .col-md-8 {
        background-color: lightgreen;
        height: 200px;
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
`

function MyPageProfile() {

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

        <ProfileCSS>
            <div className='body'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="profile">
                                <img src={img1} width='100%'></img>
                            </div>
                        </div>
                        <div className="col-md-8">asdf</div>
                    </div>
                </div>
                <br/>
                {/* ==================== */}

                <div className='option'>
                    <Link className='option1' style={{ textDecoration: 'none' }} to="/mypage">📑 Todo</Link>
                    <Link className='option2' style={{ textDecoration: 'none' }} to="/like">❤️ Like</Link>
                </div>
            </div>
        </ProfileCSS>
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
    
    export default MyPageProfile;