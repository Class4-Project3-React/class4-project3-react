import React, { useState, useEffect } from "react";
import Axios from "axios";
import styled from "styled-components";
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import img1 from '../../assets/img/my_test1.png'
import img2 from '../../assets/img/my_test2.png'
import img3 from '../../assets/img/my_test3.png'


<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
  integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
  crossorigin="anonymous"
/>

const LikeCSS = styled.div`

    .body{
        padding-left: 20%;
        padding-right: 20%;
        text-align: center;
    }

    .container {
        /* background-color: rgb(226, 226, 226); */
        font-family: 'Roboto', sans-serif;
    }

    .col-md-4 {
        /* border: solid black 2px; */
        margin-bottom: 30px;
    }

    .item {
        background-color: rgb(226, 226, 226);
        border-radius: 15px;
        border: solid gray 1px;
        margin : 10px;
        /* height: 150px; */
    }

    .item h4 {
        margin: 10px;
    }

    .x_button{
        margin: 10px;
    }
`
function MyPageLike() {

    const [modal, setModal] = useState(false);  // 모달창을 켜고 닫는 스위치

    const [name, setName] = useState('');
    const [profile, setProfile] = useState('');
    const [favorite, setFavorite] = useState('');
    const [mypage, setMypage] = useState([]);

    useEffect( () => {
        Axios.get('http://localhost:3001/api/get').then((response)=>{
          // console.log(response.data);
          setMypage(response.data);
        })
      }, [])
    
    const deleteReview = (name) => {
    Axios.delete(`http://localhost:3001/api/delete/${name}`);
    }

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

        <LikeCSS>
            <div className="body">                
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
        </LikeCSS>
        </>
        )
    }
    
    export default MyPageLike;


                        // <div className="col-md-4">
                        //     <div className="item">
                        //         <img src={img3} width='100%'></img>
                        //     </div>
                        // </div>