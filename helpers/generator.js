const { faker } = require('@faker-js/faker');
const fs = require('fs');

function generarUna() {
    return {
        latitud: faker.location.latitude(),
        longitud: faker.location.longitude()
    };
}

function generarMultiples(cantidad) {
    const coords = [];
    for (let i = 0; i < cantidad; i++) {
        coords.push(generarUna());
    }
    fs.writeFileSync('coordenadas.json', JSON.stringify(coords, null, 2));
    return coords;
}

function generarEnZona(cantidad, latMin, latMax, longMin, longMax) {
    const coords = [];
    for (let i = 0; i < cantidad; i++) {
        coords.push({
            latitud: faker.location.latitude({ min: latMin, max: latMax }),
            longitud: faker.location.longitude({ min: longMin, max: longMax })
        });
    }
    return coords;
}

module.exports = { generarUna, generarMultiples, generarEnZona };
