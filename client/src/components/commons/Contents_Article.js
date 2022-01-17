import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Modal from "react-modal";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';

<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
  integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
  crossorigin="anonymous"
/>

const Container = styled.div`
  width: 1152px;
  margin: 0 auto;
  clear: both;
  .parentDiv {
    justify-content: space-around;
    background-color: red;
  }
  .childDiv {
    justify-content: space-around;
    width: calc(1152px/3);
    height: 350px;
    overflow: hidden;
    margin-right: 5px;
  }
`;

const TitleDiv = styled.div`
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
`

const BoardLine = styled.div`
  height: 20px;
  border-bottom: solid #000957 1px;
`;

const ParentDiv = styled.div`
  margin: auto;
  margin-bottom: 200px;
  display: flex;
  justify-content: center;
`;

const Image = styled.img`
  width: 100%;
  /* margin-top: 20px; */
  /* margin-left: 5px; */
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
  width: 40vw;
`;

const Art_contents1 = styled.div`
  display: flex;
  /* 폰트 */
  font-family: 'Roboto', sans-serif;
  justify-content: space-between;
  padding-top: 12px;
`

const Art_contents2 = styled.div`
  display: flex;
  float: right;
`

const Art_Media = styled.div`
  font-size: 16px;
`;
const Art_Title = styled.div`
  font-family: 'Roboto', 'sans-serif';
  font-size: 28px;

`;
const Art_Date = styled.div`
`;
const Art_Editor = styled.div`
  padding-right: 10px;
  font-size: 16px;
`;
const Art_Image = styled.div`
`;
const Art_Desc = styled.div`
  padding-top: 36px;
  padding-bottom: 36px;
`;


// 댓글
const Comm_box1 = styled.div`
  padding-top: 36px;
  display: flex;
  justify-content: space-between;
  font-family: 'Roboto', 'sans-serif';
`

const Comm_box2 = styled.div`
  padding-top: 12px;
  display: flex;
  justify-content: space-between;
`

const Comm_Container = styled.div`
`;
const Comm_Id = styled.div`
`;
const Comm_Desc = styled.div`
`;
const Comm_Date = styled.div`
`;
const Comm_Input = styled.div`
`;

// ==============================================================================================

Modal.setAppElement("#root");

function CommentDetail({ comm, setRerender }) {
  const userid = sessionStorage.getItem('user_id');
  
  const deleteComment = () => {
    if (userid !== comm.id) {
      alert("본인의 댓글이 아닌 것은 삭제할 수 없습니다");
    }
    else {
      if (!window.confirm("댓글을 삭제 하시겠습니까?")) {
        alert("댓글 삭제가 취소 되었습니다");
      } else {
        alert("댓글이 삭제 되었습니다");
        axios
          .delete("http://localhost:3001/contents/articles/comments/delete", {
            data: { text: "작성자에 의해 삭제 된 메시지입니다", no: comm.no },
          })
          .then((res) => setRerender("씨발이거네 ㅋㅋ")) // ★리렌더링의 핵심(자식)
          .catch((err) => console.err(err));
      }
    }};

  return (
    <Comm_Container>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@1,900&display=swap" rel="stylesheet" />
      <Comm_box1>
        <Comm_Id>{comm.id}</Comm_Id>
        <Comm_Date>{comm.date_comment}</Comm_Date>
      </Comm_box1>
      <Comm_box2>
        <Comm_Desc>{comm.text}</Comm_Desc>
        <button type="button" onClick={deleteComment}>삭제</button>
      </Comm_box2>
    </Comm_Container>
  );
};

function CommentDiv({ page_no }) {
  const [comment, setComment] = useState("");
  const [newText, setNew] = useState("");
  const [reRender, setRerender] = useState(true);
  const userid = sessionStorage.getItem("user_id");

  const read_comment = async () => {
    const readComment = await axios.post(
      "http://localhost:3001/contents/articles/comments",
      { no: page_no }
    );
    return {
      payload: readComment.data,
    };
  };

  useEffect(() => { // useEffect syntax = useEffect((1.여기 컴포넌트가 렌더링 된 후 "무조건 실행할 함수 또는 명령(CONSOLE도 됨)", [2.])
    read_comment().then(function (result) {
      setComment(result.payload);
      console.log("무한 렌더링 검사", comment);
    });
  }, [reRender]); // ★리렌더링의 핵심(부모)

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
        axios
          .post("http://localhost:3001/contents/articles/addcomments", {
            userid: userid,
            text: newText,
            no: page_no,
          })
          .then((res) => {
            setComment(res.data); setRerender(!reRender);
          });
        setNew(""); // ★리렌더링의 핵심
        setRerender(!reRender);
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
        <button type="submit" onClick={addComment}>등록</button>
      </Comm_Input>
      <hr></hr>
      <div>
        {comment && comment.result.map((todo) => (
            <CommentDetail key={todo.no} comm={todo} setRerender={setRerender} />
          ))}
      </div>
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
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@1,900&display=swap" rel="stylesheet" />

      <ModalContainer>
        <Art_Image>
          <Image src={require(`../../assets/img/${todo.img}.jpg`)} />
        </Art_Image>
        <Art_contents1>
          <Art_Title>{todo.title}</Art_Title>
          <Art_Date>{todo.date_article}</Art_Date>
        </Art_contents1>
        <Art_contents2>
          <Art_Editor>{todo.editor}</Art_Editor>
          <Art_Media>{todo.media}</Art_Media>
        </Art_contents2>
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
      <div className="col-md-4 childDiv">
        <Image
          src={require(`../../assets/img/${todo.img}.jpg`)}
          onClick={() => handle()}
        />
        <ModalDiv todo={todo} show={show} close={close} />
      </div>
  );
});

function ContentsArticle({ list }) {
  const data = list.data;
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@1,900&display=swap" rel="stylesheet" />

      <Container>
        <TitleDiv>Article</TitleDiv>
        <BoardLine />
        <ParentDiv>
          <div className="row parenDiv">
            {/* <ChildDiv> */}
              {data &&
                data.result.map((todo) => <CardDiv key={todo.no} todo={todo} />)}
            {/* </ChildDiv> */}
          </div>
        </ParentDiv>
      </Container>
    </>
  );
}

export default ContentsArticle;
