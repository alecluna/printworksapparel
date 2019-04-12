const axios = require('axios')

exports.handler = function instagram(event, context, callback) {
    const {IG_TOKEN, IG_URL} = process.env
    const limit = 20

    axios
        .get(`${IG_URL}?access_token=${IG_TOKEN}&count=${limit}`)
        .then(({ data: { data: posts } }) => {
            callback(null, {
                statusCode: 200,
                headers: {
                    'content-type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Headers':
                        'Origin, X-Requested-With, Content-Type, Accept',
                },
                body: JSON.stringify(posts),
            })
        })
        .catch(e => {
            callback(e)
        })
}
