// ★AWS Test 위한 임시 component - 권원현
// 실행 후 button 클릭하여 console.log 확인해볼 것
import React from "react";

function Test() {
    
    const getServerData = () => {
        
        const url = "http://localhost:3001/contents";
        const option = {
            method : "GET",
            headers : { "Content-Type" : "application/json" },
            mode : "cors"
        };

        fetch("http://localhost:3001/", {
            method : "GET",
            headers : { "Content-Type" : "application/json" },
            mode : "cors"
        })
        .then(res => {
            console.log(res);
            return res.json();
        })
        .then(res => console.log(res + "이거 맞음?"));
    };

    return (
        <div>
            <button onClick={getServerData}>Click Here for Test</button>
        </div>
    );
};

export default Test;