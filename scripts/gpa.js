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
    'F': 0.0
  };
  
  // Function to calculate GPA
  function calculateGpa() {
    const tableBody = document.getElementById('course-table-body');
    const gpaSpan = document.querySelector('.gpa-display');
    let totalQualityPoints = 0;
    let totalCredits = 0;
  
    const rows = tableBody.querySelectorAll('tr');
  
    for (const row of rows) {
      const creditInput = row.querySelector('input[placeholder="Credit"]');
      const gradeInput = row.querySelector('input[placeholder="Grade"]');
  
      const credit = parseFloat(creditInput.value) || 0;
      const grade = gradeInput.value.toUpperCase();
  
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
      gpaSpan.textContent = 'N/A';
      return;
    }
  
    const gpa = totalQualityPoints / totalCredits;
    gpaSpan.textContent = gpa.toFixed(2);
  }
  
  // Function to add a new row
  function addRow() {
    const tableBody = document.getElementById('course-table-body');
    const newRow = document.createElement('tr');
  
    newRow.innerHTML = `
      <td><input type="text" placeholder="Course"></td>
      <td><input type="text" placeholder="Credit"></td>
      <td><input type="text" placeholder="Grade"></td>
    `;
  
    tableBody.appendChild(newRow);
  }
  
  // Function to delete the last row
  function deleteLastRow() {
    const tableBody = document.getElementById('course-table-body');
    const rows = tableBody.querySelectorAll('tr');
  
    if (rows.length > 0) {
      tableBody.removeChild(rows[rows.length - 1]);
    } else {
      alert('There are no rows to delete!');
    }
  }
  
  // Add event listeners when the page loads
  window.addEventListener('load', function() {
    const addRowLink = document.getElementById('add-row');
    const deleteRowLink = document.getElementById('delete-row');
    const calculateLink = document.getElementById('calculate-gpa');
  
    addRowLink.addEventListener('click', function(e) {
      e.preventDefault();
      addRow();
    });
  
    deleteRowLink.addEventListener('click', function(e) {
      e.preventDefault();
      deleteLastRow();
    });
  
    calculateLink.addEventListener('click', function(e) {
      e.preventDefault();
      calculateGpa();
    });
  
    // Add an initial row on page load
    addRow();
  });