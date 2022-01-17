import React, { useState, useEffect } from 'react';
// import styled from "styled-components";
import Axios from 'axios';
import {useLocation} from "react-router-dom";
import styled from "styled-components";
import Yuna_01 from '../../assets/img/yuna_01.jpg';
import { Link } from 'react-router-dom';


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

    margin: 0 auto;
`;

const BoardLine = styled.div`
    width: 1152px;
    height: 20px;
    border-bottom: solid #000957 1px;

    margin: 0 auto;
`;

const DetailContainer = styled.div`
    /* background-color: red; */
    /* border: solid #000957 1px; */
    border-radius: 15px;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px;
    padding: 10px;
    width: 1152px;
    height: 100%;
    margin: 0 auto;
    margin-top: 20px;
    position: relative;
`;

const BoardBackGround = styled.img`
    opacity: 0.5;
    width: 500px;
    position: absolute;
    left: 15%;
    top: 1%;
    touch-action:none;
    z-index: -5;
`;

const TitleNameBox = styled.div`
    /* background-color: yellow; */
    width: 450px;
    margin-top: 30px;
    margin-left: 20px;
`;

const Title = styled.div`
    /* background-color: green; */
    width: 450px;
    /* margin-left: 50px; */
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 20px;
    border: none;
    font-size: 25px;
    text-align: center;
    /* border-bottom: solid 1px #000957; */
    font-weight: bold;
    background: transparent;
`;
const Name = styled.div`
    background-color: red;
    width: 450px;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 20px;
    /* text-align: right; */
    border: none;
    font-size: 13px;
    text-align: center;
    /* border-bottom: solid 1px #000957; */
    font-weight: bold;
    background: transparent;
`;

const ContentBox = styled.div`
    /* background-color: pink; */
    /* margin-top: 20px; */
    margin-left: 20px;
`;

const ContentArea = styled.div`
    /* background-color: blue; */
    padding-top: 20px;
    padding-right: 10px;
    padding-left: 10px;
    width: 450px;
    height: 440px;
    resize: none;
    border: none;
    font-size: 15px;
    outline : none;
    /* border: solid 1px #000957; */
    /* border-top: solid 1px #000957; */
    background: transparent;
`;

const ImageContainer = styled.div`
    /* background-color: pink; */
    /* margin-top: 10px; */
    top: 4%;
    left: 50%;
    /* height: 350px; */
    overflow: hidden;
    position: absolute;
`;

const ImgBox = styled.div`
    /* background-color: yellow; */
    width: 550px;
    height: 550px;
    overflow: hidden;
    /* margin: 0 auto; */
    position: relative;
    /* border-radius: 10px; */
    /* border: solid 1px #000957; */
`;

const ImgEle = styled.img`
    /* background-color: red; */
    width: auto;
    height: auto;
    position: absolute;
    object-fit: cover;
    /* box-shadow: 0px 0px 30px rgb(255, 153, 0); */
    /* box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px; */
    /* box-shadow: 0px 0px 10px rgba(0, 0, 0); */
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
`;

const BtnContainer = styled.div`
    /* background-color: violet; */
    margin-top: 10px;
    margin-bottom: 8px;
`;

const BtnBox = styled.div`
    /* background-color: red; */
    width: 290px;
    margin: 0 auto;
`;

const DeletelBtn = styled.button`
    background-color: rgb(0, 0, 0, 0);
    color: #344CB7;
    font-size: 20px;
    font-weight: bold;
    width: 120px;
    padding: 5px;
    border: none;
    border-bottom: solid 1px #000957;
    cursor: pointer;
    margin-right: 25px;
`;

const CancelBtn = styled.button`
    background-color: rgb(0, 0, 0, 0);
    color: #344CB7;
    font-size: 20px;
    font-weight: bold;
    width: 120px;
    padding: 5px;
    border: none;
    border-bottom: solid 1px #000957;
    cursor: pointer;
    margin-left: 25px;
`;

function Board_Detail() {

    let linkData = useLocation();
    // console.log("Board_Detail + Link + data = " + linkData);
    // console.log("Board_Detail + Link + data.state.id = " + linkData.state.id);
    // console.log("Board_Detail + Link + data + state = " + linkData.state);
    
    const [boardGetDetail, setBoardGetDetail] = useState([]);

    useEffect(async () => {
        await Axios.get(`http://localhost:3001/board/detail/${linkData.state.id}`)
        .then((res) => {
            setBoardGetDetail(res.data);
            // console.log('Board_Detail res = ' + res);
            // console.log('Board_Detail res.data = ' + res.data);
            // console.log('Board_Detail boardGetDetail[0] = ' + boardGetDetail[0]);
            // console.log('Board_Detail res.data[0].name = ' + res.data[0].name);
            // console.log('Board_Detail res.data.name = ' + res.data.name);
            // console.log('Board_Detail ${data.state.id} = ' + `${data.state.id}`);
        });
    },[]);

    const deleteSubmit = async (id) => {
        await Axios.delete(`http://localhost:3001/board/delete/${id}`);
        window.location.href = '/board';
    }

    return(
        <>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@1,900&display=swap" rel="stylesheet" />

            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link href="https://fonts.googleapis.com/css2?family=Gothic+A1&family=Roboto:wght@900&display=swap" rel="stylesheet"></link>
            {boardGetDetail.map((item, index) => (
                <div key={index}>
                        <BoardPublicTitle>
                            INFORMATION
                        </BoardPublicTitle>
                        <BoardLine />
                        <DetailContainer>
                            <BoardBackGround src={Yuna_01} />
                            <TitleNameBox>
                                <Title>
                                    {item.title}
                                </Title>    
                                <Name>
                                    {item.name}
                                </Name>
                            </TitleNameBox>
                            <ContentBox>
                                <ContentArea>
                                {item.content}
                                </ContentArea>
                            </ContentBox>
                            <ImageContainer>
                                <ImgBox>
                                    <ImgEle 
                                        src={item.image}
                                    />
                                </ImgBox>
                                
                            </ImageContainer>

                            <BtnContainer>
                                <BtnBox>
                                    <DeletelBtn onClick={() => {deleteSubmit(item.id)}}>DELETE</DeletelBtn>
                                    <Link to={"/board"}>
                                        <CancelBtn>BACK</CancelBtn>
                                    </Link>
                                </BtnBox>
                            </BtnContainer>
                        </DetailContainer>
                    </div>
                ))}
        </>
    );

    // 최상단 div 에 index 키값을 주어 키 오류 막음 (원본)
    // return(
    //     <>
    //         {boardGetDetail.map((item, index) => (
    //             <div key={index}>
    //                 <Test1 >
    //                     {item.id}
    //                 </Test1>

    //                 <Test2>
    //                     {item.name}
    //                 </Test2>

    //                 <Test3>
    //                     {item.title}
    //                 </Test3>

    //                 <Test4>
    //                     {item.content}
    //                 </Test4>

    //                 <Test5 src={item.image} />

    //             </div>
    //         ))}
    //     </>
    // );
}

export default Board_Detail;