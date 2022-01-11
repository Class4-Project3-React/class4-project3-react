import React from "react";
import { useSelector, useDispatch } from "react-redux"
import ContentsArticle from "../components/commons/Contents_Article";
import { detail_article } from "../modules/Contents_Article";

function ArticleContainer() {
    const todos = useSelector(state => state.ContArticle);
    const dispatch = useDispatch();

    const onDetail = () => dispatch(detail_article());

    return <ContentsArticle todos={todos} onDetail={onDetail} />
};

export default ArticleContainer