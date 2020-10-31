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


// This method calls the displayCurrentTime function when loading the web.
window.onload = function() {
  displayCurrentTime();
}

// Method that ask the wordltimeapi what day of the year is and displays it under the generic html picture.
function displayCurrentTime(){
  //var data = "http://worldtimeapi.org/api/timezone/Europe/Madrid";
  $.getJSON("https://worldtimeapi.org/api/timezone/Europe/Madrid", function(data) {
      document.getElementById("apiDataHolder").innerHTML="Day: " + data.day_of_year + " of 365.";
  }); 
    
}   
