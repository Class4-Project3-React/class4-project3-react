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

[type="submit"] {
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

/* 로그인 관련 에러메시지 */
.success-msg,
.err-msg {
    color: #dc3545;
    border: 1px solid #dc3545;
    padding: 10px;
    border-radius: 3px;
}

.success-msg {
    color: #ffffff;
    background-color: #20c997;
    border-color: rgba(0, 0, 0, 0.1);
}
`


// 로그인 화면
const Login = () => {
    return (
        <LoginStyle>
            <div class="container">
            <form action="" method="POST">
                <label for="user_email">Login</label>
                <br />
                <br />
                <input type="email" class="input" name="_email" autocomplete="off" id="user_email" placeholder="Enter your email" />
                <input type="password" class="input" name="_password" id="user_pass" placeholder="Enter new password" />
                <input type="submit" value="Sign in" />
                <div class="link"><a href="./Register">Create Account</a></div>
            </form>
            </div>
        </LoginStyle>
    )
}

export default Login

