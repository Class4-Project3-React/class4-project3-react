import "./assets/css/App.css";
// import Test from "./components/pages/Test";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, Contents, BordList, User, Login, Logout, Register, MyPage, LikePage } from './components/pages';
import Menu from './components/Menu';
// import Card from "./components/pages/Card";
// import { useEffect, useState } from 'react';

function App() {
  // // 로그인 상태 관리
  // const [isLogin, setIsLogin] = useState(false)

  // useEffect(() => {
  //   if(sessionStorage.getItem('user_id') === null){
  //     // sessionStorage 에 user_id 라는 key 값으로 저장된 값이 없다면
  //       console.log('isLogin ?? :: ', isLogin)
  //   } else {
  //   // sessionStorage 에 user_id 라는 key 값으로 저장된 값이 있다면
  //   // 로그인 상태 변경
  //     setIsLogin(true)
  //     console.log('isLogin ?? :: ', isLogin)
  //   }
  // })

  return (
    <>
      {/* <Main/> */}
      {/* <Menu /> */}
            <Routes>
              {/* {
                // 로그인된 상태면 메인페이지로 이동하는 로그인 체크 로직(삼항 연산자)
                isLogin ?
                <Route exact path="/" element={<Home/>}/> :
                <Route path="/login" element={<Login />}/>
              } */}
              <Route exact path="/" element={<Home/>}/>
              <Route path="/contents" element={<Contents/>}/>
              <Route path="/bordlist" element={<BordList/>}/>
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
