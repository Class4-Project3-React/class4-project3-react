import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: mediumaquamarine;
  width: 100%; /* position: absolute 주고 left: 0 주면 root 무시하고 꽉 차게 가능 */
  padding: 2%;
  margin-top: 5%;
`;

const ParentDiv = styled.div`
  background-color: moccasin;
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
  background-color: yellow;
  width: 33%;
`;

function ContentsArticle() {
  return (
    <Container>
      <ParentDiv>
        <GroupDiv>
          <ChildDiv>
            <button type="submit" href="#">
              기사 이미지 클릭
            </button>
          </ChildDiv>
          <ChildDiv>
            <button type="submit" href="#">
              기사 이미지 클릭
            </button>
          </ChildDiv>
          <ChildDiv>
            <button type="submit" href="#">
              기사 이미지 클릭
            </button>
          </ChildDiv>
        </GroupDiv>
        <GroupDiv>
          <ChildDiv>
            <button type="submit" href="#">
              기사 이미지 클릭
            </button>
          </ChildDiv>
          <ChildDiv>
            <button type="submit" href="#">
              기사 이미지 클릭
            </button>
          </ChildDiv>
          <ChildDiv>
            <button type="submit" href="#">
              기사 이미지 클릭
            </button>
          </ChildDiv>
        </GroupDiv>
      </ParentDiv>
    </Container>
  );
}

export default ContentsArticle;
