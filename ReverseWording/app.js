/**Reverse Words in the String  */
function reverseWords(sentence) {
    //Replace multiple spaces with single space
    sentence = sentence.trim().replace(/  +/g, ' ');
    //We need to convert the input strings to lists of characters as strings are immutable in JS
    sentence = [...sentence];
    //To reverse all words in the string, we will first reverse the entire string.
    let strLen = sentence.length;
    sentence = strRev(sentence, 0, strLen - 1);
    
    // Now all the words are in the desired location, but in reverse order.
    // Now, let's iterate the sentence and reverse each word in place.
    let start = 0,
        end = 0;
    while (true) {
        // find the start index of each word by detecting spaces.
        while (start < sentence.length && sentence[start] == " ") start += 1;
        
        if (start == strLen) break;
        
        // find the end index of the word.
        end = start + 1;
        while (end < strLen && sentence[end] != " ") end += 1;
        
        // let's call our helper function to recerse the word in place
        sentence = strRev(sentence, start, end - 1);
        start = end;
    }
    return sentence.join("");
    
}
// a function that reverses a whole sentence character by character
function strRev(str, startRev, endRev) {
    // Starting from the two ends of the list, and moving inwards the centre of the string, swap the characters
    while (startRev < endRev) {
        let temp = str[startRev]; // temp store for swapping
        str[startRev] = str[endRev]; // Swap step 1
        str[endRev] = temp; // Swap step 2
        
        startRev += 1; // Move forwards towards the middle
        endRev -= 1; // move backwards towards the middle
    }
    return str;
}

function main() {
    stringToReverse = [
        " Hello World ",
        "We love JavaScript",
        "The quick brown fox jumped over the lazy dog",
        "Hey",
        "To be, or not to be",
        "AAAAA",
        " Hello     World "
    ];
    
    for (let i = 0; i < stringToReverse.length; i++) {
        console.log(
            i + 1 + ".\t Actual string:\t\t",
            stringToReverse[i]
        );
        console.log(
            "\t Reversed string:\t",
            reverseWords(stringToReverse[i])
        );
        console.log("-".repeat(100));
    }
}

main();