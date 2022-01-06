import "./assets/css/App.css";
// import Test from "./components/pages/Test";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, Contents, BordList, User, Footer } from './components/pages';
import Menu from './components/Menu';
import Login from './components/Login';
import Mypage from "./components/Mypage";
import Card from "./components/pages/Card";


function App() {
  return (
    <>
      {/* <Main/> */}
      <Card title='HomeTranining'
        img=''
        body='카드 내용은 여기서 확인하시면 됩니다 짜장면 탕수육 마라탕 치킨 햄버거 육회 스시 콩나물 해장국 선지해장국 뼈다귀 해장국 워터 워털 털수세미'/>
        {/* <Menu />
            <Routes>
              <Route exact path="/" element={<Home/>}/>
              <Route path="/contents" element={<Contents/>}/>
              <Route path="/bordlist" element={<BordList/>}/>
              <Route path="/mypage" element={<Mypage/>}/>
              <Route path="/user" element={<User/>}/>
              <Route path="/login" component={Login}/>
            </Routes>
          <Footer/> */}
    </>
  );
}

export default App;
