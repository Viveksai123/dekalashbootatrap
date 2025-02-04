  // Country Selector Logic
  const countryToggle = document.getElementById('countryToggle');
  const countryDropdown = document.getElementById('countryDropdown');
  const countryOptions = document.querySelectorAll('#countryDropdown div[data-country]');
  const flagImg = countryToggle.querySelector('img');
  const countryName = countryToggle.querySelector('span:first-of-type');

  // Toggle dropdown
  countryToggle.addEventListener('click', () => {
      countryDropdown.classList.toggle('hidden');
  });

  // Handle country selection
  countryOptions.forEach(option => {
      option.addEventListener('click', () => {
          const flag = option.querySelector('img').src;
          const name = option.querySelector('span').textContent;
          
          flagImg.src = flag;
          countryName.textContent = name;
          countryDropdown.classList.add('hidden');
      });
  });

  // Close dropdown when clicking outside
  document.addEventListener('click', (e) => {
      if (!countryToggle.contains(e.target) && !countryDropdown.contains(e.target)) {
          countryDropdown.classList.add('hidden');
      }
  });