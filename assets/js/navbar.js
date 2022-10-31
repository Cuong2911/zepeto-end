
// nav show
const navshowElement = $('.menu-show');
navshowElement.onclick = function() {
    $('nav.navbar').classList.add('show');
}
// nav close
const navCloseElement = $('.nav-close');
navCloseElement.onclick = function() {
    $('nav.navbar').classList.remove('show');
}
// nav overlay close
const navOverlayElement = $('.nav-overlay');
navOverlayElement.onclick = function() {
    $('nav.navbar').classList.remove('show');
}