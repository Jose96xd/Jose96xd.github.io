// This function moves the user view to the top of the web smoothly
function toTop()
{
  window.scrollTo({top: 0, behavior: 'smooth'});
}
// This function makes the button disappear when the user is in the top of the web.
window.addEventListener('scroll', function(){
  var scroll = document.querySelector('.fab');
  scroll.classList.toggle("active", window.scrollY > 100);
})