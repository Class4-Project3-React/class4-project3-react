import "./assets/css/App.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, Contents, BoardList, User, Login, Register, MyPage, LikePage } from './components/pages';
import Menu from './components/Menu';

// import Card from "./components/pages/Card";


function App() {
  return (
    <>
      {/* <Main/> */}
      {/* <Menu /> */}
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/contents" element={<Contents/>}/>
        <Route path="/boardlist" element={<BoardList/>}/>
        <Route path="/mypage" element={<MyPage/>}/>
        <Route path="/like" element={<LikePage/>}/>
        <Route path="/user" element={<User/>}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<Register />}/>
      </Routes>
    </>
  );
}

export default App;
