import React, { useState } from "react";
import styled from "styled-components";
import Modal from "react-modal";

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
  width: 900px;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  flex-direction: row-reverse;
  margin-top: 2%;
`;

const ChildDiv = styled.div`
  background-color: green;
  width: calc(900px/3);
  height: calc(900px/3);
  overflow: hidden;
`;

const Image = styled.img`
  width: 100%;
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

  const handle = () => {
    setShow(!show);
  };

  const ClickAndESC = () => {
    setShow(false);
  };

  return (
    <Container>
      <Modal isOpen={show} onRequestClose={() => ClickAndESC()} />
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
        <GroupDiv>
        <ChildDiv>
            <Image
              src={require("../../assets/img/leejung4.jpg")}
              onClick={() => handle()}
            />
          </ChildDiv>
        </GroupDiv>
      </ParentDiv>
    </Container>
  );
}

export default ContentsArticle;
