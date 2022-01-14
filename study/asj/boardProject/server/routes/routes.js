const express = require("express");
const router = express.Router();
const controllers = require("../controllers/controllers");

// Use Board 미들웨어 구분 Start
const multer = require('multer');
const { v4: uuid } = require('uuid'); // upload 파일명 고유 아이디. = 1
const mime = require('mime-types'); // upload 파일 타입 가져오기.  = 1
const fs = require('fs');
// Use Board  미들웨어 구분 End

// Use Board 이미지 업로드용 폴더 체크 없으면 생성 Start
try {
    fs.readdirSync('public/upload');
} catch (error) {
    console.error('upload 폴더 생성.');
    fs.mkdirSync('public/upload');
}
// Use Board 이미지 업로드용 폴더 체크 없으면 생성 End

// Use Board 이미지 업로드 변수 생성 (경로.형식.네이밍) Start
const upload = multer({
    storage: multer.diskStorage({
        destination(req, file, done) {
        done(null, 'public/upload');
        },
        filename(req, file, done) {
        done(null, `${uuid()}.${mime.extension(file.mimetype)}`);
        },
    })
});
// Use Board 이미지 업로드 변수 생성 (경로.형식.네이밍) End

// Board
router.get('/board/get', controllers.board_List_Controllers);
router.get('/board/detail/:id', controllers.board_Detail_Controllers);
router.post('/board/Insert', upload.single('image'), controllers.board_Insert_Controllers);

module.exports = router;