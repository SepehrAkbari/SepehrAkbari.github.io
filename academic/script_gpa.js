const gpaSpan = document.querySelector('span.display'); // Get the span element for GPA display
const tableBody = document.querySelector('tbody');  // Get the table body for adding rows

// Letter grade to GPA conversion map
const gradeMap = {
  'A': 4.0,
  'A-': 3.67,
  'B+': 3.33,
  'B': 3.0,
  'B-': 2.67,
  'C+': 2.33,
  'C': 2.0,
  'C-': 1.67,
  'D+': 1.33,
  'D': 1.0,
  'F': 0.0,
};

// Function to calculate GPA
function calculateGpa() {
  let totalQualityPoints = 0;
  let totalCredits = 0;

  const rows = tableBody.querySelectorAll('tr');

  for (const row of rows) {
    const creditInput = row.querySelector('input[placeholder="Credit"]');
    const gradeInput = row.querySelector('input[placeholder="Grade"]');

    const credit = parseFloat(creditInput.value) || 0;
    const grade = gradeInput.value.toUpperCase(); // Convert grade to uppercase

    // Validate grade and credit
    if (isNaN(credit) || credit <= 0) {
      alert('Error: Credit must be a number greater than 0');
      return;
    }
    if (!gradeMap.hasOwnProperty(grade)) {
      alert('Error: Invalid grade entered. Please use A, A-, B+, etc.');
      return;
    }

    const qualityPoints = gradeMap[grade] * credit;
    totalQualityPoints += qualityPoints;
    totalCredits += credit;
  }

  if (totalCredits === 0) {
    gpaSpan.innerHTML = 'N/A';  // Display N/A if no courses
    return;
  }

  const gpa = totalQualityPoints / totalCredits;
  gpaSpan.innerHTML = parseFloat(gpa).toFixed(2);
}

// Function to add a new row
function addRow() {
  const newRow = document.createElement('tr');

  newRow.innerHTML = `
    <td><input class="form-control" type="text" placeholder="Course" aria-label="default input example"></td>
    <td><input class="form-control" type="text" placeholder="Credit" aria-label="default input example"></td>
    <td><input class="form-control" type="text" placeholder="Grade" aria-label="default input example"></td>
  `;

  tableBody.appendChild(newRow);
}

// Function to delete the last row
function deleteLastRow() {
  const rows = tableBody.querySelectorAll('tr');

  if (rows.length > 0) {
    tableBody.removeChild(rows[rows.length - 1]);
  } else {
    alert('There are no rows to delete!');
  }
}

// Add event listeners for buttons
const calculateButton = document.querySelector('button.btn-primary');
const addRowButton = document.querySelector('button.btn-outline-success');
const deleteButton = document.querySelector('button.btn-outline-danger');

calculateButton.addEventListener('click', calculateGpa);
addRowButton.addEventListener('click', addRow);
deleteButton.addEventListener('click', deleteLastRow);
