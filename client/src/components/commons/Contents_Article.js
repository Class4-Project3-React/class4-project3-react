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

Modal.setAppElement("#root");

const CardDiv = React.memo(function CardDiv({ todos, onView }) {
  const [show, setShow] = useState(false);

  const handle = () => {
    setShow(!show);
    onView()

    // axios
    //   .post("http://localhost:3001/contents", {
    //     userId: "1234",
    //     userPassword: "4567",
    //   })
    //   .then(function (response) {
    //     console.log(response);
    //   })
    //   .catch((error) => {
    //     console.log(error.response);
    //   });
  };

  const ClickAndESC = () => {
    setShow(false);
  };

  return (
    <>
      <Modal
        isOpen={show}
        onRequestClose={() => ClickAndESC()}
        style={{ content: ModalConDesign }}
      >
        <ModalDiv>
          {/* <Art_Image>
            <Image src={todos[0].img} />
          </Art_Image>
          <Art_Media>{todos[0].media}</Art_Media>
          <Art_Title>{todos[0].img}</Art_Title>
          <Art_Date>{todos[0].date}</Art_Date>
          <Art_Editor>{todos[0].editor}</Art_Editor>
          <Art_Desc>{todos[0].desc}</Art_Desc> */}
          <Art_Comments>댓글</Art_Comments>
        </ModalDiv>
      </Modal>
      <il>
        {todos.map((todo) => (
          <Image
            key={todo.no}
            src={require(`../../assets/img/${todo.img}.jpg`)}
            onClick={() => handle()}
          />
        ))}
      </il>
    </>
  );
});

function ContentsArticle({ todos, onView }) {
  return (
    <Container>
      <h1>Article</h1>
      <ParentDiv>
        <ChildDiv>
          <ul>
            <CardDiv todos={todos} onView={onView}/>
          </ul>
        </ChildDiv>
      </ParentDiv>
    </Container>
  );
}

export default ContentsArticle;
