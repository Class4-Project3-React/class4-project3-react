
// 로그인 화면
const Login = () => {
    return (
        <>
            <form>
                <label>ID : </label>
                <input type="text" placeholder="put id"></input>
                <br />
                <br />
                <label>Password : </label>
                <input type="password" placeholder="put password"></input>
                <br />
                <button type="submit">Login</button>
                <a href="/register">Register</a>
            </form>
        </>
    )
}

export default Login

