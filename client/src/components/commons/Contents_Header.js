import React from "react";
import styled from "styled-components";
import ReactPlayer from "react-player";

const Container = styled.div`
    width: 1152px;
    margin: auto;
    margin-top: 150px;
    margin-bottom: 150px;
    font-family: 'Roboto', sans-serif;
`;

const ParentDiv = styled.div`
  align-items: center;
  display: flex;
`;

const ChildDiv_1 = styled.div`
  text-align: center;
  width: 60vw;
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 4vw;
  font-weight: bold;
  padding-right: 80px;
`;

const ChildDiv_2 = styled.div`
  background-color: pink;
  width: 40vw;
  height: 50vh;
`;

function ContentsHeader() {
    return (
        <>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@1,900&display=swap" rel="stylesheet" />

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
        </>
    );
};

export default ContentsHeader