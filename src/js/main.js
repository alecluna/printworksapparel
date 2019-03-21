//async fetch() to the lambda function
const fetchUsers = async () => await fetch("/.netlify/lambda/getYelpReviews");
//await fetch("http://localhost:9000/getYelpReviews");

fetchUsers()
  .then(response => response.json())
  .then(data => {
    console.log(data);

    reviewList = document.querySelector("#reviews");

    //generate HTML from api
    data.reviews.forEach(review => {
      const listElem = document.createElement("li");
      listElem.className = "list-group-item";

      const reviewHeading = document.createElement("h4");
      reviewHeading.className = "mb-1";
      reviewHeading.appendChild(document.createTextNode(review.user.name));
      listElem.appendChild(reviewHeading);

      const ratingStars = document.createElement("h4");
      ratingStars.className = "mb-1";
      ratingStars.appendChild(document.createTextNode(review.rating));
      listElem.appendChild(ratingStars);

      /////// This is causing me some issues right now
      /////// My guess is CORS is preventing retreival of images from their API.
      const userImg = document.createElement("img");
      userImg.className = "rounded";
      userImg.setAttribute("src", review.user.profile_url);
      listElem.appendChild(userImg);

      //also, we can fix this link later on
      const link = document.createElement("a");
      link.appendChild(document.createTextNode(review.text));
      link.href = review.url;
      link.target = "_blank";
      listElem.appendChild(link);

      reviewList.appendChild(listElem);
    });
  });
