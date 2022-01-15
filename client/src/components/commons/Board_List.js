import React, { useState, useEffect, useCallback } from 'react';
import styled from "styled-components";
import Axios from 'axios';
// import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import img_Add from '../../assets/img/pencil_01.png';

const BoardComponent = styled.div`
    /* background-color: rgba(255, 105, 180, 0.548); */
    max-width: 1152px;
    height: 100vh;
    margin: 0 auto;
`;

const BoardPublicTitle = styled.div`
    width: 1152px;
    height: 80px;
    line-height: 80px;
    color: #000957;
    font-size: 35px;
    border-radius: 12px;
    border: solid #000957 1px;
    font-family: 'Roboto', sans-serif;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px;
    text-align: center;
    vertical-align: middle;
    position: relative;
`;

const BoardLine = styled.div`
    width: 1152px;
    height: 20px;
    border-bottom: solid #000957 1px;
`;

const BoardContainer = styled.div`
    /* background-color: red; */
    width: 384px;
    float: left;
`;

const BoardBox = styled.div`
    /* background-color: yellow; */
    /* width: 300px; */
    width: 100%;
    margin: auto;
    margin-top: 20px;
`;

const ImgBox = styled.div`
    position: relative;
    border-radius: 10px;
    width: 365px;
    height: 375px;
    overflow: hidden;
    margin-left: 9px;
`;

const BoardImg = styled.div`
    /* width: 350px; */
    /* height: 377px; */
    /* overflow: hidden; */
    /* position: relative; */
    /* border-radius: 10px; */
`;

const ImgEle = styled.img`
    object-fit: cover;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
`;

const BoardTitle = styled.div`
    /* background-color: grey; */
    bottom: 20%;
    width: 300px;
    height: 30px;
    position: absolute;
    color: white;
    font-weight: 700;
    margin-left: 15px;
    font-size: 20px;
    font-weight: bold;
    mix-blend-mode: difference;
    font-family: 'Gothic A1', sans-serif;

    /* 줄바꿈 방지 */
    white-space : nowrap; 
    /* 넘어가면 안보이게 */
    overflow : hidden;
    /* 끝에 ... 처리 */
    text-overflow : ellipsis;
`;
const BoardContent = styled.div`
    /* background-color: green; */
    bottom: 8%;
    width: 340px;
    position: absolute;
    color: white;
    font-weight: 700;
    margin-left: 10px;
    mix-blend-mode: difference;
    font-family: 'Gothic A1', sans-serif;

    line-height: 1.2;
    /* 줄바꿈 방지 */
    /* white-space : nowrap;  */
    /* 넘어가면 안보이게 */
    overflow : hidden;
    /* 끝에 ... 처리 */
    text-overflow : ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    /* 표출될 텍스트 줄 수 */
    -webkit-line-clamp: 2;
`;

const InfoBox = styled.div`
    /* background-color: red; */
    width: 365px;
    height: 25px;
    /* margin-top: 5px; */
    /* margin-left: 9px; */
    /* border-bottom: 1px solid #000957; */

    position: absolute;
    bottom: 0%;
`;

const BoardDate = styled.div`
    /* background-color: green; */
    float: left;
    margin-left: 18px;
    font-family: 'Gothic A1', sans-serif;
    color: white;
    mix-blend-mode: difference;
`;

const BoardWriter = styled.div`
    /* background-color: violet; */
    float: right;
    margin-right: 18px;
    font-size: 18px;
    color: white;
    mix-blend-mode: difference;
    
    /* color: #344CB7; */

    font-family: 'Gothic A1', sans-serif;
`;

const AddBtnImg = styled.img`
    right: 8px;
    top: 8px;
    /* transform: translate(-50%, 0); */
    width: 60px;
    /* position: fixed; */
    position: absolute;
`;



function Board_List() {

    const [boardGetData, setBoardGetData] = useState([]);

    useEffect(async () => {
        await Axios.get("http://localhost:3001/board/get")
        .then((res) => {
            setBoardGetData(res.data);
            // console.log("Board_List res = " + res);
            // console.log("Board_List res.data = " + res.data);
            // console.log("Board_List res.data[0].id = " + res.data[1].id);
        });
    },[]);

    // setBoardGetData({ ...boardGetData });
    
    
    
    // <h2>
    //     TEST: 
    //     {item.id}
    //     {item.name}
    //     {item.title}
    //     {item.content}
    //     {item.image}
    // </h2>

    return (
        <>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link href="https://fonts.googleapis.com/css2?family=Gothic+A1&family=Roboto:wght@900&display=swap" rel="stylesheet"></link>

            <BoardComponent>
                <BoardPublicTitle>
                    SHARE SPORTS INFORMATION
                    <Link to="/board/Write">
                        <AddBtnImg src={img_Add}/>
                    </Link>
                </BoardPublicTitle>
                <BoardLine />
                {boardGetData && boardGetData.map((item, index) => {
                    return (
                        
                            <BoardContainer key={index}>
                                <BoardBox>
                                    <ImgBox>
                                        <Link to={`/board/detail/${item.id}`}
                                            // state: {id: item.id}
                                            state={{
                                                id: item.id,
                                            //     name: item.name,
                                            //     title: item.title,
                                            //     content: item.content,
                                            //     image: item.image
                                            }} 
                                                // id: item.id
                                        >
                                            <BoardImg>
                                                <ImgEle 
                                                    src={item.image} 
                                                />
                                            </BoardImg>
                                        </Link>
                                        <BoardTitle>
                                            {item.title}
                                        </BoardTitle>
                                        <BoardContent>
                                            {item.content}
                                        </BoardContent>

                                        <InfoBox>
                                        <BoardDate>
                                            2022.01.02
                                        </BoardDate>
                                        <BoardWriter>
                                            {item.name}
                                        </BoardWriter>
                                    </InfoBox>
                                    </ImgBox>
                                </BoardBox>
                            </BoardContainer>
                    );
                })}
            </BoardComponent>
        </>
    );
}

export default Board_List;