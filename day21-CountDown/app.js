const days = document.getElementById("days");
const quote = document.getElementById("quote")
const writer = document.getElementById("writer")
const loader = document.querySelector(".loader")
const countDownElement = document.querySelector('.countdown')
// const api = 'https://zenquotes.io/api/today';

const api  = 'https://dummyjson.com/quotes/random'

// const api = 'https://zenquotes.io/api/today';

// const api = 'https://api.quotable.io/random'

let today = new Date()
let currentYear = today.getFullYear();
let nextYear = new Date(currentYear+1, 0, 1)

let milliSecondInADay = 24*60*60*1000;
const dayLeft  = Math.floor((nextYear-today)/milliSecondInADay);

fetch(api)
        .then(res => res.json())
        .then(data => {
                console.log(data);
                if(data.quote.includes('Too many request')){
                        quote.innerHTML = "Nothing is impossible";
                }else{
                        quote.innerHTML = data.quote;
                        writer.innerHTML = data.author;
                }
        }).catch(() =>quote.innerHTML = "Nothing is impossible" )
        .finally(() => {
                loader.classList.add('hidden')
                countDownElement.classList.remove('hidden');
                days.innerHTML = dayLeft+ ' days left';
        })

console.log(currentYear)
console.log(nextYear)
console.log(dayLeft);