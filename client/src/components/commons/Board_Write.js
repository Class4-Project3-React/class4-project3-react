import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";
import Modal from "react-modal";
import Axios from 'axios';
import img_Add from '../../assets/img/pencil_01.png';
import Board_List from './Board_List';

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
    border: solid #000957 1px;
    border-radius: 15px;
    padding: 10px;
    width: 1152px;
    height: 100%;
    margin: 0 auto;
    margin-top: 20px;
`;

const ViewTitle = styled.div`
    /* background-color: orange; */
    /* color: rgb(90, 90, 90); */
    color: #344CB7;
    font-size: 25px;
    font-weight: bold;
`;

const NameBox = styled.div`
    /* background-color: yellow; */
    margin-top: 10px;
`;

const Name = styled.input`
    /* background-color: green; */
    width: 90%;
    padding-top: 10px;
    padding-bottom: 10px;
    border: none;
    font-size: 15px;
    border-bottom: solid 1px #000957;
    font-weight: bold;
    outline : none;
    &::placeholder {
        color: #577BC1;
    }
`;

const TitleBox = styled.div`
    /* background-color: yellow; */
    margin-top: 10px;
`;

const Title = styled.input`
    /* background-color: green; */
    width: 90%;
    padding-top: 10px;
    padding-bottom: 10px;
    border: none;
    font-size: 20px;
    border-bottom: solid 1px #000957;
    font-weight: bold;
    outline : none;
    &::placeholder {
        color: #577BC1;
    }
`;

const ContentBox = styled.div`
    /* background-color: pink; */
    margin-top: 10px;
`;

const ContentArea = styled.textarea`
    /* background-color: blue; */
    width: 90%;
    resize: none;
    border: none;
    font-size: 15px;
    height: 240px;
    outline : none;
    border: solid 1px #000957;
    &::placeholder {
        color: #577BC1;
    }
`;

const ImageContainer = styled.form`
    /* background-color: pink; */
    margin-top: 10px;
    /* height: 350px; */
    overflow: hidden;
    position: relative;
`;

const ImgBox = styled.div`
    /* background-color: yellow; */
    width: 250px;
    height: 250px;
    overflow: hidden;
    margin: 0 auto;
    position: relative;
    border-radius: 10px;
    border: solid 3px #000957;
`;

const ImgEle = styled.img`
    /* background-color: red; */
    width: 250px;
    /* width: 300px; */
    /* height: 300px; */
    border-radius: 10px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
`;

const ImageUploadButtonDetail = styled.label`
    /* padding: 6px 25px; */
    background-color: rgb(255, 255, 255, 0.1);
    border-radius: 4px;
    color: #344CB7;
    cursor: pointer;
    font-size: 12px;
    font-weight: bold;
    width: 120px;
    padding: 5px;
    /* border: none; */
    border: solid 1px #000957;
    position: absolute;
    top: 85%;
    left: 50%;
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

const AddBtnImg = styled.img`
    margin-left: 50%;
    transform: translate(-50%, 0);
    width: 70px;
`;

Modal.setAppElement('#root');

function Board_Write () {
    // const [modalIsOpen, setModalIsOpen] = useState(false);

    const [name, setName] = useState("");
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [image, setImage] = useState("");
    
    const [fileName, setFileName] = useState("");
    const [imgSrc, setImgSrc] = useState("");

    const [boardItem, setBoardItem] = useState([]);

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
            const res = await Axios.post("http://localhost:3001/board/Insert", formData);
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
    //     const res = await Axios.post("http://localhost:3001/board/ImageUpload", formData);
    //     console.log(res);
    // }


    return (
        <>
                <BoardPublicTitle>

                </BoardPublicTitle>
                <BoardLine />
                 <WriteContainer>
                    <ViewTitle>글쓰기</ViewTitle>
                    <NameBox>
                        <Name 
                            type='text'
                            name='name'
                            onChange={(event) => {
                                setName(event.target.value)}} 
                            placeholder='작성자'
                        />
                    </NameBox>
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
                        
                            {/* <button></button> */}
                            {/* <AddBtn> ADD </AddBtn> */}
                            <AddBtn onClick={AddSubmit}> ADD </AddBtn>
                        <Link to={"/board"}>
                            <CancelBtn> CANCEL </CancelBtn>
                        </Link>
                        
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