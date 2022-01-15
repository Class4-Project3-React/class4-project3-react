import React, { useState, useEffect } from 'react';
// import styled from "styled-components";
import Axios from 'axios';
import {useLocation} from "react-router-dom";
import styled from "styled-components";

const Test1 = styled.h1`
    /* background-color: red; */
    border: 3px solid black;
    width: 150px;
    height: 150px;
`;

const Test2 = styled.div`
`;
const Test3 = styled.div`
`;
const Test4 = styled.div`
`;
const Test5 = styled.img`
`;
const Test6 = styled.div`
`;


function Board_Detail() {

    let linkData = useLocation();
    // console.log("Board_Detail + Link + data = " + linkData);
    // console.log("Board_Detail + Link + data.state.id = " + linkData.state.id);
    // console.log("Board_Detail + Link + data + state = " + linkData.state);
    
    const [boardGetDetail, setBoardGetDetail] = useState([]);

    useEffect(async () => {
        await Axios.get(`http://localhost:3001/board/detail/${linkData.state.id}`)
        .then((res) => {
            setBoardGetDetail(res.data);
            // console.log('Board_Detail res = ' + res);
            // console.log('Board_Detail res.data = ' + res.data);
            // console.log('Board_Detail boardGetDetail[0] = ' + boardGetDetail[0]);
            // console.log('Board_Detail res.data[0].name = ' + res.data[0].name);
            // console.log('Board_Detail res.data.name = ' + res.data.name);
            // console.log('Board_Detail ${data.state.id} = ' + `${data.state.id}`);
        });
    },[]);

    return(
        <>
            {boardGetDetail.map((item, index) => (
                <div key={index}>
                    <Test1 >
                        {item.id}
                    </Test1>

                    <Test2>
                        {item.name}
                    </Test2>

                    <Test3>
                        {item.title}
                    </Test3>

                    <Test4>
                        {item.content}
                    </Test4>

                    <Test5 src={item.image} />

                </div>
            ))}
        </>
    );

    // 최상단 div 에 index 키값을 주어 키 오류 막음 (원본)
    // return(
    //     <>
    //         {boardGetDetail.map((item, index) => (
    //             <div key={index}>
    //                 <Test1 >
    //                     {item.id}
    //                 </Test1>

    //                 <Test2>
    //                     {item.name}
    //                 </Test2>

    //                 <Test3>
    //                     {item.title}
    //                 </Test3>

    //                 <Test4>
    //                     {item.content}
    //                 </Test4>

    //                 <Test5 src={item.image} />

    //             </div>
    //         ))}
    //     </>
    // );
}

export default Board_Detail;