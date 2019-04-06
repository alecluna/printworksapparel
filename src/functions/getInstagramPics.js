//axios is a wrapper for us to make fetches to the requests
const axios = require('axios')

exports.handler = function (event, context, callback) {
    // process.env is a way for us to export our sensitive data that 
    // we dont want people to see to the netlify server
    //const { API_URL, API_KEY } = process.env
    const API_URL;
    const API_KEY;
    
    const AUTH_TOKEN = 'Bearer ' /* + put your API_URL here, this would be the endpoint */
    
    // if the next event is a 'GET', run this function() 
    if (event.httpMethod == 'GET') {
        getInstagramImages()
    }

    // this is an arrow function in javascript, this is a fancy way of defining 
    // a function, basically syntactic sugar. But here we make the actual request to the 
    // instagram api 
    const getInstagramImages = () => {
        axios
            .get(API_URL, {
                //header generated for the request to instagram
                headers: {
                    Authorization: AUTH_TOKEN,
                    type: 'GET',
                },
            })
            .then(response => send(response.data).catch(error => send(error)))
    }

    // this fires a function that will send the object of our response to the clientjs
    const send = body => {
        callback(null, {
            statusCode: 200,
            //generate the body
            body: JSON.stringify(body),
            headers: {
                //This is to prevent CORS which is a stupid error in web dev
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers':
                    'Origin, X-Requested-With, Content-Type, Accept',
            },
        })
    }
}
