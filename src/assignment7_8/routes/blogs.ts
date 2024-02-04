import { Router } from "express";
import { Request, Response } from "express";
import Blog from "../models/Blog";
import BlogI from "../interfaces/BlogI";

const router = Router();

router.get("/", async (req: Request, res: Response) => {
  try {
    const {
      query: { tags = null, startDate = null, endDate = null },
    } = req;
    let result;
    result = await Blog.find({
      ...(tags && { tags: { $in: tags } }),
      ...(typeof startDate === "string" &&
        typeof endDate === "string" && {
          createdOn: {
            $gte: new Date(startDate),
            $lt: new Date(endDate),
          },
        }),
    });

    res.status(200).send({ message: "Success", result });
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get("/:id", async (req: Request, res: Response) => {
  try {
    const {
      params: { id },
    } = req;
    const result = await Blog.findOne({ id }).exec();
    res.status(200).send({ message: "Success", result });
  } catch (error) {
    res.send(error);
  }
});

router.post("/", async (req: Request, res: Response) => {
  try {
    const {
      body: { title = null, userId = null, content = null, tags = null },
    } = req;
    if (
      typeof title === "string" &&
      typeof userId === "string" &&
      typeof content === "string"
    ) {
      const newBlog: BlogI = {
        title,
        userId,
        content,
        ...(Array.isArray(tags) && { tags }),
      };
      const result = await Blog.create(newBlog);
      res.status(200).send({ message: "Succes", result });
    } else {
      throw new Error("Incorrect Types In Request");
    }
  } catch (error: any) {
    if (!(error instanceof Error)) {
      error.message = "Unknown Error";
    }
    res.status(500).send({ message: "Error", error: error.message });
  }
});

router.put("/:id", async (req: Request, res: Response) => {
  try {
    const {
      params: { id },
      body: { title = null, content = null, tags: newTags = null },
    } = req;
    if (
      typeof id === "string" && (typeof title === "string" ||
      typeof content === "string" ||
      Array.isArray(newTags))
    ) {
      const result = await Blog.findOneAndUpdate(
        { _id: id },
        {
          ...(title && { title }),
          ...(content && { content }),
          ...(newTags && { $addToSet: { tags: { $each: newTags } } }),
          lastUpdatedOn: new Date().valueOf()
        }
      );
      res.status(200).send({ message: "Success", result });
    } else {
      throw Error("Bad Request");
    }
  } catch (error) {
    res.send(error);
  }
});

router.get("/user/:userId", async (req: Request, res: Response) => {
  try {
    const {
      params: { userId },
    } = req;
    if (typeof userId === "string") {
      const result = await Blog.find({ userId });
      res.status(200).send({ message: "Success", result });
    }
    throw new Error("Bad Request");
  } catch (error) {
    res.send(error);
  }
});

export default router;
