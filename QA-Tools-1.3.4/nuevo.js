

$(".freeEditorial.freeEditorialParsys.parsys").attr("id","page_content");

const injectedCode='<style>'

+'a:hover,  a.selected  {background-color: rgba(56, 175, 196, 0.356)!important;-webkit-print-color-adjust: exact;color-adjust: exact;}'
+'a {padding: 5px;}'
+'.c_272_link:hover,  .c_272_link.selected  {background-color: rgba(56, 175, 196, 0.356)!important;-webkit-print-color-adjust: exact;color-adjust: exact;}'
+'.c_272_link {padding: 5px;}'
+'.c_272_copy:hover,  .c_272_copy.selected  {background-color: rgba(56, 175, 196, 0.356)!important;-webkit-print-color-adjust: exact;color-adjust: exact;}'
+'.c_272_copy {padding: 5px;}'
+'p:hover,  p.selected  {background-color: rgba(56, 175, 196, 0.356)!important;-webkit-print-color-adjust: exact;color-adjust: exact;}'
+'p {padding: 5px;}'
+'span:hover,  span.selected  {background-color: rgba(56, 175, 196, 0.356)!important;-webkit-print-color-adjust: exact;color-adjust: exact;}'
+'span {padding: 5px;}'
+'li:hover,  li.selected  {background-color: rgba(56, 175, 196, 0.356)!important;-webkit-print-color-adjust: exact;color-adjust: exact;}'
+'li {padding: 5px;}'
+'h1:hover,  h1.selected  {background-color: rgba(56, 175, 196, 0.356)!important;-webkit-print-color-adjust: exact;color-adjust: exact;}'
+'h1 {padding: 5px;}'
+'h2:hover,  h2.selected  {background-color: rgba(56, 175, 196, 0.356)!important;-webkit-print-color-adjust: exact;color-adjust: exact;}'
+'h2 {padding: 5px;}'
+'h3:hover,  h3.selected  {background-color: rgba(56, 175, 196, 0.356)!important;-webkit-print-color-adjust: exact;color-adjust: exact;}'
+'h3 {padding: 5px;}'
//Class nissan
+'.c_278_tile_copy usg-body:hover,  .c_278_tile_copy usg-body.selected  {background-color: rgba(56, 175, 196, 0.356)!important;-webkit-print-color-adjust: exact;color-adjust: exact;}'
+'.c_278_tile_copy usg-body {padding: 5px;}'
+'.usg-body:hover,  .usg-body.selected  {background-color: rgba(56, 175, 196, 0.356)!important;-webkit-print-color-adjust: exact;color-adjust: exact;}'
+'.usg-body {padding: 5px;}'
+'</style>';
var script = document.createElement("span");
script.innerHTML = injectedCode;

(document.head).appendChild(script);
document.body.insertBefore(script,document.body.childNodes[0]);

$(jQuery("#page_content").find("div")).click(function(){
  $(this).addClass("selected");//.siblings().removeClass("selected");
});



/*var tbl = $('#specs');


function moveColumn(table, from, to) {
    var rows = jQuery('tr', table);
    var cols;
    rows.each(function() {
        cols = jQuery(this).children('th, td');
        cols.eq(from).detach().insertBefore(cols.eq(to));
    });
}


    var count=0;

    $('#specs').find('th').not('[style]').each(function(){
      console.log(this);
      if(count === 1 && count !== $('#specs').find('th').not('[style]').length-1)
      {
      var button = document.createElement("input");
      button.setAttribute("type", "button");
      button.setAttribute("id", "btn_move_Right"+count);
      this.appendChild(button);
        //$(this).attr("class","answers");
        
        $("#btn_move_Right"+count).click(function(){
          moveColumn(tbl, 2, 1);
          $("#btn_move_Right"+count+1).click(function(){
            moveColumn(tbl, 2, 1);
            
            });
          });
          
      }
      if(count === 2 && count !== $('#specs').find('th').not('[style]').length-1)
      {
        var button = document.createElement("input");
      button.setAttribute("type", "button");
      button.setAttribute("id", "btn_move_Right"+count);
      this.appendChild(button);
        //$(this).attr("class","answers");
        
        $("#btn_move_Right"+count).click(function(){
          moveColumn(tbl, 3, 2);
          $("#btn_move_Right"+count-1).click(function(){
            moveColumn(tbl, 3, 2);
            
            });
          });
          
      }
      
      count++;
    });*/
    var date = new Date();
    var Style_black ='<style> table.darkTable {font-family: Arial, Helvetica, sans-serif;border: 2px solid #000000;background-color: #4A4A4A;width: 100%;height: 200px;text-align: center;border-collapse: collapse;}table.darkTable td, table.darkTable th {border: 1px solid #4A4A4A;padding: 3px 2px;}table.darkTable tbody td {font-size: 13px;color: #E6E6E6;}table.darkTable tr:nth-child(even) {background-color: #323232;}table.darkTable thead {background: #000000;border-bottom: 3px solid #000000;}table.darkTable thead th {font-size: 15px;font-weight: bold;color: #E6E6E6;text-align: center;border-left: 2px solid #4A4A4A;}table.darkTable thead th:first-child {border-left: none;}table.darkTable tfoot {font-size: 12px;font-weight: bold;color: #E6E6E6;background: #000000;background: -moz-linear-gradient(top, #404040 0%, #191919 66%, #000000 100%);background: -webkit-linear-gradient(top, #404040 0%, #191919 66%, #000000 100%);background: linear-gradient(to bottom, #404040 0%, #191919 66%, #000000 100%);border-top: 1px solid #4A4A4A;}table.darkTable tfoot td {font-size: 12px;}</style>';
    var Titulo_table_disclaimers='<table class="darkTable" id="disclaimers"><thead><tr><th>Copy</th>';
    var Titulo_END='</tr>';
    var URL='<div><table class="darkTable" id="url"><thead><tr><th width="50%" id="text-current">Current URL</th><th> <a href= "'+document.location.href+'"  style="color:#10A419;">'+document.location.href+'</a> </th></tr></div>'; 
    var DATE_HTML='<table class="darkTable" id="date"><thead><tr><th width="50%">Date</th><th> '+date+'</th></tr>'; 

    var tbody_1='<tbody>';
    var tbody_2='</tbody>';
    var HTML_end='</table> ';
    var tabla='';
    
   //var injectedCode='';
    $(".freeEditorial.freeEditorialParsys.parsys").attr("id","page_content");
    $(jQuery("#page_content").find("div.c_008.asterisk")).each( function(){
      console.log(this.parentNode.outerText);
      tabla=tabla+'<tr><td>'+this.parentNode.innerHTML+'</td><tr>';
    });

    var inyectar= Style_black+URL+DATE_HTML+Titulo_table_disclaimers+Titulo_END+tbody_1+tabla+tbody_2+HTML_end;

var div = document.createElement("div");
div.setAttribute("id", "copy_disc");
div.innerHTML = inyectar;
document.body.insertBefore(div,document.body.childNodes[0]);
