// ★AWS Test 위한 임시 component - 권원현
// 실행 후 button 클릭하여 console.log 확인해볼 것
import React from "react";

class Test extends React.Component {

    getServerData = () => {

        fetch("http://54.180.117.235:3001/", {
            method : "GET",
            headers : { "Content-Type" : "application/json" },
            mode : "cors"
        })
        .then(res => {
            console.log(res);
            console.log(typeof(res));
            return res.text();
        })
        .then(res => console.log(res));
    };

    render() {
        return (
            <div>
                <button onClick={this.getServerData}>Click Here for Test</button>
            </div>
        );
    };
};

export default Test;