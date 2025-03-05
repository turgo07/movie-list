import express, { Request, Response } from "express";
import dotenv from 'dotenv'
import axios from "axios";
import jwt from "jsonwebtoken";

const router = express.Router();
dotenv.config()

router.post("/auth/google", async (req: Request, res: Response) => {
  try {
    const { token } = req.body;

    // Valida o token no Google
    const googleResponse = await axios.get(`https://oauth2.googleapis.com/tokeninfo?id_token=${token}`);

    const { email, name, picture } = googleResponse.data;

    // Cria um JWT interno
    const userToken = jwt.sign({ email, name, picture }, process.env.JWT_SECRET!, { expiresIn: "1h" });

    res.json({ user: { email, name, picture }, token: userToken });
  } catch (error) {
    res.status(401).json(error);
  }
});

export default router;
