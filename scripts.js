//const companyName = "Metaa"

//const changeName = companyName.substring (0,4)
//console.log(changeName)
//console.log(changeName.toUpperCase())


//const msftData = [190.15, 194.21, 191.07, 190.44, 200.15]
//const result = ((190.15+194.21+191.07+190.44+200.15)/5)
//console.log (result)



//const msftData = [190.15, 194.21, 191.07, 190.44, 200.15]
//console.log(msftData+ "," +205.67)


//const disneyData = {
	//open: "120.54",
	//high: "122.56",
	//low: "120.54",
	//close: "121.09"
//}


//const open = parseFloat(disneyData.open);
//const high = parseFloat(disneyData.high);
//const low = parseFloat(disneyData.low);
//const close = parseFloat(disneyData.close);

//const result = open - high + low - close
//console.log (result)
//const resultTofixed = result.toFixed(2)
//console.log (resultTofixed)


//const disneyData = {
	//open: "120.54",
	//high: "122.56",
	//low: "120.54",
	//close: "121.09",
	//volume: "1512311"
//}

//console.log (disneyData)


//const bacData = [190.15, 194.21, 191.07, 192.44, 129000]

//let	Low = 190.15,
//	High = 194.21,
//	Open = 191.07,
//	Close = 192.44,
//	Volume = 129000

//if (Close > Open)
//	if (Volume > 100000) {
//	console.log ("Strong Bullish");
//} else {
//	console.log("Bullish");
//} 
//  else if (Close < Open) 
//	if (Volume > 10000) {
//		console.log ("Strong Bearish");
	
 //} else {
//	console.log ("Bearish");
 //}
//	else {
//		console.log("neutral");
//	}
  

const disneyData = {
	open: "120.54",
	high: "122.56",
	low: "120.54",
	close: "121.09",
	volume: "90000"
}
const openPx = parseFloat(disneyData.open);
const closePx = parseFloat(disneyData.close);
const volume = parseInt(disneyData.volume);

if (closePx > openPx) 
	if (volume > 100000) {
		console.log ("Strong Bullish");
	}
		else {
			console.log ("Bullish");
		}
	
	else if (closePx < openPx) 
			if (volume > 10000) {
			console.log ("Strong Bearish");
		}
			else {
				console.log ("Bearish");
			}
			
			else {
				console.log ("neutral")
			}


// Write your code below