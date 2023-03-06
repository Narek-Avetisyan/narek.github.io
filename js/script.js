$(function () {
  $(".open-menu").on("click", function () {
    $(".bottom, .overlay").show();
    $("body, html").addClass("active");
    $(".overlay").on("click", function () {
      $(".bottom, .overlay").hide();
      $("body, html").removeClass("active");
    });
  });

  $(".search a").on("click", function () {
    $(".open-search").slideToggle();
  });

  $(".brand-logos").slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
  });

  $(".tabs li").on("click", function () {
    let ind = $(this).index();
    $(".tabs li").removeClass("active");
    $(this).addClass("active");
    $(".product-wrap").removeClass("products-opened");
    $(".product-wrap").eq(ind).addClass("products-opened");
  });

  $(".tabs-two li").on("click", function () {
    let ind = $(this).index();
    $(".tabs-two li").removeClass("active");
    $(this).addClass("active");
    $(".best-wrap").removeClass("products-opened-two");
    $(".best-wrap").eq(ind).addClass("products-opened-two");
  });

  $("form").on("submit", function () {
    let val = $("input").val();

    if (val.trim().length < 1) {
      $("input").css("border-bottom", "2px solid red");
      return false;
    }
  });

  $(".scroll").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 2000);
    return false;
  });
});
