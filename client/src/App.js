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
        <Menu>
          <BrowserRouter>
            <Routes>
              <Route exact path="/" component={Home}/>
              <Route path="/contents" component={Contents}/>
              <Route path="/bordlist" component={BordList}/>
              <Route path="/mypage" component={MyPage}/>
              <Route path="/user" component={User}/>
              <Route path="/login" component={Login}/>
            </Routes>
          </BrowserRouter>
        </Menu>
    </>
  );
}

export default App;

