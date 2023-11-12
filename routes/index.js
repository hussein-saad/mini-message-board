const express = require("express");
const router = express.Router();
const message_controller = require("../controllers/message_controller");

/* GET home page. */

router.get("/", message_controller.getMessages);

router.get("/new", message_controller.messageCreatGet);
router.post("/new", message_controller.messageCreatePost);

module.exports = router;
