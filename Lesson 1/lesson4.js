//const MSFTStockClosingPrices = [
    //{
   //     Monday: 254.12,
  //      Tuesday: 253.12,
   //     Wednesday: 256.97,
  //      Thursday: 257.52,
  //      Friday: 258.93
  //  },
   // {
  //      Monday: 292.20,
 //       Tuesday: 289.73,
  //      Wednesday: 291.04,
  //      Thursday: 294.55,
  //      Friday: 296.29
 //   }]
    
    // Write your code below

  //  let result = 0;
    //let index = 0; 

    //for (let index3 = 0; index3 < MSFTStockClosingPrices.length; index3++ ) {
        //result += MSFTStockClosingPrices[index3]['Monday'];
        //result += MSFTStockClosingPrices[index3]['Tuesday'];
        //result += MSFTStockClosingPrices[index3]['Wednesday'];
        //result += MSFTStockClosingPrices[index3]['Thursday'];
        //result += MSFTStockClosingPrices[index3]['Friday'];
      //}
      //console.log (result)

      //for (let value of MSFTStockClosingPrices) {
        //result += value ['Monday'];
       // result += value ['Tuesday'];
       // result += value ['Wednesday'];
        //result += value ['Thursday'];
       // result += value ['Friday'];
      //}
      // console.log(result)//

    // while (index < MSFTStockClosingPrices.length) {
    //    result += MSFTStockClosingPrices [index]['Monday'];
    //    result += MSFTStockClosingPrices [index]['Tuesday'];
    //    result += MSFTStockClosingPrices [index]['Wednesday'];
    //    result += MSFTStockClosingPrices [index]['Thursday'];
    //    result += MSFTStockClosingPrices [index]['Friday'];
    //    index ++;
    // }
    //    console.log (result)//

 //     function getBetween() {
//      const MSFTStockClosingPrices = [254.12, 253.12, 256.97, 257.52, 258.93];
//
//      let result = 0;
//
//        for (let value of MSFTStockClosingPrices) {
 //         if (value > 254) {
//            if (value < 257) {
//          }
//          result += 1;
//      }
//    }
//        console.log (result);
 // }
 //       getBetween()



        const MSFTStockClosingPrices = [254.12, 253.12, 256.97, 257.52, 258.93];
        const AAPLStockClosingPrices = [256.45, 255.25, 259.10, 260.75, 261.88];


    function getBetween(stockClosingPrices) {
        let result = 0;

    for (let value of stockClosingPrices) {
      if (value > 254) {
        if (value < 257) {
          result +=1;
    }
  }
  console.log (result);
}
    }
        getBetween(MSFTStockClosingPrices);
        getBetween(AAPLStockClosingPrices);


        function getBetween(stockClosingPrices) {
          let result = 0;
          
          for (let value of stockClosingPrices) {
            if (value > 254) {
              if (value < 257) {
                result += 1;
              }
            }
          }
        
          console.log(result);
        }
        
        getBetween(MSFTStockClosingPrices);
        getBetween(AAPLStockClosingPrices);



        