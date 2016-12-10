const asistentes = []
asistentes.push(require('gaboesquivel'))
asistentes.push(require('laubits'))

const printname = (persona) => {
  console.log(persona.name);
}

asistentes.forEach(printname);
