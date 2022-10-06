/* Ticket Train */

//Chiedere numero km da percorrere
const travelLenght = Number(prompt("Quanti chilometri vorresti percorrere?"));
//console.log(travelLenght);
//Chiedere l'età del passeggero.
const userAge = Number(prompt("Quanti anni hai?"));
//console.log(userAge);
//Calcolare il prezzo del biglietto in base ai km (0.21 € al km)
const eurosPerKm = 0.21;
const travelFullPrice = travelLenght * eurosPerKm;
//console.log(travelFullPrice);
//prezzo pieno
let finalPrice = travelFullPrice;
const juniorDiscount = 20 / 100;
const seniorDiscount = 40 / 100;
if (userAge < 18) {
    //Aggiungere uno sconto del 20% per i minorenni
    finalPrice = travelFullPrice - (travelFullPrice * juniorDiscount);  
    //console.log(finalPrice);  
} else if (userAge >= 65) {
    //Aggiungere uno sconto del 40% per gli over 65.
    finalPrice = travelFullPrice - (travelFullPrice * seniorDiscount);
    //console.log(finalPrice);
} 
//L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).
document.getElementById("ticket_price").innerHTML = `Il prezzo del tuo biglietto è ${finalPrice.toFixed(2)} €`;