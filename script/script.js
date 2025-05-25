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
    $("header, #primer, #tercer, footer, #cinque").toggleClass("temaclaro");
    $("header, #primer, #tercer, footer").toggleClass("temaclarospan");
    $("#segon, #quart, #sise").toggleClass("temaclaro2");
    $("#segon div div").toggleClass("temaclaroinner");
    $("#quart div").toggleClass("temaclaroinner2");

    $("#btn1").toggleClass("temaclarobotones");
    $("#btn2").toggleClass("temaclarobotones2");
    $("#oscur").toggleClass("temaclaroimg");
  });
});
