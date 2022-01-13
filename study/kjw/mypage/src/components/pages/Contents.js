import React, { useState } from 'react';
import Axios from 'axios';

function Contents() {

    const [content, setContent] = useState('');

    function onChange(e) {
        setContent(e.target.files[0]);
    }

    const onSubmit = e => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("img", content);
    }

    Axios
        .post('http://localhost:3001/upload',  {
            headers: {
                "Content-Type" : "multipart/form-data",
            },
        })
        .then( res => {
            console.log(res);
        })
        .catch(err => {
            console.log("fail")
        })


    return(
        <>
           <div>hello</div>
           <form onSubmit={onSubmit}>
                <div>
                    <input 
                        name="img"
                        type='file'
                        id='customFile'
                        onChange={onChange}
                    />

                    <input type='submit' value='Upload'/>
                </div>
           </form>
        </>
    )
}

export default Contents;