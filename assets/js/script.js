$(function(){

  $("a").click(function(event){
if (this.hash !== "") {
  event.preventDefault();

  var tag = this.hash;

  $("html, body").animate({
    scrollTop: $(tag).offset().top
  }, 800, function(){
    window.location.hash = tag;
  });
}
});
$('[data-toggle="popover"]').popover();

});
