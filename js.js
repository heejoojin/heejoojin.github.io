var today = new Date();

function copyright() {
    var year = today.getFullYear();

    var el = document.getElementById('cr');
    el.innerHTML = '<p>Copyright &copy; ' + year + ' Muny Pottery Studio. All rights reserved.</p>'
}

function greeting() {
    var hourNow = today.getHours();
    var greeting;

    if (hourNow > 18) {
        greeting = 'Good Evening :)';
    } else if ( hourNow > 12) {
        greeting = 'Good Afternoon :)';
    } else if (hourNow > 0) {
        greeting = 'Good Morning :)';
    }
    var el = document.getElementById('greeting');
    el.textContent = greeting; 
}
greeting();
copyright();
