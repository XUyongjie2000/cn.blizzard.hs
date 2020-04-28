$(".jianianhua").on("click", function () {
  $(".Navbar-modalContent").toggle();
});

$(".Menu1").mouseenter(function () {
  $(".Menu-dropdown1").show();
});
$(".Menu1").mouseleave(function () {
  $(".Menu-dropdown1").hide();
});
$(".Menu2").mouseenter(function () {
  $(".Menu-dropdown2").show();
});
$(".Menu2").mouseleave(function () {
  $(".Menu-dropdown2").hide();
});
$(".Menu3").mouseenter(function () {
  $(".Menu-dropdown3").show();
});
$(".Menu3").mouseleave(function () {
  $(".Menu-dropdown3").hide();
});
$(".Menu4").mouseenter(function () {
  $(".Menu-dropdown4").show();
});
$(".Menu4").mouseleave(function () {
  $(".Menu-dropdown4").hide();
});
$(".Menu6").mouseenter(function () {
  $(".Menu-dropdown6").show();
});
$(".Menu6").mouseleave(function () {
  $(".Menu-dropdown6").hide();
});
$(".modalCloseIcon").on("click", function () {
  $(".novice2").hide();
  $(".novice3").hide();
  $(".novice2")[0].pause();
});
$(".video_play_icon").on("click", function () {
  $(".novice2").show();
  $(".novice3").show();
  $(".novice2")[0].play();
});
$(".novice5").on("click", function () {
  $(".novice2").show();
  $(".novice3").show();
  $(".novice2")[0].play();
});
