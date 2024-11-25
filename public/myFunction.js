function updateDimensions() {
var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
var height = window.innerHeight || document.documentElement.clientHeight ||
document.body.clientHeight;
document.getElementById('dimensions').innerHTML = width + 'px x ' + height + 'px';
}
window.onresize = updateDimensions;
window.onload = updateDimensions;