import "./assets/css/App.css";
import Main from "./components/pages/main";
import Mypage from "./components/Mypage";
import Likepage from "./components/Likepage";

import { Link, Route } from 'react-router-dom';

import { Home, Contents, BordList, MyPage, User } from './components/pages';
import Menu from './components/Menu';



function App() {
  return (
    <>
    {/* <Route exact path="/">
      <Main />
      <Link to="/mypage">Mypage</Link>
    </Route> */}

    {/* <Login />
    <Register /> */}

    <Route exact path="/mypage">
        <Mypage />
    </Route>


    <Route exact path="/like">
        <Likepage />
    </Route>
    
      {/* <Main/> */}
    <Menu />
      <Route exact path="/" component={Home}/>
      <Route path="/contents" component={Contents}/>
      <Route path="/bordlist" component={BordList}/>
      <Route path="/mypage" component={MyPage}/>
      <Route path="/user" component={User}/>

    </>
  );
}

export default App;

