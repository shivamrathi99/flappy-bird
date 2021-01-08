var canvas = document.querySelector("#mycanvas");
var heightratio = 0.3;
console.log("SS", canvas.width);
canvas.style.height = `${canvas.width * heightratio}vh`;
console.log(canvas.style.height);
function toggleFullScreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
    document.getElementById("p1").innerHTML = "Click To Exit FullScreen";
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
      document.getElementById("p1").innerHTML = "Click To Enter FullScreen";
    }
  }
}
