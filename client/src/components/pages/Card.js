import React from "react";
// import "./Card.css"
import realman from '../../assets/img/realman.png'
import styled from "styled-components";
import scr from '../../assets/img/pushup.png'


const MainNav = styled.div`
  .card-container{
    padding: 10;
    margin-top: 100px;
    margin-left: 50px;
    width: 300px;
    overflow: hidden;
    box-sizing: 0px 0px 15px -5px;
    transition: 0.3s;
    /* 애니메이션 추가 */
    animation: ease-in;
    background-color: lightblue;
}

.card-container:hover{
    transform: scale (1.1);
    box-sizing: 0px 0px 15px 0px;

}

.image-container img{
    overflow: hidden;
    height: 200px;
}

.Image img{
 background-color: red;
 width: 100%;
 height: 600px;
}


.card-contetnt{
    margin-left: 10rem;
    margin-top: 0.5rem;
}

h3,p{
     margin: 0;
     padding: 0;
}

.card-title{
    margin-bottom: 0.5rem;
}

.btn {
    display: flex;
    justify-content: center;
}

.btn button{
    padding: 0.5rem;
    background-color: white;
    /* border: none;  */
    transition: 0.2s;
    /* transition: 0.2s; */
    margin-bottom: 0.5rem;
}

.btn:hover{
    background: gray;
    transform:scale(1.2)
}

a{
    text-transform: uppercase;
    color: blueviolet;
    /* 밑줄 지우기 */
    text-decoration: none;

}

`
const imgData ={
    "images" : [
        "smallyoga",
        "smallhealth",
        "smallsquat"
        
    ]
}

//경로  public img에 되어있음
const MyImages = imgData.images.map( img =>{
    return <img src={require('../../assets/img/' + img +'.png')} />
})

    


function Card({title,body}) {
    

    const Results = () => (
        <div id="results" className="search-results">
          {MyImages}
          
        </div>
      )


      const [showResults, setShowResults] = React.useState(false)
      const onClick = () => setShowResults(true)
        
      
    
    return(
        <>
        
            <MainNav>
                <div className="Image">
                    <img src={realman} />
                </div>
                

                <div className="card-container" border="primary" style={{ width: '18rem' }}>
                    <div className="image-container">
                        <div className="img">
                            <img src={scr} />
                        </div>
                    </div>
                    <div className="card-content" border="secondary" style={{ width: '18rem' }}>
                        <div className="card-title">
                            <h2>{title}</h2>
                        </div>
                        <div className="card-body">
                            <p>{body}</p>
                        </div>
                    </div>
                    

                    <div className="btn">
                    <div>
                        <input type="submit" value="Search" onClick={onClick} />
                        { showResults ? <Results /> : null }
                        </div>
                        
                    </div>
                </div>
                
                <div className="card-container">
                    <div className="image-container">
                        <div className="img">
                            <img src={scr} />
                        </div>
                    </div>
                    <div className="card-content">
                        <div className="card-title">
                            <h2>{title}</h2>
                        </div>
                        <div className="card-body">
                            <p>{body}</p>
                        </div>
                    </div>

                    <div className="btn">
                        <button >
                            <a>
                                여기를 클릭하시면 밑에 이미지 띄울 예정
                            </a>
                        </button>
                    </div>
                </div>


                <div className="card-container" style={{ width: '18rem' }}>
                    <div className="image-container">
                        <div className="img">
                            <img src={scr} />
                        </div>
                    </div>
                    <div className="card-content">
                        <div className="card-title">
                            <h2>{title}</h2>
                        </div>
                        <div className="card-body">
                            <p>{body}</p>
                        </div>
                    </div>

                    <div className="btn">
                        <button>
                            <a>
                                여기를 클릭하시면 밑에 이미지 띄울 예정
                            </a>
                        </button>
                    </div>
                </div>
            </MainNav>
        </>
    )
}

export default Card;