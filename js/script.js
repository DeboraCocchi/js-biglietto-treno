const userAge = parseInt(prompt('Quanti anni hai?'));
const userDistance = parseInt(prompt('Inserisci i chilometri che devi percorrere'));
let discount;
let datiValidi = true;


if(userAge == 0 || isNaN(userAge)) {
  alert('Per favore, inserisci la tua età');
  datiValidi = false;
}

if(datiValidi){
  if(userDistance<0 || isNaN(userDistance)){
    alert('Per favore, inserisci tutti i dati richiesti');
    datiValidi = false;
  }

}

if(datiValidi){
  if(userAge < 18){
    discount = 0.2;
    document.getElementById('sconto').innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
    </svg> Puoi beneficiare di uno sconto del ${discount*100}%!`
  }else if(userAge >= 65){
    discount = 0.4;
    document.getElementById('sconto').innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
  </svg> Puoi beneficiare di uno sconto del ${discount*100}% !`
  }else{
    discount = 0;
  } 

document.getElementById('eta').innerHTML=`${userAge}`;
document.getElementById('km').innerHTML=`${userDistance}`;
const ticketPrice = userDistance * 0.21 * (1 - discount);
console.log(ticketPrice);
const roundedPrice = ticketPrice.toFixed(2);
document.getElementById('totalprice').innerHTML  = `
Il prezzo totale del tuo biglietto è:<strong> ${roundedPrice} €</strong>
`;

}


    







    

  

  
  

