import express from "express";
// import { addPost, updatePost, deletePost, getPost, getPosts } from "../controller/post.js";
// import { getPost } from "../controller/post.js"
import { addPost } from '../controller/post.js';

const router = express.Router()

// router.get("/print", getPost);
router.post("/", addPost);
// router.get("/", (req, res) => {
//     return res.json("Running");
// });
// router.delete("/:id", deletePost);
// router.put("/:id", updatePost);

// export default router;

export default router;