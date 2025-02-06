const qrText = document.getElementById('inputText');
const qrimage = document.getElementById("qrImage");
const api = 'https://api.qrserver.com/v1/create-qr-code/?size=300x300&data='
function generateQR(event){
        event.preventDefault(); 
        if(!qrText){
                alert("Please Enter text or a URL");
                return;
        }
        qrimage.src = api + qrText.value
        qrimage.style.display ="block";
        qrText.value = ''
}