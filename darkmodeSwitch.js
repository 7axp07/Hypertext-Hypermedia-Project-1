let dm = false;

function darkMode() {
    let back = document.getElementById("content");
  
    if (Boolean(dm) == false) {
        back.style.background = '#201904';
        back.style.color = '#E0D378';
        dm = true;
    }
    else if (Boolean(dm) == true) {
        back.style.background = '#E0D378';
        back.style.color = '#201904';
        dm = false;
    }
    

}

