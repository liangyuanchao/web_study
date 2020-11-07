
const Router = require("koa-router");
const { newsController } = require("../controller");
const router = new Router();

router.get("/news", newsController.index)

module.exports = router;
