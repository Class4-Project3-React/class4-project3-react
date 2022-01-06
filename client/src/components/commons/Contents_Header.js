import React from "react";
import styled from "styled-components";
import ReactPlayer from "react-player";

const Container = styled.div`
    background-color: mediumaquamarine;
    padding: 10px;
    margin: 5vw 0;
`;

const ParentDiv = styled.div`
  background-color: moccasin;
  align-items: center;
  display: flex;
`;

const ChildDiv_1 = styled.div`
  background-color: yellow;
  text-align: center;
  width: 60vw;
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 4vw;
  font-weight: bold;
`;

const ChildDiv_2 = styled.div`
  background-color: pink;
  width: 40vw;
  height: 50vh;
`;

function ContentsHeader() {
    return (
        <Container>
            <ParentDiv>
                <ChildDiv_1>
                        Go beyond your Limit, <br />
                        Shut up and Lift.
                </ChildDiv_1>
                <ChildDiv_2>
                    <ReactPlayer
                        url={"https://www.youtube.com/watch?v=LVm0403djRU&ab_channel=%EC%97%AC%EC%9C%A0%EB%A7%8C%EB%A7%8C"}
                        playing={true}
                        muted={true}
                        width= '100%'
                        height= '100%'
                    />
                </ChildDiv_2>
            </ParentDiv>
        </Container>
    );
};

export default ContentsHeader