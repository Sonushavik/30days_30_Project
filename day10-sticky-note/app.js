const addCardForm = document.querySelector(".addCardForm");
const noteText = document.getElementById("noteText");
const mainCard = document.querySelector(".mainCard");
const addCard = document.querySelectorAll(".noteCard");

let notes = JSON.parse(localStorage.getItem("notes")) || [];

function addNote(e) {
       addCardForm.classList.remove("hideElement")
}

function removeNote(index) {
        notes.splice(index, 1);
        localStorage.setItem("notes", JSON.stringify(notes));
        displayNotes();
}

function displayNotes() {
        mainCard.innerHTML = "";
        console.log(notes)
        notes?.map((noteObj, index) => {

                let { note, color } = noteObj;

                let html = `<div class="noteCard card" id='${index}' style="background-color: ${color || 'inherit'};">
                        <select class = "colorPicker"
                        onChange = "updateColor(${index}, this.value)">
                                <option value="">Select Color</option>
                                <option value="red">Red (Important)</option>
                                <option value="yellow">Yellow (Medium)</option>
                                <option value="green">Green (Low)</option>
                        </select>
                        </p>
                        <p class="note">
                                ${note}
                        </p>
                        <button id="closeButton" onclick="removeNote(${index})">
                        X
                        </button>
                </div>
                 `;

                 mainCard.insertAdjacentHTML('afterbegin', html)
        });
}



function submitNote(e) {
        if(noteText.value.trim() === "") {
                alert("It's Empty Note")
                return;
        }

        e.preventDefault();

        let newNote = {note : noteText.value.trim(), color: ""};

        notes.push(newNote);
        localStorage.setItem("notes", JSON.stringify(notes));

        noteText.value = "";

        displayNotes();
        addCardForm.classList.add("hideElement");
}

function updateColor(index, color){
        notes[index].color = color;
        localStorage.setItem("notes", JSON.stringify(notes));
        displayNotes();
}

displayNotes();
