const printDelayNumbers = () => {
  for (let i = 1; i <= 5; i++) {
    setTimeout(() => {
      console.log(`${i} after ${i} second`);
    }, i * 1000);
  }
};

printDelayNumbers();
