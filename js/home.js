$(".nav2").on("mouseover", function () {
  $(".nav2 ul").show();
});
$(".nav2").on("mouseout", function () {
  $(".nav2 ul").hide();
});
$(".nav3").on("mouseover", function () {
  $(".nav3 ul").show();
});
$(".nav3").on("mouseout", function () {
  $(".nav3 ul").hide();
});
$(".nav4").on("mouseover", function () {
  $(".nav4 ul").show();
});
$(".nav4").on("mouseout", function () {
  $(".nav4 ul").hide();
});
$(".nav5").on("mouseover", function () {
  $(".nav5 ul").show();
});
$(".nav5").on("mouseout", function () {
  $(".nav5 ul").hide();
});
$(".nav8").on("mouseover", function () {
  $(".nav8 ul").show();
});
$(".nav8").on("mouseout", function () {
  $(".nav8 ul").hide();
});
$(".pc").on("click", function () {
  $(".pc").addClass("actives");
  $(this).parent("li").siblings("li").children("a").removeClass("actives");
  $(".downloadBtn").css({ display: "block" });
  $(".downloadBtnpc").css({ display: "block" });
  $(".downloadBtnios").css({ display: "none" });
  $(".downloadBtnios-pc").css({ display: "none" });
  $(".downloadBtnandroid").css({ display: "none" });
});
$(".ios").on("click", function () {
  $(".ios").addClass("actives");
  $(this).parent("li").siblings("li").children("a").removeClass("actives");
  $(".downloadBtnios").css({ display: "block" });
  $(".downloadBtnios-pc").css({ display: "block" });
  $(".downloadBtn").css({ display: "none" });
  $(".downloadBtnpc").css({ display: "none" });
  $(".downloadBtnandroid").css({ display: "none" });
});
$(".android").on("click", function () {
  $(".android").addClass("actives");
  $(this).parent("li").siblings("li").children("a").removeClass("actives");
  $(".downloadBtnandroid").css({ display: "block" });
  $(".downloadBtn").css({ display: "none" });
  $(".downloadBtnpc").css({ display: "none" });
  $(".downloadBtnios").css({ display: "none" });
  $(".downloadBtnios-pc").css({ display: "none" });
});
