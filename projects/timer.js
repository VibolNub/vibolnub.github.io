function setTimer(){
    let setMin = prompt('Please Enter How Many Minute Do You Need:');
    let setSec = prompt('Please Enter How Many Second Do You Need:');
        if(setMin.length === 1){
            setMin = '0' + setMin;
        }
        if(setMin > 59 || setSec > 59){
            alert('Minute and Second can only be lower than 60!')
            return;
        }
        
        if(setSec.length === 1){
            setSec = '0' + setSec;
        }
        if( setMin.length > 2 || setSec.length > 2){
            alert('2 Degits is the limit!\n Please Enter Again!')
            return;
        }

    document.getElementById('txtMin').innerHTML = setMin;
    document.getElementById('txtSec').innerHTML = setSec;

}           

document.getElementById('btnStart').addEventListener('click',startTimer);
document.getElementById('btnStop').addEventListener('click',stopTimer);

var timeInterval;

function updateTimer(){
    var sec = document.getElementById('txtSec').innerHTML;
    var min = document.getElementById('txtMin').innerHTML;
    
    sec -= 01;
     
    if(min.length < 2){
        min = '0' + min;

    }
    if(sec < 00){
        sec = 59;
        min -= 1;
    }
    
    document.getElementById('txtSec').innerHTML = sec;
    if(document.getElementById('txtSec').innerHTML.length === 1){
        document.getElementById('txtSec').innerHTML = "0" + sec;
    }
    document.getElementById('txtMin').innerHTML = min;
    if(min == "00" && sec == "00"){
        clearInterval(timeInterval);
        alert('Time Is Up!!');
    }
}
function startTimer(){
    timeInterval = setInterval(updateTimer, 1000);
}
function stopTimer(){
    clearInterval(timeInterval);
}
