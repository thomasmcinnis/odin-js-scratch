const email = document.getElementById('mail');
const emailError = email.nextElementSibling;

const country = document.getElementById('country');
const countryError = country.nextElementSibling;

const pwd1 = document.getElementById('pwd1');
const pwd1Error = pwd1.nextElementSibling;

// A very bad password regex
const passRegExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

const pwd2 = document.getElementById('pwd2');
const pwd2Error = pwd2.nextElementSibling;

email.addEventListener('change', (event) => {
    if (email.validity.valid) {
        emailError.textContent = '';
        emailError.className = 'error';
    } else {
        emailError.textContent = 'Must enter a valid email.';
        emailError.className = 'error active';
    }
});

country.addEventListener('change', (event) => {
    if (country.validity.valid) {
        countryError.textContent = '';
        countryError.className = 'error';
        return;
    }
    countryError.textContent = 'Please enter a country name.';
    countryError.className = 'error active';
});

pwd1.addEventListener('change', (event) => {
    const isValid = passRegExp.test(pwd1.value);
    if (isValid) {
        pwd1Error.textContent = '';
        pwd1Error.className = 'error';
        return;
    }
    pwd1Error.textContent = '8 characters, upper/lower and number';
    pwd1Error.className = 'error active';
});

pwd2.addEventListener('change', (event) => {
    const isValid = pwd2.value === pwd1.value;
    if (isValid) {
        pwd2Error.textContent = '';
        pwd2Error.className = 'error';
        return;
    }
    pwd2Error.textContent = 'Does not match';
    pwd2Error.className = 'error active';
});
