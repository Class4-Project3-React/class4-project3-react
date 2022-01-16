import axios from "axios";

// 1) action type
const READ_ARTICLE = "contents/article/READ_ARTICLE";

// 2) action creator
export const read_article = async () => {
  const readArticle = await axios.get("http://52.78.37.198/contents");
  return {
    type: READ_ARTICLE,
    payload: readArticle.data
  };
}

const initialState = [
  {
    data: {}
  },
];

// 3) reducer
export default function ReadArticle(state = initialState, action) {
  switch (action.type) {
    case READ_ARTICLE:
      return { ...state, data: {...action.payload} };
    default:
      return state;
    };
}

