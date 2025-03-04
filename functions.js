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

if (document.getElementById("casualTab") != null) {
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


    const pCS = document.getElementById("csTabHead");
    const divCS = document.getElementById("casual");
    const pDS = document.getElementById("dsTabHead");
    const divDS = document.getElementById("deep");
    const pAS = document.getElementById("asTabHead");
    const divAS = document.getElementById("another");
    divCS.removeChild(pCS);
    divDS.removeChild(pDS);
    divAS.removeChild(pAS);

    const tabHeadA = document.getElementById("tabHeaderA");
    const tabHeadB = document.getElementById("tabHeaderB");
    const tabHeadC = document.getElementById("tabHeaderC");

    const csTT = document.getElementById("csTabText");
    tabHeadA.removeChild(csTT);
    const dsTT = document.getElementById("dsTabText");
    tabHeadB.removeChild(dsTT);
    const asTT = document.getElementById("asTabText");
    tabHeadC.removeChild(asTT);

}

