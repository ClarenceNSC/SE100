const MSFTStockClosingPrices = [
    {
        Monday: 254.12,
        Tuesday: 253.12,
        Wednesday: 256.97,
        Thursday: 257.52,
        Friday: 258.93
    },
    {
        Monday: 292.20,
        Tuesday: 289.73,
        Wednesday: 291.04,
        Thursday: 294.55,
        Friday: 296.29
    }]
    
    // Write your code below

    for (let index3 = 0; index3 < MSFTStockClosingPrices; index3++ ) {
        console.log(MSFTStockClosingPrices[index3][Monday]);
        console.log(MSFTStockClosingPrices[index3][Tuesday]);
        console.log(MSFTStockClosingPrices[index3][Wednesday]);
        console.log(MSFTStockClosingPrices[index3][Thursday]);
        console.log(MSFTStockClosingPrices[index3][Friday]);
    }