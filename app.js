const readline = require('readline');

function separateAndSort(input) {
  const vowels = 'aeiou';
  let vowelChars = '';
  let consonantChars = '';

  const frequency = {};
  const firstAppearance = {};

  // Count frequency and track first appearance
  for (let i = 0; i < input.length; i++) {
    const char = input[i];
    if (!frequency[char]) {
      frequency[char] = 0;
      firstAppearance[char] = i;
    }
    frequency[char]++;
  }

  // Separate vowels and consonants
  for (let char of input) {
    if (vowels.includes(char)) {
      vowelChars += char;
    } else if (/[a-z]/.test(char)) {
      consonantChars += char;
    }
  }

  // Sort based on frequency and first appearance
  const sortByFrequencyAndAppearance = (a, b) => {
    if (frequency[a] !== frequency[b]) {
      return frequency[b] - frequency[a]; // Descending frequency
    }
    return firstAppearance[a] - firstAppearance[b]; // Ascending first appearance
  };

  vowelChars = vowelChars.split('').sort(sortByFrequencyAndAppearance).join('');
  consonantChars = consonantChars.split('').sort(sortByFrequencyAndAppearance).join('');

  return { vowelChars, consonantChars };
}

function main() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question('Input one line of words (S): ', (input) => {
    // Convert input to lowercase and remove whitespaces
    const processedInput = input.toLowerCase().replace(/\s+/g, '');

    const { vowelChars, consonantChars } = separateAndSort(processedInput);

    console.log('Vowel Characters:');
    console.log(vowelChars);
    console.log('Consonant Characters:');
    console.log(consonantChars);

    rl.close();
  });
}

main();