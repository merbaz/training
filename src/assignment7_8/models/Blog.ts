import mongoose from "mongoose";
import BlogI from "../interfaces/BlogI";

const BlogSchema = new mongoose.Schema<BlogI>({
  title: {
    type: String,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  createdOn: {
    type: Date,
    required: true,
    default: new Date().valueOf()
  },
  lastUpdatedOn: {
    type: Date,
    required: false,
    default: null
  },
  views: {
    type: Number,
    required: false,
    default: 0.0
  },
  rating: {
    type: Number,
    required: false,
    default: 0.0,
  },
  tags: {
    type: [String],
    required: false,
    default: [],
  },
});

const Blog = mongoose.model('Blog', BlogSchema)

export default Blog;