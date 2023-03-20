// Code your solutions in this file
function writeCards(names, occasion) {
    const messages = [];
    for (let i = 0; i < names.length; i++) {
      const message = `Thank you, ${names[i]}, for the wonderful ${occasion} gift!`;
      messages.push(message);
      console.log(message);
    }
    return messages;
  }
  
  function countDown(number) {
    for (let i = number; i >= 0; i--) {
      console.log(i);
    }
  }
  