function CalculateTax(Price, location) {
    let taxrate;
    if (location === "jakarta") {
      taxrate = 0.1;
    } else if (location === "bandung") {
      taxrate = 0.05;
    } else {
      taxrate = 0;
    }
    let TaxAmount = Price * taxrate;
    let Finalprice = Price + TaxAmount;
    return Finalprice;
  }
  
  let finalPrice = CalculateTax(1000, "Jakarta");
  console.log(finalPrice);
  
  function displayResult(finalprice, paymentstatus) {
    if (paymentstatus === "paid") {
      console.log(`payment successfull with total price ${finalprice}`);
    } else {
      console.log(`payment failed with total price ${finalprice}`);
    }
  }
  
  displayResult(finalPrice, "paid");