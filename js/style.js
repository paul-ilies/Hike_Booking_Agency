const form  = document.getElementById('form');
const firstName = document.getElementById('first_name');
const lastName = document.getElementById('last_name');
const email = document.getElementById('email');
const textField = document.getElementById('textfield');




//Show input error message
function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'section__form-container-form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

// Show success outline
function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'section__form-container-form-control success';
}

function checkRequired(inputArr) {
    inputArr.forEach(function (input) {
        if (input.value.trim() === '') {

            showError(input, `${getFieldName(input)} is required`);
        }
        else {
            showSuccess(input);
        }
    });
}


//Check input Length
function checkLength(input, min, max) {
    if (input.value.length < min) {
        showError(input, `${getFieldName(input)} must be at least ${min} characters`);
    }
    else if (input.value.length > max) {
        showError(input, `${getFieldName(input)} must be less than ${max} characters`);

    }
    else {
        showSuccess(input);
    }
}

//check Email
function checkEmail(input) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(input.value.trim())) {
        showSuccess(input);
    }
    else {
        showError(input, `Email is not valid`)
    }
}

//Get field name

function getFieldName(input) {
    return input.placeholder.charAt(0) + input.placeholder.slice(1);
}




form.addEventListener('submit', function (e) {
    e.preventDefault(); 

    checkRequired([firstName, lastName, email, textField]);
    checkLength(firstName, 3, 15);
    checkLength(lastName, 3, 15);
    checkEmail(email);
    checkLength(textField, 10,100);
    
    
})




// Adding the navbar efects

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }


 














