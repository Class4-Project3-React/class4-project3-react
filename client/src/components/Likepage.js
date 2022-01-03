import React, {useState} from 'react';
import { Link, Route } from 'react-router-dom';
import './Mypage.css';


function Likepage() {

    const [modal, setModal] = useState(false);  // 모달창을 켜고 닫는 스위치

    function modalChange() {
        setModal (!modal);   //! 느낌표 기호는 true 왼쪽에 붙이면 false로 바꿔주고, false왼쪽에선 true
      }  

    return (
        <>
        <div>
            Like test page ~
        </div>

         <div>
        <button onClick={modalChange}>Modal</button>
        {/* 버튼 클릭하면 나오고 다시 없애는거 해보기 */}

        {
          modal === true
          ? <Modal />
          : null  // 텅빙 html 이라는 뜻
          // if 대신 삼항연산자 JSX안의 {} 내에서 쓰기 가능
          // 조건식 ? 참일때 실행할 코드 : 거짓일때 실행할 코드
        }
        </div>

        <br />
        
        <div>
            <Link className='option1' style={{ textDecoration: 'none' }} to="/mypage">📑</Link>
            <Link className='option2' style={{ textDecoration: 'none' }} to="/like">❤️</Link>
        </div>

        </>
    )
}

function Modal() { 
    return(
      <>
      <div className='modal'>
        <h1>Modal test</h1>
        <h2>글제목</h2>
        <p>날짜</p>
        <p>상세내용</p>
      </div>
      </>
    )
  }

export default Likepage;