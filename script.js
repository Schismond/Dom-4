let play = document.getElementById('play');
let pause = document.getElementById('pause');
let repeat = document.getElementById('repeat');

// timer variables

let seconds = 0;
let minutes=0;
let hours=0;

//variables for leading zero

let leadingSeconds = 0 ;
let leadingMinutes = 0 ;
let leadingHours = 0 ;

//variables for set interval & timerstatus
let timerInterval = null;
let timerStatus = 'stopped';

//stop watch function 

function stopwatch(){

    seconds++

    if(seconds / 60 === 1){
        seconds = 0;
        minutes++

        if(minutes / 60 === 1){
            minutes = 0;
            hours++
        }
    }
    if(seconds < 10 ){
        leadingSeconds = "0" + seconds.toString()
    } else{
        leadingSeconds = seconds;
    }
    if(minutes < 10 ){
        leadingMinutes = "0" + minutes.toString()
    } else{
        leadingMinutes = minutes;
    }
    if(hours < 10 ){
        leadingHours = "0" + hours.toString()
    } else{
        leadingHours = hours;
    }


    let displayTimer = document.getElementById('time').innerText=
    leadingHours + ':' + leadingMinutes + ':' + leadingSeconds;

}

play.addEventListener('click' , function(){

    if(timerStatus='stopped'){
        timerInterval = window.setInterval(stopwatch, 1000);
        play.style.display='none';
        pause.style.display='block';
        timerStatus='started';
    }
    else{
        window.clearInterval(timerInterval);
        play.style.display='block';
        pause.style.display='none';
        timerStatus='stopped';
    }
})

repeat.addEventListener('click' , function(){

    window.clearInterval(timerInterval);
    seconds = 0;
    minutes = 0;
    hours = 0 ;
    document.getElementById('time').innerText = '00:00:00';
    if (pause.style.display = 'block'){
        play.style.display='block';
        pause.style.display='none';
        timerStatus='stopped';
    }

})

pause.addEventListener('click' , function(){
    clearInterval(timerInterval);
    play.style.display='block';
    pause.style.display='none';
    timerStatus='stopped';
})

