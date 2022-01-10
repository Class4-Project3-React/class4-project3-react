import './Test.css';
import React, { useEffect, useState } from 'react';
import Axios from 'axios';

function Test() {

  const [name, setName] = useState('');
  const [profile, setProfile] = useState('');
  const [favorite, setFavorite] = useState('');
  const [mypage, setMypage] = useState([]);

  const [newprofile, setNewprofile] = useState('');

  useEffect( () => {
    Axios.get('http://localhost:3001/api/get').then((response)=>{
      // console.log(response.data);
      setMypage(response.data);
    })
  }, [])

  const submitReview = () => {
    Axios.post('http://localhost:3001/api/insert', {
      name : name, 
      profile : profile, 
      favorite : favorite
    });
    
    setMypage([...mypage,
        { name : name, 
          profile : profile,
          favorite : favorite }, 
        ]);
    // ====== then이 들어감으로써 기존에 찍어내는 코드 ======
    // .then( () => {
    //   setMypage([...mypage,
    //   { name : name, 
    //     profile : profile,
    //     favorite : favorite }, 
    //   ])
    // });
  };

  const deleteReview = (name) => {
    Axios.delete(`http://localhost:3001/api/delete/${name}`);
  }

  const updateReview = (name) => {
    Axios.put('http://localhost:3001/api/update', {
      name : name, 
      profile : newprofile, 
    });

    setNewprofile('');
  };

  return (
    <div className="App">
      <h3>Hello CRUD</h3>

      <div className='form'>
        <label>이름</label>
        <input type='text' name='name' onChange={ (e) => {setName(e.target.value)}}/>
        <label>프로필</label>
        <input type='text' name='profile'  onChange={ (e) => {setProfile(e.target.value)}} />
        <label>관심운동</label>
        <input type='text' name='favorite'  onChange={ (e) => {setFavorite(e.target.value)}} />

        <button onClick={submitReview}>수정하기</button>

        {mypage.map( (val, i) => {
          return (
            <>
            <div className='card' key={i}>
                <h3>{val.name}</h3>
                <p>{val.profile}</p>
                <div>
                <input type='text' id='updateInput' onChange={ (e) => {setNewprofile(e.target.value)}}/>
                <button onClick={ () => {updateReview(val.name)}}>Update</button>
                <button onClick={ () => {deleteReview(val.name)}}>Delete</button>
                </div>
            </div>
            </>
          )
        })}

      </div>
    </div>
  );
}

export default Test;
