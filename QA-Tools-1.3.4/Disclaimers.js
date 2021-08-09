var date = new Date();
var Style_black ='<style> table.darkTable {table-layout: auto;font-family: Arial, Helvetica, sans-serif;border: 2px solid #000000;background-color: #323232;width: 100%;text-align: left;border-collapse: collapse;}table.darkTable td, table.darkTable th {border: 1px solid #4A4A4A;padding: 3px 2px;}table.darkTable tbody td {font-size: 12px;color: #E6E6E6;}table.darkTable tr:nth-child(even) {background: #323232;}table.darkTable thead {background: #000000;border-bottom: 3px solid #000000;}table.darkTable thead th {font-size: 15px;font-weight: bold;color: #E6E6E6;text-align: center;border-left: 2px solid #4A4A4A;}table.darkTable thead th:first-child {border-left: none;}table.darkTable tfoot {font-size: 12px;font-weight: bold;color: #E6E6E6;background: #000000;background: -moz-linear-gradient(top, #404040 0%, #191919 66%, #000000 100%);background: -webkit-linear-gradient(top, #404040 0%, #191919 66%, #000000 100%);background: linear-gradient(to bottom, #404040 0%, #191919 66%, #000000 100%);border-top: 1px solid #4A4A4A;}table.darkTable tfoot td {font-size: 12px;}</style>';
//var Titulo_table_disclaimers='<table class="darkTable" id="disclaimers"><thead><tr><th width="45%">Copy related with disclaimers</th><th width="5%">#</th><th width="5%">ID</th><th width="45%">Disclaimer copy</th>';
var Titulo_table_disclaimers='<table class="darkTable" id="disclaimers"><thead><tr><th width="5%">#</th><th width="5%">ID</th><th width="45%">Disclaimer copy</th><th width="45%">Copy related with disclaimers</th><thead><tr>';
var Titulo_table_disclaimers_TK='<table class="darkTable" id="tk"><thead><tr><th width="5%">#</th><th width="5%">ID</th><th width="45%">Copy related with disclaimers pending [TK]</th><thead><tr>';

var Titulo_END='</tr>';
var URL='<div><table class="darkTable" id="url"><thead><tr><th width="50%" id="text-current">Current URL</th><th> <a href= "'+document.location.href+'"  style="color:#10A419;">'+document.location.href+'</a> </th></tr></div>'; 
var DATE_HTML='<table class="darkTable" id="date"><thead><tr><th width="50%">Date</th><th> '+date+'</th></tr>'; 

var title_pag='<div ALIGN="CENTER"><img src="https://1.bp.blogspot.com/-fu_MKNZqr28/YJWTB2JNjmI/AAAAAAAAnDg/kdaCatgFo9o-7pxCOmILZUXP52mF9T_egCNcBGAsYHQ/s0/Disclaimers%2Btool.png" ALIGN="CENTER" /></div>';
var Credits='<div ALIGN="CENTER"><img  src="https://3.bp.blogspot.com/-4YKtKVb0bZU/XsF6ulF8_yI/AAAAAAAAjHI/-RLxHxPrkeoni_y2XW8UW8JFqzhtw4lLgCNcBGAsYHQ/s1600/Credits.png" ALIGN="CENTER" /></div>';


