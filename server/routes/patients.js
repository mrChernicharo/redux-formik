import { db, client } from '../database.js';

export function getPatients(req, res) {
	client.connect(async () => {
		const patients = await db.collection('patients').find().toArray();

		res.status(200).json(patients);
		client.close();
	});
}

export function addPatient(req, res) {
	const { name, email, whatsapp } = req.body;

	const patient = {
		name,
		email,
		whatsapp,
		created_at: new Date(),
	};

	client.connect(async () => {
		const response = await db.collection('patients').insertOne(patient);

		res.status(200).json({ _id: response.insertedId, ...patient });
		client.close();
	});
}
