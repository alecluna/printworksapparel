const axios = require('axios')

exports.handler = function(event, context, callback) {
    const { API_URL, API_KEY } = process.env

    let apiURL =
        API_URL ||
        'https://api.yelp.com/v3/businesses/0ZWQpLWixYOquAAiRBmzSw/reviews'

    let apiKey =
        API_KEY ||
        'QBeTWr5Doi4st1AYTKXNzleVU-4lK5b3AenvaP7AIMJmUt9ezpZ_iZ6bgkD5iNhypGw7l9dZ0nwp5sa5l-DeFwCj3wfh2TJmtZ75WiXucMcJURR9urfvHbqlF_iHXHYx'

    const AUTH_TOKEN = 'Bearer ' + apiKey

    const send = body => {
        callback(null, {
            statusCode: 200,
            body: JSON.stringify(body),
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers':
                    'Origin, X-Requested-With, Content-Type, Accept',
            },
        })
    }

    const getReviews = () => {
        axios
            .get(apiURL, {
                headers: {
                    Authorization: AUTH_TOKEN,
                    type: 'GET',
                },
            })
            .then(response => send(response.data).catch(error => send(error)))
    }

    if (event.httpMethod == 'GET') {
        getReviews()
    }
}
