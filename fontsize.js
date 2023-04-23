// fontsize adjustment

function fSize() {
    let h1title = document.getElementById('h1title').value;
    h1.style.fontSize = `${h1title}` + 'rem';
    document.getElementById('h1titleV').innerHTML = `${h1title}`;

    let h2title = document.getElementById('h2title').value;
    h2.style.fontSize = `${h2title}` + 'rem';
    document.getElementById('h2titleV').innerHTML = `${h2title}`;

    let pSize = document.getElementById('pSize').value;
    let p = document.querySelectorAll("p");
    for (let m =0; m < p.length; m++) {
        p[m].style.fontSize = `${pSize}` + 'rem';
    }
    document.getElementById('pV').innerHTML = `${pSize}`;
}

// call function:

document.getElementById('h1title').addEventListener('input', fSize);
document.getElementById('h2title').addEventListener('input', fSize);
document.getElementById('pSize').addEventListener('input', fSize);
