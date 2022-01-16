import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";
import Modal from "react-modal";
import Axios from 'axios';
// import img_Add from '../../assets/img/pencil_01.png';
// import MJ_01 from '../../assets/img/MJ_01.jpg';
import MJ_02 from '../../assets/img/MJ_02.jpg';
// import Board_List from './Board_List';

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

const WriteContainer = styled.div`
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
    left: 23%;
    top: 0%;
    touch-action:none;
    z-index: -5;
`;

// const ViewTitle = styled.div`
//     /* background-color: orange; */
//     /* color: rgb(90, 90, 90); */
//     color: #344CB7;
//     font-size: 25px;
//     font-weight: bold;
// `;

const TitleBox = styled.div`
    /* background-color: yellow; */
    margin-top: 10px;
`;

const Title = styled.input`
    /* background-color: green; */
    width: 500px;
    margin-left: 326px;
    padding-top: 10px;
    padding-left: 10px;
    padding-bottom: 10px;
    border: none;
    font-size: 20px;
    border-bottom: solid 1px #000957;
    font-weight: bold;
    outline : none;
    background: transparent;
    &::placeholder {
        color: #577BC1;
    }
`;

const NameBox = styled.div`
    /* background-color: yellow; */
    margin-top: 10px;
`;

const Name = styled.input`
    /* background-color: green; */
    width: 500px;
    margin-left: 326px;
    padding-top: 10px;
    padding-left: 10px;
    padding-bottom: 10px;
    border: none;
    font-size: 15px;
    border-bottom: solid 1px #000957;
    font-weight: bold;
    outline : none;
    background: transparent;
    &::placeholder {
        color: #577BC1;
    }
`;

const ContentBox = styled.div`
    /* background-color: pink; */
    margin-top: 20px;
    margin-left: 43px;
`;

const ContentArea = styled.textarea`
    /* background-color: blue; */
    padding-top: 10px;
    padding-right: 10px;
    padding-left: 10px;
    width: 600px;
    height: 440px;
    resize: none;
    border: none;
    font-size: 15px;
    outline : none;
    border: solid 1px #000957;
    background: transparent;
    &::placeholder {
        color: #577BC1;
    }
`;

const ImageContainer = styled.form`
    /* background-color: pink; */
    /* margin-top: 10px; */
    top: 25%;
    left: 63%;
    /* height: 350px; */
    overflow: hidden;
    position: absolute;
`;

const ImgBox = styled.div`
    /* background-color: yellow; */
    width: 370px;
    height: 370px;
    overflow: hidden;
    /* margin: 0 auto; */
    position: relative;
    border-radius: 10px;
    border: dotted 2px #000957;
    z-index: 0;
`;

const ImgEle = styled.img`
    /* background-color: red; */
    width: 370px;
    height: 370px;
    border-radius: 10px;
    position: absolute;
    object-fit: cover;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
`;

const ImageUploadButtonDetail = styled.label`
    /* padding: 6px 25px; */
    background-color: rgb(255, 255, 255, 0.1);
    border-radius: 4px;
    color: #344CB7;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    font-size: 12px;
    font-weight: bold;
    width: 120px;
    padding: 5px;
    /* border: none; */
    border: solid 1px #000957;
    position: absolute;
    bottom: 3%;
    left: 63%;
    /* transform: translateX(-50%) translateY(-50%); */
`;

const ImageUpload = styled.input`
    /* background-color: blue; */
    width: 90%;
    height: 30px;
    resize: none;
    border: none;
    /* height: 100px; */
    outline : none;
    display: none;
    &::placeholder {
        color: #577BC1;
    }
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

const AddBtnContainer = styled.div`
    width: 1400px;
    position: fixed;
    bottom: 5%;
`;

// const AddBtnImg = styled.img`
//     margin-left: 50%;
//     transform: translate(-50%, 0);
//     width: 70px;
// `;

Modal.setAppElement('#root');

