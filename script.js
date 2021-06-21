const title = document.querySelector('h2');

new Typewriter(title, {
    deleteSpeed: 20
  })

.changeDelay(30)
.typeString("We are ")
.pauseFor(300)
.typeString("opening up now !")
.deleteChars(5)
.typeString("soon !")
.start()


// COUNTDOWN

const countdown = () => {
  const countDate = new Date('June 21, 2021 00:00:00').getTime();
  const now = new Date().getTime();
  const gap = now - countDate;

  // how time work
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const textDay = Math.floor(gap / day);
  const textHour = Math.floor((gap % day) / hour);
  const textMinute = Math.floor((gap % hour) / minute);
  const textSecond = Math.floor((gap % minute) / second);

  document.querySelector(".day").innerText = textDay;
  document.querySelector(".hour").innerText = textHour;
  document.querySelector(".minute").innerText = textMinute;
  document.querySelector(".second").innerText = textSecond;

};

setInterval(countdown, 1000);