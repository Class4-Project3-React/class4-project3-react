import "./assets/css/App.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
<<<<<<< HEAD
import { Home, Contents, BoardList, User, Login, Register, MyPage, LikePage } from './components/pages';

=======
import { Home, Contents, BoardList, User, Login, Logout, Register, MyPage, LikePage } from './components/pages';
import Menu from './components/Menu';
>>>>>>> 4df1a9be9d8318cf257b613f3cac19e0a93d100e
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
              <Route path="/logout" element={<Logout />}/>
              <Route path="/register" element={<Register />}/>
            </Routes>
    </>
  );
}

export default App;
