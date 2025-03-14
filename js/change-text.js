const state = document.getElementById("state");
const setState = document.getElementById("setState");

// Добавляем обработчики событий
state.addEventListener('mouseover', changeTextMouseOver);
state.addEventListener('mouseout', changeTextMouseOut);

setState.addEventListener('mouseover', changeTextMouseOver);
setState.addEventListener('mouseout', changeTextMouseOut);

function changeTextMouseOver() {
    state.style.display = "none";
    setState.style.display = "block";
}

function changeTextMouseOut() {
    state.style.display = "block";
    setState.style.display = "none";
}

