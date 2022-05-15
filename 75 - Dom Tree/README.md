# Dom Tree - Exercise 7
Dal codice precedente creare l'evento custom `personFormLoaded` da dispatchare una volta eseguito l'init del form (`initForm`).
Creare un listener per l'evento `personFormLoaded` che si occupa di stampare in console il messaggio "Person Form Loaded".

const dogFound = new CustomEvent('animalfound', {
  detail: {
    name: 'dog'
  }
});

// add an appropriate event listener
obj.addEventListener('animalfound', (e) => console.log(e.detail.name));
obj.dispatchEvent(dogFound);

node.dispatchEvent()