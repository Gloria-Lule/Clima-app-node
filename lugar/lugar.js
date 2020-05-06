const axios = require('axios');


const getUbicacion = async(dir) => {

    const axios = require('axios');

    const encodeUlr = encodeURI(dir);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeUlr}`,
        headers: { 'x-rapidapi-key': '6c31cbd413msh9fc6d602b90c63bp1c41f7jsnf115d84f4a02' }
    });


    try {

        const resp = await instance.get();

        if (resp === undefined) {
            throw new Error(`No hay resultados para ${dir}`);
        }

        const data = resp.data.Results[0];
        const direccion = data.name;
        const lat = data.lat;
        const lng = data.lon;


        return {
            direccion,
            lat,
            lng
        }

    } catch (error) {

        console.log('Ocurrio un error:', error);

    }

}

module.exports = {
    getUbicacion
}



/* REFERENCIA SIN AWAIT

const instance = axios.create({
    baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${ encodeUlr}`,
    timeout: 1000,
    headers: { 'x-rapidapi-key': '6c31cbd413msh9fc6d602b90c63bp1c41f7jsnf115d84f4a02' }
});

instance.get()
    .then((resp) => {
        console.log(resp.data.Results[0]);

    }).catch((err) => {
        console.log('Error!!!', err);

    }); */