import "./assets/css/App.css";
// import Test from "./components/pages/Test";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, Contents, BordList, User, MyPage, LikePage, Footer } from './components/pages';
import Menu from './components/Menu';
import Login from './components/Login';

// import Card from "./components/pages/Card";


function App() {
  return (
    <>
      {/* <Main/> */}
      <Menu />
            <Routes>
              <Route exact path="/" element={<Home/>}/>
              <Route path="/contents" element={<Contents/>}/>
              <Route path="/bordlist" element={<BordList/>}/>
              <Route path="/mypage" element={<MyPage/>}/>
              <Route path="/like" element={<LikePage/>}/>
              <Route path="/user" element={<User/>}/>
              <Route path="/login" component={Login}/>
            </Routes>
          <Footer/>
    </>
  );
}

export default App;
