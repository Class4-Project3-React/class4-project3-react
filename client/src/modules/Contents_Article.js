import axios from "axios";

// 1) action type
const DETAIL_ARTICLE = "contents/article/DETAIL_ARTICLE";

// 2) action creator
export const detail_article = (no) => ({
  type: DETAIL_ARTICLE,
  no,
});

const initialState = [
  {
    no: 1,
  },
];

// 3) reducer
export default function ContArticle(state = initialState, action) {
  switch (action.type) {
    case DETAIL_ARTICLE:
      return state
      //   axios
      //     .post("http://localhost:3001/contents",
      //     {
      //       state : action.no
      //     })
      //     .then(function (response) {
      //       console.log(response + "test");
      //     })
      //     .catch((error) => {
      //       console.log(error.response);
      //     })
      // );
          
    default:
      return state;
    };
}

