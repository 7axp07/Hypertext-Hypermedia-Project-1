const scrollers = [...document.querySelectorAll('.scroller')];
scrollers.forEach((scroller) => {
    scroller.innerHTML = scroller.innerHTML + '&nbsp;'.repeat(5);
    scroller.i = 0;
    scroller.step = 3;
    scroller.width = scroller.clientWidth + 1;
    scroller.style.position = '';
    scroller.innerHTML = `${scroller.innerHTML}&nbsp;`.repeat(10);
});

requestAnimationFrame(move);
function move() {
    scrollers.forEach((scroller) => {
        scroller.style.marginLeft = `-${scroller.i}px`;
        scroller.i = scroller.i < scroller.width ? scroller.i + scroller.step : 1;
    });

    requestAnimationFrame(move);
}

const pCS = document.getElementById("casualH");
const divCS = document.getElementById("casual");
const pDS = document.getElementById("deepH");
const divDS = document.getElementById("deep");
const pAS = document.getElementById("anotherH");
const divAS = document.getElementById("another");
divCS.removeChild(pCS);
divDS.removeChild(pDS);
divAS.removeChild(pAS);

const casTab = document.getElementById("casualTab");
const dsTab = document.getElementById("deepTab");
const anoTab = document.getElementById("anotherTab");

const csImg = document.createElement("img");
csImg.setAttribute("src", "imgs/casualstory_ss.webp");
csImg.setAttribute("width", "200px");
csImg.setAttribute("class", "tabImg");

const dsImg = document.createElement("img");
dsImg.setAttribute("src", "imgs/deepstory_ss.webp");
dsImg.setAttribute("width", "200px");
dsImg.setAttribute("class", "tabImg");

const asImg = document.createElement("img");
asImg.setAttribute("src", "imgs/anotherstory_ss.webp");
asImg.setAttribute("width", "175px");
asImg.setAttribute("class", "tabImg");

casTab.appendChild(csImg);
dsTab.appendChild(dsImg);
anoTab.appendChild(asImg);

const textCS = document.getElementById("csTabText");
const textDS = document.getElementById("dsTabText");
const textAS = document.getElementById("asTabText");
const divText = document.getElementById("tabs");
divText.removeChild(textCS);
divText.removeChild(textDS);
divText.removeChild(textAS);
