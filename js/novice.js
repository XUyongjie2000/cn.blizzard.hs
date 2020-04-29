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
// 点击圆点 到对应位置
let slider = document.querySelector(".slider");
let ul = document.querySelector(".slider ul");
let ol = document.querySelector("ol");
for (let i = 0; i < $(".slider ul").children().length; i++) {
  let li = document.createElement("li");
  // li[i].index = i;
  if (i == 0) {
    li.classList.add("active");
  }
  console.log(i);
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
}
$("ol").on("click", "li", function () {
  $(this).addClass("active").siblings().removeClass("active");
  console.log($(this).index());
  animate(ul, {
    left: -$(this).index() * $(".slider ul li").width(),
  });
});
console.log($(".slider ul").children());
// var index = 0;
// var timer = setInterval(auto, 8000);
// function auto() {
//   if (index == ul.children.length - 1) {
//     ul.style.left = "0px";
//     index = 0; //重复从第一张开始滚动
//   }
//   index++;
//   $("ol li").eq(index).addClass("active").siblings().removeClass("active");
//   animate(ul, {
//     left: -index * $("ul>li").width(),
//   });
// }
