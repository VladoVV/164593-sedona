var buttonLink = document.querySelector(".form-search-title"); 
var form = document.querySelector(".search");

  document.addEventListener("DOMContentLoaded", function(event){
  event.preventDefault();
  form.classList.add("js-form");

    var popupForm = document.querySelector(".search");
    var dateArrival = popupForm.querySelector("[name=date-arrival]");
    var dateDeparture = popupForm.querySelector("[name=date-departure]");
    var adults = popupForm.querySelector("[name=adults]");
    var children = popupForm.querySelector("[name=children]");
    var storageAdults = localStorage.getItem("adults");
    var storageChildren = localStorage.getItem("children");

    buttonLink.addEventListener("click", function(event) {
            event.preventDefault();
            popupForm.classList.add("form-content-show");
            dateArrival.focus();
        });

    form.addEventListener("submit", function(event) {
        if (!dateArrival.value || !dateDeparture.value || !adults.value || !children.value) {
            event.preventDefault();
            console.log("Заполните все поля");
        } else {
            localStorage.setItem("adults", adults.value);
            localStorage.setItem("children", children.value);
        }
    });
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (popupForm.classList.contains("form-content-show")) {
      popupForm.classList.remove("form-content-show");
    }
  }
});
