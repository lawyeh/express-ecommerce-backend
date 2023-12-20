/* eslint-disable no-undef */
import express from 'express';
import * as dotenv from 'dotenv';

const app = express();
dotenv.config();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`hello from http://localhost:${PORT}`);
});
