import { db, client } from '../database.js';

export function getProfessionals(req, res) {
	client.connect(async err => {
		const data = await db.collection('professionals').find().toArray();

		console.log({ data });

		res.json(data);
		client.close();
	});
}

export function countProfessionals(req, res) {
	client.connect(async err => {
		const count = await db.collection('professionals').countDocuments();

		console.log({ count });
		res.json(count);

		client.close();
	});
}

export function addProfessional(req, res) {
	const { name, email, whatsapp } = req.body;

	const professional = { name, email, whatsapp, created_at: new Date() };

	console.log(professional);

	client.connect(async err => {
		const result = await db
			.collection('professionals')
			.insertOne(professional);

		console.log(result);

		res.status(200).send(professional);
		client.close();
	});
}
