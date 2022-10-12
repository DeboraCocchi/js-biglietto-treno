const generaBigl = document.getElementById('data-read');


generaBigl.addEventListener('click', function(){
  const userAge = document.querySelector('#eta').value;
  const userDistance = document.querySelector('#km').value;
  let discount;
  
  if(userAge < 18){
      discount = 0.2;
      document.getElementById('sconto').innerHTML=`&#8594;  Puoi beneficiare di uno sconto del <strong>${discount*100}% !</strong>`
    }else if(userAge >= 65){
      discount = 0.4;
      document.getElementById('sconto').innerHTML=`&#8594; Puoi beneficiare di uno sconto del <strong>${discount*100}% !</strong>`
    }else{
      discount = 0;
    } 

    const userName = document.querySelector('#user-name').value;
    const userSurname = document.querySelector('#user-surname').value;
    const ticketPrice = userDistance * 0.21 * (1 - discount);
    console.log('prezzo del biglietto', ticketPrice);
    console.log('sconto', discount);
    const roundedPrice = ticketPrice.toFixed(2);
    document.getElementById('totalprice').innerHTML  = `Ciao  ${userName}
    ${userSurname}, <br> Il prezzo totale del tuo biglietto è:<strong> ${roundedPrice} €</strong> 
    `;
    document.querySelector('#eta').value= ' ';
    document.querySelector('#km').value='';
  });









    







    

  

  
  

