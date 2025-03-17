
//    const myPromise = new Promise ((resolve, reject) => {
//        setTimeout(()=> {
//            resolve ('10')
            
//        }, 2000);
//    }
    
//}

// Test the function
//getNumberPromise().then((value) => {
//    console.log(value); // Should log 10 after 2 seconds
//});

//    const myPromise = new Promise ((resolve, reject) => {
//        setTimeout(()=> {
//            resolve ('10')
            
 //       }, 2000);
//    }
    
//}



//const task1 = () => new Promise((resolve) => setTimeout(() => resolve("Task 1 complete"), 1000));
//const task2 = () => new Promise((resolve) => setTimeout(() => resolve("Task 2 complete"), 1000));
//const task3 = () => new Promise((resolve) => setTimeout(() => resolve("Task 3 complete"), 1000));

//task1()
 // .then((result1) => {
//    console.log(result1);
//    return task2();
//  })
//  .then((result2) => {
 //   console.log(result2);
 //   return task3();
 // })
//  .then((result3) => {
 //   console.log(result3);
 // })
 // .catch((error) => console.error("Error occurred:", error));


 //function fetchData() {
 //   const myPromise = new Promise ((resolve, reject) => {
 //       setTimeout(() => {
 //           resolve ("Data retreieved")
 //       } , 1000) 
 //       }}

 
// Assignment / Question 1 
// const p = Promise.resolve("resolved");
// p.then(value => {console.log(value)});






//  const p = Promise.reject("at <anonymous>: 1:26"));
//  p 
//  .then (value => {
//        console.log ("Error occurred:",value)
//  })
//  .catch((error) => console.error (("Error: Oops!")));

 
// Assignment / Question 2
// const p = Promise.reject("at <anonymous>:1:26");

//    const ErrorFunc = (value) => {
//        console.log("Error : ", value)
//    }
//
//     p.then (result => { 
//        console.log ("Error:",result);
//     })
//   
//    .catch(error => {
//        console.error("Error: Oops!", error); 
//    })
        
// Assignment / Question 3 
//const fetchUser = () => Promise.resolve ({id: 1, name: "Alice"});

//fetchUser() 
//    .then ((user) => {
//        console.log (user);
//    })

// Assignment / Question 4
// const fetchUser = () => Promise.resolve ({Name: "Alice"});
//
// //fetchUser()
//    .then((user) => {
//        console.log(`${user.Name}`);
//    })

// Assignment / Question 5
//    const p = Promise.reject("at <anonymous>:1:26");
//
//        const ErrorFunc = (value) => {
//            console.log("Error : ", value)
//    }

//     p.then (result => { 
//        console.log ("Error:",result);    
//    })   
//    .catch(error => {
//        console.error("Error: Invalid id", error); 
//    })

//  Assignment / Question 6
//    const p = Promise.resolve("resolved");
//    p
//    .then(value => {console.log(value)})
//    .finally(() => {
//        console.log ("Promise settled")
//    });

//  Assignment / Question 7
//
//    const fetchUser = () => Promise.resolve(21);
//
//
//    fetchUser()
//
//        .then ((user => {
//
//            console.log (`${"42"}`);
//        }))

//Assignment / Question 8 

//   const p = Promise.reject("0");
//       p.then (result => {console.log ("Error:",result);
//   })

// .catch(error => {
//       console.error ("new Error: (Invalid value)", error);
// })

// Assignment / Question 9 
//    const P1 = Promise.resolve(1);
//    const P2 = 2; 
//    const P3 = 3; 

//    Promise.all ([P1, P2, P3])
//    .then ((value) => {
//        console.log(value);
//    });

// Assignment / Question 10 
//    const P1 = new Promise((resolve, reject) => {
//    setTimeout(resolve, 500, "a");
//  });
  
//  const p2 = new Promise((resolve, reject) => {
//    setTimeout(resolve, 50, "b");
//  });
//
//  const P3 = new Promise((resolve, reject) => {
 //   setTimeout(resolve, 150, "c");
//  });

//  Promise.race([P1, p2, P3])
//  .then((value) => {
//    console.log(value);
//  })

//Assignment / Bonus Question
const p = Promise.resolve('World');

p.then(value => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('Hello ' + value); 
    }, 1000); 
  });
})

  .then((finalValue) => {
    console.log (finalValue);
  })



 