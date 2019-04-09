const axios = require('axios')

exports.handler = function instagram(event, context, callback) {
    const endpoint = 'https://api.instagram.com/v1/users/self/media/recent'
    // const token = process.env.INSTAGRAM_ACCESS_TOKEN
    const token = '12144870609.53baa6c.8b9bd2a417414fffb820c1e551e137ad'

    const limit = 5

    axios
        .get(`${endpoint}?access_token=${token}&count=${limit}`)
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
