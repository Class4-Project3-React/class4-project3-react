import "./assets/css/App.css";
import Main from "./components/pages/main";
import { Route,Routes} from 'react-router-dom';
import { Home, Contents, BordList, MyPage, User } from './components/pages';
import Menu from './components/Menu';



function App() {
  return (
    <>
      {/* <Main/> */}
        <Menu />
          <Routes>
            <Route exact path="/" component={Home}/>
            <Route path="/contents" component={Contents}/>
            <Route path="/bordlist" component={BordList}/>
            <Route path="/mypage" component={MyPage}/>
            <Route path="/user" component={User}/>
          </Routes>
    </>
  );
}

export default App;

