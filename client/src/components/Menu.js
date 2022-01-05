import React from 'react';
import { NavLink } from 'react-router-dom';
// import {main} from './component'
import logo from "../assets/img/logo.png"
import styled from "styled-components";



const HeaderNav = styled.div`
  ul {
    /* background-color: skyblue;  */
    display: flex;
    height: 48px;
    justify-content: space-around;
    align-items: center;
    padding-left: 0;
  }

  li {
      background-color: #070b4a;
      width: 25%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: space-around;
  }

  li:hover {
      background-color: white;
      p {
        color: #070b4a;
      }
  }

  p {
    color: white;
  }
`



const Menu = () => {
    const activeStyle ={
        // 스타일 컨트롤하기 
    }
    return (
        <>
          <HeaderNav>
              <nav>
                <ul>
                  <img src={logo} width={200}/>
                  <li><NavLink to="/" activeStyle={activeStyle}><p>Home</p></NavLink></li>
                  <li><NavLink to="/contents" ><p>Contents</p></NavLink></li>
                  <li><NavLink to="/login" ><p>Login</p></NavLink></li>
                  <li><NavLink to="/bordList" ><p>Board</p></NavLink></li>
                  <li><NavLink to="/myPage" ><p>MyPage</p></NavLink></li>
                </ul>
              </nav>
              <br/>
          </HeaderNav>
        </>
    );
};

export default Menu;