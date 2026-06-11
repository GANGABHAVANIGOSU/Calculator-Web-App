function display(value){
    document.getElementById("result").value += value;
}

function calculate(){
    let result = document.getElementById("result");
    result.value = eval(result.value);
}

function clearScreen(){
    document.getElementById("result").value = "";
}