import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from "styled-components";
// css
const LoginStyle = styled.div`
*,
*::before,
*::after {
    box-sizing: border-box;
}

body {
    background-color: #f7f7f7;
    font-family: "Ubuntu", sans-serif;
    margin: 0;
    padding: 0;
    color: #222222;
    overflow-x: hidden;
    overflow-wrap: break-word;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    padding: 50px;
}

.container {
    background-color: white;
    max-width: 450px;
    margin: 0 auto;
    padding: 40px;
    box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.175);
    border-radius: 3px;
    margin-top: 100px;
    margin-bottom: 100px;
}

.container h2 {
    margin: 0 0 20px 0;
    text-align: center;
}

input,
button {
    font-family: "Ubuntu", sans-serif;
    outline: none;
    font-size: 1rem;
}

.input {
    padding: 10px;
    width: 100%;
    margin-bottom: 10px;
    border: 1px solid #bbbbbb;
    border-radius: 3px;
}

.input:hover {
    border-color: #999999;
}

.input:focus {
    border-color: black;
}

[type="button"] {
    background: #000000;
    color: white;
    border: 1px solid rgba(0, 0, 0, 0);
    border-radius: 4px;
    padding: 12px 0;
    cursor: pointer;
    box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
    margin-top: 5px;
    font-weight: bold;
    width: 100%;
}

[type="submit"]:hover {
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
}

label {
    font-weight: bold;
    font-size: 36px
}

.link {
    margin-top: 10px;
    text-align: center;
}

.link a {
    color: black;
}
`


// 로그인 화면
const Login = () => {

    const [inputId, setInputId] = useState('')
    const [inputPw, setInputPw] = useState('')
    // input data 의 변화가 있을 때마다 value 값을 변경해서 useState 해준다
    const handleInputId = (e) => {
        setInputId(e.target.value)
    }
    const handleInputPw = (e) => {
        setInputPw(e.target.value)
    }
    // login 버튼 클릭 이벤트
    const onClickLogin = () => {
        console.log('click login')
    }
    // 1.페이지가 처음 렌더링 후 무조건 한번 실행됨.
    // 2. useEffect에 배열로 지정한 useState의 값이 변경되면 실행된다.
    // https://ko-de-dev-green.tistory.com/18
    useEffect(() => {
        axios.get('/user_inform/login')
        .then(res => console.log(res))
        .catch()
    },[]) // 페이지 호출 후 처음 한번만 호출될 수 있도록 [] 추가

    return (
        <LoginStyle>
            <div class="container">
                <label for="user_email">Login</label>
                <br />
                <br />
                <input type='text' className="input" name='input_id' value={inputId} onChange={handleInputId} placeholder="Enter your ID" />
                <input type='password' className="input" name='input_pw' value={inputPw} onChange={handleInputPw} placeholder="Enter your Password"  />
                <button type='button' onClick={onClickLogin}>Login</button>
                <div class="link"><a href="./register">Create Account</a></div>
            </div>
        </LoginStyle>
    )
}

export default Login;

