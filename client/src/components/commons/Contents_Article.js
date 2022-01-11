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
const Art_Comments = styled.div`
  background-color: purple;
`;

Modal.setAppElement("#root");

// const ModalDiv = React.memo(function ModalDiv({ show, autoClose, todo }) {
//   return (
//     <Modal
//       isOpen={show}
//       onRequestClose={autoClose}
//       style={{ content: ModalConDesign }}
//     >
//       <ModalContainer>
//         {/* <Art_Image>
//             <Image src={todos[0].img} />
//           </Art_Image>
//           <Art_Media>{todos[0].media}</Art_Media>
//           <Art_Title>{todos[0].img}</Art_Title>
//           <Art_Date>{todos[0].date}</Art_Date>
//           <Art_Editor>{todos[0].editor}</Art_Editor> */}
//         {/* <Art_Desc>{todo.desc}</Art_Desc> */}
//         <Art_Comments>댓글</Art_Comments>
//       </ModalContainer>
//     </Modal>
//   );
// });

const CardDiv = React.memo(function CardDiv({ todos, onDetail }) {
  const [show, setShow] = useState(false);
  const [data, setData] = useState([{ img: "leejung4" }]);
  const [detail, setDetail] = useState([{}]);

  const handle = (no) => {
    setShow(!show);
    onDetail(no);

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

    console.log(detail.no);
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
      {/* {detail.map((todo) => (
        <ModalDiv
          key={todo.no}
          show={show}
          autoClose={() => ClickAndESC()}
          todo={todo}
        />
      ))} */}
    </il>
  );
});

function ContentsArticle({ todos, onDetail }) {
  return (
    <Container>
      <h1>Article</h1>
      <ParentDiv>
        <ChildDiv>
          <ul>
            <CardDiv todos={todos} onDetail={onDetail} />
          </ul>
        </ChildDiv>
      </ParentDiv>
    </Container>
  );
}

export default ContentsArticle;
