import express, { Request, Response } from "express";
import { encrypt } from "../middlewares/encrypt";
import User from "../models/User";
import passport from "passport";

const usersRouter = express.Router();

usersRouter.get("/:id", async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    if (id) {
      const result = await User.findOne({ id }).exec();
      res.status(200).send({ message: "SUCCESS", result });
    }
    throw new Error("Bad Request");
  } catch (error: any) {
    res.status(500).send({ message: "ERROR", error: error?.message });
  }
});

usersRouter.post("/register", encrypt, async (req: Request, res: Response) => {
  try {
    const { password, email, name } = req?.body;
    if (typeof email === "string" && typeof name === "string") {
      const result = await User.create({ password, email, name });
      if (result) {
        res.status(200).send({ message: "SUCCESS", result });
      }
      throw new Error("Error Creating User");
    }
    throw new Error("Bad Request");
  } catch (error: any) {
    res.status(500).send({ message: "ERROR", error: error?.message });
  }
});

usersRouter.post(
  "/login",
  passport.authenticate("local"),
  async (req: Request, res: Response) => {
    try {
      console.log("Authenticate");
      console.log(req.isAuthenticated());
      const { email, name, password } = req.body;
      if (req.isAuthenticated()) {
        if (
          typeof email === "string" &&
          typeof name === "string" &&
          typeof password === "string"
        ) {
          res
            .status(200)
            .send({
              message: "SUCCESS",
              result: { session: req.session, user: { name, email } },
            });
        }
      }
      throw new Error("Authentication Failed")
    } catch (error:any) {
        res.status(500).send({message: "ERROR", error: error?.message})
    }
  }
);

export default usersRouter;
