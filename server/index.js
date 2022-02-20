import express from 'express';
import cors from 'cors';
import testRoute from './routes/testRoute.js';
import getProfessionals from './routes/getProfessionals.js';
import addProfessional from './routes/addProfessional.js';

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 8000;

app.get('/', testRoute);

app.get('/professionals', getProfessionals);

app.post('/professional', addProfessional);

app.listen(PORT, () => {
	console.log(`server listening at PORT`, PORT);
});
