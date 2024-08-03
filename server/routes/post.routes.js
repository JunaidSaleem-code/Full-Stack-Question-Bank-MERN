import Router from 'express';
import { createPost, getPosts, getSinglePost, deletePost, updatePost } from '../controllers/post.controller.js';
const router = Router();

router.post('/createpost', createPost);
router.get('/getposts', getPosts);
router.get('/getsinglepost', getSinglePost);
router.delete('/deletepost', deletePost);
router.put('/updatepost', updatePost);


export default router;