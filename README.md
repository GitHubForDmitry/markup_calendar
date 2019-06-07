# Calendar
добавил функцию которая вычисляет день недели месяца (main.js)
function getFirstDayInMonth(year, month, firstDay) {

  year = new Date().getFullYear();
  month = new Date().getMonth();
  firstDay = new Date(year, month, 1);

  return firstDay.getDay();
}

function getDaysOfTheWeek(el) {

  el = document.querySelector('#month');
  return el.setAttribute("class" , "calendar calendar-" + getFirstDayInMonth());
}

getDaysOfTheWeek();
[Demo](https://githubfordmitry.github.io/markup_calendar/)
