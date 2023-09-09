

// ===== Code to update Current day of the week and UTC time =====
document.addEventListener("DOMContentLoaded", function () {

    // ===== Getting the current day of the week =====
    const daysOfTheWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const currentDate = new Date();
    const currentDay = daysOfTheWeek[currentDate.getUTCDay()];

    // ===== Update the current day of the week element =====
    const currentDayElement = document.querySelector('[data-testid="currentDayOfTheWeek"] span');
    currentDayElement.textContent = currentDay;

    // ===== Getting the current UTC time in milliseconds =====
    const currentUTCTimeElement = document.querySelector('[data-testid="currentUTCTime"] span');
    currentUTCTimeElement.textContent = Date.now();
});