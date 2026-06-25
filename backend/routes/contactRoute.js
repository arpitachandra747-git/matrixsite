const express = require("express");
const Contact = require("../controllers/contactController");
const { contactLimiter } = require("../middleware/rateLimitter");
const router = express.Router();

// router.post("/submit", contactLimiter, Contact);
router.post("/submit", Contact);

module.exports = router;