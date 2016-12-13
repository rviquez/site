const asistentes = []
asistentes.push(require('gaboesquivel'))
asistentes.push(require('laubits'))
asistentes.push(require('jeremiasceciliano'))
asistentes.push(require('robertoviquez'))

const printname = (persona) => {
  console.log(persona.name);
}

asistentes.forEach(printname);
