import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import Axios from 'axios';
import img_IU from '../../assets/img/img_IU.jpg';
import { Link } from 'react-router-dom';

function EmpList() {

  // let history = useHistory();

  let [empList, changeEmpList] = useState([]);
  let [inputName, changeInputName] = useState("");
  let [refreshComponent, changeRefreshComponent] = useState("");

  useEffect( ()=>{
   
    fetch("http://localhost:3001/getEmpList").then(

      (response)=>{
        return response.json();
      }
    ).then( (response)=>{

      changeEmpList(response.data);
    } )

  }, [ refreshComponent ] );


  return (
      <>
      <div>
        <input type="text" onChange={ (e)=>{ changeInputName(e.target.value) }} />
        <button onClick={ ()=>{

          fetch("http://localhost:3001/insEmpInfo/"+inputName).then(
            (response)=>{
              console.log("success insEmpInfo");
              changeRefreshComponent(Math.random()+"");

            }
          )

        } }>{inputName} 으로 등록!</button>
        </div>
        
        <div>
        <table align="center" border="1">
        { 
          empList.map( (obj, index)=>{
              return (

                <tr>
                  <td>
                  <Link to={ '/detail/'+obj.id }>
                    {obj.id}
                  </Link>
                  </td>
                  <td>
                  <Link to={ '/detail/'+obj.id }>
                    {obj.name}
                  </Link>
                  </td>
                </tr>

              )
          } ) 
        
        }
        </table>
      </div>
      </>
  )
}

export default EmpList;