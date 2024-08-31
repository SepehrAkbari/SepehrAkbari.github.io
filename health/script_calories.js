const calorieSpan = document.querySelector('span.displayC'); // Get the span element for calorie display
const bmiSpan = document.querySelector('span.displayB'); // Get the span element for bmi display
const bmiCSpan = document.querySelector('span.displayBC'); // Get the span element for bmi display
const bmiRSpan = document.querySelector('span.displayBR'); // Get the span element for bmi display
const bmiRISpan = document.querySelector('span.displayBRI'); // Get the span element for bmi display
const genderSelect = document.querySelector('select#gender'); // Get the gender select element (you would need to add this in HTML)

// Get the table cells for displaying the calculated values
const lsc = document.querySelector('td.l-s-c');
const lmc = document.querySelector('td.l-m-c');
const lfc = document.querySelector('td.l-f-c');
const lsd = document.querySelector('td.l-s-d');
const lmd = document.querySelector('td.l-m-d');
const lfd = document.querySelector('td.l-f-d');
const gsc = document.querySelector('td.g-s-c');
const gmc = document.querySelector('td.g-m-c');
const gfc = document.querySelector('td.g-f-c');
const gsd = document.querySelector('td.g-s-d');
const gmd = document.querySelector('td.g-m-d');
const gfd = document.querySelector('td.g-f-d');

function calculateCalories() {
    const age = parseFloat(document.querySelector('input[placeholder="Age"]').value) || 0;
    const height = parseFloat(document.querySelector('input[placeholder="Height"]').value) || 0;
    const weight = parseFloat(document.querySelector('input[placeholder="Weight"]').value) || 0;
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
    calorieSpan.textContent = bmr.toFixed(0);

    function formatValue(value) {
        const formattedValue = value.toFixed(0);
        return formattedValue < 900 ? 'Unhealthy' : formattedValue;
    }

    lsc.textContent = formatValue((bmr - 250));
    lmc.textContent = formatValue((bmr - 500));
    lfc.textContent = formatValue((bmr - 1000));
    lsd.textContent = -250;
    lmd.textContent = -500;
    lfd.textContent = -1000;
    gsc.textContent = formatValue((bmr + 250));
    gmc.textContent = formatValue((bmr + 500));
    gfc.textContent = formatValue((bmr + 1000));
    gsd.textContent = +250;
    gmd.textContent = +500;
    gfd.textContent = +1000;
}

function calculateBmi() {
    const height = parseFloat(document.querySelector('input[placeholder="Height"]').value) || 0;
    const weight = parseFloat(document.querySelector('input[placeholder="Weight"]').value) || 0;

    let bmi;
    let c = "";

    // Convert height to meters
    const heightInMeters = height / 100;

    if (heightInMeters > 0) {
        // BMI calculation
        bmi = weight / (heightInMeters * heightInMeters);
    } else {
        bmi = 0; // Default value if height is not provided or is zero
    }

    if (bmi < 16) {
        c = "Severe Thinness";
    } else if (bmi >= 16 && bmi < 17) {
        c = "Moderate Thinness";
    } else if (bmi >= 17 && bmi < 18.5) {
        c = "Mild Thinness";
    } else if (bmi >= 18.5 && bmi < 25) {
        c = "Normal";
    } else if (bmi >= 25 && bmi < 30) {
        c = "Overweight";
    } else if (bmi >= 30 && bmi < 35) {
        c = "Obese Class I";
    } else if (bmi >= 35 && bmi < 40) {
        c = "Obese Class II";
    } else if (bmi >= 40) {
        c = "Obese Class III";
    } else {
        c = "Unknown";
    }

    healthyWightLow = 17.75 * (heightInMeters * heightInMeters);
    healthyWeightHigh = 27.5 * (heightInMeters * heightInMeters);

    idealWightLow = 18 * (heightInMeters * heightInMeters);
    idealWeightHigh = 25 * (heightInMeters * heightInMeters);

    // Update the span with the calculated calories
    bmiSpan.textContent = bmi.toFixed(1);
    bmiCSpan.textContent = c;
    bmiRSpan.textContent = healthyWightLow.toFixed(0) + " to " + healthyWeightHigh.toFixed(0);
    bmiRISpan.textContent = idealWightLow.toFixed(0) + " to " + idealWeightHigh.toFixed(0);
}

// Add event listeners for buttons
const calculateButton = document.querySelector('button.btn-primary');
calculateButton.addEventListener('click', () => {
    calculateCalories();
    calculateBmi();
});