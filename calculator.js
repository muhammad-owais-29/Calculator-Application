function getNumber(num){
    
    var result = document.getElementById("input")
    result.value += num;
}

function clearBtn(){
    
    var result = document.getElementById("input")
    result.value = "";
}

function finalResult(){
    var result = document.getElementById("input");
    result.value = eval(result.value);

}