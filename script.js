// Unsplash API
// Make a constant for count parameter to change it easier if necessary
const count = 10;
const apiKey = '4yyNJzZfC-tKGSsQhkM9z0-MegMCx1d59wf6NB2jbGI';
const apiURL = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`

// Set up a fetch request to see what the API Returns
// Get photos from Unsplash API
async function getPhotos(){
    try {
        const response = await fetch(apiURL);
        const data = await response.json();
        console.log(data);
    }catch(error){
        // catch error here
    }
}

// On Load

getPhotos();