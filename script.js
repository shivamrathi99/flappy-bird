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
