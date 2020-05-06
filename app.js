//Requireds

const argv = require('./config/yargs').argv;

const lugar = require('./lugar/lugar');

const clima = require('./clima/clima');

// lugar.getUbicacion(argv.direccion)
//     .then(console.log)
//     .catch(console.log);


// clima.getClima('47.76', '-122.21')
//     .then(console.log)
//     .catch(console.log);

const getInfo = async(direccion) => {
    try {
        const coord = await lugar.getUbicacion(direccion);

        const temp = await clima.getClima(coord.lat, coord.lng);

        return `La temperatura en ${direccion} es de ${temp}`;

    } catch (error) {
        console.log('Se detecto un error!!:', error);
    }


}



getInfo(argv.direccion).then(console.log)
    .catch(console.log);