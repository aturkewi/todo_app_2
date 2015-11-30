// This is shorthand for $( document ).ready(function() { })
$(function(){
  $("form").submit(function(event){
    event.preventDefault();

    var action = $(this).attr('action');
    var method = $(this).attr('method');
    
  })
});
