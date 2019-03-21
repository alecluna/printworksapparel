const axios = require("axios");

exports.handler = function(event, context, callback) {
  const { API_URL, API_KEY } = process.env;
  const AUTH_TOKEN = "Bearer " + API_KEY;

  const send = body => {
    callback(null, {
      statusCode: 200,
      body: JSON.stringify(body),
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers":
          "Origin, X-Requested-With, Content-Type, Accept"
      }
    });
  };

  const getReviews = () => {
    axios
      .get(API_URL, {
        headers: {
          Authorization: AUTH_TOKEN,
          type: "GET"
        }
      })
      .then(response => send(response.data).catch(error => send(error)));
  };

  if (event.httpMethod == "GET") {
    getReviews();
  }
};
