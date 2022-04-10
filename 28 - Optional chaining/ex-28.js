const order = {};

if (order && order.customer && order.customer.address && order.customer.address.city) {
  console.log(order.customer.address.city)
}else{
  console.log('City is required'); //Codice iniziale sistemato (l'originale non restituiva nulla in console)
}
  


let city = order.customer?.address?.city  // Versione semplificata
if(!city){
  console.log('City is required')
}