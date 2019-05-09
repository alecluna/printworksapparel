const fetchInstagram = async () =>
    await (await fetch('/.netlify/functions/getInstagramPics')).json()

fetchInstagram()
    .then(response => {
        images = document.querySelector('.igimages')

        response.forEach(function(data) {
            const listElem = document.createElement('li')
            listElem.className = 'gallery-header'

            const image = document.createElement('img')
            image.className = 'gallery-image-tile'
            image.setAttribute('src', data.images.low_resolution.url)
            image.setAttribute('href', data.images.low_resolution.url)
            listElem.appendChild(image)

            images.appendChild(listElem)
        })
    })
    .catch(() => {
        reviewList = document.querySelector('.ig-error')
        const errorIcon = document.createElement('i')
        errorIcon.className = 'fas fa-exclamation-circle fa-4x ig-error'
        reviewList.appendChild(errorIcon)
    })
