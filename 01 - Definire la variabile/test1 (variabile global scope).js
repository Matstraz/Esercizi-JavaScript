let personName = 'Paul';

function canPlay() {
  if (personName == 'Paul') {
  personName += ' plays football'; // Argh! personName is not defined
  console.log(personName);
  }
}

canPlay();