function extractOddOccurrences(input) {
    let words = input.split(' ');
    let wordCount = {};

    for (let word of words) {
        let lowercaseWord = word.toLowerCase();

        if (wordCount.hasOwnProperty(lowercaseWord)) {
            wordCount[lowercaseWord]++;
        } else {
            wordCount[lowercaseWord] = 1;
        }
    }

    let result = [];

    for (let word of words) {
        let lowercaseWord = word.toLowerCase();

        if (wordCount[lowercaseWord] % 2 !== 0) {
            result.push(lowercaseWord);
            wordCount[lowercaseWord] = 0; // Зануляваме стойността, за да не се повтаря
        }
    }

    return result.join(' ');
}

// Пример
let input = 'Java C# Php PHP Java PhP 3 C# 3 1 5 C#';
let output = extractOddOccurrences(input);
console.log(output);