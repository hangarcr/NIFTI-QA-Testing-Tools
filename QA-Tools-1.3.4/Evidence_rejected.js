$(".freeEditorial.freeEditorialParsys.parsys").attr("id","page_content");
$('#color_hover').remove();


var injectedCode='<style>'
//+'a:hover,  a.selected  {background-color: rgba(196, 56, 56, 0.356)!important;-webkit-print-color-adjust: exact;color-adjust: exact;}'
+'.c_272_link:hover,  .c_272_link.selected  {background-color: rgba(196, 56, 56, 0.356)!important;-webkit-print-color-adjust: exact;color-adjust: exact;}'
+'.c_272_copy:hover,  .c_272_copy.selected  {background-color: rgba(196, 56, 56, 0.356)!important;-webkit-print-color-adjust: exact;color-adjust: exact;}'
+'p:hover,  p.selected  {background-color: rgba(196, 56, 56, 0.356)!important;-webkit-print-color-adjust: exact;color-adjust: exact;}'
+'a:hover,  a.selected  {background-color: rgba(196, 56, 56, 0.356)!important;-webkit-print-color-adjust: exact;color-adjust: exact;}'
+'span:hover,  span.selected  {background-color: rgba(196, 56, 56, 0.356)!important;-webkit-print-color-adjust: exact;color-adjust: exact;}'
+'li:hover,  li.selected  {background-color: rgba(196, 56, 56, 0.356)!important;-webkit-print-color-adjust: exact;color-adjust: exact;}'
+'h1:hover,  h1.selected  {background-color: rgba(196, 56, 56, 0.356)!important;-webkit-print-color-adjust: exact;color-adjust: exact;}'
+'h2:hover,  h2.selected  {background-color: rgba(196, 56, 56, 0.356)!important;-webkit-print-color-adjust: exact;color-adjust: exact;}'
+'h3:hover,  h3.selected  {background-color: rgba(196, 56, 56, 0.356)!important;-webkit-print-color-adjust: exact;color-adjust: exact;}'
//Class nissan
+'.c_278_tile_copy usg-body:hover,  .c_278_tile_copy usg-body.selected  {background-color: rgba(196, 56, 56, 0.356)!important;-webkit-print-color-adjust: exact;color-adjust: exact;}'
+'.usg-body:hover,  .usg-body.selected  {background-color: rgba(196, 56, 56, 0.356)!important;-webkit-print-color-adjust: exact;color-adjust: exact;}'
+'.qtip-content:hover,  .qtip-content.selected  {background-color: rgba(196, 56, 56, 0.356)!important;-webkit-print-color-adjust: exact;color-adjust: exact;}'
+'.gallery-carousel-slide-content-copy:hover,  .gallery-carousel-slide-content-copy.selected  {background-color: rgba(196, 56, 56, 0.356)!important;-webkit-print-color-adjust: exact;color-adjust: exact;}'
+'.c_274-image:hover,  .c_274-image.selected  {background-color: rgba(196, 56, 56, 0.356)!important;padding: 5px;}'
+'.c_272_image:hover,  .c_272_image .selected  {background-color: rgba(196, 56, 56, 0.356)!important;padding: 5px;}'
+'.lazyloaded:hover,  .lazyloaded.selected  {background-color: rgba(196, 56, 56, 0.356)!important;padding: 5px;}'
+'.c_338-1-image:hover,  .c_338-1-image.selected  {background-color: rgba(196, 56, 56, 0.356)!important;padding: 5px;}'
+'.carousel-pfa_slide_hero_image--pin-center:hover,  .carousel-pfa_slide_hero_image--pin-center {background-color: rgba(196, 56, 56, 0.356)!important;padding: 5px;}'
+'</style>';
var script = document.createElement("span");
script.setAttribute("id", "color_hover");
script.innerHTML = injectedCode;

(document.head).appendChild(script);
document.body.insertBefore(script,document.body.childNodes[0]);

$(jQuery("#page_content").find("*")).click(function(){
    if($(this).hasClass("selected"))
    {
        $(this).removeClass("selected")
    }
    else
    {
        $(this).addClass("selected");//.siblings().removeClass("selected");
    }
  
});