import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import authRoutes from "./routes/auth_routes";

dotenv.config();

const app = express();
const port = 3000;

app.use(cors({ origin: "http://localhost:5173" }));

// rota para a API_KEY
app.get('/src', (req, res) => {
  res.json({
    API_KEY: process.env.API_KEY,
  });
});

// Rota de autenticação
app.use("/api", authRoutes);

app.listen(port, () => {
  console.log(`🚀 Servidor rodando em http://localhost:${port}`);
});
