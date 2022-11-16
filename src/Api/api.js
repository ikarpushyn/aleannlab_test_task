const TOKEN = process.env.REACT_APP_API_TOKEN;

const URL = 'https://api.json-generator.com/templates/ZM1r0eic3XEy/data?access_token=';

const getJobList = async () => {
	const response = await fetch(`${URL}${TOKEN}`);
	return await response.json();
};

export { getJobList };
