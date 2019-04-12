const fetchInstagram = async () =>
    await (await fetch('/.netlify/functions/getInstagramPics')).json()

fetchInstagram().then(response => {
    console.log(response)

    images = document.querySelector('#igimages')

    response.forEach(function(data) {
        const listElem = document.createElement('li')
        listElem.style.listStyle = 'none'
        listElem.style.padding = '5px'
        listElem.className = 'gallery-header'

        const image = document.createElement('img')
        image.className = 'gallery-image-tile'
        listElem.className = 'gallery-img'
        image.setAttribute('src', data.images.low_resolution.url)
        image.setAttribute('href', data.images.low_resolution.url)
        listElem.appendChild(image)

        images.appendChild(listElem)
    })
})
