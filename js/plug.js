$(".jianianhua").on("click", function () {
  $(".Navbar-modalContent").toggle();
});
// 轮播图
// 点击圆点 到对应位置
let slider = document.querySelector(".slider");
let ul = document.querySelector("ul");
let ol = document.querySelector("ol");
for (let i = 0; i < ul.children.length; i++) {
  let li = document.createElement("li");
  // li[i].index = i;
  if (i == 0) {
    li.classList.add("active");
  }
  ol.appendChild(li);
  // li.addEventListener("click", function () {
  //   // console.log(this);
  //   for (let j = 0; j < ol.children.length; j++) {
  //     ol.children[j].classList.remove("active");
  //   }
  //   this.classList.add("active");
  //   let index = this.index;
  //   console.log(this  );
  // });

  $("ol").on("click", "li", function () {
    $(this).addClass("active").siblings().removeClass("active");
    console.log($(this).index());
    animate(ul, {
      left: -$(this).index() * $("ul>li").width(),
    });
    $(".toptxt5").children().eq($(this).index()).show().siblings().hide();
  });
}

var index = 0;
var timer = setInterval(auto, 8000);
function auto() {
  if (index == ul.children.length - 1) {
    ul.style.left = "0px";
    index = 0; //重复从第一张开始滚动
  }
  index++;
  $("ol li").eq(index).addClass("active").siblings().removeClass("active");
  animate(ul, {
    left: -index * $("ul>li").width(),
  });
  $(".toptxt5").children().eq(index).show().siblings().hide();
}
$(".arrow").on("click", function () {
  $(this).parent().next().toggle();
});

$(".xiaoguo").on("click", function () {
  $(".xianshi").toggle();
});
$(".item1").on("click", function () {
  $(".item1").addClass("active");
  $(".item2").removeClass("active");
  $("#js_qaList").css({ display: "block" });
  $("#js_versionList").css({ display: "none" });
});
$(".item2").on("click", function () {
  $(".item2").addClass("active");
  $(".item1").removeClass("active");
  $("#js_qaList").css({ display: "none" });
  $("#js_versionList").css({ display: "block" });
});
