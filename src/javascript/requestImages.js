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





/*
      var token = '12144870609.53baa6c.8b9bd2a417414fffb820c1e551e137ad',
        num_photos = 10,
        container = document.getElementById('printworks_instafeed'),
        modaldiv = document.getElementById('modalcontainer'),
        scrElement = document.createElement('script');
      var slidesString = "";
      var columnString = "";

      window.igresults = function(data) {
        for (x in data.data) {
          var imageurl = data.data[x].images.low_resolution.url;
          //console.log(imageurl);
          var i = x;
          i++;
          container.innerHTML += '<div class="column"><a><img src="' + imageurl + '"onclick="openModal();currentSlide(' + i + ')"></a></div>';
          slidesString += '<div class="mySlides"><img src="' + imageurl + '" width=100%"></div>';
          columnString += '<div class="column"><img class="demo cursor" src="' + imageurl + '" onclick="currentSlide(' + i + ') style"max-width:40%" "></div>"';

        }
        //console.log(slidesString);
        modaldiv.innerHTML += slidesString + '<a class="prev" onclick="plusSlides(-1)">&#10094;</a>' +
          '<a class="next" onclick="plusSlides(1)">&#10095;</a></div>' + columnString;
        //console.log(modaldiv.innerHTML);
      }

      */