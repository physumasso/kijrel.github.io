$(function() {
  $('details').details();
  $("summary").on("click.lazyload", function(){
    var base = $(this).parent();
    base.find(".lazy").not(base.find("details .lazy")).each(function(){
      $(this).attr("src",$(this).attr("data-original"));
    });
    $(this).off("click.lazyload");
  });
});