function setTimer(){
    let setHour = prompt('Please Enter How Many Hour Do You Need:');
    let setMin = prompt('Please Enter How Many Minute Do You Need:');
    let setSec = prompt('Please Enter How Many Second Do You Need:');
    
        if(setHour.length === 1){
        setHour = "0" + setHour;
        }        
        if(setMin.length === 1){
            setMin = "0" + setMin;
        }
        
        if(setSec.length === 1){
            setSec = "0" + setSec;
        }
        if(setHour.length > 2 || setMin.length > 2 || setSec.length > 2){
            alert('2 Degits is the limit!\n Please Enter Again!')
            return;
        }

    document.getElementById('txtHour').innerHTML = setHour;
    document.getElementById('txtMin').innerHTML = setMin;
    document.getElementById('txtSec').innerHTML = setSec;

}