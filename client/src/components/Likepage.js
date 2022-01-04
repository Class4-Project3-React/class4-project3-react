import React, {useState} from 'react';
import { Link, Route } from 'react-router-dom';
import './Mypage.css';
import 'bootstrap/dist/css/bootstrap.min.css';

<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
  integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
  crossorigin="anonymous"
/>

function Likepage() {

    const [modal, setModal] = useState(false);  // 모달창을 켜고 닫는 스위치

    function modalChange() {
        setModal (!modal);   //! 느낌표 기호는 true 왼쪽에 붙이면 false로 바꿔주고, false왼쪽에선 true
      }  

    return (
        <>
        <header>
        Header
        </header>
        <div className='body'>
            <div className='body1'> 
                <div className='body1_1'>
                    like test page <br/>
                    일단 mypage와 같음  <br/>
                </div>

                <div className='body1_2'>
                <button onClick={modalChange}>Modal</button>
                {/* 버튼 클릭하면 나오고 다시 없애는거 해보기 */}

                {
                modal === true
                ? <Modal modalChange={modalChange}/>
                : null  // 텅빙 html 이라는 뜻
                // if 대신 삼항연산자 JSX안의 {} 내에서 쓰기 가능
                // 조건식 ? 참일때 실행할 코드 : 거짓일때 실행할 코드
                }
                </div>
            </div>

            <br />

            <div >
                <Link className='option1' style={{ textDecoration: 'none' }} to="/mypage">📑</Link>
                <Link className='option2' style={{ textDecoration: 'none' }} to="/like">❤️</Link>
            </div>

            <br />

            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <img src='./test2.jpg' width='100%'></img>
                        <h4>test1</h4>
                        <p>근데 이미지가 안들어감. why?</p>
                    </div>
                    <div className="col-md-4">
                        {/* <img src='https://codingapple1.github.io/shop/shoes1.jpg' width='100%/'></img> */}
                        <h4>test2</h4>
                        <p>외부링크만 들어가지는데 왜그런지 모륵겠다. 그렇다는건 .. 이거를 직접 코드짜서 구조를 잡아야할듯</p>
                    </div>
                    <div className="col-md-4">
                        <h4>test3</h4>
                        <p>이제 여기 이미지에 db이미지를 넣고 클릭했을때 해당 db가 떠야하는거네</p>
                    </div>
                    <div className="col-md-4">
                        <h4>test4</h4>
                        <p>이제 여기 이미지에 db이미지를 넣고 클릭했을때 해당 db가 떠야하는거네</p>
                    </div>
                    <div className="col-md-4">
                        <h4>test4</h4>
                        <p>여기는 다른페이지 입니다</p>
                    </div>
                    <div className="col-md-4">
                        <h4>test4</h4>
                        <p>이제 여기 이미지에 db이미지를 넣고 클릭했을때 해당 db가 떠야하는거네</p>
                    </div>
                    <div className="col-md-4">
                        <h4>test4</h4>
                        <p>이제 여기 이미지에 db이미지를 넣고 클릭했을때 해당 db가 떠야하는거네</p>
                    </div>
                </div>
            </div>
        </div>

        <footer>
            footer
        </footer>
        </>
    )
}

function Modal(props) { 
    return(
        <>

      <div className='Nav_modal'>
        <div className = "Nav_modalin">
            <p>Modal test</p>
            <p>옆 페이지 수정</p>
            <button onClick={props.modalChange}className="Nav_modbtn">X</button>
        </div>
      </div>
      </>
    )
  }

export default Likepage;