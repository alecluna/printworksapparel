const fetchInstagram = async () =>
    await (await fetch('http://localhost:9000/getInstagramPics')).json()

fetchInstagram().then(response => {
    console.log(response)

    images = document.querySelector('#igimages');
 
    response.forEach(function(data){
        
        const listElem = document.createElement("li");
        listElem.style.listStyle = "none";
        listElem.style.display = "inline";
        listElem.style.padding = "5px";
        listElem.className = "gallery-header";
        
        const image = document.createElement("img");
        image.className = "gallery-image-tile";
        image.setAttribute("src", data.images.low_resolution.url);
        image.setAttribute("href", data.images.low_resolution.url)
        listElem.appendChild(image);

        images.appendChild(listElem);
    })
});