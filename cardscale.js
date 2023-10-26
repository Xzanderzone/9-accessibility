var toggler = document.getElementsByClassName("card-size-toggle");
var i;

for (i = 0; i < toggler.length; i++) {
  toggler[i].addEventListener("click", function() {
    this.classList.toggle("col-md-10");
  });
}