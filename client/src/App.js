import "./assets/css/App.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, Contents, Board, User, Login, Logout, Register, MyPage, LikePage } from './components/pages';
import Board_Detail from './components/commons/Board_Detail'
// import Menu from './components/Menu';
// import Card from "./components/pages/Card";

function App() {
  return (
    <>
      {/* <Main/> */}
      {/* <Menu /> */}
            <Routes>
              <Route exact path="/" element={<Home/>}/>
              <Route path="/contents" element={<Contents/>}/>
              <Route path="/board" element={<Board/>}/>
              <Route path="/board/detail/:id" element={<Board_Detail/>}/>
              <Route path="/mypage" element={<MyPage/>}/>
              <Route path="/like" element={<LikePage/>}/>
              <Route path="/user" element={<User/>}/>
              <Route path="/login" element={<Login />}/>
              <Route path="/logout" element={<Logout />}/>
              <Route path="/register" element={<Register />}/>
            </Routes>
    </>
  );
}

export default App;
