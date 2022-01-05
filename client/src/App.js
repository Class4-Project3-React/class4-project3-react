import "./assets/css/App.css";
// import Test from "./components/pages/Test";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, Contents, BordList, User, Footer } from './components/pages';
import Menu from './components/Menu';
import Login from './components/Login';
import Mypage from "./components/Mypage";


function App() {
  return (
    <>
      {/* <Main/> */}
        <Menu>
          <BrowserRouter>
            <Routes>
              <Route exact path="/" component={Home}/>
              <Route path="/contents" component={Contents}/>
              <Route path="/bordlist" component={BordList}/>
              <Route path="/mypage" component={Mypage}/>
              <Route path="/user" component={User}/>
              <Route path="/login" component={Login}/>
            </Routes>                 
          </BrowserRouter>
        </Menu>

        <Footer />
    </>
  );
}

export default App;
