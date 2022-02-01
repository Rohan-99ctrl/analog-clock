const hours = document.querySelector('.hours');
const minutes = document.querySelector('.minutes');
const seconds = document.querySelector('.seconds');


let timeCal = (currentVal, timeCalVal) => {

    return (360 * currentVal) / timeCalVal;

}


setInterval(function(){

    let time = new Date();

    let currHour = time.getHours();
    let currMinute = time.getMinutes();
    let currSecond = time.getSeconds();

    hours.style.transform = `rotate(${timeCal(currHour, 12)}deg)`;
    minutes.style.transform = `rotate(${timeCal(currMinute, 60)}deg)`;
    seconds.style.transform = `rotate(${timeCal(currSecond, 60)}deg)`;

}, 1000)

