import axios from "axios";

// 1) action type
const ADD_COMMENT = "contents/article/ADD_COMMENT";

// 2) action creator
export const add_comment = (text, no) => ({
  type: ADD_COMMENT,
  text,
  no,
});

const initialState = [
  {
    text: '모듈쪽 초기값',
    no: 1,
  },
];

// 3) reducer
export default function ContArticle(state = initialState, action) {
  switch (action.type) {
    case ADD_COMMENT:
      return state
      // axios
      //     .post("http://localhost:3001/contents/articles/comments",
      //     {
      //       no: "testNumber"
      //     })
      //     .then(function (response) {
      //       console.log(response + "test");
      //     })
      //     .catch((error) => {
      //       console.log(error.response);
      //     })
    default:
      return state;
    };
}

