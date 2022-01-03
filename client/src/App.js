import "./assets/css/App.css";
import Main from "./components/pages/main";
import Mypage from "./components/Mypage";
import Likepage from "./components/Likepage";
// import Login from "./components/Login";
// import Register from "./components/Register";

import { Link, Route } from 'react-router-dom';

function App() {
  return (
    <>
    <Route exact path="/">
      <Main />
      <Link to="/mypage">Mypage</Link>
    </Route>
       
    {/* <Login />
    <Register /> */}

    <Route exact path="/mypage">
        <Mypage />
    </Route>


    <Route exact path="/like">
        <Likepage />
    </Route>
    </>
  );
}

export default App;