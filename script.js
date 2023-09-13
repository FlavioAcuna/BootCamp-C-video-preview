console.log("page loaded...");

function over(element) {
  element.play();
  element.muted = true;
}
function out(element) {
  element.pause();
  element.muted = true;
}
function click(element) {
  element.play();
}
