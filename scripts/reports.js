document.addEventListener('DOMContentLoaded', () => {
  const checkbox = document.getElementById('toggleCheckbox');
  const divA = document.getElementById('divA');
  const divB = document.getElementById('divB');

  const toggleDivs = () => {
    if (checkbox.checked) {
      divA.style.display = 'block';
      divB.style.display = 'none';
    } else {
      divA.style.display = 'none';
      divB.style.display = 'block';
    }
  };

  checkbox.addEventListener('change', toggleDivs);
  toggleDivs();
});
