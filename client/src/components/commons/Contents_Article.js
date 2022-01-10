import React, { useState } from "react";
import styled from "styled-components";
import Modal from "react-modal";
import axios from "axios";

const Container = styled.div`
  background-color: mediumaquamarine;
  margin: 10vw;
  padding: 10px;
  text-align: center;
`;

const ParentDiv = styled.div`
  background-color: moccasin;
  width: 100%;
  display: flex;
  align-items: center;
  text-align: center;
  flex-direction: column;
`;

const GroupDiv = styled.div`
  background-color: yellow;
  width: 80vw;
  display: flex;
  flex-direction: row-reverse;
  margin-top: 2vw;
  word-break: break-all;
  word-wrap: break-word;
`;

const ChildDiv = styled.div`
  background-color: green;
  width: calc(80vw / 3);
  height: calc(80vw / 3);
  overflow: hidden;
  padding: 2vw;
  float: right;
`;

const Image = styled.img`
  width: 100%;
  cursor: pointer;
`;

// 모달 Container
const ModalConDesign = {
  backgroundColor: "white",
  top: "3vw",
  bottom: "3vw",
  left: "10vw",
  right: "10vw",
  display: "flex",
  justifyContent: "center",
};

// 모달 inner
const ModalDiv = styled.div`
  background-color: papayawhip;
  width: 70vw;
`;
const Art_Media = styled.div`
  background-color: red;
`;

const Art_Title = styled.div`
  background-color: orange;
`;

const Art_Date = styled.div`
  background-color: yellow;
`;

const Art_Editor = styled.div`
  background-color: green;
`;

const Art_Image = styled.div`
  background-color: blue;
`;

const Art_Desc = styled.div`
  background-color: navy;
`;

const Art_Comments = styled.div`
  background-color: purple;
`;

// 더미데이터
const dummyData = [
  {
    id: 1,
    img: "../../assets/img/leejung1.jpg",
  },
  {
    id: 2,
    img: "../../assets/img/leejung2.jpg",
  },
  {
    id: 3,
    img: "../../assets/img/leejung3.jpg",
  },
  {
    id: 4,
    img: "../../assets/img/leejung4.jpg",
  },
];

Modal.setAppElement("#root");

function ContentsArticle() {
  const [show, setShow] = useState(false);
  // const [no_article, setArticleNum] = useState("");
  const [article, setArticle] = useState("");

  const handle = () => {
    // setArticle();
    setShow(!show);

    axios.post('http://localhost:3001/contents', { userId : "1234", userPassword : "4567" })
    .then(function(response) { console.log(response) })
    .catch(error => { console.log(error.response) });
  };
  const ClickAndESC = () => {
    setShow(false);
  };
  

  return (
    <Container>
      <Modal
        isOpen={show}
        onRequestClose={() => ClickAndESC()}
        style={{ content: ModalConDesign }}
      >
        <ModalDiv>
          <Art_Media>{article.media}</Art_Media>
          <Art_Title>{article.title}</Art_Title>
          <Art_Date>{article.date}</Art_Date>
          <Art_Editor>{article.editor}</Art_Editor>
          <Art_Image>
            <Image src={article.img} />
          </Art_Image>
          <Art_Desc>{article.desc}</Art_Desc>
          <Art_Comments>댓글</Art_Comments>
        </ModalDiv>
      </Modal>

      <h1>Article</h1>
      <ParentDiv>
        <GroupDiv>
          <ChildDiv>
            <Image
              src={require("../../assets/img/leejung1.jpg")}
              onClick={() => handle()}
            />
          </ChildDiv>
          <ChildDiv>
            <Image
              src={require("../../assets/img/leejung2.jpg")}
              onClick={() => handle()}
            />
          </ChildDiv>
          <ChildDiv>
            <Image
              src={require("../../assets/img/leejung3.jpg")}
              onClick={() => handle()}
            />
          </ChildDiv>
        </GroupDiv>
      </ParentDiv>
    </Container>
  );
}

export default ContentsArticle;
