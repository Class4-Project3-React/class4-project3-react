import React from 'react';
import ContentsArticle from '../commons/Contents_Article';
import ContentsHeader from '../commons/Contents_Header';
import ContentsVideo from '../commons/Contents_Video';

function Contents() {
    return (
        <>
            <ContentsHeader />
            <ContentsVideo />
            <ContentsArticle />
        </>
    );
};

export default Contents