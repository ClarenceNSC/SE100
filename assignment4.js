
const amdPrices = [90.21, 89.15, 88.15, 87.12, 102.21, 100.12, 79.82];

function findMax() {
    let amdPrices = [90.21, 89.15, 88.15, 87.12, 102.21, 100.12, 79.82];
    let maxPrice = amdPrices[0];

    for (let price of amdPrices) {
        if (amdPrices > maxPrice) {
            maxPrice = price;
        }
    }
    console.log(maxPrice)
}
    findMax();
