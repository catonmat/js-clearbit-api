// Clearbit docs: https://clearbit.com/docs?javascript#authentication
// Example clearbit search terms: alex@clearbit.com, david@loudthinking.com

// Part 1: Add an event listener to the form.
const form = document.getElementById('clearbitForm');
form.addEventListener('submit', (event) => {
  // Part 2: Prevent form from submitting an HTTP request.
  event.preventDefault();
  let searchTerm = document.getElementById('formInput').value;
  let submit = document.getElementById('formSubmit');
  console.log('submit value', searchTerm);
  console.log(process.env);
  // callClearbitApi(searchTerm);
});

// Part 3: Send an AJAX request to Clearbit to fetch API data.
const callClearbitApi = (email) => {
  const secret = '';
  const key = 'Bearer ' + secret;
  const url = `https://person.clearbit.com/v1/people/email/${email}`;
  fetch(url, {
    headers: {
      authorization: key
    }
  })
  .then(response => response.json())
  .then(data => {
    console.log(data);
    setUserInfo(data);
  });
}

// Part 4: Read the JSON returned and display the results in the lanfing page.
const setUserInfo = (json) => {
  const userName = document.getElementById('userName');
  const userEmail = document.getElementById('userEmail');
  const userBio = document.getElementById('userBio');
  const userLocation = document.getElementById('userLocation');
  const userPic = document.getElementById('userPic');

  userName.innerText = json.name.fullName;
  userEmail.innerText = json.email;
  userBio.innerText = json.bio;
  userLocation.innerText = json.location;
  userPic.setAttribute('src', json.avatar);
}
