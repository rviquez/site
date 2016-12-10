const asistentes = []
asistentes.push(require('gaboesquivel'))

const printname = (persona) => {
  console.log(persona.name);
}

asistentes.forEach(printname);
