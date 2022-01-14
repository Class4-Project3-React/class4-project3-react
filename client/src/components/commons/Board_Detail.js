import React, { useState, useEffect } from 'react';
// import styled from "styled-components";
import Axios from 'axios';
import {useLocation} from "react-router-dom";

function Board_Detail() {

    // const id = location.state.id;
    // console.log(id);

    // const { state } = useLocation()

    // const location = useLocation()
    // const { id } = location.state
    // console.log({ id });


    let data = useLocation();
    console.log(data);
    console.log(data.state);
    
    // console.log(url);
    // const [boardGetDetail, setBoardGetDetail] = useState([]);

    // useEffect(async () => {
    //     await Axios.get(`http://localhost:3001/${url}`)
    //     .then((res) => {
    //         setBoardGetDetail(res.data);
    //         console.log(res);
    //     });
    // },[]);


    return (
        <>
            <h1>{data.state.name}</h1>
            <h1>{data.state.title}</h1>
            <h1>{data.state.content}</h1>
            <img src={data.state.image} />
            {/* <h1>{boardGetDetail.id}</h1> */}
        </>
            
    );
}
export default Board_Detail;