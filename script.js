const calculateBtn = document.getElementById('calculateBtn');
const result = document.getElementById('result');

calculateBtn.addEventListener('click', calculateAge);

function calculateAge() {
    const birthYear = parseInt(document.getElementById('birthYear').value);
    const currentYear = new Date().getFullYear();
    
    if (birthYear && birthYear <= currentYear) {
        const age = currentYear - birthYear;
        result.textContent = `Your age is ${age} years.`;
    } else {
        result.textContent = "Please enter a valid birth year.";
    }
}
