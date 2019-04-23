//async fetch() to the lambda function
const fetchUsers = async () =>
    await (await fetch('/.netlify/functions/getYelpReviews')).json()

fetchUsers().then(data => {
    reviewList = document.querySelector('#reviews')

    //generate HTML from api
    data.reviews.forEach(review => {
        const listElem = document.createElement('li')
        listElem.className = 'review-list'

        const reviewHeading = document.createElement('h3')
        reviewHeading.className = 'review-heading'
        reviewHeading.appendChild(document.createTextNode(review.user.name))
        listElem.appendChild(reviewHeading)

        const ratingStars = document.createElement('img')
        ratingStars.className = 'yelp-stars'
        ratingStars.src = './images/yelp-stars.png'
        listElem.appendChild(ratingStars)

        const link = document.createElement('a')
        link.appendChild(document.createTextNode(review.text))
        link.className = 'review-text'
        link.href = review.url
        link.target = '_blank'
        listElem.appendChild(link)

        reviewList.appendChild(listElem)
    })
})
