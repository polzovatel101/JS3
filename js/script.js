/**
 * Created by Илья Яновой on 25.03.2016.
 */
var createTimer = {
    miliseconds: 0,
    seconds: 0,
    minutes: 0,
    hour: 0
};

function startTimer() {
    createVision();
    createTimer.miliseconds += 31;
    if (createTimer.miliseconds >= 1000) {
        createTimer.seconds++;
        createTimer.miliseconds = 0;
        if (createTimer.seconds >= 60) {
            createTimer.minutes++;
            createTimer.seconds = 0;
            if (createTimer.minutes >= 60) {
                createTimer.hour++;
                createTimer.minutes = 0;
            }
        }
    }
}

function pauseTimer() {
    clearInterval(timerId);
    var bStart = document.getElementsByClassName('button-success');
    bStart[0].classList.remove('pure-button-disabled');
    bStart[0].disabled = false;
    createVision();
}

function initTimer() {
    var bStart = document.getElementsByClassName('button-success');
    console.log(bStart);
    bStart[0].className += ' pure-button-disabled';
    bStart[0].disabled = true;
    timerId = setInterval(startTimer, 31);
}

function createVision() {
    var container = document.getElementsByClassName('container');
    if(createTimer.hour < 10){
        if(createTimer.minutes < 10){
            if(createTimer.seconds < 10){
                if(createTimer.miliseconds < 100){
                    container[0].innerHTML = '<span>' + 0 + createTimer.hour + ' : ' + 0 + createTimer.minutes + ' : ' + 0 + createTimer.seconds + ' : ' + 0 + createTimer.miliseconds + '</span>';
                }
                else {
                    container[0].innerHTML = '<span>' + 0 + createTimer.hour + ' : ' + 0 + createTimer.minutes + ' : ' + 0 + createTimer.seconds + ' : ' + createTimer.miliseconds + '</span>';
                }
            }
            else {
                if(createTimer.miliseconds < 100){
                    container[0].innerHTML = '<span>' + 0 + createTimer.hour + ' : ' + 0 + createTimer.minutes + ' : ' + createTimer.seconds + ' : ' + 0 + createTimer.miliseconds + '</span>';
                }
                else {
                    container[0].innerHTML = '<span>' + 0 + createTimer.hour + ' : ' + 0 + createTimer.minutes + ' : ' + createTimer.seconds + ' : ' + createTimer.miliseconds + '</span>';
                }
            }
        }
        else {
            if(createTimer.seconds < 10){
                if(createTimer.miliseconds < 100){
                    container[0].innerHTML = '<span>' + 0 + createTimer.hour + ' : ' + createTimer.minutes + ' : ' + 0 + createTimer.seconds + ' : ' + 0 + createTimer.miliseconds + '</span>';
                }
                else {
                    container[0].innerHTML = '<span>' + 0 + createTimer.hour + ' : ' + createTimer.minutes + ' : ' + 0 + createTimer.seconds + ' : ' + createTimer.miliseconds + '</span>';
                }
            }
            else {
                if(createTimer.miliseconds < 100){
                    container[0].innerHTML = '<span>' + 0 + createTimer.hour + ' : ' + createTimer.minutes + ' : ' + createTimer.seconds + ' : ' + 0 + createTimer.miliseconds + '</span>';
                }
                else {
                    container[0].innerHTML = '<span>' + 0 + createTimer.hour + ' : ' + createTimer.minutes + ' : ' + createTimer.seconds + ' : ' + createTimer.miliseconds + '</span>';
                }
            }
        }
    } else {
        if(createTimer.minutes < 10){
            if(createTimer.seconds < 10){
                if(createTimer.miliseconds < 100){
                    container[0].innerHTML = '<span>' + 0 + createTimer.hour + ' : ' + 0 + createTimer.minutes + ' : ' + 0 + createTimer.seconds + ' : ' + 0 + createTimer.miliseconds + '</span>';
                }
                else {
                    container[0].innerHTML = '<span>' + 0 + createTimer.hour + ' : ' + 0 + createTimer.minutes + ' : ' + 0 + createTimer.seconds + ' : ' + createTimer.miliseconds + '</span>';
                }
            }
            else {
                if(createTimer.miliseconds < 100){
                    container[0].innerHTML = '<span>' + 0 + createTimer.hour + ' : ' + 0 + createTimer.minutes + ' : ' + createTimer.seconds + ' : ' + 0 + createTimer.miliseconds + '</span>';
                }
                else {
                    container[0].innerHTML = '<span>' + 0 + createTimer.hour + ' : ' + 0 + createTimer.minutes + ' : ' + createTimer.seconds + ' : ' + createTimer.miliseconds + '</span>';
                }
            }
        }
        else {
            if(createTimer.seconds < 10){
                if(createTimer.miliseconds < 100){
                    container[0].innerHTML = '<span>' + createTimer.hour + ' : ' + createTimer.minutes + ' : ' + 0 + createTimer.seconds + ' : ' + 0 + createTimer.miliseconds + '</span>';
                }
                else {
                    container[0].innerHTML = '<span>' + createTimer.hour + ' : ' + createTimer.minutes + ' : ' + 0 + createTimer.seconds + ' : ' + createTimer.miliseconds + '</span>';
                }
            }
            else {
                if(createTimer.miliseconds < 100){
                    container[0].innerHTML = '<span>' + createTimer.hour + ' : ' + createTimer.minutes + ' : ' + createTimer.seconds + ' : ' + 0 + createTimer.miliseconds + '</span>';
                }
                else {
                    container[0].innerHTML = '<span>' + createTimer.hour + ' : ' + createTimer.minutes + ' : ' + createTimer.seconds + ' : ' + createTimer.miliseconds + '</span>';
                }
            }
        }
    }
}

function resetTimer() {
    createTimer.miliseconds = 0;
    createTimer.seconds = 0;
    createTimer.minutes = 0;
    createTimer.hour = 0;
    var bStart = document.getElementsByClassName('button-success');
    bStart[0].classList.remove('pure-button-disabled');
    bStart[0].disabled = false;
    createVision();
}
