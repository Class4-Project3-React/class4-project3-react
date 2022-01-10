import axios from "axios";

// 1) action type
const DETAIL_ARTICLE = "contents/article/DETAIL_ARTICLE";

// 2) action creator
export const detail_article = (no) => ({
  type: DETAIL_ARTICLE,
  no,
});

axios
  .get("http://localhost:3001/contents")
  .then(function (response) {
    console.log(response);
  })
  .catch((error) => {
    console.log(error.response);
  });

const initialState = [
  {
    no: 1,
    media: "asfjad",
    editor: "권원현",
    date: 123,
    title: "asdf",
    desc: "adf",
    img: "leejung1",
  },
  {
    no: 2,
    media: "asfjad",
    editor: "권원현",
    date: 123,
    title: "asdf",
    desc: "adf",
    img: "leejung2",
  },
  {
    no: 3,
    media: "asfjad",
    editor: "권원현",
    date: 123,
    title: "asdf",
    desc: "adf",
    img: "leejung3",
  },
  {
    no: 4,
    media: "asfjad",
    editor: "권원현",
    date: 123,
    title: "asdf",
    desc: "adf",
    img: "leejung4",
  },
];

// 3) reducer
export default function contArticle(state = initialState, action) {
  switch (action.type) {
    case DETAIL_ARTICLE:
      return state;
    default:
      return state;
  }
}

// axios
//   .post("http://localhost:3001/contents", {
//     no: action.no,
//     userPassword: "4567",
//   })
//   .then(function (response) {
//     console.log(response);
//   })
//   .catch((error) => {
//     console.log(error.response);
//   });
