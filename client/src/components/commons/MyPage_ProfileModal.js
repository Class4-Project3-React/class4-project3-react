import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import { FormControl, Button } from 'react-bootstrap';
import Axios from "axios";


const ModalCSS = styled.div`
    
    .modalBackground{
        z-index: 1;
        top:0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background-color: rgba(200, 200, 200);
        position: fixed;
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: 'Roboto', sans-serif;
    }

    .modalContainer {
        width: 450px;
        height: 450px;
        border-radius: 12px;
        background-color: white;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        display: flex;
        flex-direction: column;
        padding: 25px;
    }

    .modalContainer title{
        display: inline-block;
        text-align: center;
        padding-top: 10px;
    }

    .titleCloseBtn {
        display: flex;
        justify-content: flex-end;
        /* 오 이게 끝으로 보내버리는 건가 보네 */
    }

    .titleCloseBtn button {
        background-color: transparent;
        border: none;
        font-size: 25px;
        cursor: pointer;
    }

    .modalContainer footer {
        flex: 20%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`

function ProfileModal({ closeModal }) {

    const [name, setName] = useState('');
    const [profile, setProfile] = useState('');
    const [favorite, setFavorite] = useState('');
    const [mypage, setMypage] = useState([]);

    const [newprofile, setNewprofile] = useState('');
    const [newfavorite, setNewfavorite] = useState('');

    useEffect( () => {
        Axios.get('http://localhost:3001/api/test/get').then((response)=>{
          // console.log(response.data);
          setMypage(response.data);
        })
      }, [])

    const updateProfile = (name) => {
    Axios.put('http://localhost:3001/api/test/update', {
        name : name, 
        profile : newprofile,
        favorite : newfavorite 
    });

    setNewprofile('');
    setNewfavorite('');
    };

    return(
        <>
        {/* 영문폰트 링크 */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@1,900&display=swap" rel="stylesheet" />

        <ModalCSS>
            <div className="modalBackground">
                <div className="modalContainer">
                    <div className="titleCloseBtn">
                        <button onClick={ ()=> closeModal(false)}>X</button>
                    </div>
                    <div className="title">
                        <h3>Change Your Profile !</h3>
                    </div>

                    {mypage.map( (val,i) => {
                        return(
                            <>
                            <div className="body">
                                <br />
                                <p> Name : {val.name} </p>
                                <p> Profile : </p>
                                <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" ype='text' onChange={ (e) => {setNewprofile(e.target.value)}} />
                                <br/>
                                <p> Favorite : </p>
                                <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" ype='text' onChange={ (e) => {setNewfavorite(e.target.value)}} />
                            </div>    
                            <div className="footer">
                                <br />
                                <Button variant="dark" size="sm" onClick={ () => {updateProfile(val.name)}}>Submint</Button>
                            </div>
                            </>
                        )
                    })}

                </div>
            </div>
        </ModalCSS>
        </>
    )
}

export default ProfileModal;