var tbody_1='<tbody>';
var tbody_2='</tbody>';
var HTML_end='</table> ';
var tabla='';
var tabla_tk='';
var copy='';
//Functions
//Extraer [TK]
function extraer_tk(Class,element_id){
  $(jQuery("#"+element_id).find(Class+":contains('[TK]')")).each(function(){
    count_tk++;
      console.log(count_tk);
      console.log(this.innerText);
      tabla_tk=tabla_tk+'<tr><td style="text-align:center">'+count_tk+
    '</td><td style="color: red; text-align:center;"> TBD'+
    '</td><td>'+this.innerText
    +'</td></tr>';
    
  });

}
//Extraer copy de disclaimers en mosaico
function copy_disc_mosaic(copy) {
  var array_disc=[];
var result='';
if(copy.includes('[['))
{
  var array_split=copy.split('[[');
  for(let i=1;i<array_split.length;i++)
  {
    var id_array=array_split[i].replace(']]','').trim()
    
    $("div.tooltip-panel.disclaimer-tooltip").each(function(){
      var id=this.dataset.tooltipId.replace("disclaimer-", "");
      id = id.substring(0, id.indexOf('-'));
   
      if(id === undefined)
      {
        id=this.dataset.tooltipId.replace("disclaimer-", "");
        id = id.substring(0, id.indexOf('-')); 
      }
      if(id_array === id)
      {
        result=this.children[1].innerText;
        tabla=tabla+'<tr><td style="text-align:center">'+row_disc+
        '</td><td style="text-align:center">'+id+
        '</td><td>'+result
        +'</td><td>'+copy
        +'</td></tr>';
    count_disc++;
    row_disc++;
        return false;
      }
  
    });

    
    
  }
}
}
//Cambiar [*]->[[#]]
$("div.c_008.asterisk").each(function(){
            
    //$(this).click();
    var json = document.getElementsByClassName('has-tooltip tooltip-label-central');  
    for(let item of json)
    {
    
    var id=item.dataset;
    id= id.tooltipId.replace("disclaimer-", "");
    id = id.substring(0, id.indexOf('-'));
    id= id.split('_');
    id=id[2];
    
    if(id === undefined)
    {
       id=item.dataset;
        id= id.tooltipId.replace("disclaimer-", "");
        id = id.substring(0, id.indexOf('-')); 
    }
    
    item.innerText='[['+id+']]';
    
    
    
    
    }
    
});
var count_disc=0;
var row_disc=1;
var array_tk=[];
$(".freeEditorial.freeEditorialParsys.parsys").attr("id","page_content");
if ($('#page_content').hasClass('.freeEditorial.freeEditorialParsys.parsys')){
  $(jQuery("#page_content").find("div.c_008.asterisk")).each( function(){

    extract_copy(this.children[0].childNodes[0].textContent.replace('[[','').replace(']]',''));
    tabla=tabla+'<tr><td style="text-align:center">'+row_disc+
    '</td><td style="text-align:center">'+this.children[0].childNodes[0].textContent.replace('[[','').replace(']]','')+
    '</td><td>'+copy
    +'</td><td>'+this.parentNode.innerHTML
    +'</td></tr>';
    count_disc++;
    row_disc++;
  
  });
  
    var count_tk=0;
    //Array de clases de componentes que tengan copy para obtener los TK y disclaimers de overlays
    var array_class=["p","li",".c_270__copy__body.usg-body",".usg-body.c_256_linked-carousel_slide_body",
    ".c_001H_list_with_image_tertiary",".c_272_copy",".feature-stat",".c_285_item_features-list_item",".c_278_tile_copy.usg-body",".usg-heading-3"];
    for(let i=0;i<array_class.length;i++)
    {
      extraer_tk(array_class[i],"page_content");
    }
}
else
{
  //Specs

  $(jQuery("#container").find("div.c_008.asterisk")).each( function(){

    extract_copy(this.children[0].childNodes[0].textContent.replace('[[','').replace(']]',''));
    tabla=tabla+'<tr><td style="text-align:center">'+row_disc+
    '</td><td style="text-align:center">'+this.children[0].childNodes[0].textContent.replace('[[','').replace(']]','')+
    '</td><td>'+copy
    +'</td><td>'+this.parentNode.innerHTML
    +'</td></tr>';
    count_disc++;
    row_disc++;
  
  });
  var count_tk=0;
    var array_class=["p",".c_270__copy__body.usg-body",".usg-body.c_256_linked-carousel_slide_body",
    ".c_001H_list_with_image_tertiary",".c_272_copy",".feature-stat",".c_285_item_features-list_item"];
    for(let i=0;i<array_class.length;i++)
    {
      extraer_tk(array_class[i],"container");
    }
    
}
//Extrer [tk] de los overlays-mosaicos y comparar el resto a ver si hay disclaimers en mosaico y extraerlos
$(".c_274 ").each( function(){
  array_tk.push(this.dataset.modalTitle);
  array_tk.push(this.dataset.modalDescription);
});
if(array_tk.length>0)
  {
    for(let i=0;i<array_tk.length;i++)
    {
      try {
        if(array_tk[i].includes('[TK]'))
      {
        count_tk++;
        tabla_tk=tabla_tk+'<tr><td style="text-align:center">'+count_tk+
      '</td><td style="color: red; text-align:center;"> TBD'+
      '</td><td>'+array_tk[i]
      +'</td></tr>';
      }
      if(array_tk[i].includes('[['))
      {
        copy_disc_mosaic(array_tk[i]);
      }
      } catch (error) {
        
      }
       
      
    }
  }






