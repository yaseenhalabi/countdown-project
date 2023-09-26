var dayEl = document.getElementById("day")
var hourEl = document.getElementById("hour")
var minuteEl = document.getElementById("minute")
var secondEl = document.getElementById("second")

const endYearTime = new Date("June 4, 2024 00:00:00").getTime();

updateCountdown()

function updateCountdown(){
  const now = new Date().getTime()
  const gap = endYearTime - now // will give a millisecond count like 112223331

  // specify how many milliseconds in each time period
  const second = 1000
  const minute = second * 60
  const hour = minute * 60
  const day = hour * 24

  // convert the milliseconds (from gap variable) into days, hours, minutes, seconds
  const d = Math.floor(gap / day)
  const h = Math.floor((gap % day) / hour)
  const m = Math.floor((gap % hour) / minute)
  const s = Math.floor((gap % minute) / second)

  dayEl.innerText = d
  hourEl.innerText = h
  minuteEl.innerText = m
  secondEl.innerText = s
  
  setTimeout(updateCountdown, 1000)
  
}