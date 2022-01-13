const express = require('express');
const router = express.Router();
const controllers = require("../controllers/controllers.js")

// 권원현
// 1) routes (=> 무조건 'URL' + '미들웨어(controllers)' 만 생각해!! )
router.get("/api/get", controllers.getTodo_Controllers);
router.post("/api/insert", controllers.postTodo_Controllers);
router.delete("/api/delete/:title", controllers.deleteTodo_Controllers);


router.get("/api/test/get", controllers.getProfile_Controllers);
router.put("/api/test/update", controllers.putProfile_Controllers);

module.exports = router;