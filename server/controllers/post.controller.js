import PostModel from "../models/post.model";

const CreatePost = async(req,res) =>{
    try {
        const {topic,question,answer} = req.body;
        const responseData = await Postmodel.create({
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

const getPosts = async(req, res)=>{
    try {
        const responseData = await PostModel.find();
        res.send({
            success : true,
            responseData,
        })
    } catch (error) {
        console.error("Error :: createPost :: \n" + error)
    }
}

const getSinglePost = async(req, res)=>{
    try {
        const postId = req.query;
        const responseData = await PostModel.findbyId(postID);
        res.send({
            success : true,
            responseData,
            })
    } catch (error) {
        console.error("Error :: createPost :: \n" + error)
    }
}

const deletePost = async(req, res)=>{
    try {
        const postId = req.query;
        const responseData = await PostModel.findbyIdAndDelete(postId);
        res.send({
            success : true,
            responseData,
            })
    } catch (error) {
        console.error("Error :: createPost :: \n" + error)
    }
}

const updatePost = async(req, res)=>{
    try {
        const {postId, topic, question, answer} = req.body;
        const responseData = await PostModel.findbyIdAndUpdate(postId,
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
    CreatePost,
    getPosts,
    getSinglePost,
    deletePost,
    updatePost,
}