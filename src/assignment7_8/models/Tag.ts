import mongoose from "mongoose";

const TagSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: true
    }
})

const Tag = new mongoose.Model("Tag", TagSchema);

export default Tag;


