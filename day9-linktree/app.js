// {
//         "username": "Sonu kumar",
//         "bio": "im web dev",
//         "profileImage": "https://instagram.frdp4-1.fna.fbcdn.net/v/t51.2885-19/475279675_1176261637448756_3977288492898077980_n.jpg?stp=dst-jpg_s320x320_tt6&_nc_ht=instagram.frdp4-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=7sOjmA3O9gUQ7kNvgExVQuv&_nc_gid=801adb32aa2041d7bac9c38caf9d5691&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AYCJkM8iGBxFhJ0WaMEd4UwvihjzX3WNEa_kTOJF_BtP1Q&oe=67A6136F&_nc_sid=8b3546",
//         "socialLinks": [
//           {
//             "linkName": "Linkedin",
//             "linkUrl": "www.linkedin.com/in/sonushavik"
//           },
//           {
//             "linkName": "Github",
//             "linkUrl": "https://github.com/Sonushavik/My-GH-Profile"
//           }
//         ]
//       }

const loader = document.querySelector('.loader')
const card = document.querySelector('.card')
const username = document.querySelector('.username')
const bio = document.querySelector('.bio')
const profileImage = document.querySelector('.profile-image')
const linkName = document.querySelector('.link-name')
const linkUrl = document.getElementById('linkUrl')
const linkCard = document.querySelector('.inner-card')

function applyData(data){
        username.innerText = data.username;
        bio.innerText = data.bio;
        profileImage.src = data.profileImage;

        linkCard.innerHTML = "";

        data.socialLinks.map(link => {
                linkCard.innerHTML = linkCard.innerHTML + `<a id="linkUrl" class= "link-div" href="${link.linkUrl}">
                <img src="icons/${link.linkName.toLowerCase()}.png" alt ="" class="icon">
                <h2 class = "link-name">${link?.linkName}</h2>
                </a>`
        })
}

function fetchData () {
        loader.style.display = 'block'
        fetch('https://api.npoint.io/32afc64d31aa232a2206')
        .then(data =>data.json() )
        .then(data => {
                loader.style.display = 'none'
                card.style.display = 'block'
                applyData(data)
        })
}

fetchData()