window.onload = function () {

    // Вывод сегодняшней даты
    let today = new Date();
    let options = { day: 'numeric', year: 'numeric', month: 'long' };
    let now = today.toLocaleString('en', options);

    const dataString = document.querySelectorAll('.data-today');

    if (dataString.length > 0) {
        dataString.forEach(element => {
            element.innerHTML = now;
        });
    }


    // Обратный отчёт 
    const timerMinutes = document.querySelector('.timer-minutes');
    const timerSeconds = document.querySelector('.timer-seconds');

    if (timerMinutes && timerSeconds) {

        let seconds = 60;
        let minutes = 4;

        let timSeconds = setInterval(() => {

            if (seconds > 0) {
                seconds--;
            } else {
                seconds = 60;
            }
            timerSeconds.innerHTML = seconds;

        }, 1000);

        let timMinutes = setInterval(() => {
            if (minutes > 0) {
                minutes--;
            } else {
                minutes = 4;
            }
            timerMinutes.innerHTML = minutes;
        }, 60000);

    }





}