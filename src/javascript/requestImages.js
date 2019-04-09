const fetchInstagram = async () =>
    await (await fetch('https://localhost:9000/getInstagramPics')).json()

fetchInstagram().then(data => {
    console.log(data)
})
