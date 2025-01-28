let whichbtn = '';
const transcationParent = document.getElementById("transcation");
const amout = document.getElementById("amount")
const details = document.getElementById("details")
const balance = document.getElementById("currBalance");
const expense = document.getElementById("expense")
const income = document.getElementById("income")

function clickHandler1(){
        whichbtn = "expense";
        console.log(whichbtn);
}

function clickHandler2(){
        whichbtn = "income";
        console.log(whichbtn);
}


function submitHandler (e){
        e.preventDefault();

        if(whichbtn == 'expense'){
                balance.innerText = Number(balance.innerText) - Number(amout.value)
                expense.innerText = Number(expense.innerText) + Number(amout.value);
        }
        else{
                balance.innerText = Number(balance.innerText) +Number(amout.value)
                income.innerText = Number(income.innerText) + Number(amout.value)
        }

        const transcation =document.createElement('h2')
        transcation.className = `border-t-1 py-4 border-violet-500 mt-4 mb-1 ${whichbtn == 'expense' ? 'bg-red-200': 'bg-green-200'}`
        transcation.innerText = `${whichbtn} ₹${amount.value} by ${details.value}`
        transcationParent.appendChild(transcation);
        amout.value = '';
        details.value = '';

}


// const form = document.getElementById("form")
// form.addEventListener('submit', (e) => submitHandler(e))