const loginForm = document.forms[0];

const firstName = document.querySelector("[name = 'first']");
const secondName = document.querySelector("[name = 'second']");
const address = document.querySelector("[name = 'email']");
const date = document.querySelector("[name = 'date']");
const gender = document.querySelectorAll("[name = 'gender']");
const teh = document.querySelectorAll("[name = 'teh']");

var validationSummary = "";

function validate(form) {
    let result = true;
    validationSummary = "";
    let reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

    if (!firstName.value) {
        result = false;
        validationSummary += "Имя пустое!\n";
        
    }
    if (!secondName.value) {
        result = false;
        validationSummary += "Фамилия пуста!\n";
    }
    if (!address.value) {
        result = false;
        validationSummary += "Логин пуст!\n";
    }
    else if (reg.test(address.value) == false) {
        alert('Введите корректный e-mail');
    }

    return result;
}

function dateAge(form) {
    let result = true;

    if (!date.value) {
        result = false;
        validationSummary += "Дата пустая!\n";
    }
    else {
        let now = new Date();
        let today = new Date(now.getFullYear(), now.getMonth(), now.getDate()); //Текущя дата без времени
        let dob = new Date(date.value);
        let dobnow = new Date(today.getFullYear(), dob.getMonth(), dob.getDate()); //ДР в текущем году
        let age = today.getFullYear() - dob.getFullYear();

        //Если ДР в этом году ещё предстоит, то вычитаем из age один год
        if (today < dobnow) {
            age = age - 1;
        }

        if (age < 18) {
            result = false;
            validationSummary += "Ваш возраст меньше 18!\n";
        }
    }
    return result;
}

function checkTeh(form) {
    let count = 0;
    let result = true;

    for (let i = 0; i < teh.length; i++) {
        if (teh[i].checked) count++;
    }

    if(count<3) 
    {
        result = false;
        validationSummary += "Должно быть выбрано 3 и более значений!\n";
    }
    
    return result;
}


loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    if (validate(this) && dateAge(this) && checkTeh(this)) {
        this.submit();
        alert('Отправлено');
    }
    else {
        alert(validationSummary);
    }
})






















// function myFunction() {
//     // Get the checkbox
//     var checkBox = document.getElementById("myCheck");
//     // Get the output text
//     var text = document.getElementById("text");

//     // If the checkbox is checked, display the output text
//     if (checkBox.checked == true) {
//         text.style.display = "block";
//     } else {
//         text.style.display = "none";
//     }
// }