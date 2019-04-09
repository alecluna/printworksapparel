const fetchInstagram = async () =>
    await (await fetch('http://localhost:9000/getInstagramPics')).json()

fetchInstagram().then(response => {
    console.log(response)
})
