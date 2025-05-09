import express from "express";
import cors from "cors";
import { AccessToken } from "livekit-server-sdk";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.post("/get-token", async (req, res) => {
  const { roomName, identity } = req.body;
  if (!roomName || !identity) return res.status(400).json({ error: "Faltan datos" });

  const token = new AccessToken(process.env.LIVEKIT_API_KEY, process.env.LIVEKIT_API_SECRET, {
    identity,
    ttl: 3600,
  });
  token.addGrant({ roomJoin: true, room: roomName });

  res.json({ token: token.toJwt() });
});

app.listen(3001, () => {
  console.log("Servidor backend escuchando en http://localhost:3001");
});
