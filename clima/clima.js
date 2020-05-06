const axios = require('axios');



const getClima = async(lat, lng) => {

    try {
        const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&appid=d2a6ff1674b496b38f646862a0cbd9d1&units=metric`)

        return resp.data.main.temp;

    } catch (error) {
        return error;

    }


}


module.exports = {
    getClima
}