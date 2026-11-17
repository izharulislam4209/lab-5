// Step C5: the router maps method + URL to a controller function
const express = require("express");
const router = express.Router();
const { getNotices, createNotice } = require("../controllers/noticeController");

router.get("/", getNotices);
router.post("/", createNotice);

module.exports = router;
