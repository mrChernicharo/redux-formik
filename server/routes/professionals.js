import { ObjectId } from 'mongodb';
import { db, client } from '../database.js';

// prettier-ignore
const generateAvailabilityTable = () => {
	const weekdays = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday' ]
	const timeSlots = {};
	let minutes = 0;
	let hour = '';
	while (minutes < (60 * 24)) {
		hour = `${Math.floor(minutes / 60)}:${minutes % 60 === 0 ? '00' : '30'}`

		timeSlots[hour] = {
			status: 'IDLE',
			appointment: null,
			minutes,
		}

		minutes += 30
	}

	const availabilityTable = new Map()
	weekdays.forEach(day => availabilityTable.set(day, timeSlots))

	return availabilityTable
}
const DEFAULT_AVAILABILITY = generateAvailabilityTable();

export function getProfessionals(req, res) {
	client.connect(async err => {
		const data = await db.collection('professionals').find().toArray();

		// console.log({ data });

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
		try {
			const emailQuery = { email };
			const emailFound = await db
				.collection('professionals')
				.find(emailQuery)
				.toArray();

			if (emailFound.length) {
				throw Error({ message: 'Error: existing email' });
			}

			const responseDoc = await db
				.collection('professionals')
				.insertOne(professional);

			const professionalId = responseDoc.insertedId;

			const availability = await db
				.collection('professionals_availability')
				.insertOne({
					professionalId,
					availability: DEFAULT_AVAILABILITY,
				});

			console.log(professionalId, availability);

			res.status(200).send(professional);
			client.close();
		} catch (err) {
			console.log(err);
			res.status(403).send({ error: err });
		}
	});
}

export function getProfessionalAvailability(req, res) {
	const { id } = req.query;

	client.connect(async err => {
		const query = { professionalId: ObjectId(id) };

		console.log(query);

		const result = await db
			.collection('professionals_availability')
			.find(query)
			.toArray();

		console.log(result);

		res.status(200).send(result);
		client.close();
	});
}
