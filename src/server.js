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

app.get('/', (req, res) => {
	res.status(200);
	res.json({ message: 'don\'t get got' });
});
