
// Watch for changes to inputs
document.querySelectorAll('#right input').forEach((el) => {

    // Remove placeholder text on focus
    el.addEventListener('focus', function() {
        if (this.value.trim() == this.name)
            this.value = "";

    });

    // Replace placeholder text if empty
    el.addEventListener('blur', function() {
        if (this.value.trim() == '')
            this.value = this.name;
    });
});

// Keep track of whether to display password
var displayPassword = true,
    passwordField = document.getElementById('password');

document.getElementById('password-button').onclick = function (){
    displayPassword = !displayPassword;
    var type = (displayPassword) ? "text" : "password";
    password.type = type;
}


// Menu functionality
var menu = document.getElementById('menu');

document.getElementById('menu-button').onclick = function() {
    menu.classList.add('open');
}

document.getElementById('close-menu').onclick = function() {
    menu.classList.remove('open');
}
