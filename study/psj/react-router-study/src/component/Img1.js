import React from 'react';
import styled from 'styled-components';
import user from './user.png'

const HeadDiv = styled.div`
    width: 500px;
    height: 500px;
`;

const Img1 = () => {
    return (
        <>
            <HeadDiv>
                <img id="img" src={user} />
                <button >toggle</button>
            </HeadDiv>
        </>
    );
};

export default Img1;