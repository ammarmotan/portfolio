// typo //
document.addEventListener("DOMContentLoaded", function() {
  const typingText = document.getElementById("typing-text");
  const sentences = ["Software Engineer", "Front-End Developer", "Back-End Developer"];
  let sentenceIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingSpeed = 100;

  function type() {
      const currentSentence = sentences[sentenceIndex];
      if (!isDeleting && charIndex < currentSentence.length) {
          typingText.textContent += currentSentence.charAt(charIndex);
          charIndex++;
          typingSpeed = 100; // Typing speed
      } else if (isDeleting && charIndex > 0) {
          typingText.textContent = currentSentence.substring(0, charIndex - 1);
          charIndex--;
          typingSpeed = 50; // Deleting speed
      }

      if (!isDeleting && charIndex === currentSentence.length) {
          typingSpeed = 2000; // Pause before deleting
          isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
          isDeleting = false;
          sentenceIndex = (sentenceIndex + 1) % sentences.length;
          typingSpeed = 500; // Pause before typing next sentence
      }

      setTimeout(type, typingSpeed);
  }

  type();
});
// typo //
// navbar//
$(document).ready(function () {
  $(window).scroll(function () {
    if ($(window).scrollTop() > 0) {
      $("nav").css("background-color", "white");
      $(".navbar-brand").css("color", "black");
      $("nav").css("border-color", "white");
      $(".navbar-toggler").css("color", "black");
      $(".nav-link").css("color", "black");
    }
    else {
      $("nav").css("background-color", "transparent");
      $(".navbar-brand").css("color", "white");
      $("nav").css("border-color", "#989898");
      $(".nav-link").css("color", "white");
      $(".navbar-toggler").css("color", "white");
    }
  });
});
// navbar//

// cv //
function down(){
  swal("Downloaded!", "My Cv is downloaded go and Check!", "success");
}
// cv //


// project //
document.addEventListener("mousemove", function(){
  let pro=document.getElementById("pro");
  let liv=document.getElementById("live");
  if(pro){
    liv.style.display="active";
  }
})
// project //

// click //
const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'service_bzgiuot';
   const templateID = 'template_x53efkh';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
      swal("Submited!", "Thankyou! Form is Submited", "success");
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});
// function click(){
// var params ={
//   from_name : document.getElementById("name").value,
//   email_id : document.getElementById("email").value,
//   message : document.getElementById("msg").value
// }
// emailjs.send("service_bzgiuot" , "template_x53efkh" , params).then(function (res){
//   alert("success");
// })
// }
// click //