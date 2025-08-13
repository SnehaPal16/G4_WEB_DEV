const express = require("express");
const {getProject, createProject , updateProject} = require("../controllers/projectController");
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();

router.get("/", getProject);
router.post("/", authMiddleware, createProject);
router.post("/" , authMiddleware, updateProject);




module.exports = router;