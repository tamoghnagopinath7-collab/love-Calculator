function love() {
    const name1 = document.getElementById("name1").value;
    const name2 = document.getElementById("name2").value;
    const res = Math.floor(Math.random() * 100);
    const par = document.getElementById("par");
   let message = "";
    if (res >= 80) {
        message = "Marriage is fixed";
    } else if (res >= 60) {
        message = "Good match";
    } else if (res >= 40) {
        message = "50-50 chance";
    } else if (res >= 20) {
        message = "Not a good match";
    } else {
        message = "Not meant to be";
    }
    par.innerHTML = `The love percentage between ${name1} and ${name2} is ${res}%<br>${message}`;

}