function scrollToDivAboutUs() {
    var targetDiv = document.getElementById("targetDiv");
    targetDiv.scrollIntoView({ behavior: 'smooth' });
  }

  window.onload = function() {
    var target = window.location.hash || window.location.search;
    if (target) {
      var targetDiv = document.querySelector(target);
      if (targetDiv) {
        targetDiv.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };