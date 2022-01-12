import React, { useState, useEffect } from "react";
import Axios from "axios";
import styled from "styled-components";
import { Button } from 'react-bootstrap';
import TodoModal from "./MyPage_TodoModal";
import 'bootstrap/dist/css/bootstrap.min.css';

<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
  integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
  crossorigin="anonymous"
/>

const TodoCSS = styled.div`

    .body{
        margin-left: 20%;
        margin-right: 20%;
        text-align: center;
    }

    .container {
        /* background-color: rgb(226, 226, 226); */
        font-family: 'Roboto', sans-serif;
    }

    .col-md-4 {
        /* border: solid black 2px; */
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
function MyPageTodo() {

    const [modal, setModal] = useState(false);  // 모달창을 켜고 닫는 스위치

    const [title, setTitle] = useState('');
    const [contents, setContents] = useState('');
    const [mypage, setMypage] = useState([]);

    useEffect( () => {
        Axios.get('http://localhost:3001/api/get').then((response)=>{
          // console.log(response.data);
          setMypage(response.data);
        })
      }, [])
    
    const deleteReview = (title) => {
    Axios.delete(`http://localhost:3001/api/delete/${title}`);
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

        <TodoCSS>
            <div className="body">                
                <Button variant="secondary" size="sm" onClick={modalChange}>Add your TodoList!</Button>
                <br/>
                <div>
                    {
                    modal === true
                    ? <TodoModal modalChange={modalChange}/>
                    : null  // 텅빙 html 이라는 뜻
                    // if 대신 삼항연산자 JSX안의 {} 내에서 쓰기 가능
                    // 조건식 ? 참일때 실행할 코드 : 거짓일때 실행할 코드
                    }
                </div>
                <br/>
                <div className="container">
                    <div className="row">
                        
                            {mypage.map( (val, i) => {
                                return (
                                    <>
                                    <div className="col-md-4" key={i}>
                                        <div className="item">
                                            <h4>{val.title}</h4>
                                            <p>{val.contents}</p>
                                            <Button className='x_button' size="sm" variant="outline-dark" onClick={ () => {deleteReview(val.title)}}>X</Button>
                                        </div>
                                    </div>
                                    </>
                                )
                            })}
                                                
                    </div>
                </div>
            </div>
        </TodoCSS>
        </>
        )
    }
    
    export default MyPageTodo;