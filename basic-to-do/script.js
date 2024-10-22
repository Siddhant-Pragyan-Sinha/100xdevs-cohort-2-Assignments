let global_id = 1;
function remove(id) {
    const parent = document.getElementById(id);
    console.log(parent);
    parent.children[2].innerHTML = "Done!";
}

function addToDo(titleP, descriptionP) {
    const child = document.createElement("div");
    const title = document.createElement("div");
    title.innerHTML = titleP;
    const description = document.createElement("div");
    description.innerHTML = descriptionP;
    const button = document.createElement("button");
    button.innerHTML = "Mark as done!";
    button.setAttribute("onClick", `remove(${global_id})`);
    child.appendChild(title);
    child.appendChild(description);
    child.appendChild(button);
    child.setAttribute("id", global_id++);
    return child;
}

function todo() {
    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;
    const child = addToDo(title, description);
    document.getElementById("content").appendChild(child);
}
