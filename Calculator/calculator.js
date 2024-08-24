let calculation = "";
function updateCalculation(value) {
    if (value === "") {
        calculation = "";
        document.getElementById("calculation-display").textContent = "";
        localStorage.setItem('calculation', calculation);
    } else if (value === "=") {
        document.getElementById("calculation-display").textContent =
            eval(calculation);
    } else {
        calculation += value;
        document.getElementById("calculation-display").textContent =
            calculation;
    }
    console.log(calculation);
    return calculation;
}

document.addEventListener("keydown", function (event){
    const key = event.key;
    switch (key) {
        case '1':
            updateCalculation(1);
            break;
        case '2':
            updateCalculation(2);
            break;
        case '3':
            updateCalculation(3);
            break;
        case '4':
            updateCalculation(4);
            break;
        case '5':
            updateCalculation(5);
            break;
        case '6':
            updateCalculation(6);
            break;
        case '7':
            updateCalculation(7);
            break;
        case '8':
            updateCalculation(8);
            break;
        case '9':
            updateCalculation(9);
            break;
        case '0':
            updateCalculation(0);
            break;
        case ".":
            updateCalculation(".");
            break;
        case "+":
            updateCalculation(" + ");
            break;
        case "-":
            updateCalculation(" - ");
            break;
        case "*":
            updateCalculation(" * ");
            break;
        case "/":
            updateCalculation(" / ");
            break;
        case "Enter":
            updateCalculation("=");
            break;
        case "=":
            updateCalculation("=");
            break;
        case "Backspace":
            updateCalculation("");
            break;
    }
});