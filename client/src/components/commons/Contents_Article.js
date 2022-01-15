import React, { Component, useEffect, useState } from "react";
import styled from "styled-components";
import Modal from "react-modal";
import axios from "axios";

const Container = styled.div`
  background-color: mediumaquamarine;
  h1 {
    text-align: center;
  }
  font-family: "Roboto", sans-serif;
  padding-left: 120px;
  padding-right: 120px;
`;

const ParentDiv = styled.div`
  background-color: moccasin;
  width: calc(100vw-120px);
  display: flex;
`;

const ChildDiv = styled.div`
  background-color: yellow;
  width: 100%;
  height: 500px;
  display: flex;
  float: left;
  justify-content: center;
  flex-direction: row;
  margin-top: 2vw;
  overflow: scroll;
  ul {
    width: 100%;
    padding-right: 2rem;
  }
`;

const Image = styled.img`
  width: calc(
    100% / 4
  ); /* 나중에 카드 쓰는 사람끼리 통일할 것 일단 임시로 ㄱㄱ */
  height: calc(
    1440px / 5
  ); /* 나중에 카드 쓰는 사람끼리 통일할 것 일단 임시로 ㄱㄱ */
  margin-top: 10px;
  margin-right: 10px; /* 나중에 카드 쓰는 사람끼리 통일할 것 일단 임시로 ㄱㄱ */
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
`;
const Comm_Id = styled.div`
  background-color: green;
`;
const Comm_Desc = styled.div`
  background-color: khaki;
`;
const Comm_Date = styled.div`
  background-color: lavender;
`;
const Comm_Input = styled.div`
  background-color: ivory;
`;

// ==============================================================================================

Modal.setAppElement("#root");

const CommentDetail = React.memo(function CommentDetail({ comm }) {
  return (
    <Comm_Container>
      <Comm_Id>{comm.id}</Comm_Id>
      <Comm_Desc>{comm.text}</Comm_Desc>
      <Comm_Date>{comm.date_comment}</Comm_Date>
    </Comm_Container>
  );
});

export function CommentDiv({ page_no }) {
  const [comment, setText] = useState("");
  const [newText, setNew] = useState("");
  const userid = sessionStorage.getItem("user_id");

  const read_comment = async () => {
    const readComment = await axios.post(
      "http://localhost:3001/contents/article/comments",
      { no: page_no }
    );
    return {
      payload: readComment.data,
    };
  };

  useEffect(() => {
    read_comment().then(function (result) {
      setText(result.payload);
      console.log("렌더링 잘되는지?", comment);
    });
  }, [newText]); // ★리렌더링의 핵심

  const onChange = (e) => {
    setNew(e.target.value);
  };

  const addComment = () => {
    if (userid == null) {
      alert("로그인 후 이용 가능합니다");
      setNew("");
    } else {
      if (newText == "") {
        alert("내용을 입력 해주세요");
        setNew("");
      } else {
        console.log("댓글 DB에 넘기기 전", comment);
        axios
          .post("http://localhost:3001/contents/articles/addcomments", {
            userid: userid,
            text: newText,
            no: page_no,
          })
          .then((res) => {
            setText(res.data);
          });
        setNew(""); // ★리렌더링의 핵심
      }
    }
  };

  return (
    <>
      <Comm_Input>
        <input
          value={newText}
          placeholder="댓글을 입력하세요."
          onChange={onChange}
        />
        <button type="submit" onClick={addComment}>
          등록
        </button>
      </Comm_Input>
      {comment &&
        comment.result.map((todo) => (
          <CommentDetail key={todo.no} comm={todo} />
        ))}
    </>
  );
}

const ModalDiv = React.memo(function ModalDiv({ todo, show, close }) {
  return (
    <Modal
      isOpen={show}
      onRequestClose={close}
      style={{ content: ModalConDesign }}
    >
      <ModalContainer>
        <Art_Image>
          <Image src={require(`../../assets/img/${todo.img}.jpg`)} />
        </Art_Image>
        <Art_Media>{todo.media}</Art_Media>
        <Art_Title>{todo.title}</Art_Title>
        <Art_Date>{todo.date_article}</Art_Date>
        <Art_Editor>{todo.editor}</Art_Editor>
        <Art_Desc>{todo.desc}</Art_Desc>
        <CommentDiv page_no={todo.no} />
      </ModalContainer>
    </Modal>
  );
});

const CardDiv = React.memo(function CardDiv({ todo }) {
  const [show, setShow] = useState(false);
  const handle = () => {
    setShow(!show);
  };

  const close = () => {
    setShow(false);
  };

  return (
    <>
      <Image
        src={require(`../../assets/img/${todo.img}.jpg`)}
        onClick={() => handle()}
      />
      <ModalDiv todo={todo} show={show} close={close} />
    </>
  );
});

function ContentsArticle({ list }) {
  const data = list.data;
  console.log("최초 기사 data", data);
  return (
    <Container>
      <ParentDiv>
        <ChildDiv>
          {data &&
            data.result.map((todo) => <CardDiv key={todo.no} todo={todo} />)}
        </ChildDiv>
      </ParentDiv>
    </Container>
  );
}

export default ContentsArticle;
