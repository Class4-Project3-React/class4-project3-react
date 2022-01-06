import React from "react";
import styled from "styled-components";
import ReactPlayer from "react-player";

const Container = styled.div`
  background-color: mediumaquamarine;
  width: 100%; /* position: absolute 주고 left: 0 주면 root 무시하고 꽉 차게 가능 */
  padding: 2%;
  margin-top: 5%;
`;

const ParentDiv1 = styled.div`
  background-color: moccasin;
  text-align: center;
  align-items: center;
  display: flex;
`;

const ChildDiv_1_1 = styled.div`
  background-color: yellow;
  width: 30%;
`;

const ChildDiv_1_2 = styled.div`
  background-color: pink;
  width: 70%;
`;

const ParentDiv2 = styled.div`
  background-color: moccasin;
  text-align: center;
  align-items: center;
  display: flex;
`;

const ChildDiv_2_1 = styled.div`
  background-color: thistle;
  width: 50%;
`;

const ChildDiv_2_2 = styled.div`
  background-color: thistle;
  width: 25%;
`;

const ChildDiv_2_3 = styled.div`
  background-color: thistle;
  width: 25%;
`;

function ContentsVideo() {
  return (
    <Container>
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
