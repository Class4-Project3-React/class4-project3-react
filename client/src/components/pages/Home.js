import React from 'react';
import Card from './Card';
import realman from '../../assets/img/realman.png'
import styled from 'styled-components';

const Home = () => {

    const MainStory = styled.div`
    .Image img{
        width: 100%;
        height: 400px;
       }
    `;
    
    return (
        <>
            <div>
            <MainStory>

                <div className="Image">
                    <img src={realman} />
                </div>
            </MainStory>

            <Card/>
            
            
        </div>
    </>
    );
};

export default Home;