function Board_Write () {
    // const [modalIsOpen, setModalIsOpen] = useState(false);

    const [name, setName] = useState("");
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [image, setImage] = useState("");
    
    const [fileName, setFileName] = useState("");
    const [imgSrc, setImgSrc] = useState("");

    // const [boardItem, setBoardItem] = useState([]);

    const AddSubmit = async (event) => {
        // event.preventDefault();
        // setModalIsOpen(false);
        const formData = new FormData();
        formData.append("name", name);
        formData.append("title", title);
        formData.append("content", content);
        // append 의 첫번째 키값(image) => 서버의 upload.single('image')
        formData.append("image", image);
        formData.append("fileName", fileName);
        try {
            const res = await Axios.post("http://52.78.37.198/board/Insert", formData);
            console.log(res);
            setImgSrc("");
        } catch (err) {
          console.log(err);
          setImgSrc("");
        }

        window.location.href = '/board';
      };

    // const ImgSubmit = async (event) => {
    //     event.preventDefault();
    //     const formData = new FormData();
    //     formData.append("image", image);
    //     formData.append("fileName", fileName);
    //     const res = await Axios.post("http://52.78.37.198/board/ImageUpload", formData);
    //     console.log(res);
    // }


    return (
        <>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@1,900&display=swap" rel="stylesheet" />

            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link href="https://fonts.googleapis.com/css2?family=Gothic+A1&family=Roboto:wght@900&display=swap" rel="stylesheet"></link>

                <BoardPublicTitle>
                    WRITE DOWN YOUR EXPERIENCES
                </BoardPublicTitle>
                <BoardLine />
                 <WriteContainer>
                     <BoardBackGround src={MJ_02} />
                    {/* <ViewTitle>글쓰기</ViewTitle> */}
                    <TitleBox>
                        <Title 
                            type='text'
                            name='title'
                            autocomplete='off'
                            onChange={(event) => {
                                setTitle(event.target.value)}} 
                            placeholder='제목'
                        />
                    </TitleBox>
                    <NameBox>
                        <Name 
                            type='text'
                            name='name'
                            autocomplete='off'
                            onChange={(event) => {
                                setName(event.target.value)}} 
                            placeholder='작성자'
                        />
                    </NameBox>
                    <ContentBox>
                        <ContentArea
                            type='text'
                            name='content'
                            onChange={(event) => {
                                setContent(event.target.value)}} 
                            placeholder='내용을 입력하세요.'
                        />
                    </ContentBox>
                    <ImageContainer>
                        <ImgBox>
                            <ImgEle 
                                src={imgSrc}
                            />
                        </ImgBox>
                        <ImageUploadButtonDetail for='typeFileBtn'>
                            이미지 선택
                            <ImageUpload
                                id='typeFileBtn'
                                type='file'
                                name='image'
                                enctype="multipart/form-data"
                                onChange={(event) => {
                                    setImage(event.target.files[0]);
                                    setFileName(event.target.files[0].name);
                                    const fileReader = new FileReader();
                                    fileReader.readAsDataURL(event.target.files[0]);
                                    fileReader.onload = (e) => setImgSrc(e.target.result);
                                }} 
                                // placeholder='내용을 입력하세요.'
                            />
                        {/* <button onClick={ImgSubmit}>제출</button> */}
                        </ImageUploadButtonDetail>
                    </ImageContainer>

                    <BtnContainer>
                        <BtnBox>
                            {/* <button></button> */}
                            {/* <AddBtn> ADD </AddBtn> */}
                            <AddBtn onClick={AddSubmit}> ADD </AddBtn>
                            <Link to={"/board"}>
                                <CancelBtn> CANCEL </CancelBtn>
                            </Link>
                        </BtnBox>
                    </BtnContainer>
                </WriteContainer>
            <AddBtnContainer>
                {/* <Link to="/board" > */}
                    {/* <AddBtnImg  */}
                        {/* src={img_Add} onClick={()=> setModalIsOpen(true)} */}
                    {/* /> */}
                {/* </Link> */}
            </AddBtnContainer>
        </>
    );
}

export default Board_Write;