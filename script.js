// const searchInput = document.getElementById('search');
// const searchButton = document.getElementById('search-button');
// const resultsContainer = document.createElement('div'); // Create a container for results

// // Responsive design logic
// const resizeObserver = new ResizeObserver(entries => {
//   const width = entries[0].contentRect.width;

//   if (width <= 749) {
//     // Mobile layout
//     nav.style.flexDirection = 'column';
//     searchInput.style.width = '100%';
//     searchButton.style.marginTop = '10px';
//     resultsContainer.style.width = '100%';
//   } else if (width <= 949) {
//     // Tablet layout
//     nav.style.flexDirection = 'row';
//     searchInput.style.width = '50%';
//     searchButton.style.marginTop = '0';
//     resultsContainer.style.width = '70%';
//   } else {
//     // Desktop layout
//     nav.style.flexDirection = 'row';
//     searchInput.style.width = '30%';
//     searchButton.style.marginTop = '0';
//     resultsContainer.style.width = '50%';
//   }
// });

// resizeObserver.observe(document.body);

// // Search functionality
// searchButton.addEventListener('click', () => {
//   const searchTerm = searchInput.value.trim();

//   // Simulate searching based on the search term
//   // (Replace this with your actual search logic)
//   const results = ['Result 1', 'Result 2', 'Result 3'];

//   // Clear previous results
//   resultsContainer.innerHTML = '';

//   // Display results
//   if (results.length) {
//     resultsContainer.innerHTML = '<h2>Search Results</h2>';
//     results.forEach(result => {
//       const resultItem = document.createElement('p');
//       resultItem.textContent = result;
//       resultsContainer.appendChild(resultItem);
//     });
    
//     // Append results container below search input
//     searchInput.parentNode.insertBefore(resultsContainer, searchInput.nextSibling);
//   } else {
//     resultsContainer.innerHTML = '<p>No results found.</p>';
//     searchInput.parentNode.insertBefore(resultsContainer, searchInput.nextSibling);
//   }
// });
