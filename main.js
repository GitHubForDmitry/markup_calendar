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

// let val = document.querySelector(".val");
// let setMonth = document.querySelector(".month");
// setMonth.onclick = function () {
//   console.log(val.value);
// }
