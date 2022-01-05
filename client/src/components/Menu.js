import React from 'react';
import { NavLink } from 'react-router-dom';
// import {main} from './component'
import main from "../assets/img/main.png";
import contents from "../assets/img/contents.png";
import bordList from "../assets/img/bordList.png";
import user from "../assets/img/user.png";
import MyPage from "../assets/img/myPage.png";
import logo from "../assets/img/logo.png"
import styled from "styled-components";



const Nav = styled.nav`
  position:fixed;
  height: 60px;
  width: 100%;
  text-align: left;
  padding: 0px;
`;

const GnbLists = styled.ul`
  list-style: none;
  height: 60px;
  margin: 0;
  padding: 10px;
  border-bottom: 1px solid gray;
`;

const GnbItem = styled.li`
  display: inline-block;
  height: 60px;
  padding: 10px;
`;

const Menu = () => {
    const activeStyle ={
        // 스타일 컨트롤하기 
    }
    return (
        <>
            <img src={logo} width={200}/>
                <Nav>
                    <GnbLists>
                        <GnbItem><NavLink to="/" activeStyle={activeStyle}><img src={ main} width={50}/> </NavLink></GnbItem>
                        <GnbItem><NavLink to="/contents" ><img src={ contents} width={50}/></NavLink></GnbItem>
                        <GnbItem><NavLink to="/bordList" ><img src={ bordList} width={50}/></NavLink></GnbItem>
                        <GnbItem><NavLink exact to="/user" ><img src={ user} width={50}/></NavLink></GnbItem>
                        <GnbItem><NavLink to="/myPage" ><img src={ MyPage} width={50}/></NavLink></GnbItem>
                    </GnbLists>
                    <br/>
                </Nav>
        </>
    );
};

export default Menu;