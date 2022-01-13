import React, { useState } from 'react';
import Axios from 'axios';
import { Button,InputGroup,FormControl } from 'react-bootstrap';
import styled from "styled-components";

const Todo_modal = styled.div`
    .todo_modal_container {
        display: inline-block;
        border: solid #000957 1px;
        border-radius: 20px;
        margin: 20px;
        width: 540px;
        font-family: 'Roboto', sans-serif;
    }
    .todo_modal {
        display: inline-block;
        width: 500px;
        margin: 20px;
    }

    .mb-2 {
        height: 100px;
    }
`

function TodoModal() { 
    
    const [title, setTitle] = useState('');
    const [contents, setContents] = useState('');
    const [mypage, setMypage] = useState([]);

    const submitReview = () => {
        Axios.post('http://localhost:3001/api/insert', {
            title : title, 
            contents : contents 
        });
        
        setMypage([...mypage, {
            title : title, 
            contents : contents}, 
            ]);
    };        

    return(
        <>
            {/* 영문폰트 링크 */}
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@1,900&display=swap" rel="stylesheet" />
        
        <Todo_modal>
            <div className='todo_modal_container'>
                <div className='todo_modal'>
                    <InputGroup className="mb-1" type='text'>
                        <InputGroup.Text id="inputGroup-sizing-default">Title</InputGroup.Text>
                        <FormControl
                        aria-label="Default"
                        aria-describedby="inputGroup-sizing-default"
                        onChange={ (e) => {setTitle(e.target.value)}}
                        />
                    </InputGroup>
            
                    <InputGroup className="mb-2" type='text'>
                        <InputGroup.Text id="inputGroup-sizing-default">Contents</InputGroup.Text>
                        <FormControl
                        aria-label="Default"
                        aria-describedby="inputGroup-sizing-default"
                        onChange={ (e) => {setContents(e.target.value)}}
                        />
                    </InputGroup>
                    
                    <Button variant="secondary" size="sm" onClick={submitReview}>submit</Button>
                </div>
            </div> 
        </Todo_modal>
        </>
    )
}

export default TodoModal;
