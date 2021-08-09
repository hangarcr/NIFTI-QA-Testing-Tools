$(".accordion-header").each(function(){
      
	$(this).click();
  
});
/*$(".accordion-header.grey").each(function(){
      
	$(this).click();
  
});*/

$(".accordion-child-header").each(function(){
      
	$(this).click();
});
$(".c_285_show-more_button_label").each(function(){
      
	$(this).click();
});

$("div.answers.visually-hidden").each(function(){
      
	$(this).attr("class","answers");
});

$("div.accordion-panel.accordion-animation-complete").each(function(){
      
	$(this).attr("style","display: block;");
	$(this).attr("data-state","open;");
});