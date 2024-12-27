const playButton = document.getElementsByClassName("play")[0];
const lapButton = document.getElementsByClassName("lap")[0];
const resetButton = document.getElementsByClassName("reset")[0];
const clearButton = document.getElementsByClassName("lap-clear-button")[0];
const hour = document.getElementsByClassName("hr")[0];
const minute = document.getElementsByClassName("min")[0];
const second = document.getElementsByClassName("sec")[0];
const laps = document.getElementsByClassName("laps")[0];
// const Buttons = document.getElementsByClassName("button")[0];

let isPlay = false;
let secCounter = 0;
let sec;
let min;
let minCounter = 0;
let hr;
let hrCounter = 0;
let lapItem = 0;
let isReset = false;


const toggleButton = () => {
    lapButton.classList.remove("hidden");
    resetButton.classList.remove("hidden");
}

const play = () => {

    playButton.classList.add("active");
    resetButton.classList.remove("active");
    lapButton.classList.remove("active");

    if (!isPlay){
        
        playButton.innerHTML = 'Pause';
        // hr = setInterval(() => {
        //          hour.innerHTML = `${++hrCounter} : `;
        //     }, 60*100000);
        // min = setInterval(() => {
        //     if(minCounter === 59) {
        //         minCounter = 0;
        //     }
        //          minute.innerHTML = `&nbsp;${++minCounter} : `;
        //     }, 60*1000);
        // sec = setInterval(() => {
        //     if(secCounter === 59) {
        //         secCounter = 0;
        //     }
        //         second.innerHTML = `&nbsp;${++secCounter}`;
        //     }, 1000);
        // sec = setInterval(() => {
        //     if(secCounter === 59) {
        //         secCounter = 0;
        //         if(minCounter === 59) {
        //             minCounter = 0;
        //             hrCounter++;
        //             hour.innerHTML = `${hrCounter} : `;
        //         } else {
        //             minCounter++;
        //             minute.innerHTML = `${minCounter} : `;
        //         }
        //     } else {
        //         secCounter++;
        //     } second.innerHTML = `${secCounter}`;
        // }, 1000);
        sec = setInterval(() => {
            if(secCounter === 59) {
                secCounter = 0;
                if(minCounter === 59) {
                    minCounter = 0;
                    hrCounter++;
                    hour.innerHTML = `${String(hrCounter).padStart(2, '0')} : `;
                } else {
                    minCounter++;
                    minute.innerHTML = ` ${String(minCounter).padStart(2, '0')} : `;
                }
            } else {
                secCounter++;
            }
            second.innerHTML = ` ${String(secCounter).padStart(2, '0')}`;
        }, 1000);
        
        isPlay = true;
    }
    else{
        playButton.innerHTML = 'Play';
        clearInterval(min);
        clearInterval(sec);
        clearInterval(hr);
        isPlay = false;
    }
   toggleButton();
}


// const reset = () => {
//     isReset = true;
//     play();
//     lapButton.classList.add("hidden");
//     resetButton.classList.add("hidden");
//     second.innerHTML = '0';
//     minute.innerHTML = '0 :';
// }

const reset = () => {

    resetButton.classList.add("active");
    playButton.classList.remove("active");
    lapButton.classList.remove("active");

    clearInterval(min);
    clearInterval(sec);
    clearInterval(hr);
    isPlay = false;
    secCounter = 0;
    minCounter = 0;
    hrCounter = 0;
    second.innerHTML = '&nbsp;00';
    minute.innerHTML = '&nbsp;00 : ';
    hour.innerHTML = '00 : ';
    playButton.innerHTML = 'Play';
    lapButton.classList.add("hidden");
    resetButton.classList.add("hidden");
    isReset = false;
}

const lap = () => {

    resetButton.classList.remove("active");
    playButton.classList.remove("active");
    lapButton.classList.add("active");

    const li = document.createElement("li");
    const number = document.createElement("span");
    const timeStamp = document.createElement("span");

    li.setAttribute("class", "lap-item");
    number.setAttribute("class", "number");
    timeStamp.setAttribute("class", "time-stamp");

    number.innerText = `#${++lapItem}`;
    timeStamp.innerHTML = `${hrCounter} : ${minCounter} : ${secCounter}`;
    
    li.append(number, timeStamp);
    laps.append(li);

    clearButton.classList.remove("hidden");
}

const clearAll = () => {
    laps.innerHTML = '';
    laps.append(clearButton);
    clearButton.classList.add("hidden");
}

playButton.addEventListener("click", play);

resetButton.addEventListener("click", reset);

lapButton.addEventListener("mousedown", () => lapButton.classList.add("active"));

lapButton.addEventListener("mouseup", () => lapButton.classList.remove("active"));

lapButton.addEventListener("click", lap);

clearButton.addEventListener("click", clearAll);

