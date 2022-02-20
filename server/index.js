import { config as envConfig } from 'dotenv';
import express from 'express';
import cors from 'cors';
import {
	getProfessionals,
	countProfessionals,
	addProfessional,
} from './routes/professionals.js';
import { getPatients, addPatient } from './routes/patients.js';

envConfig();

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 8000;

app.get('/professionals', getProfessionals);
app.get('/professionals/count', countProfessionals);
app.post('/professionals/add', addProfessional);

app.get('/patients', getPatients);
app.post('/patients/add', addPatient);

app.listen(PORT, () => {
	console.log(`server listening at PORT`, PORT);
});
