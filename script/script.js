$(function () {
  /* Menu */
  $("img#menu").click(function () {
    $("aside").show();
  });
  $("aside #backgroundnav").click(function () {
    $("aside").hide();
  });

  /* Tema */
  $("img#tema").click(function () {
    $("header, #primer, #tercer, footer, #cinque, #sise .flex div").toggleClass(
      "temaclaro"
    );
    $("header, #primer, #tercer, footer").toggleClass("temaclarospan");
    $('img[src="img/logo/Logowhite.webp"], header img, #2dimg img').toggleClass(
      "dark-mode-img"
    );
    $("#segon, #quart, #sise").toggleClass("temaclaro2");
    $("#segon div div").toggleClass("temaclaroinner");
    $("#quart div").toggleClass("temaclaroinner2");

    $("#btn1").toggleClass("temaclarobotones");
    $("#btn2").toggleClass("temaclarobotones2");
    $("#oscur").toggleClass("temaclaroimg");
  });
});
