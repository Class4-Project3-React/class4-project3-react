import React from 'react';
import ContentsArticle from '../commons/Contents_Article';
import ContentsHeader from '../commons/Contents_Header';
import ContentsVideo from '../commons/Contents_Video';
import Test from './Test';

function Contents() {
    return (
        <>
            <ContentsHeader />
            <ContentsVideo />
            <ContentsArticle />
            {/* <Test /> */}
        </>
    );
};

export default Contents