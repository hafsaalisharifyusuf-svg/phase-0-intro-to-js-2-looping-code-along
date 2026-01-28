// Code your solutions in this file
// ===============================
// FOR LOOP ASSIGNMENT
// writeCards
// ===============================

function writeCards(names, event) {
  // create a new empty array
  const messages = [];

  // loop through the names array
  for (let i = 0; i < names.length; i++) {
    const message = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
    messages.push(message);
  }

  // return the array of messages
  return messages;
}

// Example call (tests will use their own)
writeCards(["Charlie", "Samip", "Ali"], "birthday");


// ===============================
// WHILE LOOP ASSIGNMENT
// countDown
// ===============================

function countDown(number) {
  // start counting from the given number
  let current = number;

  // loop until we reach 0
  while (current >= 0) {
    console.log(current);
    current--;
  }
}

// Example call
countDown(10);
// Code your solutions in this file