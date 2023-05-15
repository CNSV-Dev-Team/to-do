// Referinte la elemente din pagina
const addButton = document.querySelector("#add-btn");
const inputField = document.querySelector("input");
const todoList = document.querySelector("#todo-list");

function addNewItem() {
    const text = inputField.value; // Luam textul introdus
    // Daca textul e gol, anuleaza functia
    if (!text) return;

    // Se creaza un element div (container) care va fi nout item in lista
    const newTodo = document.createElement("div");
    newTodo.className = "list-item"; // Setam clasa .list-item
    todoList.appendChild(newTodo); // Adaugam itemul in lista

    // Se creaza un element paragraf (textul din item-ul adaugat)
    const contentElement = document.createElement("p");
    contentElement.className = "todo-content"; // setam clasa .todo-content
    contentElement.textContent = text; // setam continutul = cu textul introdus
    newTodo.appendChild(contentElement); // Adaugam continutul la noul item din lista

    // Se creaza un buton cu clasa .remove-button
    const removeButton = document.createElement("button");
    removeButton.className = "remove-button";
    removeButton.textContent = "Remove"; // Setam textul afisat

    // Un "event-listener" pentru cand se apasa pe butonul remove
    removeButton.addEventListener("click", () => {
        newTodo.remove(); // Cand se apasa pe buton, sterge elementul din lista
    });

    newTodo.appendChild(removeButton); // Adaugam butonul la itemul din lista

    inputField.value = ""; // Stergem textul introdus
}

addButton.addEventListener("click", addNewItem);