const btnParent = document.getElementById('btnParent');

function noHandler(){
        console.log(btnParent.style.cssText);

        if(btnParent.style.cssText.includes("column-reverse")){
                btnParent.style.cssText = "flex-direction : column";
        }else{
                btnParent.style.cssText = 'flex-direction: column-reverse';
        }
}

function messageHandler(){
        const phoneNumber = "9113349427"; 
        const message = "Hello! I agree with your idea."; // Custom pre-filled message
  
        // Open WhatsApp
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(url, "_blank"); // Opens the link in a new tab
}