document.addEventListener("DOMContentLoaded", function() {
    var video = document.getElementById("intro-video");
  
    video.onended = function() {
      redirectToMainSite();
    };
  
    setTimeout(redirectToMainSite, 9000); // Fallback in case video doesn't play or end event doesn't fire
  
    function redirectToMainSite() {
      window.location.href = "https://academicpal.vercel.app/"; // Replace with the URL of the main site
    }
  });
  