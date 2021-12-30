
// 회원가입 화면
const Register = () => {
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
                <br />
                <label>Email : </label>
                <input type="text" placeholder="put email"></input>
                <br />
                <br />
                <label>Address : </label>
                <input type="text" placeholder="put address"></input>
                <br />
                <button type="submit">Submit</button>
            </form>
        </>
    )
}

export default Register