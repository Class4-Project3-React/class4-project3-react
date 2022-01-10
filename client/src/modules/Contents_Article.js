// 1) action type
const DETAIL_ARTICLE = 'contents/article/DETAIL_ARTICLE';

// 2) action creator
export const detail_article = () => ({
    type : DETAIL_ARTICLE,
});

const initialState = [
  {
    media: 1,
    img: "",
  },
];

// 3) reducer
export default function contArticle(state = initialState, action) {
    switch (action.type) {
        case DETAIL_ARTICLE:
            return state.map(
                todo =>
                    todo.media = "testid"
            )
        default:
            return state;
    };
};