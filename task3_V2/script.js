const trafficLightEl = document.querySelector('#green');
const trafficLightE2 = document.querySelector('#yellow');
const trafficLightE3 = document.querySelector('#red');

trafficLightEl.addEventListener('click', next);
trafficLightE2.addEventListener('click', next);
trafficLightE3.addEventListener('click', next);

function next(event) {
    if (trafficLightEl.style.background === 'green') {
        trafficLightEl.style.background = ('');
        trafficLightE2.style.background = ('yellow');
        trafficLightE3.style.background = ('');
    } else if (trafficLightE2.style.background === 'yellow') {
        trafficLightEl.style.background = ('');
        trafficLightE2.style.background = ('');
        trafficLightE3.style.background = ('red');
    } else if (trafficLightE3.style.background === 'red') {
        trafficLightEl.style.background = ('green');
        trafficLightE2.style.background = ('');
        trafficLightE3.style.background = ('');
    }

	// если светофор выключем - назначаем кликнутый свет
    isNoGreen = document.querySelector('#green').style.background === '';
    isNoYellow = document.querySelector('#yellow').style.background === '';
    isNoRed = document.querySelector('#red').style.background === '';

    if (isNoGreen === true && isNoYellow === true && isNoRed === true) {
        document.querySelector('#' + event.target.id).style.background = event.target.id;
    }
}
