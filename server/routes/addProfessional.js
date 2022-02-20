export default function addProfessional(req, res) {
	const { professional } = req.body;

	console.log(professional);

	res.status(200).send(professional);
}
