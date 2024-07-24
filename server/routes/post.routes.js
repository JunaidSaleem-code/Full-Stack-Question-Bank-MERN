import Router from 'express';
import { CreatePost, getPosts, getSinglePost, deletePost, updatePost, } from '../controllers/post.controller';
const router = Router();

router.post('/create', CreatePost);
router.get('/get', getPosts);
router.get('/get/:id', getSinglePost);
router.delete('/delete/:id', deletePost);
router.put('/update/:id', updatePost);


export default router;