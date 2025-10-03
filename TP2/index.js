const axios = require('axios');

async function obtenerUsuario(id) {
  try {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
    //console.log(`Nombre: ${response.data.name}`);
    return response.data.name;

  } catch (error) {
    console.error('Error al obtener el usuario:', error.message);
  }
}

async function obtenerPublicaciones(id) {
  try {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`);
    //console.log(`Publicaciones: ${response.data}`);
    //console.log(`Publicaciones: ${response.data.length}`);
    return response.data.length;

  } catch (error) {
     console.error('Error al obtener el usuario:', error.message);
  }
}
/*
async function Secuencial() {
  for (let i = 1; i <= 3; i++) {
    const usuario = await obtenerUsuario(i);
    const publicaciones = await obtenerPublicaciones(i);
    console.log(`${usuario} tiene ${publicaciones} publicaciones`);
  }
}
*/
async function secuencial() {
  for (let i = 1; i <= 3; i++) {
    const usuario = obtenerUsuario(i);
    const publicaciones = obtenerPublicaciones(i);

    const [usuarioRes, publicacionesRes] = await Promise.all([usuario, publicaciones]);
    console.log(`${usuarioRes} tiene ${publicacionesRes} publicaciones`);
  }
}

async function concurrente() {
  const promesas = [];
  for (let i = 1; i <= 3; i++) {
    promesas.push(
      Promise.all([obtenerUsuario(i), obtenerPublicaciones(i)])
    );
  }
  const resultados = await Promise.all(promesas);
  resultados.forEach(([usuario, publicaciones]) => {
    console.log(`${usuario} tiene ${publicaciones} publicaciones`);
  });
}

async function main() {
  console.log('--- Secuencial ---');
  await secuencial();
  console.log('--- Concurrente ---');
  await concurrente();
}

main();