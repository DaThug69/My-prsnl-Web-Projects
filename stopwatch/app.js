let time;
function clicked(){
    time = new Date();
    document.getElementById("timer").innerHTML=time.getHours()+" hours : "+time.getMinutes()+" minutes : "+time.getSeconds()+" seconds";
}

function watch(){
    time = new Date();
    document.getElementById("watch").innerHTML=time.getHours()+" hours : "+time.getMinutes()+" minutes : "+time.getSeconds()+" seconds";
    setInterval(watch, 1000);
}

let times;
function clickedStop(){
     times = new Date();
     document.getElementById("timerStop").innerHTML=times.getHours()+" hours : "+times.getMinutes()+" minutes : "+times.getSeconds()+" seconds";
     clearInterval(clickedStop);
}


function bdrEff(){
    let a = document.querySelector("#btn1");
    a.style.cssText="border: 4px solid cadetblue";
    let b = document.querySelector("#btn2");
    b.style.cssText="border: 4px solid purple";
    let c = document.querySelector("#btn3");
    c.style.cssText="border: 4px solid blue";
}