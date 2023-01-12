//Write a function that takes a string s as input and checks whether it’s a palindrome or not.

//Note: A phrase, word or sequence is a palindrome that reads the same backwards as forwards.
function isPalindrome(s) {
    console.log(`String to check: ${s}. Length of the string: ${s.length}`);
    let left = 0,
        right = s.length - 1,
        i = 1;
    
    while (left < right) {
        // The terminating condition for the loop is when both the pointers reach the same element or when they cross each other.
        console.log(`In iteration ${i}, left = ${left}, right = ${right}`);
        console.log(`The current element being pointed to by the left pointer is '${s[left]}'`);
        console.log(`The current element being pointed to bu the right pointer is 
'${s[right]}'`);
        left++; // Headed towards the right 
        right--; // Headed towards the left
        i++;
        console.log("-".repeat(100));
    }
    console.log(`Loop terminated with left = ${left}, right = ${right}`);
    return "The pointers have either reached the same index, or have crossed each other, hence we don't need to look further.";
    
}
function main() {
    let testCases = ["RACECAR", "ABBA", "TART"];
    i = 1;
    
    testCases.map((s, index) => {
        console.log("Test Case #, i");
        console.log(isPalindrome(s));
        console.log("-".repeat(100), "/n");
        i++;
    });
    
}
main();