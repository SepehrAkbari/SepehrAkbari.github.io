const gradeSpan = document.querySelector('span.displayNG'); // Get the span element for grade display
const letterSpan = document.querySelector('span.displayLG'); // Get the span element for grade display
const tableBody = document.querySelector('tbody');  // Get the table body for adding rows

// Function to calculate total grade
function calculateGrade() {
  let totalGrade = 0;
  let totalWeightage = 0;

  const rows = tableBody.querySelectorAll('tr');  // Get all table rows

  for (const row of rows) {
    const weightageInput = row.querySelector('input[placeholder="Weightage"]');
    const gradeInput = row.querySelector('input[placeholder="Grade"]');

    const weightage = parseFloat(weightageInput.value) || 0;
    const grade = parseFloat(gradeInput.value) || 0;

    totalGrade += weightage * grade;
    totalWeightage += weightage;
  }

  // Check if total weightage is 100
  if (totalWeightage !== 100) {
    alert('Error: Total weightage must be 100%');
    return;
  }

  const finalGrade = totalGrade / totalWeightage;
  //alert(finalGrade)
  //gradeSpan.innerText = finalGrade + '%';
  gradeSpan.innerText = parseFloat(finalGrade).toFixed(2) + '%';

  if (finalGrade >= 93) {
    letterSpan.innerText = 'an A';
  } else if (finalGrade >= 90) {
    letterSpan.innerText = 'an A-';
  } else if (finalGrade >= 87) {
    letterSpan.innerText = 'a B+';
  } else if (finalGrade >= 83) {
    letterSpan.innerText = 'a B';
  } else if (finalGrade >= 80) {
    letterSpan.innerText = 'a B-';
  } else if (finalGrade >= 77) {
    letterSpan.innerText = 'a C+';
  } else if (finalGrade >= 73) {
    letterSpan.innerText = 'a C';
  } else if (finalGrade >= 70) {
    letterSpan.innerText = 'a C-';
  } else if (finalGrade >= 67) {
    letterSpan.innerText = 'a D+';
  } else if (finalGrade >= 63) {
    letterSpan.innerText = 'a D';
  } else {
    letterSpan.innerText = 'an F';
  }

}

// Function to add a new row
function addRow() {
  const newRow = document.createElement('tr');

  newRow.innerHTML = `
    <td><input class="form-control" type="text" placeholder="Assignment" aria-label="default input example"></td>
    <td><input class="form-control" type="text" placeholder="Weightage" aria-label="default input example"></td>
    <td><input class="form-control" type="text" placeholder="Grade" aria-label="default input example"></td>
  `;

  tableBody.appendChild(newRow);
}

// Function to delete the last row
function deleteLastRow() {
  const tableBody = document.querySelector('tbody');
  const rows = tableBody.querySelectorAll('tr');

  // Check if there's at least one row
  if (rows.length > 0) {
    tableBody.removeChild(rows[rows.length - 1]);  // Remove the last row
  } else {
    alert('There are no rows to delete!');
  }
}

// Add event listeners for buttons
const calculateButton = document.querySelector('button.btn-primary');
const addRowButton = document.querySelector('button.btn-outline-success');
const deleteButton = document.querySelector('button.btn-outline-danger');

calculateButton.addEventListener('click', calculateGrade);
addRowButton.addEventListener('click', addRow);
deleteButton.addEventListener('click', deleteLastRow);
