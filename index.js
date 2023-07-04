var selectedRow = null;

//show alert

function showAlert(message,className){
    const div = document.createElement("div");
    div.className = `alert alert-${className}`;

    div.appendChild(document.createTextNode(message));
    const container = document.querySelector(".container");
    const main = document.querySelector(".main");
    container.insertBefore(div, main);

    setTimeout(() =>document.querySelector(".alert").remove(),3000);
}

//clear all fields

function clearFields(){
    document.querySelector("#Name").value = "";
    document.querySelector("#Email").value = "";
    document.querySelector("#GPA").value = "";
    document.querySelector("#Age").value = "";
    document.querySelector("#Degree").value = "";
    

}

//add data

document.querySelector("#student-form").addEventListener("submit",(e) =>{
    e.preventDefault();

    //get form values


    const name = document.querySelector("#name").value;
    const email = document.querySelector("#email").value;
    const gpa = document.querySelector("#gpa").value;
    const age = document.querySelector("#age").value;
    const degree = document.querySelector("#degree").value;

    //validate

    if(name == "" || email == "" || gpa == "" || age == "" || degree == ""){
        showAlert("Please fill in all fields", "danger");
    }
    else{
        if(selectedRow == null){
            const list = document.querySelector("#student-list");
            const row = document.createElement("tr");

            row.innerHTML = `
            <td></td>
            <td>${name}</td>
            <td>${email}</td>
            <td>${gpa}</td>
            <td>${age}</td>
            <td>${degree}</td>
            <td>

            <a href="#" class="btn btn-warning btn-sm edit"><img src="icons8-edit-30.png"></a>
           <a href="#" class="btn btn-warning btn-sm delete"><img src="icons8-delete-30.png"></a>

            `;
            list.appendChild(row);
            selectedRow = null;
            showAlert("Student Added" , "success");
        }
        else{
            selectedRow.children[0].textContent = name;
            selectedRow.children[1].textContent = email;
            selectedRow.children[2].textContent = gpa;
            selectedRow.children[3].textContent = age;
            selectedRow.children[4].textContent = degree;
            selectedRow = null;
            showAlert("Student Info Edited", "info");
        }
        clearFields();
    }
});

//edit data

document.querySelector("#student-list").addEventListener("click",(e) =>{
    target = e.target;
    if(target.classList.contains("edit")){
        selectedRow = target.parentElement.parentElement;
        document.querySelector("#name").value = selectedRow.children[0].textContent;
        document.querySelector("#email").value = selectedRow.children[1].textContent;
        document.querySelector("#gpa").value = selectedRow.children[2].textContent;
        document.querySelector("#age").value = selectedRow.children[3].textContent;
        document.querySelector("#degree").value = selectedRow.children[4].textContent;
    }
});

//delete data


document.querySelector("#student-list").addEventListener("click" ,(e)=>{
    target = e.target;
    if(target.classList.contains("delete")){
        target.parentElement.parentElement.remove();
        showAlert("Student Data Deleted","danger");
    }
});
