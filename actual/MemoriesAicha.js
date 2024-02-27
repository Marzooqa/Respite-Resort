function checkForVisibility() {
    var headers = document.querySelectorAll(".trans");
    headers.forEach(function(header) {
      if (isElementInViewport(header)) {
        header.classList.add("headerVisible");
      } else {
        header.classList.remove("headerVisible");
      }
    });
  }
  
  function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
  
    return (
      rect.top >= 0   &&
      rect.bottom <=document.documentElement.clientHeight
    );
  }
  
  if (window.addEventListener) {
    addEventListener("scroll", checkForVisibility);
  }