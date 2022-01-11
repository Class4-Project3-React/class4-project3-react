import React from "react";
import ArticleContainer from "../../containers/Contents_Article";
import ContentsArticle from "../commons/Contents_Article";
import ContentsHeader from "../commons/Contents_Header";
import ContentsVideo from "../commons/Contents_Video";

function Contents() {
  return (
    <>
      <ArticleContainer>
        <ContentsHeader />
        <ContentsVideo />
        <ContentsArticle />
      </ArticleContainer>
    </>
  );
}

export default Contents;
