// import React, { useState } from "react";
// // import "./Card.css"
// // import realman from '../../assets/img/realman.png'
// import styled from "styled-components";
// import HomeTMain from '../../assets/img/HomeTMain.png'
// import CrossfitMain from '../../assets/img/CrossfitMain.png';
// import SportMain from '../../assets/img/SportMain.png'
// import realman from '../../assets/img/realman.png'
// import { Modal } from './Modal';
// // import { GlobalStyle } from './globalStyles';
// // import { createGlobalStyle } from 'styled-components';

// // const GlobalStyle = createGlobalStyle`
// //   * {
// //     box-sizing: border-box;
// //     margin:0;
// //     padding: 0;
// //     font-family: 'Arial', sans-serif;
// //   }
// // `;



// // const Button1 = styled.button`
// //   min-width: 100px;
// //   padding: 16px 32px;
// //   border-radius: 4px;
// //   border: none;
// //   background: #141414;
// //   color: #fff;
// //   font-size: 24px;
// //   cursor: pointer;
// // `;

    



// const MainNav = styled.div`
//     .container11 {
//         display: flex;
//         justify-content: center;
//         align-items: center;
//         height: 100vh;
//     };
    
//     .containerbutton11{
//         width: 300px;
//         margin: auto;
//         background-color: red;
//         display: flex;
//         justify-content: center;
//         align-items: center;
//         position: relative;
//         overflow: hidden;

//     }

//     .containertext11{
//         bottom: 10%;
//         width: 100px;
//         background-color: blue;
//         position: absolute;
//     }

//     .Image11{
//         width: 200px;
//         height: 200px;
//         justify-content: center;
//         align-items: center;
//     }

//     .card-container{
//         /* padding: 10; */
//         margin-top: 100px;
//         margin-left: 50px;
//         width: 300px;
//         overflow: hidden;
//         box-sizing: 0px 0px 15px -5px;
//         transition: 0.3s;
//         /* 애니메이션 추가 */
//         /* 애니메이션 졸라 안되네 */
//         animation: ease-in;
//         background-color: lightblue;
//         position: static;
//         display: inline-block;
//     }

    

//     .button1 {
//         width: 100px;
//         padding: 160px 100px;
//         border-radius: 4px;
//         border: none;
//         background: #141414;
//         color: #fff;
//         font-size: 24px;
//         cursor: pointer;
//     }
// /* 이것도 지랄이네 */
// .card-container:hover{
//     transform: scale (1.1);
//     box-sizing: 0px 0px 15px 0px;

// }

// .image-container img{
//     overflow: hidden;
//     height: 200px;
// }




// .card-contetnt{
//     margin-left: 10rem;
//     margin-top: 0.5rem;
// }

// h3,p{
//      margin: 0;
//      padding: 0;
// }

// /* .card-title{
//     margin-bottom: 0.5rem;
// } */

// .btn {
//     display: flex;
//     justify-content: center;
// }

// /* 버튼 css */
// .btn button{
//     padding: 0.5rem;
//     background-color: white;
//     /* border: none;  */
//     transition: 0.2s;
//     /* transition: 0.2s; */
//     margin-bottom: 0.5rem;
// }

// /* 버튼 애니메이션 */
// .btn:hover{
//     background: gray;
//     transform:scale(1.2)
// }

// a{
//     text-transform: uppercase;
//     color: blueviolet;
//     /* 밑줄 지우기 */
//     text-decoration: none;

// }

// /* .search-results{
//     width: 300px;
//     height: 100px;
// } */

// .Image112 img{
//         width: 100%;
//         height: 400px;
//        }

// `
// const ImgDataHome ={
//     "images" : [
//         "smallyoga",
//         "smallhealth",
//         "smallsquat"
        
//     ]
// }

// const ImgDataSport ={
//     "images" : [
//         "sport1",
//         "sport2",
//         "sport3"
        
//     ]
// }

// const ImgDataCross ={
//     "images" : [
//         "crossfit1",
//         "crossfit2",
//         "crossfit3"
        
//     ]
// }

// const MyImagesH = ImgDataHome.images.map( img =>{
//     return <img src={require('../../assets/img/' + img +'.png')} />
// })

// const MyImagesS = ImgDataSport.images.map( img =>{
//     return <img src={require('../../assets/img/' + img +'.png')} />
// })

// const MyImagesC = ImgDataCross.images.map( img =>{
//     return <img src={require('../../assets/img/' + img +'.png')} />
// })
    


// function Card({title,body}) {
    
//     const Results = () => (
//         <div id="results" className="search-results">
//           {MyImagesH}
          
//         </div>
//       )
//     const Results1 = () => (
//     <div id="results1" className="search-results1">
//         {MyImagesS}
        
//     </div>
//     )
//     const Results2 = () => (
//     <div id="results2" className="search-results2">
//         {MyImagesC}
        
//     </div>
//     )


//     const [showResults, setShowResults] = useState(0);
//     const onClick = () => setShowResults(!showResults)

//     const [showResults1, setShowResults1] = React.useState(false)
//     const onClick1 = () => setShowResults1(!showResults1)

//     const [showResults2, setShowResults2] = React.useState(false)
//     const onClick2 = () => setShowResults2(!showResults2)
    
//     const [showModal, setShowModal] = useState(false);

//     const openModal = () => {
//       setShowModal(prev => !prev);
//     };
    
            
    
//     return(
//         <>
//            <MainNav>
               
//                 <div className='container11'>
//                     <div className='containerbutton11' >
//                         <div className="Image11" onClick={openModal}>
//                             <img src={realman} width="100%" height="100%" />
                            
//                         </div>
//                         <div className='containertext11'>
//                             hi
//                         </div>
//                     </div>
//                     <Modal showModal={showModal} setShowModal={setShowModal} />
//                 </div>
                
//                 <div className="card-container">
//                     <div className="image-container">
//                         <div className="img">
//                             <img src={SportMain} />
//                         </div>
//                     </div>
//                     <div className="card-content">
//                         <div className="card-title">
//                             <h2>Sports</h2>
//                         </div>
//                         <div className="card-body">
//                             <p>스포츠 내용<br/>용<br/>용<br/>용</p>
//                         </div>
//                     </div>

//                     <div className="btn">
//                         <div>
//                         <input type="submit" value="Search" onClick={onClick1} />
//                         { showResults1 ===true ? <Results1 /> : null }
//                         </div>
//                     </div>
//                 </div>


//                 <div className="card-container" style={{ width: '18rem' }}>
//                     <div className="image-container">
//                         <div className="img">
//                             <img src={CrossfitMain} />
//                         </div>
//                     </div>
//                     <div className="card-content">
//                         <div className="card-title">
//                             <h2>Crossfit</h2>
//                         </div>
//                         <div className="card-body">
//                             <p>크로스핏 내용<br/>용<br/>용<br/>용</p>
//                         </div>
//                     </div>


                    

//                     <div className="btn">
//                         <div>
//                         <input type="submit" value="Search" onClick={onClick2} />
//                         { showResults2 ===true ? <Results2 /> : null }
//                         </div>
//                     </div>
//                 </div>
//             </MainNav>
//             {/* <GlobalStyle /> */}
//         </>
//     )
// }

// export default Card;