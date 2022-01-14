import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from "styled-components";
import logo from "../src/assets/img/logo.png"



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
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: space-around;
      font-size: 20px;
      padding-top: 12px
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


  /* 폰트 */
  font-family: 'Roboto', sans-serif;


`



const Header = () => {
    return (
        <>
          <HeaderNav>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@1,900&display=swap" rel="stylesheet" />
            <nav>
              <ul>
                <a>
                  <NavLink to="/" ><img className="LogoImg" src={logo} width={240}/></NavLink>
                </a>
                <li><NavLink to="/contents" ><p>Contents</p></NavLink></li>
                <li><NavLink to="/board" ><p>Board</p></NavLink></li>
                <li><NavLink to="/mypage" ><p>MySchedule</p></NavLink></li>
                <li><NavLink to="/login" ><p>Login</p></NavLink></li>
              </ul>
            </nav>
          </HeaderNav>
        </>
    );
};

export default Header;