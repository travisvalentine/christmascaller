var layoutCoal = function(){
  $(".main").css("background-color", "#1C090B");
  $("body").css("color", "#fff");
  $("input:submit").removeClass("green");
  $("input:submit").addClass("black");
  $(".footer").removeClass("red");
  $(".footer").addClass("black");
  $(".center h1").text("Let someone know they're getting coal.");
};

var layoutGift = function(){
  $(".main").css("background-color", "#A32C28");
  $("body").css("color", "#F5F4D7");
  $("input:submit").removeClass("black");
  $("input:submit").addClass("green");
  $(".footer").removeClass("black");
  $(".footer").addClass("red");
  $(".center h1").text("Let someone know their gifts are being made.");
};

$(function(){
  $("input[type='radio']").change(function(){
    var type = $("input[type='radio']:checked").val();
    if(type === "coal") {
      layoutCoal();
    } else if(type === "gift") {
      layoutGift();
    }
  });

  $('.ui.radio.checkbox').checkbox();

  $("input[name='message[to_name]']").keyup(function(e) {
    var name = $(this).val();
    var preview = $(".ui.message.preview");
    var visible = preview.is(":visible");

    console.log(name);
    console.log(preview);
    console.log(visible);

    if( name === "" && visible ){
      preview.toggle();
      preview.text("")
    } else if ( name !== "" && !visible ){
      preview.toggle();
      preview.text(name + ", we wanted to let you know that")
    } else if ( name !== "" && visible ) {
      preview.text(name + ", we wanted to let you know that")
    };
  });
});
