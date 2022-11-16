const TOKEN = 'wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu';
const URL = 'https://api.json-generator.com/templates/ZM1r0eic3XEy/data?access_token=';
const getJobList = async () => {
	const response = await fetch(`${URL}${TOKEN}`);
	return await response.json();
};

export { getJobList };
