
const task1 = () => new Promise((resolve, reject) => setTimeout(() => resolve("Task 1 complete"), 1000));
const task2 = () => new Promise((resolve, reject) => setTimeout(() => resolve("Task 2 complete"), 1000));
// const task3 = () => new Promise((resolve, reject) => setTimeout(() => resolve("Task 3 complete"), 1000));
const task3 = () => new Promise((resolve, reject) => reject("error when executing Task 3"));

const genericOnRejectedFunc = (value) => {
    console.log("some error occurred: ", value)
}
task1()
  // .then(onFulfilled, onRejected), onRejected is optional
  .then((result1) => {
    console.log(result1);
    return task2();
  })
  .then((result2) => {
    console.log(result2);
    return task3();
  })
  .then((result3) => {
    console.log(result3);
  })
  .catch((error) => console.error("Error occurred:", error)); 