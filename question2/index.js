// question 02:

const delay = (ms, value, shouldReject = false) =>
  new Promise((resolve, reject) =>
    setTimeout(() => (shouldReject ? reject(value) : resolve(value)), ms)
  );

const resolvedPromise = () => delay(500, "\n \t resolvedPromise: success after 500ms");
const rejectedPromise = () => delay(500, "\n \t rejectedPromise: failure after 500ms", true);

// this will Handle each with then/catch/finally
resolvedPromise()
  .then(msg => console.log(msg))
  .catch(err => console.error("\n \t Unexpected error:", err))
  .finally(() => console.log("\n \t resolvedPromise finished"));

rejectedPromise()
  .then(msg => console.log("\n \t Unexpected success:", msg))
  .catch(err => console.error(err))
  .finally(() => console.log("\n \t rejectedPromise finished"));

// small note here for my code 👇: 
// this will chain them together to show sequence
// if resolvedPromise(); succeeds, immediately call rejectedPromise();
// if that fails, the .catch() runs
// regardless of success or failure, .finally() always runs

resolvedPromise()
  .then(() => rejectedPromise())
  .catch(() => {})
  .finally(() => console.log("\n \t sequence done \n "));
