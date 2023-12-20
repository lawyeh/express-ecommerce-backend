/* eslint-disable no-undef */
import * as dotenv from 'dotenv';
import app from './server.js';

dotenv.config();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.json({ message: 'foo' });
});

app.listen(PORT, () => {
  console.log(`hello from http://localhost:${PORT}`);
});
