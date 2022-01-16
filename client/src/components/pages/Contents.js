import React from "react";
import ContentsHeader from "../commons/Contents_Header";
import ContentsVideo from "../commons/Contents_Video";
import ArticleContainer from "../../containers/Contents_Article";

function Contents() {
  return (
    <>
      <ContentsHeader />
      <ContentsVideo />
      <ArticleContainer />
    </>
  );
}

export default Contents;
