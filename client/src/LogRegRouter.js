
// 로그인, 회원가입 라우터 구현
import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import RouterLayout from "./RouterLayout";
import Login from "./Login";
import Register from "./Register";


export default function LogRegRouter() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<RouterLayout />}>
                    <Route path="login" element={<Login />} />
                    <Route path="register" element={<Register />} />
                </Route>
            </Routes>
        </BrowserRouter>   
    )
    
}