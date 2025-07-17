const { faker } = require('@faker-js/faker');
const fs = require('fs');

function generateOne(){
  return {
    latitud: faker.location.latitude(),
    longitud: faker.location.longitude()
  }
}

function generateMany(count){
  const coordenada = []
  for (let index = 0; index < count; index++) {
    coordenada.push(generateOne());
  }
  fs.writeFileSync('coordenadas.json', JSON.stringify(coordenada, null, 2));
  return coordenada;
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

module.exports = { generateOne, generateMany, generarEnZona };
