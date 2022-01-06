import React from "react";
import styled from "styled-components";
import ReactPlayer from "react-player";

const Container = styled.div`
    background-color: mediumaquamarine;
    color: red;
    width: 100%; /* 임시 */
    padding: 10px; /* 임시 */
`;

const ParentDiv = styled.div`
  background-color: moccasin;
  text-align: center;
  align-items: center;
  display: flex;
`;

const ChildDiv_1 = styled.div`
  background-color: yellow;
  width: 60%;
`;

const ChildDiv_2 = styled.div`
  background-color: pink;
  width: 40%;
`;

function ContentsHeader() {
    return (
        <Container>
            <ParentDiv>
                <ChildDiv_1>
                    <h1>
                        Go beyond your Limit, <br />
                        Shut up and Lift.
                    </h1>
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