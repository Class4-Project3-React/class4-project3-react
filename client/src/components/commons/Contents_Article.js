import React, { useState } from "react";
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
  };
`;

const Image = styled.img`
  width: calc(100%/4); /* 나중에 카드 쓰는 사람끼리 통일할 것 일단 임시로 ㄱㄱ */
  height: calc(1440px/5); /* 나중에 카드 쓰는 사람끼리 통일할 것 일단 임시로 ㄱㄱ */
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

Modal.setAppElement("#root");

const CommentDiv = React.memo(function CommentDiv({ comm }) {
  return (
    <Comm_Container>
      <Comm_Id>{comm.id}</Comm_Id>
      <Comm_Desc>{comm.text}</Comm_Desc>
      <Comm_Date>{comm.date_comment}</Comm_Date>
    </Comm_Container>
  );
});

export function CommentWrite({ addComment, page_no }) {
  const [addtext, setText] = useState('');
  
  const onChange = (e) => setText(e.target.value)
  const onSubmit = () => {
    const no = page_no;

    axios
      .post("http://localhost:3001/contents/articles/comments", {
        text: addtext,
        no: no,
      })
      .then((res) => setText(res))
      .catch((error) => console.log("addComment Error: ", error));

    setText(""); // input 초기화
  };

  return (
    <Comm_Input>
      <input value={addtext} placeholder="댓글을 작성해주세요!" onChange={onChange}/>
      <button type="submit" onClick={onSubmit}>
        등록
      </button>
    </Comm_Input>
  );
}

const ModalDiv = React.memo(function ModalDiv({ show, autoClose, detail }) {
  return (
    <Modal
      isOpen={show}
      onRequestClose={autoClose}
      style={{ content: ModalConDesign }}
    >
      <ModalContainer>
        <Art_Image>
          <Image src={`../../assets/img/${detail.img}.jpg`} />
        </Art_Image>
        <Art_Media>{detail[0].media}</Art_Media>
        <Art_Title>{detail[0].title}</Art_Title>
        <Art_Date>{detail[0].date_article}</Art_Date>
        <Art_Editor>{detail[0].editor}</Art_Editor>
        <Art_Desc>{detail[0].desc}</Art_Desc>
        {detail.map(todo => (<CommentDiv key={todo.no} comm={todo} />))}
        <CommentWrite page_no={detail[0].no} />
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
        console.log("Get Article List Error", error);
      });

    axios
      .post("http://localhost:3001/contents/articles", { no: no })
      .then((res) => {setDetail(res.data.result); console.log(res.data.result)})
      .catch((error) => {
        console.log("Post Article Detail Error", error);
      });
    // ★여기다가 댓글 get용 axios get 작성
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
      <ModalDiv show={show} autoClose={() => ClickAndESC()} detail={detail} />
    </il>
  );
});

function ContentsArticle({ addComment }) {
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
