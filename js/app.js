$(function () {
  $("#fullpage").fullpage({
    navigation: true,
    scrollingSpeed: 1500,

    // 第二屏
    afterLoad: function (anchorLink, index) {
      if (index == 2) {
        $(".phone1").animate(
          {
            top: 25,
          },
          600
        );
        $(".txt1").animate(
          {
            left: -20,
          },
          600
        );
      }
      if (index == 3) {
        $(".phone2").animate(
          {
            top: 0,
          },
          600
        );
        $(".txt2").animate(
          {
            left: -140,
          },
          600
        );
      }
      if (index == 4) {
        $(".phone3").animate(
          {
            top: 400,
          },
          600
        );
        $(".txt3").animate(
          {
            left: -120,
          },
          600
        );
      }
      if (index == 5) {
        $(".phone4").animate(
          {
            top: 50,
          },
          600
        );
        $(".txt4").animate(
          {
            left: 0,
          },
          600
        );
      }
      if (index >= 2) {
        $(".gotop").show();
      } else {
        $(".gotop").hide();
      }
      if (index == 6) {
        $("g-download").show();
      } else {
        $("g-download").hide();
      }
    },
  });
});
$(".jianianhua").on("click", function () {
  $(".Navbar-modalContent").toggle();
});
function getLoc() {
  if ($(".box").hasClass("xuanfuchuangma")) {
    $(".box").removeClass("xuanfuchuangma");
  } else {
    $(".box").addClass("xuanfuchuangma");
  }
  console.log($(".box").hasClass("xuanfuchuangma"));
}
$(function () {
  setInterval(getLoc, 3000);
});
$(".xiaoguo").on("click", function () {
  $(".xianshi").toggle();
});
$(".close").on("click", function () {
  $(".g-download").hide();
});
