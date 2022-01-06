import './App.css';
import { Link, Route } from 'react-router-dom';
import Mypage from './components/Mypage';

function App() {
  return (
    <>
    
      {/* <Route path='/'> */}
        <div>hello</div>
        <Link to="/mypage">Mypage</Link>
        <Mypage />
      {/* </Route> */}

      {/* <Route path='/mypage'>
        <Mypage />
      </Route> */}
    
    </>
  );
}

export default App;
