
// Question 1: 
 const amdPrices = [90.21, 89.15, 88.15, 87.12, 102.21, 100.12, 79.82];

function findMax() {
   let amdPrices = [90.21, 89.15, 88.15, 87.12, 102.21, 100.12, 79.82];
   let maxPrice = amdPrices[0];

    for (let value of amdPrices) {
        if (value > maxPrice) {
            maxPrice = value;
        }
    }
        console.log(maxPrice);
    }


    findMax();

// Question 2:

    const amdPrices = [90.21, 89.15, 88.15, 87.12, 102.21, 100.12, 79.82];
    
    let result = 0

    for (let index = 0; index < amdPrices.length; index++ ) {
       result += (amdPrices[index]/amdPrices.length);
    }
        console.log (result)

// Question 3: 

    const amdPrices = [90.21, 89.15, 88.15, 87.12, 102.21, 100.12, 79.82];
    
    let result = 0
    let sumPrices = amdPrices[0]+amdPrices[1]+amdPrices[2]+amdPrices[3]+amdPrices[4]+amdPrices[5]+amdPrices[6]

    for (let value of amdPrices) {
        if (value > sumPrices/amdPrices.length) {
          result +=1;
        }
      }
      console.log (result);
   
// Question 4: 
	const msftData = [
		[190.15, 196.21, 191.07, 194.44],
		[193.61, 195.89, 190.12, 193.40]
	];
	let result = 0;
	let index = 0;

	for (let index = 0; index < msftData.length; index++ ) {
		result += msftData[index]['3'];
	}
	console.log((result/2))	




// Question 5: 
	const disneyData = [
		{
			open: "120.54",
			high: "122.56",
			low: "120.54",
			close: "121.09"
		},
		{
			open: "123.15",
			high: "127.76",
			low: "123.02",
			close: "124.92"
		}
	];

	let index = 0
	let result = 0
	
	for (let index = 0; index < disneyData.length; index++) {
        result += parseFloat(disneyData[index]['close']);
    }
	      console.log (result/2)

for price in data:
	if price < 3:
    data.push(price)

// Question 6: 
const amdPrices = [90.21, 89.15, 88.15, 87.12, 102.21, 100.12, 79.82]

const sortedPrices = amdPrices.sort((a, b) => a - b);
const lowestPrices = sortedPrices.slice(0, 3);
console.log(lowestPrices);
