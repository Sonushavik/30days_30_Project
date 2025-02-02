const options = ['rock', 'paper', 'scissor']
const computer = document.querySelector(".left-image")
const user = document.querySelector(".right-image")
const result = document.querySelector("#result")

function computerChoice(){
        const randomIndex =  Math.floor(Math.random()*3)
        return options[randomIndex];
        // return 'images/' + options[randomIndex] +'.png';
}

function checkResult(e){
 
        computer.classList.add("animate-left");
        user.classList.add("animate-right");

        const userChoosed = e.target.name
        const computerChoosed =  computerChoice();

        setTimeout(() =>{
                computer.classList.remove("animate-left")
                user.classList.remove("animate-right");

                user.src = 'images/'+userChoosed+'.png';
                computer.src = 'images/'+computerChoice()+'.png';
        
                console.log('computer:', computerChoosed, 'user',userChoosed);
        
                if(userChoosed == computerChoosed){
                        result.innerText = "Draw";
                        // console.log('draw')
                }else if(userChoosed == "rock"){
                        if(computerChoosed == 'scissor'){
                                result.innerText = "You wins";
                        }else{
                                result.innerText = "computer wins";
                        }
                }else if(userChoosed == "scissor"){
                        if(computerChoosed == 'paper'){
                                result.innerText = "You wins";
                        }else{
                                result.innerText = "computer wins";
                        }
                }else if(userChoosed == "paper"){
                        if(computerChoosed == 'rock'){
                                result.innerText = "You wins";
                        }else{
                                result.innerText = "computer wins";
                        }
                }

        },1000)


}