count_disc=count_disc+count_tk;
var Disclaimers_count='<table class="darkTable" id="date"><thead><tr><th width="50%">Disclaimers in this page </th><th> '+count_disc+'</th></tr>'; 
var inyectar= Style_black+URL+DATE_HTML+Disclaimers_count+Titulo_table_disclaimers_TK+Titulo_END+tbody_1+tabla_tk+tbody_2+HTML_end;
var inyectar2= Style_black+Titulo_table_disclaimers+Titulo_END+tbody_1+tabla+tbody_2+HTML_end+Credits;
var inyectar3= Style_black+URL+DATE_HTML+Disclaimers_count+Titulo_table_disclaimers+Titulo_END+tbody_1+tabla+tbody_2+HTML_end;
var div = document.createElement("div");
div.setAttribute("id", "copy_disc");
div.innerHTML = inyectar;
document.write('<body style="background-color:rgb(0,0,0);"></body>'+title_pag);
if(count_tk === 0)
{
  document.write(inyectar3);
}
else
{
  document.write(inyectar);
 document.write(inyectar2);
}

//document.body.insertBefore(div,document.body.childNodes[0]);



//Funcion para crear rowspan cuando se repite la primer columna
$(function(){

    //assumption: the column that you wish to rowspan is sorted.
  
    //this is where you put in your settings
    var indexOfColumnToRowSpan=0;
    /*if((window.location.href.indexOf("accessories-parts")>-1))
    {
        indexOfColumnToRowSpan=0;
    }
    else
    {

    }*/
     
    var $table = $('#disclaimers');
  
  
    //this is the code to do spanning, should work for any table
    var rowSpanMap = {};
    $table.find('tr').each(function(){
      var valueOfTheSpannableCell = $($(this).children('td')[indexOfColumnToRowSpan]).text();
      $($(this).children('td')[indexOfColumnToRowSpan]).attr('data-original-value', valueOfTheSpannableCell);
      rowSpanMap[valueOfTheSpannableCell] = true;
    });
  
    for(var rowGroup in rowSpanMap){
      var $cellsToSpan = $('td[data-original-value="'+rowGroup+'"]');
      var numberOfRowsToSpan = $cellsToSpan.length;
      $cellsToSpan.each(function(index){
        if(index==0){
          $(this).attr('rowspan', numberOfRowsToSpan);
        }else{
          $(this).hide();
        }
      });
    }
  
  });

  function extract_copy(number_id) {
  $(".tooltip-panel.disclaimer-tooltip").each( function(){
    //console.log($(this));
    //var number_id='1189';
    
    var id=this.dataset.tooltipId;
        id= id.replace("disclaimer-", "");
        id = id.substring(0, id.indexOf('-'));
        id= id.split('_');
        id=id[2];
        if(id === undefined)
        {
        id=this.dataset.tooltipId;
            id= id.replace("disclaimer-", "");
            id = id.substring(0, id.indexOf('-')); 
        }
        if(id === number_id)
        {
            copy= this.innerText.trim();
            //copy= this.innerHTML;
            return false;
           
        }
  });
  
  
  }

setTimeout(function() {
$("html, body").animate({ scrollTop: 0 });
},1000);