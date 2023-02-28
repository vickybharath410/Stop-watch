let hour = document.getElementById("hour");
let min = document.getElementById("min");
let sec = document.getElementById("sec");
let milisec = document.getElementById("milisec");
let start = document.getElementById("start");
let pause = document.getElementById("pause");
let reset = document.getElementById("reset");
let cast = document.getElementById("cast");
let castul=document.getElementById("c");
let calchour = 0;
let calcmin = 0;
let calcsec = 0;
let calcmilisec = 0;
let calctimer = false;
let castindex=0;

cast.addEventListener('click',function(){
    castindex++
    let li=document.createElement("li");
    castul.appendChild(li)
    console.log(castul);
    li.innerHTML=`CAST ${castindex} : ${calchour} : ${calcmin} : ${calcsec} : ${calcmilisec}`;
})
start.addEventListener("click", function () {
  calctimer = true;
  stopTimer();
  console.log("hi");
});

pause.addEventListener("click", function () {
  calctimer = false;
});
reset.addEventListener("click", function () {
  calctimer = false;
  hour.innerHTML = "00";
  min.innerHTML = "00";
  sec.innerHTML = "00";
  milisec.innerHTML = "00";
  calchour = 0;
  calcmin = 0;
  calcsec = 0;
  calcmilisec = 0;
  castul.innerHTML="";
});
function stopTimer() {
  if (calctimer) {
    calcmilisec++;

    if (calcmilisec === 100) {
      calcsec++;
      calcmilisec = 0;
    }
    if (calcsec === 60) {
      calcmin++;
      calcsec = 0;
    }
    if (calcmin === 60) {
      calchour++;
      calcmin = 0;
      calcsec = 0;
    }
    let zerohours = calchour < 10 ? "0" + calchour : calchour;
    let zeromin = calcmin < 10 ? "0" + calcmin : calcmin;
    let zerosec = calcsec < 10 ? "0" + calcsec : calcsec;
    let zeromilisec = calcmilisec < 10 ? "0" + calcmilisec : calcmilisec;
    hour.innerHTML = zerohours;
    min.innerHTML = zeromin;
    sec.innerHTML = zerosec;
    milisec.innerHTML = zeromilisec;
  }
  setTimeout(() => stopTimer(), 1);
}
