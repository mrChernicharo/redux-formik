const useFetch = async (url, body = null) => {
	const delay = 1200;

	let config = {
		method: body ? 'POST' : 'GET',
		headers: {
			'Content-Type': 'application/json',
		},
	};

	if (body) {
		config['body'] = JSON.stringify(body);
	}

	console.log('reqConfig:', config);

	const response = await fetch(url, config);
	const data = await new Promise(resolve => {
		setTimeout(() => resolve(response.json()), delay);
	});

	return data;
};

export default useFetch;
