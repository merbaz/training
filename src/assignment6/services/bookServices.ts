import { Request, Response } from "express";
import { bookRepo } from "../ormConfig"


export const createBook = async (req: Request, res: Response) => {
  const { body } = req;
  try {
    const result = await bookRepo.insert({
      title: body.title,
      author: body.author,
      ...(body.price && { price: body.price }),
      ...(body.quantity && { quantity: body.quantity }),
    });
    if (result) {
      res.status(200).json(result);
    }
  } catch (error) {
    res.status(500).send({ message: "Error", error: JSON.stringify(error) });
  }
};

export const getAllBooks = async (_: Request, res: Response) => {
  try {
    const result = await bookRepo.find({});
    if (result) {
      res.status(200).json(result);
    }
  } catch (error) {
    res.status(500).send({ message: "Error", error: error });
  }
};

export const deleteBookById = async (req: Request, res: Response) => {
  const {
    params: { id },
  } = req;
  try {
    const result = await bookRepo.delete(id);
    if (result) {
      res.status(200).json(result);
    }
  } catch (error) {
    res.status(500).send({ message: "Error", error: JSON.stringify(error) });
  }
};

export const updateBookById = async (req: Request, res: Response) => {
  const {
    body,
    params: { id },
  } = req;
  const updateBody = {
    ...(body.title && { title: body.title }),
    ...(body.author && { author: body.author }),
    ...(body.quantity && { quantity: body.quantity }),
    ...(body.price && { price: body.price }),
  }
  try {
    const result = await bookRepo.update(id, updateBody);
    if (result) {
      res.status(200).json(result);
    }
  } catch (error) {
    res.status(500).send({ message: "Error", error: JSON.stringify(error) });
  }
};
