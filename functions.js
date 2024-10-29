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
