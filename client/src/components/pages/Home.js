import React,{useState} from 'react';
import realman from '../../assets/img/realman.png'
import styled from 'styled-components';
import {Modal} from '../commons/Modal'
// import { GlobalStyle } from './globalStyles';
// import Card from './Card';

const MainStory = styled.div`
  .container11{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    position: relative;

  }
  .container22{
      width: 80%;
      position: absolute;
      /* position: relative; */
    margin: auto;

  }

  .containerbutton{
    width: 300px;
    margin: auto;
    /* background-color: red; */
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;

  }


  .containertext{
    bottom: 10%;
    width: 100px;
    /* background-color: blue; */
    position: absolute;
    color: white;
    font-size: 30px;
  }

  .Image{
    width: 200px;
    height: 200px;
    justify-content: center;
    align-items: center;


    }

  

  .button1 {
    width: 100px;
    padding: 160px 100px;
    border-radius: 4px;
    border: none;
    background: #141414;
    color: #fff;
    font-size: 24px;
    cursor: pointer;
  }
`;



function Home() {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(prev => !prev);
  };

  

  return (
    <>
      {/* <Container> */}
        <MainStory >
            <div className='container11'>
                {/* <div className='container22'>
                    <img src={require('../../assets/img/workout.png')}  width="100%" height="500px"/>
                </div> */}

                    <div className='containerbutton' >
                        <div className="Image" onClick={openModal}>
                            <img src={realman} width="100%" height="100%" />
                            
                        </div>
                        <div className='containertext'>
                            HOME_T
                        </div>
                    </div>
                <Modal showModal={showModal} setShowModal={setShowModal} />

                {/* 크로스핏 */}
                <div className='containerbutton' >
                    <div className="Image" onClick={openModal}>
                        <img src={require('../../assets/img/CrossfitMain.png')} width="100%" height="100%" />
                        
                    </div>
                    <div className='containertext'>
                        Crossfit
                    </div>
                </div>
                <Modal showModal={showModal} setShowModal={setShowModal} />

                {/* sport */}
                <div className='containerbutton' >
                    <div className="Image" onClick={openModal}>
                        <img src={require('../../assets/img/SportMain.png')} width="100%" height="100%" />
                        
                    </div>
                    <div className='containertext'>
                        Sport
                    </div>
                </div>
                <Modal showModal={showModal} setShowModal={setShowModal} />


                {/* climbing */}
                <div className='containerbutton' >
                    <div className="Image" onClick={openModal}>
                        <img src={require('../../assets/img/climbing1.png')} width="100%" height="100%" />
                        
                    </div>
                    <div className='containertext'>
                    climbing
                    </div>
                </div>
                <Modal showModal={showModal} setShowModal={setShowModal} />
                
                {/* hiking */}
                <div className='containerbutton' >
                    <div className="Image" onClick={openModal}>
                        <img src={require('../../assets/img/hiking1.png')} width="100%" height="100%" />
                        
                    </div>
                    <div className='containertext'>
                        hiking
                    </div>
                </div>
                <Modal showModal={showModal} setShowModal={setShowModal} />

                {/* lesure */}
                <div className='containerbutton' >
                    <div className="Image" onClick={openModal}>
                        <img src={require('../../assets/img/leisure1.png')} width="100%" height="100%" />
                        
                    </div>
                    <div className='containertext'>
                        leisure
                    </div>
                </div>
                <Modal showModal={showModal} setShowModal={setShowModal} />
            </div>
        </MainStory>
    </>
  );
}


// function Home (){
    
//     return (
//         <>
//             <div>
//                 <Card/>
//             </div>
//     </>
//     );
// };



export default Home;