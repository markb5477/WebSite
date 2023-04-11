var age = 20;
function getAge() {
    return age.toString();
}
function incrementAge() {
    age++;
}
function checkDate() {
    var today = new Date();
    var Birthday = today.getMonth() === 9 && today.getDate() === 30;
    if (Birthday) {
        incrementAge();
    }
}
setInterval(checkDate, 24 * 60 * 60 * 1000); // Check every day
//document.getElementById('mySpan').innerHTML = age;

document.querySelector('.mySpan').innerHTML = age;
