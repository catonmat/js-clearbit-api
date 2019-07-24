// Part 1: Add an event listener to the form.
const form = document.getElementById('clearbitForm');
form.addEventListener('submit', (event) => {
  // Part 2: Prevent form from submitting an HTTP request.
  event.preventDefault();
  let value = document.getElementById('formInput').value;
  let submit = document.getElementById('formSubmit')
  console.log('submit value', value)
  // Place function here...
});
// Part 3: Send an AJAX request to Clearbit to fetch API data.
// Part 4: Read the JSON returned and display the results in the lanfing page.
