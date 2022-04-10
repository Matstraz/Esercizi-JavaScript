const person = {
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
}

// Print values of person using Object.keys

let chiavi = Object.keys(person)
let valori = Object.values(person)

function stampEntries(keys, values){
  for(let i = 0; i < keys.length; i++){
    console.log(`${keys[i]}: ${values[i]}`)
  }
 }

stampEntries(chiavi, valori)












