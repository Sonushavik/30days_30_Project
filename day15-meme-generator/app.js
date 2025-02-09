const btn = document.querySelector(".btn");
const api = "https://api.memegen.link/templates/";
const memeImage =  document.getElementById("memeImage")
const loader = document.getElementById("loader")

btn.addEventListener("click", generateMeme);

function generateMeme(){
        memeImage.style.display = 'none';
        loader.style.display = 'block';
        fetch(api)
        .then((response) => response.json())
        .then( data => {
                // console.log(data)
               
                const templates = Object.values(data);

                const randomMeme = templates[Math.floor(Math.random() * templates.length)];
                setTimeout (() => {
                        loader.style.display= 'none';
                        memeImage.style.display = "block";
                        memeImage.src = randomMeme.example.url;
                        btn.innerText = "Generate another";
                },1000)
               
                
        })
        .catch((error) => {
                console.log("Error fetching meme templates: ", error);
                loader.style.display = 'none';
        })
}