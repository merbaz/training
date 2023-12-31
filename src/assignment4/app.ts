import express, { Request, Response } from 'express';
import Blog from './classes/Blog';

const app = express();
const port = 3001;

let blogList:Blog[] = [];

app.get('/', (_, res:Response) => {
    const jsonList = JSON.stringify(blogList);
    res.status(200).send({data: jsonList, message:"Success"});
});

app.get('/:id', (req:Request, res:Response)=>{
    const {params: {id}} = req;
    const blogIndex: number = blogList.findIndex(blog => blog.getId === Number(id));
    if(blogIndex !== -1){
        const requestedBlog = blogList[blogIndex];
        requestedBlog.incrementViews();
        blogList[blogIndex] = requestedBlog;
        const jsonBlog = JSON.stringify(requestedBlog);
        res.status(200).send({data: jsonBlog, message: "Success"})
    }
    else{
        res.status(500).send("Blog Not Found");
    }
})

app.post('/add-blog',  (req:Request, res:Response)=>{
    const body = req.body;
    if ('title' in body && 'content' in body && 'username' in body) {
        const newBlog = new Blog();
        newBlog.setTitle = body.title;
        newBlog.setContent = body.content;
        newBlog.setUsername = body.username;
        blogList.push(newBlog);

        res.status(200).send('Success');
    }
    else{
        res.status(400).send({message: "Success"})
    }
});

app.delete('/delete-blog/:id', (req:Request, res:Response)=>{
    const params = req.params;
    if('id' in params){
        blogList = blogList.filter((blog)=>blog.getId !== Number(req.params.id))
        const jsonList = JSON.stringify(blogList);
        res.status(200).send({message:"Success", data:jsonList})
    }
    else{
        res.status(500).send('Blog Not Found');
    }
})

app.put('/edit-blog/:id', (req:Request, res:Response)=>{
    const {body, params:{id}} = req;
    const blogIndex: number = blogList.findIndex(blog => blog.getId === Number(id));
    if(blogIndex !== -1){
        const blogToUpdate: Blog = blogList[blogIndex];
        if(typeof body.title === "string")
            blogToUpdate.setTitle = body.title;
        if(typeof body.content === "string")
            blogToUpdate.setContent = body.content;
        if(typeof body.username === "string")
            blogToUpdate.setUsername = body.username;

        blogList[blogIndex] = blogToUpdate;

        res.status(200).send({message: "Success"});
    }
    else{
        res.status(500).send('Blog Not Found')
    }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})