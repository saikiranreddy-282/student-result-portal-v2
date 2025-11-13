const form = document.getElementById('searchForm');
const rollInput = document.getElementById('rollInput');
const resultArea = document.getElementById('resultArea');
const viewSqlBtn = document.getElementById('viewSqlBtn');
const sqlArea = document.getElementById('sqlArea');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  sqlArea.style.display = 'none';
  const roll = rollInput.value.trim();
  if (!roll) {
    alert('Please enter a roll number');
    return;
  }

  try {
    const resp = await fetch('results.json', {cache: 'no-store'});
    if (!resp.ok) throw new Error('Failed to load data');
    const data = await resp.json();

    if (data[roll]) {
      const r = data[roll];
      resultArea.innerHTML = `
        <h2>Result for Roll No: ${roll}</h2>
        <p><strong>Name:</strong> ${r.name}</p>
        <p><strong>Math:</strong> ${r.math}</p>
        <p><strong>Science:</strong> ${r.science}</p>
        <p><strong>English:</strong> ${r.english}</p>
        <p><strong>Total:</strong> ${r.total}</p>
        <p><strong>Percentage:</strong> ${r.percentage}%</p>
      `;
      resultArea.style.display = 'block';
    } else {
      resultArea.innerHTML = `<p>No records found for roll number ${roll}</p>`;
      resultArea.style.display = 'block';
    }
  } catch (err) {
    alert('Error: ' + err.message);
  }
});

viewSqlBtn.addEventListener('click', async () => {
  resultArea.style.display = 'none';
  try {
    const resp = await fetch('students.sql', {cache: 'no-store'});
    if (!resp.ok) throw new Error('SQL file not found');
    const text = await resp.text();
    sqlArea.textContent = text;
    sqlArea.style.display = 'block';
    sqlArea.scrollIntoView({ behavior: 'smooth', block: 'center' });
  } catch (err) {
    alert('Error loading SQL file: ' + err.message);
  }
});
