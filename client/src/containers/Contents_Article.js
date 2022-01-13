import React from "react";
import { useSelector, useDispatch } from "react-redux"
import ContentsArticle, { CommentWrite } from "../components/commons/Contents_Article";
import { add_comment } from "../modules/Contents_Article";

function ArticleContainer() {
    const todos = useSelector(state => state.ContArticle);
    const dispatch = useDispatch();

    const addComment = () => dispatch(add_comment());

    return <ContentsArticle addComment={addComment} />
};

export default ArticleContainer