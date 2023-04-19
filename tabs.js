function openAdj(evt, adjustment) {
    //variables
    var i, tabcontent, tablinks;

//getting class= tabcontent and hide them
tabcontent = document.getElementsByClassName("tabcontent");
for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
}
//getting tablinks and remove class "active"
tablinks = document.getElementsByClassName("tablinks");
for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace("active", "");
}
//showing current tab and add active class
document.getElementById(adjustment).style.display = "block";
evt.currentTarget.className += " active"; 
}

//color adjustment:

function changeBgcolor(){
    /*setting variables */
    let red = document.getElementById('red').value;
    let green = document.getElementById('green').value;
    let blue = document.getElementById('blue').value;
    let alpha = document.getElementById('alpha').value;
    let bgColor = 'rgb(' + red + ',' + green + ',' + blue + ',' + alpha + ')';
    document.body.style.backgroundColor = bgColor;
    document.getElementById('redV').innerHTML = `${red}`;
    document.getElementById('greenV').innerHTML = `${green}`;
    document.getElementById('blueV').innerHTML = `${blue}`;
    document.getElementById('alphaV').innerHTML = `${alpha}`;
  
}
/* adding event */
document.getElementById('red').addEventListener('input',changeBgcolor);
document.getElementById('green').addEventListener('input',changeBgcolor);
document.getElementById('blue').addEventListener('input',changeBgcolor);
document.getElementById('alpha').addEventListener('input',changeBgcolor);

/*text color change*/
function changeTextColor(){
    let redT = document.getElementById('redT').value;
    let greenT = document.getElementById('greenT').value;
    let blueT = document.getElementById('blueT').value;
    let alphaT = document.getElementById('alphaT').value;
    let textColor = 'rgb(' + redT + ',' + greenT + ',' + blueT + ',' + alphaT + ')';
    document.getElementById('text').style.color = textColor;
    document.getElementById('redTv').innerHTML = `${redT}`;
    document.getElementById('greenTv').innerHTML = `${greenT}`;
    document.getElementById('blueTv').innerHTML = `${blueT}`;
    document.getElementById('alphaTv').innerHTML = `${alphaT}`;

}

document.getElementById('redT').addEventListener('input',changeTextColor);
document.getElementById('greenT').addEventListener('input',changeTextColor);
document.getElementById('blueT').addEventListener('input',changeTextColor);
document.getElementById('alphaT').addEventListener('input',changeTextColor);

/* function reset(){
   red.value = 255;
   green.value = 255;
   blue.value = 255;
   alpha.value = 1;
   redT.value = 0;
   greenT.value = 0;
   blueT.value = 0;
   alphaT.value = 1;
   changeBgcolor();
   changeTextColor();
    
}

document.getElementById('resetMain').addEventListener('click',reset); */
