var resultCalculate;
function clearAll() {
    document.getElementById("operator").value = "";
    document.getElementById("result").value = "";
}
function clearResult(){
    document.getElementById("operator").value = "";
}
function clickBtn1(){
    var num = document.getElementById("num1").innerHTML;
    document.getElementById("result").value += num;
}
function clickBtn2(){
    var num = document.getElementById("num2").innerHTML;
    document.getElementById("result").value += num;
}
function clickBtn3(){
    var num = document.getElementById("num3").innerHTML;
    document.getElementById("result").value += num;
}
function clickBtn4(){
    var num = document.getElementById("num4").innerHTML;
    document.getElementById("result").value += num;
}
function clickBtn5(){
    var num = document.getElementById("num5").innerHTML;
    document.getElementById("result").value += num;
}
function clickBtn6(){
    var num = document.getElementById("num6").innerHTML;
    document.getElementById("result").value += num;
}
function clickBtn7(){
    var num = document.getElementById("num7").innerHTML;
    document.getElementById("result").value += num;
}
function clickBtn8(){
    var num = document.getElementById("num8").innerHTML;
    document.getElementById("result").value += num;
}
function clickBtn9(){
    var num = document.getElementById("num9").innerHTML;
    document.getElementById("result").value += num;
}
function clickBtn0(){
    var num = document.getElementById("num0").innerHTML;
    document.getElementById("result").value += num;
}
function clickBtn00(){
    var num = document.getElementById("num00").innerHTML;
    document.getElementById("result").value += num;
}
function BtnDot(){
    var num = document.getElementById("BtnDot").innerHTML;
    document.getElementById("result").value += ".";
}

//

function btnPercent(){
    var valueResult = document.getElementById("result").value;
    var valueResultTotal = valueResult *0.01;
    //document.getElementById("operator").value = resultCalculate;
    document.getElementById("result").value = valueResultTotal;
}
function btnDevide(){
    var oper = document.getElementById("btnDevide").innerHTML;
    document.getElementById("operator").value += document.getElementById("result").value + oper;
    document.getElementById("result").value = "";
}
function btnMulti(){
    var oper = document.getElementById("btnMulti").innerHTML;
    document.getElementById("operator").value += document.getElementById("result").value + oper;
    document.getElementById("result").value = "";
}
function btnAdd(){
    var oper = document.getElementById("btnAdd").innerHTML;
    document.getElementById("operator").value += document.getElementById("result").value + oper;
    document.getElementById("result").value = "";

}
function btnMinus(){
    var oper = document.getElementById("btnMinus").innerHTML;
    document.getElementById("operator").value += document.getElementById("result").value + oper;
    document.getElementById("result").value = "";
}



function calculate() {
    //var oper = document.getElementById("equal").innerHTML;
    document.getElementById("operator").value += document.getElementById("result").value;
    var resultEnd =document.getElementById("operator").value; 
    document.getElementById("result").value = eval(resultEnd);

    //document.getElementById("operator").value = "";
}