import React, { useState } from "react";
import styled from "styled-components";
import Modal from "react-modal";
import axios from "axios";

const Container = styled.div`
  background-color: mediumaquamarine;
  margin: 100px;
  h1 {
    text-align: center;
  }
`;

const ParentDiv = styled.div`
  background-color: moccasin;
  width: 100%;
  display: flex;
`;

const ChildDiv = styled.div`
  background-color: yellow;
  width: 1440px;
  height: 500px;
  display: flex;
  justify-content: center;
  margin-top: 2vw;
  overflow: scroll;
`;

const Image = styled.img`
  width: calc(1440px / 6);
  height: calc(1440px / 6);
  margin-right: 10px;
  margin-top: 10px;
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
const ModalContainer = styled.div`
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
  background-color: white;
`;

// 댓글
const Comm_Container = styled.div`
  background-color: lightgray;
`
const Comm_Id = styled.div`
  background-color: green;
`
const Comm_Desc = styled.div`
  background-color: khaki;
`
const Comm_date = styled.div`
  background-color: lavender;
`

Modal.setAppElement("#root");

const CommentDiv = React.memo(function CommentDiv({ comm }) {
  return (
    <Comm_Container>
      <Comm_Id>id</Comm_Id>
      <Comm_Desc>내용</Comm_Desc>
      <Comm_date>날짜</Comm_date>
    </Comm_Container>
  );
});

const ModalDiv = React.memo(function ModalDiv({ show, autoClose, todo }) {
  return (
    <Modal
      isOpen={show}
      onRequestClose={autoClose}
      style={{ content: ModalConDesign }}
    >
      <ModalContainer>
        <Art_Image>
            <Image src={`../../assets/img/${todo.img}.jpg`} />
          </Art_Image>
          <Art_Media>{todo.media}</Art_Media>
          <Art_Title>{todo.title}</Art_Title>
          <Art_Date>{todo.date}</Art_Date>
          <Art_Editor>{todo.editor}</Art_Editor>
        <Art_Desc>{todo.desc}</Art_Desc>
        <CommentDiv/>
      </ModalContainer>
    </Modal>
  );
});

const CardDiv = React.memo(function CardDiv({}) {
  const [show, setShow] = useState(false);
  const [data, setData] = useState([{ img: "leejung4" }]);
  const [detail, setDetail] = useState([{}]);

  // console.log("data: ", data.no);
  // console.log("detail: ", detail);

  const handle = (no) => {
    setShow(!show);

    axios
      .get("http://localhost:3001/contents")
      .then((res) => setData(res.data.result))
      .catch((error) => {
        console.log(error);
      });

    axios
      .post("http://localhost:3001/contents", { no: no })
      .then((res) => setDetail(res.data.result))
      .catch((error) => {
        console.log(error);
      });

  };

  const ClickAndESC = () => {
    setShow(false);
  };

  return (
    <il>
      {data.map((todo) => (
        <Image
          key={todo.no}
          src={require(`../../assets/img/${todo.img}.jpg`)}
          onClick={() => handle(todo.no)}
        />
      ))}
        <ModalDiv
          show={show}
          autoClose={() => ClickAndESC()}
          todo={detail}
        />
    </il>
  );
});

function ContentsArticle({}) {
  return (
    <Container>
      <h1>Article</h1>
      <ParentDiv>
        <ChildDiv>
          <ul>
            <CardDiv />
          </ul>
        </ChildDiv>
      </ParentDiv>
    </Container>
  );
}

export default ContentsArticle;
