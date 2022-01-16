import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux"
import ContentsArticle from "../components/commons/Contents_Article";
import { read_article } from "../modules/Contents_Article";

function ArticleContainer() {
    const readArticle = useSelector(state => state.ReadArticle);
    const dispatch = useDispatch();

    useEffect(() => {
        read_article().then(function(result) {
            dispatch(result)
        }).catch(err => console.err("dispatch 에러 내용:", err))
    }, []);

    return (
        <div>
                <ContentsArticle list={readArticle} />
        </div>
    );
};

export default ArticleContainer