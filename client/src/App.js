import "./assets/css/App.css";
import Main from "./components/pages/main";
import { BrowserRouter, Route,Routes} from 'react-router-dom';
import { Home, Contents, BordList, MyPage, User } from './components/pages';
import Menu from './components/Menu';
import Login from "./components/Login";



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
              <Route path="/user" element={<User/>}/>
              <Route path="/login" component={Login}/>
            </Routes>
    </>
  );
}

export default App;

