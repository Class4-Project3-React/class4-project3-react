const express = require("express");
const router = express.Router();
const controllers = require("../controllers/controllers");

router.get('/', controllers.TestControllers); // 권원현 server 및 db 테스트용 router ('/' url 필요하신 분은 삭제하고 쓰셔도 됨)

module.exports = router;