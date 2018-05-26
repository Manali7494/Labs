function calculateSalesTax(salesData, taxRates){

var combinedArray = [];
var companyArray = [];
  for (var item of salesData){
    if (combinedArray.length === 0){
      var sum = sumArray(item['sales']);
      var tax = calculateTax(item['sales'],item['province'],taxRates);
      combinedArray.push({
          name: item['name'],
          totalSales: sum,
          totalTaxes: tax
        });
      companyArray.push(item['name']);
    }
    else{
      for (var resultItem of combinedArray){
        if (item.name === resultItem.name && companyArray.indexOf(item.name) > -1){
          var prevSum = resultItem.totalSales;
          var prevTax = resultItem.totalTaxes;
          var newSum = sumArray(item.sales) + prevSum;
          var newTax = calculateTax(item.sales,item.province,taxRates) + prevTax;
        resultItem.totalSales = newSum;
        resultItem.totalTaxes = newTax;
        companyArray.push(item['name']);
        }
        else if (item.name !== resultItem.name && companyArray.indexOf(item.name) === -1){
          var sum = sumArray(item['sales']);
          var tax = calculateTax(item['sales'],item['province'],taxRates);
          combinedArray.push({
            name: item['name'],
            totalSales: sum,
            totalTaxes: tax
          });
        }
      }
    }
  }

var resultObject = {};
  for (var item of combinedArray){
    resultObject[item.name] = {
      totalSales: item.totalSales,
      totalTaxes: item.totalTaxes
    }
  }

  return resultObject;
}


function sumArray(array) {
  return array.reduce((sum,value) => sum + value)
}

function calculateTax(array,province,taxRates){
  var sum = sumArray(array);
  for (var provInTaxRate in taxRates){
    if (province === provInTaxRate){
      return sum * taxRates[provInTaxRate];
    }
  }
}

/* Expected Results:
{
  Telus: {
    totalSales: 1300
    totalTaxes: 144
  },
  Bombardier: {
    totalSales: 800,
    totalTaxes: 40
  }
}
*/

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