
const changeButton = document.getElementById("change");

function changeData() {
   
    const surnameElement = document.querySelector(".hfamilia");
    const nameElement = document.querySelector(".hname");
    const fnameElement = document.querySelector(".hfname");

  
    if (surnameElement.innerHTML.trim() === 'AIRAPETYAN') {
        surnameElement.innerHTML = 'АЙРАПЕТЯН';
        nameElement.innerHTML = 'МАМПРЕ';
        fnameElement.innerHTML = 'МАНВЕЛОВИЧ';
    } else {
        surnameElement.innerHTML = 'AIRAPETYAN';
        nameElement.innerHTML = 'MAMPRE';
        fnameElement.innerHTML = 'MANVELOVICH';
    }
}


changeButton.addEventListener("click", changeData);


