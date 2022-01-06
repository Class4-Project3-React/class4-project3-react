import React from 'react';
import styled from "styled-components";

const Foot = styled.div`
    
    .footer {
        background-color: lightgray;
        height: 75px;
        vertical-align: middle;
        display: flex;
        align-items: center;
        position: relative;
        border-top: solid black 1px;
    }

    .footer-content {
        background-color: rgb(119, 119, 119);
        color: white;
        display: block;
        margin-left: auto;
        margin-right: auto;
        font-size: 12px;
    }
`

const Footer = () => (

    <Foot>
        <div className="footer">
            <div className="footer-content">© BUILDING BOYZ. & 추가내용 들어가기 or ul,li 활용</div>
        </div>
    </Foot>

)
export default Footer;