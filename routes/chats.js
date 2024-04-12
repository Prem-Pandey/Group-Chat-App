
const express = require("express")
const router= express.Router();
const userAuthentication = require("../middlewares/auth");
const chatController = require("../controllers/chats");

router.post("/chats",userAuthentication.authenticate,chatController.postAddChat)
router.get("/chats",userAuthentication.authenticate,chatController.getChats)
module.exports = router
