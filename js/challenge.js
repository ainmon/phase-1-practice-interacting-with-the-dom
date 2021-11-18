document.addEventListener('DOMContentLoaded', (e) => {
    setInterval(timerThing(), 1000);
    e.preventDefault();
})



function timerThing(){
    let counter = document.querySelector('counter');
    return counter++;

}

function pauseHandle(){
    if (counter) {
        setInterval(() => {
            counter + 0
        }, 0000)
    }
}

function resumeHandle(){

}

function restartHandle(){

}

// need section to comment out