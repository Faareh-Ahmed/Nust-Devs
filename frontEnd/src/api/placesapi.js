const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://place-autocomplete1.p.rapidapi.com/autocomplete/json',
  params: {
    input: 'new',
    radius: '500'
  },
  headers: {
    'X-RapidAPI-Key': '79e636b089msh997aa1c461e0614p10c0cbjsn8c62dd36bb3c',
    'X-RapidAPI-Host': 'place-autocomplete1.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}