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
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
  margin-top: 2%;
`;

const ChildDiv = styled.div`
  background-color: green;
  width: 33vw;
  height: 50vh;
  overflow: hidden;
`;

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
      <h1>Article</h1>
      <ParentDiv>
        <GroupDiv>
          <ChildDiv>
            <Modal isOpen={show} onRequestClose={() => ClickAndESC()} />
            <img
              src={require("../../assets/img/leejung.jpg")}
              onClick={() => handle()}
            />
          </ChildDiv>
          <ChildDiv>
          <Modal isOpen={show} onRequestClose={() => ClickAndESC()} />
            <img
              src={require("../../assets/img/leejung.jpg")}
              onClick={() => handle()}
            />
          </ChildDiv>
          <ChildDiv>
          <Modal isOpen={show} onRequestClose={() => ClickAndESC()} />
            <img
              src={require("../../assets/img/leejung.jpg")}
              onClick={() => handle()}
            />
          </ChildDiv>
        </GroupDiv>
        <GroupDiv>
          <ChildDiv>
          <Modal isOpen={show} onRequestClose={() => ClickAndESC()} />
            <img
              src={require("../../assets/img/leejung.jpg")}
              onClick={() => handle()}
            />
          </ChildDiv>
          <ChildDiv>
          <Modal isOpen={show} onRequestClose={() => ClickAndESC()} />
            <img
              src={require("../../assets/img/leejung.jpg")}
              onClick={() => handle()}
            />
          </ChildDiv>
          <ChildDiv>
          <Modal isOpen={show} onRequestClose={() => ClickAndESC()} />
            <img
              src={require("../../assets/img/leejung.jpg")}
              onClick={() => handle()}
            />
          </ChildDiv>
        </GroupDiv>
      </ParentDiv>
    </Container>
  );
}

export default ContentsArticle;
