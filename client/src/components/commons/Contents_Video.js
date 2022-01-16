import React from "react";
import styled from "styled-components";
import ReactPlayer from "react-player";

const Container = styled.div`
  width: 1152px;
  margin: 0 auto;
  justify-content: center;
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

const ParentDiv1 = styled.div`
  width: 100%;
  display: flex;
  float: left;
  margin-top: 20px;
`;

const ChildDiv_1_1 = styled.div`
  width: 30vw;
  height: 30vh;
`;

const ChildDiv_1_2 = styled.div`
  width: 70vw;
  height: 30vh;
`;

const ParentDiv2 = styled.div`
  width: 100%;
  clear: both;
  display: flex;
  float: left;
  margin-bottom: 200px;
`;

const ChildDiv_2_1 = styled.div`
  width: 50%;
`;

const ChildDiv_2_2 = styled.div`
  width: 25%;
`;

const ChildDiv_2_3 = styled.div`
  width: 25%;
`;

function ContentsVideo() {
  return (
    <Container>
      <TitleDiv>Commendation Videos</TitleDiv>
      <BoardLine/>
      <ParentDiv1>
        <ChildDiv_1_1>
          <ReactPlayer
            url={
              "https://www.youtube.com/watch?v=LVm0403djRU&ab_channel=%EC%97%AC%EC%9C%A0%EB%A7%8C%EB%A7%8C"
            }
            playing={false}
            muted={true}
            width="100%"
            height="100%"
          />
        </ChildDiv_1_1>
        <ChildDiv_1_2>
          <ReactPlayer
            url={
              "https://www.youtube.com/watch?v=LVm0403djRU&ab_channel=%EC%97%AC%EC%9C%A0%EB%A7%8C%EB%A7%8C"
            }
            playing={false}
            muted={true}
            width="100%"
            height="100%"
          />
        </ChildDiv_1_2>
      </ParentDiv1>

      <ParentDiv2>
        <ChildDiv_2_1>
          <ReactPlayer
            url={
              "https://www.youtube.com/watch?v=LVm0403djRU&ab_channel=%EC%97%AC%EC%9C%A0%EB%A7%8C%EB%A7%8C"
            }
            playing={false}
            muted={true}
            width="100%"
            height="100%"
          />
        </ChildDiv_2_1>
        <ChildDiv_2_2>
          <ReactPlayer
            url={
              "https://www.youtube.com/watch?v=LVm0403djRU&ab_channel=%EC%97%AC%EC%9C%A0%EB%A7%8C%EB%A7%8C"
            }
            playing={false}
            muted={true}
            width="100%"
            height="100%"
          />
        </ChildDiv_2_2>
        <ChildDiv_2_3>
          <ReactPlayer
            url={
              "https://www.youtube.com/watch?v=LVm0403djRU&ab_channel=%EC%97%AC%EC%9C%A0%EB%A7%8C%EB%A7%8C"
            }
            playing={false}
            muted={true}
            width="100%"
            height="100%"
          />
        </ChildDiv_2_3>
      </ParentDiv2>
    </Container>
  );
}

export default ContentsVideo
