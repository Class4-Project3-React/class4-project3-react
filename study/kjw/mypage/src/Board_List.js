import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import Modal from "react-modal";
import Board_Write from './Board_Write';
import img_IU from '../../assets/img/img_IU.jpg';
import img_Add from '../../assets/img/pencil_01.png';
import Axios from 'axios';

const BoardComponent = styled.div`
    background-color: rgba(255, 105, 180, 0.548);
    max-width: 1100px;
    height: 100vh;
    margin: 0 auto;
    /* padding: 0 150px 0 150px; */
`;

const BoardContainer = styled.div`
    background-color: red;
    width: 33%;
    float: left;
`;

const BoardBox = styled.div`
    /* width: 300px; */
    width: 100%;
    margin: auto;
    margin-top: 30px;
`;

const ImgBox = styled.div`
    position: relative;
`;

const BoardImg = styled.div`

`;

const ImgEle = styled.img`
    border-radius: 30px;
    /* width: 300px; */
    width: 100%;
    overflow: hidden;
`;

const BoardTitle = styled.div`
    bottom: 10%;
    width: 300px;
    position: absolute;
    color: white;
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

const AddBtnContainer = styled.div`
    width: 1400px;
    position: fixed;
    bottom: 5%;
`;

const AddBtnImg = styled.img`
    margin-left: 50%;
    transform: translate(-50%, 0);
    width: 70px;
`;

//***** 모달 start
const WriteContainer = styled.div`
    /* background-color: red; */
    border: 3px solid #000957;
    border-radius: 15px;
    padding: 50px;
`;

const ViewTitle = styled.div`
    /* background-color: orange; */
    /* color: rgb(90, 90, 90); */
    color: #344CB7;
    font-size: 30px;
    font-weight: bold;
`;

const TitleBox = styled.div`
    /* background-color: yellow; */
    margin-top: 30px;
`;

const Title = styled.input`
    /* background-color: green; */
    width: 90%;
    padding-top: 15px;
    padding-bottom: 15px;
    border: none;
    font-size: 22px;
    border-bottom: solid 1px #000957;
    font-weight: bold;
    outline : none;
    &::placeholder {
        color: #577BC1;
    }
`;

const ContentBox = styled.div`
    /* background-color: pink; */
    margin-top: 30px;
`;

const ContentArea = styled.textarea`
    /* background-color: blue; */
    width: 90%;
    resize: none;
    border: none;
    height: 500px;
    outline : none;
    &::placeholder {
        color: #577BC1;
    }
`;

const BtnContainer = styled.div`
    /* background-color: violet; */
    margin-top: 30px;
`;

const AddBtn = styled.button`
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
//***** 모달 end


Modal.setAppElement('#root');

function Board_List() {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const [boardItem, setBoardItem] = useState([]);

    const AddSubmit = () => {
        Axios.post("http://localhost:3001/board/Insert", {
            title: title,
            content: content,
    }).then(() => {
        console.log("중탈이가 아이가")
        setBoardItem([
        ...boardItem,
        {
            title: title,
            content: content,
        },
      ]);
    });
  };


    return (
        <>
            <BoardComponent>
                <Modal 
                    isOpen={modalIsOpen} 
                    onRequestClose={() => setModalIsOpen(false)}
                    style={{
                        overlay: {
                        position: "fixed",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: "rgba(255, 255, 255, 0.75)",
                        },
                        content: {
                        width: "650px",
                        height: "900px",
                        position: "absolute",
                        top: "50%",
                        left: " 50%",
                        transform: "translate(-50%, -50%)",
                        border: "1px solid #eee",
                        borderRadius: "15px",
                        background: "#fff",
                        overflow: "auto",
                        WebkitOverflowScrolling: "touch",
                        outline: "none",
                        padding: "20px",
                        textAlign: "center",
                        },
                    }}
                >
                 <WriteContainer>
                    <ViewTitle>글쓰기</ViewTitle>
                    <TitleBox>
                        <Title 
                            type='text'
                            name='title'
                            onChange={(event) => {
                                setTitle(event.target.value)}} 
                            placeholder='제목'
                        />
                    </TitleBox>
                    <ContentBox>
                        <ContentArea
                            type='text'
                            name='content'
                            onChange={(event) => {
                                setContent(event.target.value)}} 
                            placeholder='내용을 입력하세요.'
                        />
                    </ContentBox>

                    <BtnContainer>
                        <AddBtn onClick={AddSubmit}> ADD </AddBtn>
                        <CancelBtn onClick={()=> setModalIsOpen(false)}> CANCEL </CancelBtn>
                    </BtnContainer>
                </WriteContainer>
                    {/* <Board_Write /> */}
                </Modal>

               

                <BoardContainer>
                    <BoardBox>
                        <ImgBox>
                            <BoardImg>
                                <ImgEle 
                                    src={img_IU} 
                                />
                            </BoardImg>
                            <BoardTitle>
                                Title Title Title Title Title Title Title Title Title Title Title Title Title
                            </BoardTitle>
                        </ImgBox>
                        <InfoBox>
                            <BoardDate>
                                2022.01.02
                            </BoardDate>
                            <BoardWriter>
                                아이유
                            </BoardWriter>
                        </InfoBox>
                    </BoardBox>
                    <AddBtnContainer>
                        <AddBtnImg 
                            src={img_Add} onClick={()=> setModalIsOpen(true)}
                        />
                    </AddBtnContainer>
                </BoardContainer>

            </BoardComponent>
        </>
    );
}

export default Board_List;