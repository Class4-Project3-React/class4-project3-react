import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import Axios from 'axios';
// import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const BoardComponent = styled.div`
    /* background-color: rgba(255, 105, 180, 0.548); */
    max-width: 1100px;
    height: 100vh;
    margin: 0 auto;
    /* padding: 0 150px 0 150px; */
`;

const BoardContainer = styled.div`
    /* background-color: red; */
    width: 33%;
    float: left;
`;

const BoardBox = styled.div`
    /* background-color: yellow; */
    /* width: 300px; */
    width: 100%;
    margin: auto;
    margin-top: 30px;
`;

const ImgBox = styled.div`
    position: relative;
    border-radius: 10px;
    width: 300px;
    height: 300px;
    overflow: hidden;
`;

const BoardImg = styled.div`
    width: 300px;
    height: 300px;
    overflow: hidden;
    /* position: relative; */
    border-radius: 10px;
`;

const ImgEle = styled.img`
    width: 100%;
    width: 300px;
    border-radius: 10px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
`;

const BoardTitle = styled.div`
    bottom: 10%;
    width: 300px;
    position: absolute;
    color: black;
    font-weight: 700;
`;
const BoardContent = styled.div`
    bottom: 0%;
    width: 300px;
    position: absolute;
    color: black;
    font-weight: 700;
`;

const InfoBox = styled.div`
    width: 300px;
    height: 30px;
    margin-top: 5px;
`;

const BoardDate = styled.div`
    float: left;
    margin-left: 15px;
`;

const BoardWriter = styled.div`
    float: right;
    margin-right: 15px;
`;

function Board_List() {

    const [boardGetData, setBoardGetData] = useState([]);

    useEffect(async () => {
        await Axios.get("http://localhost:3001/board/get")
        .then((res) => {
            setBoardGetData(res.data);
          console.log(res);
        });
    },[]);


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
            <BoardComponent>
                {boardGetData && boardGetData.map((item, index) => {
                    return (
                        
                            <BoardContainer key={index}>
                                <BoardBox>
                                    <ImgBox>
                                        <Link to={`/board/detail/${item.id}`}
                                            // state: {id: item.id}
                                            state={{
                                                id: item.id,
                                                name: item.name,
                                                title: item.title,
                                                content: item.content,
                                                image: item.image
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
                                    </ImgBox>
                                    <InfoBox>
                                        <BoardDate>
                                            2022.01.02
                                        </BoardDate>
                                        <BoardWriter>
                                            {item.name}
                                        </BoardWriter>
                                    </InfoBox>
                                </BoardBox>
                            </BoardContainer>
                    );
                })}
            </BoardComponent>
        </>
        
        // REACT PART
        // // boardRead.js
        //    let navigate = useNavigate(); 
        // const [contents, setContents] = useState({});
        
        
        //  const onClick = (e) => {
        //   const idx = e.target.id
        // axios.put("http://localhost:3001/board/hit",{bidx:idx})
        //     .then(response => {
        //       console.log(response);
        //     })
        //     .catch(error => {
        //         console.log(error.response.data)
        //         alert(error.response.data.error)
        //     })
        
        //   navigate(`/board/detail/${idx}`)
        //  }
        // return //-->div
        // <>
        // 작성자 {response.id}
        // 글제목 {response.title}
        // 내용 {response.desc}
        // </>
    );
}

export default Board_List;