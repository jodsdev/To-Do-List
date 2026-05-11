// To Do List
// Adding Item

let container = document.querySelector("div");
let input = document.querySelector("input");
let button = document.querySelector("#btn");

// // Show the count list
function updateCount() {
    const totalItems = document.querySelectorAll(".list-item").length;
    count.textContent = totalItems;
    const totalComplete = document.querySelectorAll(".completed").length;
    count2.textContent = totalComplete;
}


// Add Item triggered Button
button.addEventListener('click', () => {
    const data = input.value;

    // Condition when List did not meet
    if(data === "" || data === null){
        alert("Please input list item!");
        return;
    }else{
        document.getElementById("input").value = "";
    }
    
    // Create List item
    const list = document.createElement("li");
    list.textContent = data
    list.classList.add("list-item");

    // Checkbox triggered when Complete
    const checkBox = document.createElement("input");
    checkBox.type = "checkbox"

    // Toggle Complete state
    checkBox.addEventListener('change', () => {
        list.classList.toggle("completed", checkBox.checked);
        updateCount();
    })

    // Create Delete Button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("delete-btn");

    // Triggered Delete Button
    deleteBtn.addEventListener('click', (e) => {
        e.stopPropagation()
        container.removeChild(list);
        updateCount();
    })

    // Build structure
    list.appendChild(checkBox);
    list.appendChild(deleteBtn);
    container.appendChild(list);

    updateCount();
})