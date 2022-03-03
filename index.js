let amount = 3000000;

function taxCalculator(amount) {
    let i = 0;
    while (i<7) {
        if (amount <= 250000*(i+1)) return (amount*(1 + i*0.05));
        i = i+1
    }
    return 
}

console.log(taxCalculator(amount));