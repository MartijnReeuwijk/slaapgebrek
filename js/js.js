console.log("Hi");

$(document).ready(function(){
  $("nav").on('change',function(){
    var project = "#" + $(this).val();
    $.scrollTo($(project), 1000);
  });
});
