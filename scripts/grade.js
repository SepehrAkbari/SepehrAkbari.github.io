// Function to calculate total grade
function calculateGrade() {
    const tableBody = document.getElementById('grade-table-body');
    const gradeSpan = document.querySelector('.grade-display');
    const letterSpan = document.querySelector('.letter-display');
    let totalGrade = 0;
    let totalWeightage = 0;
  
    const rows = tableBody.querySelectorAll('tr');
  
    for (const row of rows) {
      const weightageInput = row.querySelector('input[placeholder="Weightage (%)"]');
      const gradeInput = row.querySelector('input[placeholder="Grade (%)"]');
  
      const weightage = parseFloat(weightageInput.value) || 0;
      const grade = parseFloat(gradeInput.value) || 0;
  
      totalGrade += weightage * grade;
      totalWeightage += weightage;
    }
  
    if (totalWeightage !== 100) {
      alert('Error: Total weightage must be 100%');
      return;
    }
  
    const finalGrade = totalGrade / totalWeightage;
    gradeSpan.textContent = finalGrade.toFixed(2) + '%';
  
    if (finalGrade >= 93) {
      letterSpan.textContent = 'A';
    } else if (finalGrade >= 90) {
      letterSpan.textContent = 'A-';
    } else if (finalGrade >= 87) {
      letterSpan.textContent = 'B+';
    } else if (finalGrade >= 83) {
      letterSpan.textContent = 'B';
    } else if (finalGrade >= 80) {
      letterSpan.textContent = 'B-';
    } else if (finalGrade >= 77) {
      letterSpan.textContent = 'C+';
    } else if (finalGrade >= 73) {
      letterSpan.textContent = 'C';
    } else if (finalGrade >= 70) {
      letterSpan.textContent = 'C-';
    } else if (finalGrade >= 67) {
      letterSpan.textContent = 'D+';
    } else if (finalGrade >= 63) {
      letterSpan.textContent = 'D';
    } else {
      letterSpan.textContent = 'F';
    }
  }
  
  // Function to add a new row
  function addRow() {
    const tableBody = document.getElementById('grade-table-body');
    const newRow = document.createElement('tr');
  
    newRow.innerHTML = `
      <td><input type="text" placeholder="Assignment"></td>
      <td><input type="text" placeholder="Weightage (%)"></td>
      <td><input type="text" placeholder="Grade (%)"></td>
    `;
  
    tableBody.appendChild(newRow);
  }
  
  // Function to delete the last row
  function deleteLastRow() {
    const tableBody = document.getElementById('grade-table-body');
    const rows = tableBody.querySelectorAll('tr');
  
    if (rows.length > 0) {
      tableBody.removeChild(rows[rows.length - 1]);
    } else {
      alert('There are no rows to delete!');
    }
  }
  
  // Add event listeners when the page loads
  window.addEventListener('load', function() {
    const addRowLink = document.getElementById('add-assignment');
    const deleteRowLink = document.getElementById('delete-assignment');
    const calculateLink = document.getElementById('calculate-grade');
  
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
      calculateGrade();
    });
  
    // Add an initial row on page load
    addRow();
  });