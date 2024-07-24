import mongoose from "mongoose";

const PostSchema = mongoose.Schema({
    title: {
        type: String,
        required: [true,"Topic is required"],
    },
    question: {
        type: String,
        required: [true,"Topic is required"],
    },
    answer: {
        type: String,
        required: [true, "Answer is required"],
}
})
const PostModel = mongoose.model('QuestionPost',PostSchema);
export default PostModel;