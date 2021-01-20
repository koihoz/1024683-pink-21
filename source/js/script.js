
  var pageHeader = document.querySelector(".page-header");
  var pageHeaderToggle = document.querySelector(".page-header__toggle");

  pageHeader.classList.remove("page-header--nojs");
  pageHeader.classList.add("page-header--closed");
  pageHeader.classList.remove("page-header--opened");

  pageHeaderToggle.addEventListener("click", function() {
    if (pageHeader.classList.contains("page-header--closed")) {
      pageHeader.classList.remove("page-header--closed");
      pageHeader.classList.add("page-header--opened");
    } else {
      pageHeader.classList.add("page-header--closed");
      pageHeader.classList.remove("page-header--opened");
    }
  });
