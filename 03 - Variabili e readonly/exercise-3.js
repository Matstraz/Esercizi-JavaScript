const students = ['Paul', 'George', 'Lucas'];

function addStudent(student) {
  students.push(student)
}

addStudent('Marco');
console.log(students);

/*Sarà possibile aggiungere un elemento all'array nonostante la variabile
sia readonly poichè quest'ultima non verrà in alcun modo riassegnata, farà
sempre riferimento al medesimo array. Ad ogni modo, è eventualmente 
ammissibile riassegnare una costante in local scope.*/