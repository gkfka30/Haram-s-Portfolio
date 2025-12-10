// $(function () {
//   let total = $(".w2 ul li").length;
//   let i = 0;
//   setInterval(function () {
//     if (i == total - 1) {
//       i = 0;
//     } else {
//       i++;
//     }
//     $(".w2 ul li").stop().fadeOut();
//     $(".w2 ul li").eq(i).stop().fadeIn();
//   }, 2000);
// });

// test
// $(function () {
//   $("li").on("mouseenter", function () {
//     $(this).find("h3").fadeIn();

//     $("p").css({ color: "#eee" });
//     $(this).find("p").css({ color: "#aaa" });

//     $("li").css({ width: "calc(100% / 5)" });
//     $(this).css({ width: "500px" });

//     $("li h3").hide();
//     $(this).find("h3").show();

//     $("span").hide();
//     $(this).find("span").show();

//     $("span").css({ color: "#eee" });
//     $(this).find("span").css({ "background-color": "#aaa" });
//   });
// });

// con06
// 날씨 이미지 슬라이드
setInterval(function () {
  $(".w2 ul").animate({ "margin-top": "100%" }, function () {
    $(".w2 ul li:first-child").appendTo(".w2 ul");
    $(".w2 ul").css({ "margin-top": "0px" });
  });
}, 2800);

// con07
// 영화 이미지 슬라이드
// linear easing 적용
setInterval(function () {
  $(".m1 > ul").animate(
    { "margin-left": "-100%" },
    {
      duration: 300, // 애니메이션 시간
      easing: "linear", // linear easing 적용
      complete: function () {
        $(".m1 > ul li:first-child").appendTo(".m1 ul");
        $(".m1 > ul").css({ "margin-left": "0%" });
      },
    }
  );
}, 2800);

// con08
// 팀프로젝트 상하슬라이드
// setInterval(function () {
//   $(".con08 .fu1 ul").animate({ "margin-top": "-100%" }, function () {
//     $(".con08 .fu1 ul li:first-child").appendTo(".con08 .fu1 ul");
//     $(".con08 .fu1 ul").css({ "margin-top": "0px" });
//   });
// }, 2800);

// con08
$(function () {
  let total = $(".fu1 > ul > li").length;
  let i = 0;
  setInterval(function () {
    if (i == total - 1) {
      i = 0;
    } else {
      i++;
    }
    $(".fu1 > ul > li").stop().fadeOut();
    $(".fu1 > ul > li").eq(i).stop().fadeIn();
  }, 2800);
});

// con11 여행사 슬라이드
setInterval(function () {
  $(".trip1 > ul").animate({ "margin-left": "-100%" }, function () {
    $(".trip1 > ul > li:first-child").appendTo(".trip1 > ul");
    $(".trip1 > ul").css({ "margin-left": "0px" });
  });
}, 2800);

// con14
// ca1 fadeInOut
$(function () {
  let total = $(".ca1 ul li").length;
  let i = 0;
  setInterval(function () {
    if (i == total - 1) {
      i = 0;
    } else {
      i++;
    }
    $(".ca1 ul li").stop().fadeOut();
    $(".ca1 ul li").eq(i).stop().fadeIn();
  }, 2800);
});

// ca2 slideUpDown
// setInterval(function () {
//   $(".ca2 ul").animate({ "margin-top": "-100%" }, function () {
//     $(".ca2 ul li:first-child").appendTo(".ca2 ul");
//     $(".ca2 ul").css({ "margin-top": "0px" });
//   });
// }, 3000);
