const axios = require('axios');

const getClima = async(lat,lng) =>{
	let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=c9abcfaff1f1894f652099a1afafbdb3`)

	return resp.data.main.temp;

}

module.exports = {
	getClima
}