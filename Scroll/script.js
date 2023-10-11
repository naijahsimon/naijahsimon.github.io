
AOS.init()

$(document).ready(function(){
    $("blocks").click(function(){
      $("#div1").fadeTo(1000, 0.15);
      $("#div2").fadeTo(1000, 0.4);
      $("#div3").fadeTo(1000, 0.7);
      $("#div4").fadeTo(1000, 0.7);
      $("#div5").fadeTo(1000, 0.7);
      $("#div6").fadeTo(1000, 0.7);
    });
  });

document.addEventListener("DOMContentLoaded", function () {
  const scrollButton = document.getElementById("scrollButton");
  const scrollTarget = document.getElementById("scrollTarget");
  scrollButton.style.display = "none";
  scrollButton.addEventListener("click", function () {
      scrollTarget.scrollIntoView({
          behavior: "smooth",
      });

      scrollButton.style.display = "none";
  });
  window.addEventListener("scroll", function () {
      if (window.scrollY<500) {
          scrollButton.style.display = "block";
      } else {
          scrollButton.style.display = "none";
      }
  });
});
