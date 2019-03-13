//async fetch() to the lambda function
const fetchUsers = async () =>
  await fetch("http://localhost:9000/getYelpReviews");

fetchUsers()
  .then(response => response.json())
  .then(err => {
    console.log(err);
  });
