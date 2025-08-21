let form = document.getElementById("todoform");
let input = document.getElementById("todoinput");
let items = document.getElementById("items");

form.addEventListener("submit", function (event) {
    event.preventDefault();
    createItem(input.value);
});

function createItem(inputitem) {
    let item = `<li>🛒 ${inputitem} <button onclick= "deleteItem(this)">Delete</button></li>`;
    items.insertAdjacentHTML("beforeend", item);
    input.value = "";
    alert("🛒 " + inputitem + " has been added to cart")
    input.focus();
}

function deleteItem(element) {
    element.parentElement.remove();
}