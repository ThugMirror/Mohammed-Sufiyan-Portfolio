function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.style.width = (sidebar.offsetWidth === 0) ? '250px' : '0';
  }
// Text animation
// const roleElement = document.getElementById('role');

//   function updateRole() {
//     const roleTexts = roleElement.querySelectorAll('.role-text');
//     roleTexts.forEach(text => text.classList.toggle('hide'));
//   }

//   setInterval(updateRole, 6000); // Change role every 6 seconds

 // Initialize Slick Carousel
//  $('.project-carousel').slick({
//   dots: true,
//   infinite: true,
//   speed: 500,
//   fade: true,
//   cssEase: 'linear'
// });

function rotate(){
  var lastChild = $('.shoe-carousel div:last-child').clone();
  $('.shoe-carousel div').removeClass('firstSlide')
  $('.shoe-carousel div:last-child').remove()
  $('.shoe-carousel ').prepend(lastChild)
  $(lastChild).addClass('firstSlide')
}

window.setInterval(function(){
  rotate()
},4000);

// Carousel
var counter = 1;
      setInterval(function(){
        document.getElementById('carousel' + counter).checked = true;
        counter++;
        if(counter>5){
          counter = 1;
        }
      }, 5000);

var count = 1;
    setInterval(function(){
       document.getElementById('slide' + count).checked = true;
       count++;
       if(count>3){
          count = 1;
        }
    }, 5000);

    function goBack() {
      window.history.back();
    }

    // Hamburger
    function toggleSidebar() {
      var sidebar = document.getElementById('sidebar');
      var ham = document.getElementById('ham');
      
      sidebar.classList.toggle('active');
      ham.classList.toggle('active');
  }

  // Social media 
  function openSocialMedia(url) {
    window.open(url, '_blank'); // Open the URL in a new tab or window
}