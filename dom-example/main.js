function populateDiv() {
    let div = document.getElementById("Sum");
    let a = document.getElementById("firstNumber").value;
    let b = document.getElementById("secondNumber").value;
    fetch("https://sum-server.100xdevs.com/sum?a=" + a + "&b=" + b).then((data) => {
        data.text().then((ans) => {
            div.innerHTML = ans;
        });
    });
}