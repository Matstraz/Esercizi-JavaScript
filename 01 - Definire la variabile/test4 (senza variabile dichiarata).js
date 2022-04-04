

function canPlay(personName) {
    if (personName == 'Paul') {
      personName += ' plays football';
      console.log(personName);
    }else{
      console.log(personName + ', you are not Paul!!')
    }
  }
  
  canPlay('Paul');