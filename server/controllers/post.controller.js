import PostModal from "../models/post.model.js";

const createPost = async(req,res, next) =>{
    try {
        const {topic,question,answer} = req.body;
        const responseData = await PostModal.create({
        topic,
        question,
        answer
        })
        res.send({
            success : true,
            responseData,
        })
    } catch (error) {
        console.error("Error :: createPost :: \n" + error)
    }
}

const getPosts = async(req, res, next)=>{
    try {
        const responseData = await PostModal.find();
        res.send({
            success : true,
            responseData,
        })
    } catch (error) {
        console.error("Error :: createPost :: \n" + error)
    }
    
}

const getSinglePost = async(req, res , next)=>{
    try {
        const {postID} = req.query;
        const responseData = await PostModal.findById(postID);
        res.send({
            success : true,
            responseData,
            })
    } catch (error) {
        console.error("Error :: createPost :: \n" + error)
    }
}

const deletePost = async(req, res , next)=>{
    try {
        const {postID} = req.body;
        const responseData = await PostModal.findByIdAndDelete(postID);
        res.send({
            success : true,
            responseData
            })
    } catch (error) {
        console.error("Error :: createPost :: \n" + error)
    }
}

const updatePost = async(req, res, next )=>{
    try {
        const {postID, topic, question, answer} = req.body;
        const responseData = await PostModal.findByIdAndUpdate(postID,
            {topic,
            question,
            answer,
            },{new : true});
        res.send({
            success : true,
            responseData,
        })
    } catch (error) {
        console.error("Error :: createPost :: \n" + error)
    }
}

export{
    createPost,
    getPosts,
    getSinglePost,
    deletePost,
    updatePost,
}