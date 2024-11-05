const readline = require('readline');

function calculateBuses(n, familySizes) {
    if (n !== familySizes.length) {
      return "Input must be equal with count of family";
    }
  
    let buses = 0;
  
    // Sort the family sizes in descending order
    familySizes.sort((a, b) => b - a);
  
    let i = 0;
    let j = familySizes.length - 1;
  
    while (i <= j) {
      // If the largest family can share a bus with the smallest family
      if (familySizes[i] + familySizes[j] <= 4) {
        j--; // Use the smallest family
      }
      i++; // Always use the largest family
      buses++;
    }
  
    return buses;
  }

  function main() {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
  
    rl.question('Input the number of families: ', (nInput) => {
        const n = parseInt(nInput, 10);
      
        rl.question('Input the number of members in the family (separated by a space) : ', (sizesInput) => {
          const familySizes = sizesInput.split(' ').map(Number);
      
          const result = calculateBuses(n, familySizes);
          console.log(result);
      
          rl.close();
        });
  });
}
  
  main();