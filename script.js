// APP Constants
const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');

let photosArray = [];
// Unsplash API
// Make a constant for count parameter to change it easier if necessary
const count = 10;
const apiKey = '4yyNJzZfC-tKGSsQhkM9z0-MegMCx1d59wf6NB2jbGI';
const apiURL = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`

// Helper Function to Set Attributes on DOM Elements
function setAttributes(element, attributes) {
    for (const key in attributes) {
      element.setAttribute(key, attributes[key]);
    }
  }

// Create Elements For Links & Photos, Add to DOM
function displayPhotos() {
    // imagesLoaded = 0;
    // totalImages = photosArray.length;
    // Run function for each object in photosArray
    photosArray.forEach((photo) => {
      // Create <a> to link to full photo
      const item = document.createElement('a');
      setAttributes(item, {
        href: photo.links.html,
        target: '_blank',
      });
      // Create <img> for photo
      const img = document.createElement('img');
      setAttributes(img, {
        src: photo.urls.regular,
        alt: photo.alt_description,
        title: photo.alt_description,
      });
      // Event Listener, check when each is finished loading
    //   img.addEventListener('load', imageLoaded);
      // Put <img> inside <a>, then put both inside imageContainer Element
      item.appendChild(img);
      imageContainer.appendChild(item);
    });
  }



// Set up a fetch request to see what the API Returns
// Get photos from Unsplash API
async function getPhotos(){
    try {
        const response = await fetch(apiURL);
        photosArray = await response.json();
        displayPhotos();
    }catch(error){
        // catch error here
    }
}

// On Load

getPhotos();