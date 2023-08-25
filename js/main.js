
function submitForm(event)
{

 event.preventDefault();

 let userFullName = document.getElementById("nameSurnameInput").value; 
 let userDistanceInKm = document.getElementById("distanceInput").value; 
 let userAgeChoice = document.querySelector(".form-select").value; 
 let priceForEachKm = 0.21; 
 let discountPriceForElders = 0.4;
 let discountPriceForUnder18 = 0.2; 
 let offer = "Biglietto Standard";
 let trainCarriage = Math.floor(Math.random()*9)+1;
 let cpCode = Math.floor(Math.random()*10000)+1;
 let finalPrice = 0; 
 
 if(userAgeChoice == "1")
 {
    offer = "Prezzo Ridotto";
    finalPrice = (userDistanceInKm*priceForEachKm) - ((userDistanceInKm*priceForEachKm)*(discountPriceForUnder18));
    roundedFinalPrice = finalPrice.toFixed(2); 

 }
 else if(userAgeChoice == "2")
 {
   offer = "Prezzo Ridotto";
   finalPrice = (userDistanceInKm*priceForEachKm) - ((userDistanceInKm*priceForEachKm)*(discountPriceForElders));
   roundedFinalPrice = finalPrice.toFixed(2); 
 }
 else
 {
  
    finalPrice = (userDistanceInKm*priceForEachKm); 
    roundedFinalPrice = finalPrice.toFixed(2); 
 }

 document.getElementById("fullName").innerHTML = userFullName;
 document.getElementById("offer").innerHTML = offer;
 document.getElementById("trainCarriage").innerHTML = trainCarriage;
 document.getElementById("cpCode").innerHTML = cpCode;
 document.getElementById("price").innerHTML = roundedFinalPrice; 

 let userTicket = document.getElementById("ticket");
 userTicket.classList.remove("d-none"); 

}