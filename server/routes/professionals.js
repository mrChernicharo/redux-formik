import { ObjectId } from 'mongodb';
import { db, client } from '../database.js';
import { DEFAULT_AVAILABILITY } from '../utils/index.js';

export async function getProfessionals(req, res) {
    client.connect(async (err) => {
        const data = await db.collection('professionals').find().toArray();

        // console.log({ data });

        res.json(data);
        client.close();
    });
}

export async function countProfessionals(req, res) {
    client.connect(async (err) => {
        const count = await db.collection('professionals').countDocuments();

        console.log({ count });
        res.json(count);

        client.close();
    });
}

export async function addProfessional(req, res) {
    const { name, email, whatsapp } = req.body;

    const professional = { name, email, whatsapp, created_at: new Date() };

    console.log(professional);

    client.connect(async (err) => {
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

export async function getProfessionalAvailability(req, res) {
    const { id } = req.query;

    client.connect(async (err) => {
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

export async function toggleTimeSlotStatus(req, res) {
    const { id } = req.query;
    const { newSlot } = req.body;
    const { weekday, hour, status } = newSlot;

    client.connect(async (err) => {
        const string = 'availability.' + weekday + '.' + hour + '.status';
        console.log({ string });
        const result = await db
            .collection('professionals_availability')
            .updateOne(
                { professionalId: ObjectId(id) },
                {
                    $set: {
                        ['availability.' + weekday + '.' + hour + '.status']:
                            status,
                    },
                }
            );

        console.log(result);
        res.status(200).send(result);
        client.close();
    });
}
