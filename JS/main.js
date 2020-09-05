let userName = document.getElementById('user-name'),
    age = document.getElementById('user-age'),
    gendar = document.getElementById('gendar'),
    userTheme = document.getElementById('fav-theme'),
    userCardName = document.getElementById('user-card-name'),
    backUserNameCard = document.getElementById('back-user-name-card'),
    userAgeCard = document.getElementById('back-user-age-card'),
    userTypeCard = document.getElementById('back-user-type-card'),
    formBtn = document.getElementById('start-btn'),
    addBtn = document.getElementById('add-btn'),
    taskInput = document.getElementById('input-task'),
    taskInputPhone = document.getElementById('phone-task'),
    removeAll = document.getElementById('remove-all-btn'),
    taskContainer = document.getElementById('task-container'),
    phoneAdd = document.getElementById('phone-add-btn'),
    phoneAddSec = document.getElementById('phone-add-sec'),
    addBtnPhone = document.getElementById('add-btn-phone'),
    removeAllBtn = document.getElementById('remove-all-btn');


userTheme.onchange = function () {
    //USERTHEME
    document.body.classList.remove(document.body.classList)
    document.body.classList.add(userTheme.value)
}

//FORM FUNC
formBtn.onclick = function () {
    //CLOSE THE FORM
    this.parentElement.parentElement.parentElement.remove()

    //USERNAME
    if (userName.value === "" || null || undefined) {
        userCardName.textContent = "UNKNOWN"
        backUserNameCard.textContent = "UNKNOWN"
    } else {
        this.parentElement.parentElement.parentElement.remove()
        userCardName.textContent = userName.value;
        backUserNameCard.textContent = userName.value;
    }

    //USERAGE
    if (age.value === "" || null || undefined) {
        userAgeCard.textContent = "UNKNOWN"
    } else {
        userAgeCard.textContent = age.value;
    }

    //USERGENDAR
    if (gendar.value === "" || null || undefined) {
        userTypeCard.textContent = "UNKNOWN"
    } else {
        userTypeCard.textContent = gendar.value;
    }

}

//TASK GENERATOR FUNCTION
function generator(taskText) {

    let taskaDiv = document.createElement('div');
    taskaDiv.setAttribute('class', 'taska');

    let taskaPara = document.createElement('p');
    taskaPara.setAttribute('class', 'task-text');
    taskaPara.innerHTML = taskText.value;

    let removeIcon = document.createElement('i');
    removeIcon.setAttribute('class', 'fa');
    removeIcon.classList.add('fa-times');

    let taskaRemove = document.createElement('span');
    taskaRemove.onclick = () => taskaRemove.parentElement.style.display = 'none';

    taskaRemove.appendChild(removeIcon);
    taskaDiv.appendChild(taskaPara);
    taskaDiv.appendChild(taskaRemove)
    taskContainer.insertBefore(taskaDiv, taskContainer.firstChild)

}

//ADD TASK FUNCTION
addBtn.onclick = function () {
    if (taskInput.value === "" || null || undefined) {
        this.textContent = 'Type A Task!';

        setTimeout(() => {
            this.innerHTML = '<i class="fa fa-plus"></i>';
            this.style.background = 'unset'
        }, 1500);


    } else {

        generator(taskInput);

        taskInput.value = "";
        taskInput.focus();

    }
}

//REMOVE ALL BUTTON
removeAllBtn.onclick = function () {

    for (let i = 0; i < taskContainer.children.length; i++) {
        taskContainer.children[i].style.display = 'none'
    }


}


//PHONE ADD BUTTON
phoneAdd.onclick = function () {

    phoneAddSec.style.display = 'unset'

}

//ADD TO DO 
addBtnPhone.onclick = function () {

    if (taskInputPhone.value === "" || null || undefined) {
        this.textContent = 'Type A Task!';

        setTimeout(() => {
            this.innerHTML = 'ADD!';
        }, 1500);


    } else {

        this.parentElement.parentElement.parentElement.remove()

        generator(taskInputPhone);
        taskInputPhone.value = "";
        taskInput.focus();

    }


}
