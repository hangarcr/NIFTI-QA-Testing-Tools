//SEO TOOL Gallery

	if((window.location.href.indexOf("gallery")>-1) || (window.location.href.indexOf("trims")>-1))
	{
//Variables
var date = new Date();
var Style_black ='<style> table.darkTable {table-layout: auto;font-family: Arial, Helvetica, sans-serif;border: 2px solid #000000;background-color: #4A4A4A;width: 100%;text-align: center;border-collapse: collapse;}table.darkTable td, table.darkTable th {border: 1px solid #4A4A4A;padding: 3px 2px;}table.darkTable tbody td {font-size: 13px;color: #E6E6E6;}table.darkTable tr:nth-child(even) {background: #323232;}table.darkTable thead {background: #000000;border-bottom: 3px solid #000000;}table.darkTable thead th {font-size: 15px;font-weight: bold;color: #E6E6E6;text-align: center;border-left: 2px solid #4A4A4A;}table.darkTable thead th:first-child {border-left: none;}table.darkTable tfoot {font-size: 12px;font-weight: bold;color: #E6E6E6;background: #000000;background: -moz-linear-gradient(top, #404040 0%, #191919 66%, #000000 100%);background: -webkit-linear-gradient(top, #404040 0%, #191919 66%, #000000 100%);background: linear-gradient(to bottom, #404040 0%, #191919 66%, #000000 100%);border-top: 1px solid #4A4A4A;}table.darkTable tfoot td {font-size: 12px;}</style>';
var HTML1='<table class="darkTable" id="images"><thead><tr><th>Assets</th><th>Filename</th><th>Alt-text</th></tr>';
var HTML2='<table class="darkTable" id="title"><thead><tr><th>Title</th><th>Description</th></tr>';
var HTML3='<table class="darkTable" id="headers"><thead><tr><th>H1</th><th>H2</th><th>H3</th></tr>';
var HTML4='<table class="darkTable" id="title"><thead><tr><th>Mosaic</th></tr>';
var URL='<div><table class="darkTable" id="url"><thead><tr><th width="50%">Current URL</th><th> <a href= "'+document.location.href+'"  style="color:#10A419;">'+document.location.href+'</a> </th></tr></div>'; 
var DATE_HTML='<table class="darkTable" id="date"><thead><tr><th width="50%">Date</th><th> '+date+'</th></tr>'; 

var tbody_1='<tbody>';
var tbody_2='</tbody>';
var HTML_end='</table>';
var rows='<tr><td width="10%">';
var rows2='<tr><td width="20%">';
var asset_i='<img src="';
var asset_f='" width="250" height="130" />';
var table='';
var table_mosaic='';

var title_pag='<div ALIGN="CENTER"><img src="https://2.bp.blogspot.com/-wNWf1gwB6ZE/XsF6vI03r4I/AAAAAAAAjHM/Wld43WSKECsuPdWQFJLA8K8KV2ImRWCzQCNcBGAsYHQ/s1600/SEO%2BTOOL.png" ALIGN="CENTER" /></div>';
var Credits='<div ALIGN="CENTER"><img  src="https://3.bp.blogspot.com/-4YKtKVb0bZU/XsF6ulF8_yI/AAAAAAAAjHI/-RLxHxPrkeoni_y2XW8UW8JFqzhtw4lLgCNcBGAsYHQ/s1600/Credits.png" ALIGN="CENTER" /></div>';

//Variables title meta description

function getMeta(metaName) {
  const metas = document.getElementsByTagName('meta');

  for (let i = 0; i < metas.length; i++) {
    if (metas[i].getAttribute('name') === metaName) {
      return metas[i].getAttribute('content');
    }
  }

  return '';
} 

var Title= document.title;
var table_title='<tr><td width="50%">'+Title+'</td><td >'+getMeta('description')+'</td></tr>';
var table_robots='<table class="darkTable"><thead><tr><th width="50%">Robots</th><th width="50%">'+getMeta('robots')+'</th></tr>';
var table_headers='';

//Funcion esperar a que carguen todas las imagenes
//Abrir dropdowns
$(".accordion-panel.white").each(function(){ $(this).attr("style","display: block;");  }); //Abrir dropdowns accessories

$(".accordion-child-header").each(function(){$(this).click();}); //Abrir dropdowns specs 

$("li.c_285-1.js-item").each(function(){ $(this).attr("class","c_285-1 js-item expanded"); }); //Abrir dropdowns trims

//Abrir mosaicos (2 maximo)
//Primer mosaico
	var list=document.getElementsByClassName('c_274'); 
	list[0].click();
	
/*	let num=document.getElementsByClassName("gallery-carousel-slide-content-counter"); 
	num=num[0].innerHTML.substring(0, num[0].innerHTML.indexOf('/')).trim();
	num=parseInt(num);
	let time=1500;
	
	for(let i=1;i<num;i++)
	{
		setTimeout(  function() {$("button.slick-next").click(); },time);
		time=time+1500;
	}	*/

	setTimeout(  function() {$("button.slick-next").click(); },7500);
	setTimeout(  function() {$("button.slick-next").click(); },6000);
	setTimeout(  function() {$("button.slick-next").click(); },4500); 
	setTimeout(  function() {$("button.slick-next").click(); },3000);
	setTimeout(  function() {$("button.slick-next").click(); },1500);
  
	setTimeout(  function() {
	var list=document.getElementsByClassName('c_273_close_label'); list[0].click();
	},7800);
//----------------------------Obtener imagenes dentro del mosaico
setTimeout(  function() {
	var json= document.getElementsByClassName('gallery-carousel-slide-hero'); 
	for(let i=0;i<json.length-2;i++)
		{
			table_mosaic=table_mosaic+rows+asset_i+json[i].children[0].children[3].src+asset_f+'</td width="45%"><td>'+json[i].children[0].children[3].src+'</td><td width="45%">'+json[i].children[0].children[3].alt+'</td></tr>';
			
			
		}
	},7600);
//Segundo mosaico
setTimeout(  function() {
	var list=document.getElementsByClassName('c_274'); 
	list[6].click();
},7900);
	setTimeout(  function() {$("button.slick-next").click(); },14000);
	setTimeout(  function() {$("button.slick-next").click(); },12500);
	setTimeout(  function() {$("button.slick-next").click(); },11000); 
	setTimeout(  function() {$("button.slick-next").click(); },9500);
	setTimeout(  function() {$("button.slick-next").click(); },8000);
  
	setTimeout(  function() {
	var list=document.getElementsByClassName('c_273_close_label'); list[0].click();
	},14400);
//----------------------------Obtener imagenes dentro del mosaico
setTimeout(  function() {
	var json= document.getElementsByClassName('gallery-carousel-slide-hero'); 
	for(let i=0;i<json.length-2;i++)
		{
			table_mosaic=table_mosaic+rows+asset_i+json[i].children[0].children[3].src+asset_f+'</td width="45%"><td>'+json[i].children[0].children[3].src+'</td><td width="45%">'+json[i].children[0].children[3].alt+'</td></tr>';
			
			
		}
	},14200);


	setTimeout(  function() {$("html, body").animate({ scrollTop: $(document).height()-$(window).height() });},15000);
	setTimeout(  function() {$("html, body").animate({ scrollTop: 0 });},15000);


$(document).ready(  function(){
	setTimeout(  function() {
		
	  $('html, body').animate({
		scrollTop: $('p.footer-copyright').offset().top
	  }, 5000);
	}, 16000);
		  }); 

		  

		  
			 // $("div.c_274").click();
			
		




//----------------------------------------------------------------

setTimeout(  function() {
//Abrir dropdowns
$(".accordion-panel.white").each(function(){ $(this).attr("style","display: block;");  }); //Abrir dropdowns accessories

$(".accordion-child-header").each(function(){$(this).click();}); //Abrir dropdowns specs 

$("li.c_285-1.js-item").each(function(){ $(this).attr("class","c_285-1 js-item expanded"); }); //Abrir dropdowns trims

},16000);


setTimeout(function(){  
//Headers
//h1
var h1= document.getElementsByTagName('h1');
//h2
var h2 = document.getElementsByTagName('h2');

//h3
var h3 = document.getElementsByTagName('h3');
try
{
	for (let i = 0; i < h1.length; i++) {
		table_headers=table_headers+rows2+h1[i].innerText+'</td width="40%"><td>'+h2[i].innerText+'</td><td width="40%">'+h3[i].innerText+'</td></tr>';
		
	}

	for (let e = h1.length; e < h2.length; e++) {
	table_headers=table_headers+rows2+'</td width="40%"><td>'+h2[e].innerText+'</td><td width="40%">'+h3[e].innerText+'</td></tr>';
		
	}

	for (let j = h2.length; j < h3.length; j++) {
		table_headers=table_headers+rows2+'</td width="40%"><td>'+'</td><td width="40%">'+h3[j].innerText+'</td></tr>';
	
		}
}   catch(error){}

//Assets
/*var json= document.getElementsByTagName('img'); 
for(let item of json)
	{
		table=table+rows+asset_i+item.src+asset_f+'</td width="45%"><td>'+item.src+'</td><td width="45%">'+item.alt+'</td></tr>';
		
	} */

		

	
var json= document.getElementsByClassName('s7-frame-image'); 
for(let item of json)
	{
		table=table+rows+asset_i+item.src+asset_f+'</td width="45%"><td>'+item.src+'</td><td width="45%">'+item.alt+'</td></tr>';
		
	} 
var json= document.getElementsByClassName('c_239-2 mosaic-gallery'); 
for(let item of json)
	{
		table=table+rows+asset_i+item.children[0].src+asset_f+'</td width="45%"><td>'+item.children[0].src+'</td><td width="45%">'+item.children[0].alt+'</td></tr>';
		
	} 
var json= document.getElementsByClassName('picture-element  analytics-target'); 
for(let item of json)
	{
		if(item.children[3].src !== '')
		{
		table=table+rows+asset_i+item.children[3].src+asset_f+'</td width="45%"><td>'+item.children[3].src+'</td><td width="45%">'+item.children[3].alt+'</td></tr>';
		}
	} 
var json= document.getElementsByClassName('poster-image'); 
for(let item of json)
	{
		table=table+rows+asset_i+item.children[3].src+asset_f+'</td width="45%"><td>'+item.children[3].src+'</td><td width="45%">'+item.children[3].alt+'</td></tr>';
		
	} 
var json= document.getElementsByClassName(' lazyloaded'); 
for(let item of json)
	{
		table=table+rows+asset_i+item.src+asset_f+'</td width="45%"><td>'+item.src+'</td><td width="45%">'+item.alt+'</td></tr>';
		
	} 



}, 16000);

setTimeout(function() {
document.write('<body style="background-color:rgb(0,0,0);"></body>'+title_pag);
document.write(Style_black+URL+DATE_HTML+HTML2+tbody_1+table_title+tbody_2+HTML_end);
document.write(Style_black+tbody_1+table_robots+tbody_2+HTML_end);
document.write(Style_black+HTML3+tbody_1+table_headers+tbody_2+HTML_end);
document.write(Style_black+HTML1+tbody_1+table+tbody_2+HTML_end);
document.write(Style_black+HTML4+HTML1+tbody_1+table_mosaic+tbody_2+HTML_end+Credits);
console.log("%cTEST COMPLETE", "color: green");
},21000);

$("html, body").animate({ scrollTop: 0 });

}

