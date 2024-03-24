import express from "express";
import { verifyToken } from "../utils/verifyUser.js";
import {
  createComment,
  deleteComment,
  editComment,
  getcomments,
  likeComment,
} from "../controllers/comment.controller.js";
import { getpostComment } from "../controllers/comment.controller.js";
const router = express.Router();

router.post("/create", verifyToken, createComment);
router.get('/getcomments', verifyToken, getcomments);
router.put("/likeComment/:commentId", verifyToken, likeComment);
router.put("/editComment/:commentId", verifyToken, editComment);
router.delete("/deleteComment/:commentId", verifyToken, deleteComment);

export default router;
