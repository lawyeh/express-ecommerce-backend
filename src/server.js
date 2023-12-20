import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import * as dotenv from 'dotenv';

dotenv.config();

const corsOptions = {
  origin: 'http://localhost:8080',
};

const app = express();

app.use(cors(corsOptions));
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((err, req, res, next) => {
  console.log(err);
  res.json({ message: `had an error: ${err.message}` });
});

export default app;
