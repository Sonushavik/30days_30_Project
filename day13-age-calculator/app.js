const userdob = document.getElementById("userAge");
const result = document.getElementById("result");

function calculateAge(event){
        event.preventDefault();
       const dobDateObject = new Date(userdob.value);

       const currentDateObject = new Date();

       let year = currentDateObject.getFullYear() - dobDateObject.getFullYear();
       let month = currentDateObject.getMonth() - dobDateObject.getMonth();
       let day = currentDateObject.getDate() - dobDateObject.getDate();

       if (month < 0 || (month === 0  && day < 0)){
        year--;
        month +=12;
       }

       if(day < 0){
        const lastMonthDate = new Date(currentDateObject.getFullYear(), currentDateObject.getMonth(), 0);
        day += lastMonthDate.getDate();
        month--;
       }

       console.log(`You are ${year} years ${month} month and ${day} days old`);

       result.textContent = `You are ${year} years ${month} month and ${day} days old`;

       setTimeout(() => {
        result.classList.add('show');
    }, 10);
}