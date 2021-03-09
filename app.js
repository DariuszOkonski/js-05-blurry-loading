const time = 5000;
let blurRange = 15;
let blurTime = time / blurRange

let percentageRange = 1
let percentageTime = time / 100;

const img = document.querySelector('[data-img]');
const percentage = document.querySelector('[data-percentage]');


percentageTransition()
imageTransition()


function percentageTransition() {
    percentageIndex = setInterval(() => {
        let fraction = ((100 - percentageRange)/100)
        percentage.innerText = `${percentageRange}%`;
        percentage.style.opacity = fraction; 
        percentage.style.transform =`translate(-50%, -50%) scale(${fraction + 1})`;
        percentageRange++;

        if(percentageRange > 100) {
            clearInterval(percentageIndex)
        }
        
    }, percentageTime);
}

function imageTransition() {
    blurIndex = setInterval(() => {
        img.style.filter=`blur(${blurRange}px)`;
        blurRange--;
        
        if(blurRange <= 0) {
            clearInterval(blurIndex)
        }
    }, blurTime);
}