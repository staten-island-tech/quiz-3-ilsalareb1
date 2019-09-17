const tipCalculator = function tipCalculator (bill){
    let percentage;
    if (bill <50){
        percentage = .2;
    } else if (bill >=50 && bill < 200){
        percentage = .15;
    } else {
        percentage = .1;
    }
    return percentage * bill;
}

const bills = [140,45,270];

const tips = [tipCalculator(bills[0]), tipCalculator(bills[1]), tipCalculator(bills[2])];

const totalAmounts = [ bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2] ];

var finalAmountPaid = [ totalAmounts[0], totalAmounts[1], totalAmounts[2]];
const result = finalAmountPaid.filter (finalAmountPaid.length > 100 );

console.log(result);


