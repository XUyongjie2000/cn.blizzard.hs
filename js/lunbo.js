jQuery(".information-main-fl").slide({
  mainCell: ".bd ul",
  effect: "leftLoop",
  autoPlay: true,
  trigger: "click",
  mouseOverStop: false,
}); //轮播

jQuery(".information-main-fr").slide({
  autoPlay: false,
  trigger: "mouseover",
  delayTime: 700,
  pnLoop: false,
}); //tab切换
