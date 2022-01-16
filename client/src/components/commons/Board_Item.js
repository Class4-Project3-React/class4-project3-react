import React from 'react';
import styled from "styled-components";
import { Link } from 'react-router-dom';

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

function Board_Item({id, name, title, content, image}) {

    return (
        <>
          <BoardBox>
            <ImgBox>
                <Link to={{
                    pathname:"/board/detail",
                    search:`?id=${id}`
                }}>
                    <BoardImg>
                        <ImgEle 
                            src={image} 
                        />
                    </BoardImg>
                </Link>
                <BoardTitle>
                    {title}
                </BoardTitle>
                <BoardContent>
                    {content}
                </BoardContent>
            </ImgBox>
              <InfoBox>
                  <BoardDate>
                      2022.01.02
                  </BoardDate>
                  <BoardWriter>
                      {name}
                  </BoardWriter>
              </InfoBox>
          </BoardBox>
        </>
    );
}

export default Board_Item;