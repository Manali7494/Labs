function calculateSalesTax(salesData, taxRates) {
  // Implement your code here

  // Initalizing arrays
  var companyArray = [];
  var totalSalesArray = [];
  var taxesArray = [];

 salesData.forEach(function(salesElement,salesIndex){
  if (companyArray.indexOf(salesElement.name) == -1){
     companyArray.push(salesElement.name);
     var sum = (salesElement.sales).reduce(getSum,0);
     totalSalesArray.push((salesElement.sales).reduce(getSum,0));
     taxesArray.push(calculateTax(taxRates,salesElement,sum));
  } else {
    var index = companyArray.indexOf(salesElement.name);
    var sum = (salesElement.sales).reduce(getSum,0);
    totalSalesArray[index] += sum;
    taxesArray[index]  += calculateTax(taxRates,salesElement,sum);
  }
});

// Creating resulting object
var resObj = {};
companyArray.forEach(function(company,index){
  resObj[company] = {
    totalSales: totalSalesArray[index],
    totalTaxes: taxesArray[index]
  }
});

return resObj;
}
function getSum(total,num){return total + num;}
function calculateTax (taxRates,salesElement,sum){
  var taxRate = taxRates[salesElement.province];
  var tax = sum*taxRate;
  return tax;
}


var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];





var results = calculateSalesTax(companySalesData, salesTaxRates);
console.log(results);

/*

companySalesData.length
companySalesData[i] --> individual objects
companySalesData[i].name --> Individual names like "telus", "Bombardier", etc...

for loop that goes through the length of the resulting object:
{


}

Create two arrays for every company name:
1: [Sales] + push it
2: Individual (sum it ) * multiply by corresponding sales tax
3: Finally, combine everything in an object
Goals:


*/