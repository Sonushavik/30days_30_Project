// type-1

// const buttons = document.querySelectorAll('.btn');

// buttons.forEach(button => {
//         button.addEventListener('click', () => {
//                 const ans = button.parentElement.nextElementSibling;

//                 ans.classList.toggle('show');

//                 button.textContent = ans.classList.contains('show') ? '-' :' +';
//                 console.log(ans);
//         })
// })



// type-2


let scrollHeight = 150;

document.addEventListener("click", (e) => {
	if (e.target.classList.contains("btn")) {
		const ans = e.target.parentElement.nextElementSibling;
		const isAlreadyOpen = ans.classList.contains("show");

		document.querySelectorAll(".ans").forEach((ans) => {
			ans.style.maxHeight = null;
			ans.classList.remove("show");
		});
		document.querySelectorAll(".btn").forEach((btn) => (btn.textContent = "+"));

		if (!isAlreadyOpen) {
			ans.classList.add("show");
			ans.style.maxHeight = ans.scrollHeight + "px";
			e.target.textContent = "-";
		}
	}
});
