const checkBtn = document.querySelector("#check-btn");
const textInput = document.querySelector("#text-input");
const result = document.querySelector("#result");

const isPalindrome = (input) => {
    // Normalize the input: convert to lowercase and remove non-alphanumeric characters (keeping spaces)
    const normalized = input.toLowerCase().replace(/[^a-z0-9]/g, ''); // Removed spaces in this line
    
    // Reverse the normalized string
    const reversed = normalized.split('').reverse().join('');
    
    // Compare the normalized string with the reversed string
    return normalized === reversed;
}

checkBtn.addEventListener("click", () => {
    const textValue = textInput.value.trim();

    // Check if the input is empty
    if (textValue === "") {
        return alert("Please input a value");
    }

    // Check if the text value is a palindrome
    const reverseValue = isPalindrome(textValue);
    if (reverseValue) {
        return result.innerText = `${textValue} is a palindrome`;
    } else {
        return result.innerText = `${textValue} is not a palindrome`;
    }
});
