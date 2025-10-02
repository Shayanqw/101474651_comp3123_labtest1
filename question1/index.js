// Question 01:

async function lowerCaseWords(arr = []) {
  if (!Array.isArray(arr)) {
    throw new TypeError("Input must be an array!!");
  }
  if (arr.length === 0) {
    throw new Error("Array is empty!!");
  }

  // hey shayan here 👋. for this one i wrote one pass and reduced the code complexity and runtime
  const lowered = arr.reduce((out, item) => {
    if (typeof item === "string") out.push(item.toLowerCase());
    return out;
  }, []);

  return lowered;
}

const mixed = ['PIZZA', 10, true, 25, false, 'Wings', 'PineApple', 42, true, 'HELLO', null, 'World'];

lowerCaseWords(mixed)
  .then(res => console.log("\n \t Result:", res, "\n")) // my code should Expect: ['pizza', 'wings', 'pineapple', 'hello', 'world']
  .catch(err => console.error("Error:", err.message));
