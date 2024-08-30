const gradeSpan = document.querySelector('span.displayNG'); // Get the span element for calorie display
const genderSelect = document.querySelector('select#gender'); // Get the gender select element (you would need to add this in HTML)

function calculateCalories() {
    const age = parseFloat(document.querySelector('input[placeholder="Age"]').value) || 0;
    const height = parseFloat(document.querySelector('input[placeholder="Height(cm)"]').value) || 0;
    const weight = parseFloat(document.querySelector('input[placeholder="Weight(kg)"]').value) || 0;
    const gender = genderSelect.value; // Get selected gender

    let bmr;

    if (gender === 'male') {
        // BMR calculation for men
        bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    } else if (gender === 'female') {
        // BMR calculation for women
        bmr = 10 * weight + 6.25 * height - 5 * age - 161;
    } else {
        bmr = 0; // Default value if gender is not selected
    }

    // Update the span with the calculated calories
    gradeSpan.textContent = bmr.toFixed(0);
}

// Add event listeners for buttons
const calculateButton = document.querySelector('button.btn-primary');
calculateButton.addEventListener('click', calculateCalories);