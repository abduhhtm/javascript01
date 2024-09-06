function calculatePrice (quantity, pricePeritem, Ismember) {
    total = quantity * pricePeritem
    if (Ismember === true) { 
        return total - (total * 15/100) 
  }else {
        return total
  }
}
console.log(calculatePrice(3, 150, true));

function confirmPurchase(isConfirmed, totalPrice){
      if (isConfirmed === true) { 
       return `Purchase confirmed with total ${totalPrice}`;
   }else{
       return `Purchase not confirmed`
   }
}

console.log(confirmPurchase(true, calculatePrice(3, 150, true)));
