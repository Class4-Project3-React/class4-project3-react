import React from "react";
import MyPageTodo from '../commons/MyPage_Todo';
import MyPageProfile from '../commons/MyPage_Profile';


function MyPage() {
    return(
        <>
            <MyPageProfile />
            <MyPageTodo />
        </>
    )
}

export default MyPage;