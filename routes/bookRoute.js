import express from "express";
import {addbook} from "../controller/addbook.js";
import {getbook} from "../controller/addbook.js";
const router = express.Router();

router.post("/add",addbook);
router.get("/get",getbook);

export default router;