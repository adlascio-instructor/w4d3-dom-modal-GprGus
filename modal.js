console.log("here");



// select button element

const openModal = document.getElementById("openModal");
const modal = document.getElementById("modal");

// add event listener on click to button
// remove class invisible from div modal

openModal.addEventListener("click", () => {
    modal.classList.remove("invisible");
});

// add event listener on key press Escape
// add class invisible to div modal

document.addEventListener("keydown", (event) => {
    if (event.key == "Escape") {
        modal.classList.add("invisible");
    }
});