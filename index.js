import express from 'express';
import { AccessToken } from 'livekit-server-sdk';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
app.use(express.json());

const apiKey = process.env.LIVEKIT_API_KEY;
const apiSecret = process.env.LIVEKIT_API_SECRET;
const livekitHost = 'wss://medallovip-zxlixdwt.livekit.cloud';

app.post('/get-token', (req, res) => {
  const { roomName, identity } = req.body;

  const at = new AccessToken(apiKey, apiSecret, {
    identity,
  });
  at.addGrant({ roomJoin: true, room: roomName });

  res.json({ token: at.toJwt() });
});

app.listen(3000, () => {
  console.log('Servidor backend funcionando en puerto 3000');
});
