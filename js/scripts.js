$(document).ready(function() {
  $(".click-me").click(function() {
    this.classList.add("hide");
    document.querySelector('.walrus-container').classList.add("show");
  })
});

