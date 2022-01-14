import "./assets/css/App.css";
// import Test from "./components/pages/Test";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, Contents, Board, User, Login, Register, MyPage, LikePage } from './components/pages';
import Menu from './components/Menu';
// import Card from "./components/pages/Card";
import Board_Detail from './components/commons/Board_Detail'
import Board_List from "./components/commons/Board_List";

function App() {
  
  // useEffect(() => {
  //   Axios.get('/')
  //     .then(res => console.log(res))
  // })

  return (
    <>
      {/* <Main/> */}
      {/* <Menu /> */}
            <Routes>
              <Route exact path="/" element={<Home/>}/>
              <Route path="/contents" element={<Contents/>}/>
              <Route path="/board" element={<Board/>}/>
              <Route path="/board/detail/:id" element={<Board_Detail/>}/>
              {/* <Route path="/board/:write" element={<Board_Write/>}/> */}
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
