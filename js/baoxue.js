$(".jianianhua").on("click", function () {
  $(".Navbar-modalContent").toggle();
});
let oBox2 = $("#blizzcon-navbar").offset().top;
$(document).scroll(function () {
  if ($(document).scrollTop() >= oBox2) {
    $("#blizzcon-navbar").css({
      position: "fixed",
      top: -20,
    });
  } else {
    $("#blizzcon-navbar").css({
      position: "absolute",
      top: 40,
    });
  }
});
