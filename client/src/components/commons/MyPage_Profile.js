import React, { useState, useEffect } from "react";
import Axios from "axios";
import styled from "styled-components";
import { Link } from 'react-router-dom';
import img1 from '../../assets/img/my_test1.png'
import ProfileModal from "./MyPage_ProfileModal";

const ProfileCSS = styled.div`

    .body{
        margin-left: 20%;
        margin-right: 20%;
        text-align: center;
        font-family: 'Roboto', sans-serif;
    }

    .container {
        height: 200px;
    }

    .col-md-4 {
        /* background-color: lightcoral; */
        height: 200px;
        display: flex;
        align-items: center;
        position: relative;
    }

    .profile {
        display: inline-block;
        background-color: white;
        width: 150px;
        height: 150px;
        border-radius: 50%;
        margin-left:auto;
        margin-right: auto;
    }

    .profile img {
        border: solid #344CB7 2px;
        border-radius: 50%;
    }

    .col-md-8 {
        /* background-color: lightgreen; */
        height: 200px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        
    }
    .profile_text {
        text-align: left;
    }

    .profile_text h4{
        padding: 5px;
    }

    .option {
        /* background-color: cadetblue; */
        height: 50px;
        display: flex;
        align-items: center;
        position: relative;
        border-top: solid lightgray 1px;
    }
    .option1 {
        padding: 25px;
        color: black;
        display: block;
        margin-left: auto;
        font-family: 'Roboto', sans-serif;
    }

    .option2 {
        padding: 25px;
        color: black;
        display: block;
        margin-right: auto;
        font-family: 'Roboto', sans-serif;
    }
`

function MyPageProfile() {

    const [openModal, setOpenModal] =useState(false);

    const [name, setName] = useState('');
    const [profile, setProfile] = useState('');
    const [favorite, setFavorite] = useState('');
    const [mypage, setMypage] = useState([]);

    // const [newprofile, setNewprofile] = useState('');

    useEffect( () => {
        Axios.get('http://localhost:3001/api/test/get').then((response)=>{
          // console.log(response.data);
          setMypage(response.data);
        })
      }, [])

    return (
        <>
        {/* 한글폰트 링크 */}
        {/* <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Gothic+A1&family=Roboto:wght@900&display=swap" rel="stylesheet"></link> */}

        {/* 영문폰트 링크 */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@1,900&display=swap" rel="stylesheet" />

        <ProfileCSS>
            <div className='body'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="profile">
                                <img src={img1} width='100%'></img>
                            </div>
                        </div>

                        {mypage.map( (val,i) => {
                            return(
                                <>                                
                                <div className="col-md-8">
                                    <div className="profile_text">
                                        <h4>Name : {val.name} </h4>
                                        <h4>Profile : {val.profile}</h4>
                                        <h4>Favorite : {val.favorite}</h4>
                                    </div>
                                    <div className="profile_btn">
                                        <button onClick={ () => setOpenModal(true)}>Edit</button>
                                    </div>
                                    {openModal && <ProfileModal closeModal={setOpenModal} />}
                                </div>
                                </>
                            )
                        })}

                    </div>
                </div>
                <br/>
                {/* ==================== */}

                <div className='option'>
                    <Link className='option1' style={{ textDecoration: 'none' }} to="/mypage">📑 Todo</Link>
                    <Link className='option2' style={{ textDecoration: 'none' }} to="/like">❤️ Like</Link>
                </div>
            </div>
        </ProfileCSS>
        </>
        )
    }
    
    export default MyPageProfile;