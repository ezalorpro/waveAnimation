function waves(id) {
  var animate = document.getElementById(id);
  animate.beginElement();
}

var lastpos = 0;
var newpos = 0;
var timerFlag1 = true;
var timerFlag2 = true;
var animating = false;

window.addEventListener("scroll", function () {
  if (timerFlag1 && !animating) {
    timerFlag1 = false;
    lastpos = window.scrollY;
  }

  if (timerFlag2 && !animating) {
    animating = true;
    timerFlag2 = false;
    setTimeout(() => {
      newpos = window.scrollY;
      delta = Math.abs(lastpos - newpos);
      console.log(delta);
      if (delta >= 100) {
        waves("hard-wave");
        setInterval(() => {
          animating = false;
          timerFlag1 = timerFlag2 = true;
        }, 3000);
      } else if (delta >= 60) {
        waves("medium-wave");
        setInterval(() => {
          animating = false;
          timerFlag1 = timerFlag2 = true;
        }, 2250);
      } else {
        waves("easy-wave");
        setInterval(() => {
          animating = false;
          timerFlag1 = timerFlag2 = true;
        }, 2000);
      }
    }, 200);
  }
});
