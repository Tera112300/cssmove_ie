$(function(){
    var $main = $("#main");
    var $bg_wrap = $(".bg_wrap");
    var bg_width;
    var bg_height;
    var string_pxz;
    bg_width = $bg_wrap.innerWidth().toString();
                 bg_height = $bg_wrap.innerHeight().toString();
                 string_pxz = bg_width + "px " + bg_height  + "px";
                $bg_wrap.children("li").css({"background-size":string_pxz});
                $bg_wrap.find("hr.line").css({"background-size":string_pxz});
    on_Add($main);
    $(window).on("resize",function(){
        bg_width = $bg_wrap.innerWidth().toString();
        var bg_height = $bg_wrap.innerHeight().toString();
        var string_pxz = bg_width + "px " + bg_height  + "px";
       $bg_wrap.children("li").css({"background-size":string_pxz});
       $bg_wrap.find("hr.line").css({"background-size":string_pxz});
    });
    function on_Add(target) {
        var onArray = {
          decoration:500,
          decoration02:5900,
          on01: 3000,
          on02: 2750,
          on03: 2050,
          on04: 1500,
          on05: 1500,
          on06: 1500,
          on07: 2000,
          on08: 3500,
          on09: 2500,
          stop: 0
        };
        function moving() {
          var moving = "moving";
          $main.addClass(moving).delay(10).queue(function () {
            $(this).removeClass(moving);
          });
        }
        $("#skip").on("click", function () {
          $main.addClass("moving");
          $main.addClass("decoration decoration02 on01 on02 on03 on04 on05 on06 on07 on08 on09 stop");
          setTimeout(function () {
            $main.removeClass("moving");
          }, 100);
        });
        $("#replay").click(function () {
          $main.removeClass("decoration decoration02 on01 on02 on03 on04 on05 on06 on07 on08 on09 stop").finish();
          $main.addClass("moving");
          setTimeout(function () {
            $main.removeClass("moving");
          }, 20);
          setTimeout(function () {
            on_Add($main);
          }, 100);
        });
        /*onArrayでループ*/
        $.each(onArray, function (index, val) {
            target.delay(val).queue(function () {
            $(this).addClass(index).dequeue();
            // if(index == "on01"){
                 
            // }
          });
        });
      }
});