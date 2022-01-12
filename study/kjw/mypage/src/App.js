import "./assets/css/App.css";
// import Test from "./components/pages/Test";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, Contents, BoardList, User, Login, Register, MyPage, LikePage, Test } from './components/pages';


// import Card from "./components/pages/Card";


function App() {
  return (
    <>
      {/* <Main/> */}
      {/* <Menu /> */}
            <Routes>
              {/* <Route exact path="/" element={<Home/>}/> */}
              {/* <Route path="/contents" element={<Contents/>}/>
              <Route path="/boardlist" element={<BoardList/>}/> */}
              <Route path="/mypage" element={<MyPage/>}/>
              <Route path="/like" element={<LikePage/>}/>
              {/* <Route path="/test" element={<Test/>}/> */}

              {/* <Route path="/user" element={<User/>}/>
              <Route path="/login" element={<Login />}/>
              <Route path="/register" element={<Register />}/> */}
            </Routes>
    </>
  );
}

export default App;
