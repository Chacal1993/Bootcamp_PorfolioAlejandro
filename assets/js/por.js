new fullpage('#fullpage', {
    sectionsColor: ['#e7dfd5', '#84a9ac', '#3b6978', '#204051'],
});

function animacion() {
    let classe = document.querySelector('body.fp-viewing-page3');
    if (classe != null) {
        move()
    }
}
function detectUrl() {
    let bodyy = document.getElementsByTagName("body")
    let classFullPage3 = document.getElementsByTagName("body").className
    console.log(classFullPage3);
    animacion();
}

ontouchmove = animacion
onmousewheel = animacion

var i = 0;
function move() {
    if (i == 0) {
        i = 1;
        let progressBar = document.getElementsByClassName("skill_bar_progress");

        for (const iterator of progressBar) {
            let id = setInterval(load, 20);
            let width = 1;
            let value = iterator.getAttribute('aria-valuenow');;
            function load() {
                if (width >= value) {
                    clearInterval(id);
                    i = 0;
                } else {
                    width++;
                    iterator.style.width = width + "%";
                }
            }
        }

    }
}

