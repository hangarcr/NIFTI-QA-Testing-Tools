var time=0;
//Accessories
if((window.location.href.indexOf("accessories-parts")>-1))
	{
//Variables
var date = new Date();
var Style_black ='<style> table.darkTable {table-layout: auto; font-family: Arial, Helvetica, sans-serif;border: 2px solid #000000;background-color: #4A4A4A;width: 100%;text-align: center;border-collapse: collapse;}table.darkTable td, table.darkTable th {border: 1px solid #4A4A4A;padding: 3px 2px;}table.darkTable tbody td {font-size: 13px;color: #E6E6E6;}table.darkTable tr:nth-child(even) {background: #323232;}table.darkTable thead {background: #000000;border-bottom: 3px solid #000000;}table.darkTable thead th {font-size: 15px;font-weight: bold;color: #E6E6E6;text-align: center;border-left: 2px solid #4A4A4A;}table.darkTable thead th:first-child {border-left: none;}table.darkTable tfoot {font-size: 12px;font-weight: bold;color: #E6E6E6;background: #000000;background: -moz-linear-gradient(top, #404040 0%, #191919 66%, #000000 100%);background: -webkit-linear-gradient(top, #404040 0%, #191919 66%, #000000 100%);background: linear-gradient(to bottom, #404040 0%, #191919 66%, #000000 100%);border-top: 1px solid #4A4A4A;}table.darkTable tfoot td {font-size: 12px;}</style>';
var HTML1='<table class="darkTable" id="prices"><thead><tr><th>#</th><th>Accessories title</th><th>Price</th></tr>';
var HTML2='<table class="darkTable" id="title"><thead><tr><th>Title</th><th>Description</th></tr>';
var HTML3='<table class="darkTable" id="headers"><thead><tr><th>H1</th><th>H2</th><th>H3</th></tr>';
//var HTML4='<table class="darkTable" id="title"><thead><tr><th>Mosaic</th></tr>';
var URL='<div><table class="darkTable" id="url"><thead><tr><th width="50%" id="text-current">Current URL</th><th> <a href= "'+document.location.href+'"  style="color:#10A419;">'+document.location.href+'</a> </th></tr></div>'; 
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

var title_pag='<div ALIGN="CENTER"><img src="https://1.bp.blogspot.com/-d-nWQHAoLnk/YH3hKkYA5CI/AAAAAAAAm-4/8EL08j4tryU6wXHkxAVWdydND3ZOJCjeACNcBGAsYHQ/s0/TOOL%2BIMAGE.png" ALIGN="CENTER" /></div>';
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



//Funcion esperar a que carguen todas las imagenes
//Abrir dropdowns
$(".accordion-panel.white").each(function(){ $(this).attr("style","display: block;");  }); //Abrir dropdowns accessories

$(".accordion-child-header").each(function(){$(this).click();}); //Abrir dropdowns specs 

$("li.c_285-1.js-item").each(function(){ $(this).attr("class","c_285-1 js-item expanded"); }); //Abrir dropdowns trims

$(".accordion-header.grey").each(function(){
      
	$(this).click();
  
});
$(".accordion-header").each(function(){
      
	$(this).click();
  
});
$(".accordion-child-header").each(function(){
      
	$(this).click();
	});

$("div.answers.visually-hidden").each(function(){
      
	$(this).attr("class","answers");
});

$("div.accordion-panel.accordion-animation-complete").each(function(){
      
	$(this).attr("style","display: block;");
	$(this).attr("data-state","open;");
});
	

	


//Funcion scroll
	setTimeout(  function() {$("html, body").animate({ scrollTop: $(document).height()-$(window).height() });},time);
	time=time+1500;
	setTimeout(  function() {$("html, body").animate({ scrollTop: 0 });},time);
	time=time+1500;

$(document).ready(  function(){
	setTimeout(  function() {
		
	  $('html, body').animate({
		scrollTop: $('p.footer-copyright').offset().top
	  }, 5000);
	}, time);
		  }); 

	time=time+6500;	  


setTimeout(function(){  


$(".freeEditorial.freeEditorialParsys.parsys").attr("id","page_content");

//Quitar disclaimers
$(jQuery("#page_content").find("div.c_008.asterisk")).each( function(){
	try {
        this.remove();
	  } catch (error) {}
});
//Title accessories
var count_accesories=1;
$(jQuery("#page_content").find("h3.c_278_tile_content_heading")).each( function(){
	try {
		//if(this.find(".c_278_tile_content"))
        table=table+rows+count_accesories+'</td width="45%"><td>'+this.innerText.replace('[*]','').trim()+'</td><td width="45%">'+this.parentNode.childNodes[3].childNodes[0].innerText.replace('MSRP','').trim()+'</td></tr>';

        console.log(this.innerText.replace('[*]','').trim());//accessories title
        console.log(this.parentNode.childNodes[3].childNodes[0].innerText.replace('MSRP','').trim());
        console.log(this.parentNode.parentNode.childNodes[1].childNodes[1].childNodes[1].childNodes[1].childNodes[7].currentSrc);
		count_accesories++;
	  } catch (error) {console.log(error);}
});



}, time);
time=time+1500;	
setTimeout(function() {
document.write('<body style="background-color:rgb(0,0,0);"></body>'+title_pag);
document.write(Style_black+URL+DATE_HTML+HTML1+tbody_1+table+tbody_2+HTML_end+Credits);
//document.write(Style_black+tbody_1+table_robots+tbody_2+HTML_end);
//document.write(Style_black+HTML3+tbody_1+table_headers+tbody_2+HTML_end);
//document.write(Style_black+HTML1+tbody_1+table+tbody_2+HTML_end);
//document.write(Style_black+HTML4+HTML1+tbody_1+table_mosaic+tbody_2+HTML_end+Credits);
console.log("%cTEST COMPLETE", "color: green");
},time);
time=time+1500;	
$("html, body").animate({ scrollTop: 0 });
}

//Specs

if((window.location.href.indexOf("compare-specs")>-1) || (window.location.href.indexOf("models-specs")>-1))
	{
		
		//Inyectar script para extraer HELIOS
	//Versions
	var span= document.createElement("span");
	span.setAttribute("id", "HELIOS_json");
	span.setAttribute("hidden","true");
	document.body.insertBefore(span,document.body.childNodes[0]);
		const injectedCode = "var json=JSON.stringify(HELIOS.components.c059E.filteredData.grades);"+
		"document.getElementById('HELIOS_json').innerHTML =json;";
	var script = document.createElement("script");
		script.textContent = injectedCode;
	
		(document.head).appendChild(script);
	//Packages
	var span_packages= document.createElement("span");
	span_packages.setAttribute("id", "packages_json");
	span_packages.setAttribute("hidden","true");
	document.body.insertBefore(span_packages,document.body.childNodes[0]);
		const injectedCode2 = "var json=JSON.stringify(HELIOS.components.c059E.grades);"+
		"document.getElementById('packages_json').innerHTML =json;";
	var script2 = document.createElement("script");
		script2.textContent = injectedCode2;
	
		(document.head).appendChild(script2);
		// capturando DATOS de HELIOS json
	//Packages
	var array_allpackages=[];
	//console.log($('#packages_json').text());
	var myData2 =JSON.parse($('#packages_json').text());
	//var myData =myData.components.c059E.filteredData.grades;
	//console.log(myData2);
    var array_grades2 = Object.entries(myData2).map(item => item[1]);
    console.log(array_grades2.length);
    for(let i=0;i<array_grades2.length;i++)
    {
      var myData2 =array_grades2[i].versions
      var array_versions2 = Object.entries(myData2).map(item => item[1]);
      for(let e=0;e<array_versions2.length;e++)
      {
        var myData2 =array_versions2[e].packs.packs
      	var array_packs= Object.entries(myData2).map(item => item[1]);
		
		  if(array_packs !== 0)
		  {
			for(let i=0;i<array_packs.length;i++)
			{
				if(array_packs[i]['price']>0)
				{
					if(array_packs[i]['name'].includes('['))
        			{
					array_packs[i]['name']=array_packs[i]['name'].substring(0, array_packs[i]['name'].indexOf('['));
        			}
					if(array_packs[i]['price'].substring(0,array_packs[i]['price'].indexOf('.')).length >3)
					{
						array_packs[i]['price']='$'+array_packs[i]['price'].substring(0,1)+','+array_packs[i]['price'].substring(1,array_packs[i]['price'].indexOf('.'));
					}
					else
					{
						array_packs[i]['price']='$'+array_packs[i]['price'].substring(0,array_packs[i]['price'].indexOf('.'));
					}
					
					var get=false;
					
						for(let j=0;j<array_allpackages.length;j++)
						{
							if(array_allpackages[j]['name'] === array_packs[i]['name'])
							{
							  get=true;
							}
							else{
								
							}
						}
					if(get === false)
					{
						array_allpackages.push(array_packs[i]);
					}
					
					
					
				}
				
			}
		  }
	  }
	}
    //Contar versiones de carro y guardarlas en un array de JSON
	var array_allversions=[];
	console.log($('#HELIOS_json').text());
	var myData =JSON.parse($('#HELIOS_json').text());
	//var myData =myData.components.c059E.filteredData.grades;
	console.log(myData);
    var array_grades = Object.entries(myData).map(item => item[1]);
    console.log(array_grades.length);
    for(let i=0;i<array_grades.length;i++)
    {
      var myData2 =array_grades[i].versions
      var grade_name=array_grades[i]['name'];
      var array_versions = Object.entries(myData2).map(item => item[1]);
      for(let e=0;e<array_versions.length;e++)
      {
        if(array_versions[e]['name'].includes('['))
        {
          array_versions[e]['name']=array_versions[e]['name'].substring(0, array_versions[e]['name'].indexOf('['));
        }
        array_versions[e]['name']=grade_name+'-'+array_versions[e]['name'];
		array_versions[e]['price']=array_versions[e]['price'].toString();
		array_versions[e]['price']='$'+array_versions[e]['price'].substring(0,2)+','+array_versions[e]['price'].substring(2,array_versions[e]['price'].length);
      	array_allversions.push(array_versions[e]);
	  }
	}
//Variables
var date = new Date();
var Style_black ='<style> table.darkTable {table-layout: auto;font-family: Arial, Helvetica, sans-serif;border: 2px solid #000000;background-color: #4A4A4A;width: 100%;text-align: center;border-collapse: collapse;}table.darkTable td, table.darkTable th {border: 1px solid #4A4A4A;padding: 3px 2px;}table.darkTable tbody td {font-size: 13px;color: #E6E6E6;}table.darkTable tr:nth-child(even) {background: #323232;}table.darkTable thead {background: #000000;border-bottom: 3px solid #000000;}table.darkTable thead th {font-size: 15px;font-weight: bold;color: #E6E6E6;text-align: center;border-left: 2px solid #4A4A4A;}table.darkTable thead th:first-child {border-left: none;}table.darkTable tfoot {font-size: 12px;font-weight: bold;color: #E6E6E6;background: #000000;background: -moz-linear-gradient(top, #404040 0%, #191919 66%, #000000 100%);background: -webkit-linear-gradient(top, #404040 0%, #191919 66%, #000000 100%);background: linear-gradient(to bottom, #404040 0%, #191919 66%, #000000 100%);border-top: 1px solid #4A4A4A;}table.darkTable tfoot td {font-size: 12px;}</style>';
var HTML1='<table class="darkTable" id="versions_prices"><thead><tr><th>MODEL CODE</th><th>VERSIONS</th><th>PRICE</th></tr>';
var HTML2='<table class="darkTable" id="accessories_prices"><thead><tr><th>NNA CODE</th><th>ACCESSORIES TITLE</th><th>INSTALL LOCATION</th><th>PRICE</th></tr>';
var HTML3='<table class="darkTable" id="packages_prices"><thead><tr><th>ELEMENT ID</th><th>PACKAGE TITLE</th><th>PRICE</th></tr>';

var URL='<div><table class="darkTable" id="url"><thead><tr><th width="50%" id="text-current">Current URL</th><th> <a href= "'+document.location.href+'"  style="color:#10A419;">'+document.location.href+'</a> </th></tr></div>'; 
var DATE_HTML='<table class="darkTable" id="date"><thead><tr><th width="50%">Date</th><th> '+date+'</th></tr>'; 

var tbody_1='<tbody>';
var tbody_2='</tbody>';
var HTML_end='</table>';
var rows='<tr><td width="10%">';
var rows2='<tr><td width="20%">';
var asset_i='<img src="';
var asset_f='" width="250" height="130" />';
var table='';
var table_versions='';
var table_packages='';

var title_pag='<div ALIGN="CENTER"><img src="https://1.bp.blogspot.com/-d-nWQHAoLnk/YH3hKkYA5CI/AAAAAAAAm-4/8EL08j4tryU6wXHkxAVWdydND3ZOJCjeACNcBGAsYHQ/s0/TOOL%2BIMAGE.png" ALIGN="CENTER" /></div>';
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



//Funcion esperar a que carguen todas las imagenes
//Abrir dropdowns
$(".accordion-panel.white").each(function(){ $(this).attr("style","display: block;");  }); //Abrir dropdowns accessories

$(".accordion-child-header").each(function(){$(this).click();}); //Abrir dropdowns specs 

$("li.c_285-1.js-item").each(function(){ $(this).attr("class","c_285-1 js-item expanded"); }); //Abrir dropdowns trims

$(".accordion-header.grey").each(function(){
      
	$(this).click();
  
});
$(".accordion-header").each(function(){
      
	$(this).click();
  
});
$(".accordion-child-header").each(function(){
      
	$(this).click();
	});

$("div.answers.visually-hidden").each(function(){
      
	$(this).attr("class","answers");
});

$("div.accordion-panel.accordion-animation-complete").each(function(){
      
	$(this).attr("style","display: block;");
	$(this).attr("data-state","open;");
});
	

	


//Funcion scroll
	setTimeout(  function() {$("html, body").animate({ scrollTop: $(document).height()-$(window).height() });},time);
	time=time+1500;
	setTimeout(  function() {$("html, body").animate({ scrollTop: 0 });},time);
	time=time+1500;

$(document).ready(  function(){
	setTimeout(  function() {
		
	  $('html, body').animate({
		scrollTop: $('p.footer-copyright').offset().top
	  }, 5000);
	}, time);
		  }); 

	time=time+6500;	  

		  
			 // $("div.c_274").click();
			
		




//----------------------------------------------------------------

/*setTimeout(  function() {
//Abrir dropdowns
$(".accordion-panel.white").each(function(){ $(this).attr("style","display: block;");  }); //Abrir dropdowns accessories

$(".accordion-child-header").each(function(){$(this).click();}); //Abrir dropdowns specs 

$("li.c_285-1.js-item").each(function(){ $(this).attr("class","c_285-1 js-item expanded"); }); //Abrir dropdowns trims

},16000);*/


setTimeout(function(){  


$(".c_059E.nissan_nu.sticky-titles").attr("id","page_content");
$(".vehicleComparisonExtended.vehicleComparisonWithDefaultFilters").attr("id","page_content");


//Quitar disclaimers
$(jQuery("#page_content").find("div.c_008.asterisk")).each( function(){
	try {
        this.remove();
	  } catch (error) {}
});
//Ingresar id,versiones,precios a la tabla
console.log(array_allversions);
for(let i=0;i<array_allversions.length;i++)
{
	
		table_versions=table_versions+'<tr><td width="45%">'+array_allversions[i]['versionKey']+
		'</td><td width="45%">'+array_allversions[i]['name']+
		'</td><td width="45%">'+array_allversions[i]['price']+'</td></tr>';

	
}
//Ingresar nombres,precios de paquetes a la tabla
console.log(array_allpackages);
for(let i=0;i<array_allpackages.length;i++)
{
	
		table_packages=table_packages+'<tr><td width="10%">'+array_allpackages[i]['key'].substring(array_allpackages[i]['key'].indexOf('-')+1,array_allpackages[i]['key'].length)+
		'</td><td width="80%">'+array_allpackages[i]['name']+ 
		'</td><td width="10%">'+array_allpackages[i]['price']+'</td></tr>';

	
}
//Title accessories
$(jQuery("#page_content").find(".specs-type.accessory-row")).each( function(){
	try {
		//if(this.find(".c_278_tile_content"))
        table=table+'<tr><td width="20%">'+$(this).attr('data-section-id').substring($(this).attr('data-section-id').indexOf('-')+1,$(this).attr('data-section-id').length)+ 
		'</td><td width="40%">'+this.childNodes[1].childNodes[1].innerText+ //accessories title
		'</td><td width="20%">'+this.childNodes[1].childNodes[3].childNodes[3].innerText.replace(' installed','').replace(' Installed','')+//Install
        '</td><td width="20%">'+this.childNodes[1].childNodes[3].childNodes[1].lastElementChild.innerText+'</td></tr>';//Price
        

        console.log(this.childNodes[1].childNodes[1].innerText);
        console.log(this.childNodes[1].childNodes[3].childNodes[1].lastElementChild.innerText);
        console.log(this.childNodes[1].childNodes[3].childNodes[3].innerText);
        //console.log(this.parentNode.parentNode.childNodes[1].childNodes[1].childNodes[1].childNodes[1].childNodes[7].currentSrc);
		
	  } catch (error) {}
});
//Assets
/*$(".freeEditorial.freeEditorialParsys.parsys").attr("id","page_content");
$(jQuery("#page_content").find("img")).each( function(){
	try {
		if($(this).get(0).currentSrc !== ""){ 

		  table=table+rows+asset_i+$(this).get(0).currentSrc +asset_f+'</td width="45%"><td>'+$(this).get(0).currentSrc+'</td><td width="45%">'+$(this).get(0).alt+'</td></tr>';
		}
        console.log(this);
	  } catch (error) {
		console.log($(this));
	  }
});*/


}, time);
time=time+1500;	
setTimeout(function() {
document.write('<body style="background-color:rgb(0,0,0);"></body>'+title_pag);
document.write(Style_black+URL+DATE_HTML+HTML1+tbody_1+table_versions+tbody_2+HTML_end);
document.write(Style_black+HTML3+tbody_1+table_packages+tbody_2+HTML_end);
document.write(Style_black+HTML2+tbody_1+table+tbody_2+HTML_end+Credits);
//document.write(Style_black+tbody_1+table_robots+tbody_2+HTML_end);
//document.write(Style_black+HTML3+tbody_1+table_headers+tbody_2+HTML_end);
//document.write(Style_black+HTML1+tbody_1+table+tbody_2+HTML_end);
//document.write(Style_black+HTML4+HTML1+tbody_1+table_mosaic+tbody_2+HTML_end+Credits);
console.log("%cTEST COMPLETE", "color: green");
},time);
time=time+1500;	
$("html, body").animate({ scrollTop: 0 });
}
//NGST
if((window.location.href.indexOf("build-price")>-1))
	{
//Variables
var date = new Date();
var Style_black ='<style> table.darkTable {table-layout: auto;font-family: Arial, Helvetica, sans-serif;border: 2px solid #000000;background-color: #4A4A4A;width: 100%;text-align: center;border-collapse: collapse;}table.darkTable td, table.darkTable th {border: 1px solid #4A4A4A;padding: 3px 2px;}table.darkTable tbody td {font-size: 13px;color: #E6E6E6;}table.darkTable tr:nth-child(even) {background: #323232;}table.darkTable thead {background: #000000;border-bottom: 3px solid #000000;}table.darkTable thead th {font-size: 15px;font-weight: bold;color: #E6E6E6;text-align: center;border-left: 2px solid #4A4A4A;}table.darkTable thead th:first-child {border-left: none;}table.darkTable tfoot {font-size: 12px;font-weight: bold;color: #E6E6E6;background: #000000;background: -moz-linear-gradient(top, #404040 0%, #191919 66%, #000000 100%);background: -webkit-linear-gradient(top, #404040 0%, #191919 66%, #000000 100%);background: linear-gradient(to bottom, #404040 0%, #191919 66%, #000000 100%);border-top: 1px solid #4A4A4A;}table.darkTable tfoot td {font-size: 12px;}</style>';
var HTML1='<table class="darkTable" id="accessories_prices"><thead><tr><th>ACCESSORIES TITLE</th><th>PRICE</th></tr>';
var HTML2='<table class="darkTable" id="versions_prices"><thead><tr><th>YEAR</th><th>VERSION</th><th>PRICE</th></tr>';
var HTML3='<table class="darkTable" id="headers"><thead><tr><th>H1</th><th>H2</th><th>H3</th></tr>';
//var HTML4='<table class="darkTable" id="title"><thead><tr><th>Mosaic</th></tr>';
var URL='<div><table class="darkTable" id="url"><thead><tr><th width="50%" id="text-current">Current URL</th><th> <a href= "'+document.location.href+'"  style="color:#10A419;">'+document.location.href+'</a> </th></tr></div>'; 
var DATE_HTML='<table class="darkTable" id="date"><thead><tr><th width="50%">Date</th><th> '+date+'</th></tr>'; 

var tbody_1='<tbody>';
var tbody_2='</tbody>';
var HTML_end='</table>';
var rows='<tr><td width="10%">';
var rows2='<tr><td width="20%">';
var asset_i='<img src="';
var asset_f='" width="250" height="130" />';
var table='';
var table_versions='';

var title_pag='<div ALIGN="CENTER"><img src="https://1.bp.blogspot.com/-d-nWQHAoLnk/YH3hKkYA5CI/AAAAAAAAm-4/8EL08j4tryU6wXHkxAVWdydND3ZOJCjeACNcBGAsYHQ/s0/TOOL%2BIMAGE.png" ALIGN="CENTER" /></div>';
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



//Funcion esperar a que carguen todas las imagenes
//Abrir dropdowns
$(".accordion-panel.white").each(function(){ $(this).attr("style","display: block;");  }); //Abrir dropdowns accessories

$(".accordion-child-header").each(function(){$(this).click();}); //Abrir dropdowns specs 

$("li.c_285-1.js-item").each(function(){ $(this).attr("class","c_285-1 js-item expanded"); }); //Abrir dropdowns trims

$(".accordion-header.grey").each(function(){
      
	$(this).click();
  
});
$(".accordion-header").each(function(){
      
	$(this).click();
  
});
$(".accordion-child-header").each(function(){
      
	$(this).click();
	});

$("div.answers.visually-hidden").each(function(){
      
	$(this).attr("class","answers");
});

$("div.accordion-panel.accordion-animation-complete").each(function(){
      
	$(this).attr("style","display: block;");
	$(this).attr("data-state","open;");
});
	

	


//Funcion scroll
	setTimeout(  function() {$("html, body").animate({ scrollTop: $(document).height()-$(window).height() });},time);
	time=time+1500;
	setTimeout(  function() {$("html, body").animate({ scrollTop: 0 });},time);
	time=time+1500;

$(document).ready(  function(){
	setTimeout(  function() {
		
	  $('html, body').animate({
	//	scrollTop: $('p.footer-copyright').offset().top
	  }, 5000);
	}, time);
		  }); 

	time=time+6500;	  




setTimeout(function(){  


	$(".Configuratorstyles__Container-sc-6whvfp-1.jwOTbz").attr("id","page_content");
	$(".FiltrationPagestyles__InnerContainer-y5wsul-1.haIgsF").attr("id","page_content");
	$(".FiltrationPagestyles__InnerContainer-y5wsul-1.bSHSyY").attr("id","page_content");
	
	
	


//Quitar disclaimers
$(jQuery("#page_content").find("div.c_008.asterisk")).each( function(){
	try {
        this.remove();
	  } catch (error) {}
});
//Model versions
//NISSAN
$(jQuery("#page_content").find(".VersionTilestyles__VersionTileCopy-rm9rzt-6.EFPxC")).each( function(){
	try {

		
			table_versions=table_versions+'</td width="45%"><td>'+this.childNodes[0].childNodes[0].innerText+
			'</td width="45%"><td>'+this.childNodes[0].childNodes[1].childNodes[0].childNodes[0].innerText+
			'</td><td width="45%">'+this.childNodes[1].childNodes[1].childNodes[0].textContent+'</td></tr>';
		
		var element= $(this);
        console.log(element);
        console.log(this.childNodes[0].childNodes[0].innerText); //YEAR
        console.log(this.childNodes[0].childNodes[1].childNodes[0].childNodes[0].innerText); //VERSION
        console.log(this.childNodes[1].childNodes[1].childNodes[0].textContent);//PRICE
        
	  } catch (error) {}
});
//INFINITI
$(jQuery("#page_content").find(".VersionTilestyles__VersionTileCopy-rm9rzt-6.evYOnm")).each( function(){
	try {

		
			table_versions=table_versions+'</td width="45%"><td>'+this.childNodes[0].childNodes[0].innerText+
			'</td width="45%"><td>'+this.childNodes[0].childNodes[1].childNodes[0].childNodes[0].innerText+
			'</td><td width="45%">'+this.childNodes[1].childNodes[1].childNodes[0].textContent+'</td></tr>';
		
		var element= $(this);
        console.log(element);
        console.log(this.childNodes[0].childNodes[0].innerText); //YEAR
        console.log(this.childNodes[0].childNodes[1].childNodes[0].childNodes[0].innerText); //VERSION
        console.log(this.childNodes[1].childNodes[1].childNodes[0].textContent);//PRICE
        
	  } catch (error) {}
});

//Title accessories
//NISSAN
$(jQuery("#page_content").find(".SecondaryNavBaseItemstyles__ItemDetail-ub1xb3-3.jQcSKL")).each( function(){
	try {

		if(this.childNodes[0].localName === 'h2')
		{
			table=table+'</td width="45%"><td>'+this.childNodes[0].innerText.replace('*','').trim()+'</td><td width="45%">'+this.childNodes[1].childNodes[1].textContent+'</td></tr>';
		}
		if(this.childNodes[1].localName === 'h2')
		{
			table=table+'</td width="45%"><td>'+this.childNodes[1].innerText.replace('*','').trim()+'</td><td width="45%">'+this.childNodes[2].childNodes[1].textContent+'</td></tr>';
		}
		//var element= $(this);
       // console.log(element);
        //console.log(this.childNodes[0].innerText); //title accessory
       // console.log(this.childNodes[1].childNodes[1].textContent); //Price
        //console.log(this.childNodes[1].childNodes[3].childNodes[3].innerText);
        
	  } catch (error) {}
});
//INFINITI
$(jQuery("#page_content").find(".SecondaryNavBaseItemstyles__ItemDetail-ub1xb3-3.eTcKOH")).each( function(){
	try {

		if(this.childNodes[0].localName === 'h2')
		{
			table=table+'</td width="45%"><td>'+this.childNodes[0].innerText.replace('*','').trim()+'</td><td width="45%">'+this.childNodes[1].childNodes[1].textContent+'</td></tr>';
		}
		if(this.childNodes[1].localName === 'h2')
		{
			table=table+'</td width="45%"><td>'+this.childNodes[1].innerText.replace('*','').trim()+'</td><td width="45%">'+this.childNodes[2].childNodes[1].textContent+'</td></tr>';
		}
		//var element= $(this);
       // console.log(element);
        //console.log(this.childNodes[0].innerText); //title accessory
       // console.log(this.childNodes[1].childNodes[1].textContent); //Price
        //console.log(this.childNodes[1].childNodes[3].childNodes[3].innerText);
        
	  } catch (error) {}
});

}, time);
time=time+1500;	
setTimeout(function() {
document.write('<body style="background-color:rgb(0,0,0);"></body>'+title_pag);
if(table !== '')
{
	document.write(Style_black+URL+DATE_HTML+HTML1+tbody_1+table+tbody_2+HTML_end+Credits);
}
if(table_versions !== '')
{
	document.write(Style_black+URL+DATE_HTML+HTML2+tbody_1+table_versions+tbody_2+HTML_end+Credits);
}

//document.write(Style_black+tbody_1+table_robots+tbody_2+HTML_end);
//document.write(Style_black+HTML3+tbody_1+table_headers+tbody_2+HTML_end);
//document.write(Style_black+HTML1+tbody_1+table+tbody_2+HTML_end);
//document.write(Style_black+HTML4+HTML1+tbody_1+table_mosaic+tbody_2+HTML_end+Credits);
console.log("%cTEST COMPLETE", "color: green");
},time);
time=time+1500;	
$("html, body").animate({ scrollTop: 0 });
}
//Overview and minicompare
if((window.location.href.indexOf("build-price")>-1) || (window.location.href.indexOf("compare-specs")>-1) || (window.location.href.indexOf("models-specs")>-1)|| (window.location.href.indexOf("accessories-parts")>-1))
{}
else
{
//Variables
var date = new Date();
var Style_black ='<style> table.darkTable {font-family: Arial, Helvetica, sans-serif;border: 2px solid #000000;background-color: #4A4A4A;width: 100%;height: 200px;text-align: center;border-collapse: collapse;}table.darkTable td, table.darkTable th {border: 1px solid #4A4A4A;padding: 3px 2px;}table.darkTable tbody td {font-size: 13px;color: #E6E6E6;}table.darkTable tr:nth-child(even) {background: #323232;}table.darkTable thead {background: #000000;border-bottom: 3px solid #000000;}table.darkTable thead th {font-size: 15px;font-weight: bold;color: #E6E6E6;text-align: center;border-left: 2px solid #4A4A4A;}table.darkTable thead th:first-child {border-left: none;}table.darkTable tfoot {font-size: 12px;font-weight: bold;color: #E6E6E6;background: #000000;background: -moz-linear-gradient(top, #404040 0%, #191919 66%, #000000 100%);background: -webkit-linear-gradient(top, #404040 0%, #191919 66%, #000000 100%);background: linear-gradient(to bottom, #404040 0%, #191919 66%, #000000 100%);border-top: 1px solid #4A4A4A;}table.darkTable tfoot td {font-size: 12px;}</style>';
var HTML_pfa='<table class="darkTable" id="pfa_price"><thead><tr><th>SECTION</th><th>VERSIONS</th><th>PRICE</th></tr>';
var HTML_mini_compare='<table class="darkTable" id="mini_compare_prices"><thead><tr><th>SECTION</th><th>MODEL CODE</th><th>VERSIONS</th><th>PRICE</th></tr>';



//var HTML4='<table class="darkTable" id="title"><thead><tr><th>Mosaic</th></tr>';
var URL='<div><table class="darkTable" id="url"><thead><tr><th width="50%" id="text-current">Current URL</th><th> <a href= "'+document.location.href+'"  style="color:#10A419;">'+document.location.href+'</a> </th></tr></div>'; 
var DATE_HTML='<table class="darkTable" id="date"><thead><tr><th width="50%">Date</th><th> '+date+'</th></tr>'; 

var tbody_1='<tbody>';
var tbody_2='</tbody>';
var HTML_end='</table>';
var rows='<tr><td width="10%">';
var rows2='<tr><td width="20%">';
var asset_i='<img src="';
var asset_f='" width="250" height="130" />';
var table='';
var table_versions='';

var title_pag='<div ALIGN="CENTER"><img src="https://1.bp.blogspot.com/-d-nWQHAoLnk/YH3hKkYA5CI/AAAAAAAAm-4/8EL08j4tryU6wXHkxAVWdydND3ZOJCjeACNcBGAsYHQ/s0/TOOL%2BIMAGE.png" ALIGN="CENTER" /></div>';
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



//Funcion esperar a que carguen todas las imagenes
//Abrir dropdowns
$(".accordion-panel.white").each(function(){ $(this).attr("style","display: block;");  }); //Abrir dropdowns accessories

$(".accordion-child-header").each(function(){$(this).click();}); //Abrir dropdowns specs 

$("li.c_285-1.js-item").each(function(){ $(this).attr("class","c_285-1 js-item expanded"); }); //Abrir dropdowns trims

$(".accordion-header.grey").each(function(){
      
	$(this).click();
  
});
$(".accordion-header").each(function(){
      
	$(this).click();
  
});
$(".accordion-child-header").each(function(){
      
	$(this).click();
	});

$("div.answers.visually-hidden").each(function(){
      
	$(this).attr("class","answers");
});

$("div.accordion-panel.accordion-animation-complete").each(function(){
      
	$(this).attr("style","display: block;");
	$(this).attr("data-state","open;");
});
	

	


//Funcion scroll
	setTimeout(  function() {$("html, body").animate({ scrollTop: $(document).height()-$(window).height() });},time);
	time=time+1500;
	setTimeout(  function() {$("html, body").animate({ scrollTop: 0 });},time);
	time=time+1500;

$(document).ready(  function(){
	setTimeout(  function() {
		
	  $('html, body').animate({
		scrollTop: $('p.footer-copyright').offset().top
	  }, 5000);
	}, time);
		  }); 

	time=time+6500;	  




setTimeout(function(){  


	$(".freeEditorial.freeEditorialParsys.parsys").attr("id","page_content");

	
	
	


//Quitar disclaimers
$(jQuery("#page_content").find("div.c_008.asterisk")).each( function(){
	try {
        this.remove();
	  } catch (error) {}
});
//Model versions
//PFA
//AS SHOWN EXPENSIVE VERSION
$(jQuery("#page_content").find(".usg-body.carousel-pfa_body-copy.text-color-secondary.text-uppercase")).each( function(){
	try {

		
			table=table+'</td width="45%"><td>'+'PFA'+
			'</td width="45%"><td>'+'As shown'+
			'</td><td width="45%">'+this.innerText.replace('As shown ','')+'</td></tr>';
		
		//var element= $(this);
        
	  } catch (error) {}
});
//STARTING MSRP
//NISSAN
$(jQuery("#page_content").find(".primary-price__price.text-color-secondary")).each( function(){
	try {

		
			table=table+'</td width="45%"><td>'+'PFA'+
			'</td width="45%"><td>'+'Default version'+
			'</td><td width="45%">'+this.innerText+'</td></tr>';
		
		//var element= $(this);
        
	  } catch (error) {}
});
//TITAN EXAMPLE DIFFERENT CLASS
$(jQuery("#page_content").find(".primary-price__price.text-color-primary")).each( function(){
	try {

		
			table=table+'</td width="45%"><td>'+'PFA'+
			'</td width="45%"><td>'+'Default version'+
			'</td><td width="45%">'+this.innerText+'</td></tr>';
		
		//var element= $(this);
        
	  } catch (error) {}
});


//MINI-COMPARE

async function fetchDataAsync() {
	
		const response = await fetch($(".c_284.c_284--carousel-loaded").attr("data-json-url"));
	
    
	var json_mini_compare=await response.json();
	console.log(json_mini_compare.length);
	for (let i=0;i<json_mini_compare.length;i++)
	{await new Promise(resolve => setTimeout(resolve,0))
		table_versions=table_versions+'</td width="45%"><td>'+'MINI-COMPARE'+
		'</td width="45%"><td>'+json_mini_compare [i].versionCode+
			'</td width="45%"><td>'+json_mini_compare [i].trimName+' - '+json_mini_compare [i].versionName+
			'</td><td width="45%">'+'$'+json_mini_compare [i].price.substring(0,2)+','+json_mini_compare [i].price.substring(2,json_mini_compare [i].price.indexOf('.'))+'</td></tr>';
			
	}
	document.write('<body style="background-color:rgb(0,0,0);"></body>'+title_pag);
if(table !== '')
{
	document.write(Style_black+URL+DATE_HTML+HTML_pfa+tbody_1+table+tbody_2+HTML_end);
}
if((window.location.href.indexOf("infiniti")>-1))
{
	document.write(Style_black+URL+DATE_HTML+HTML_mini_compare+tbody_1+table_versions+tbody_2+HTML_end+Credits);
}
else
{
	document.write(Style_black+HTML_mini_compare+tbody_1+table_versions+tbody_2+HTML_end+Credits);
}
	
}
try {
	fetchDataAsync();
} catch (error) {
	
}





}, time);
time=time+1500;	
setTimeout(function() {
/*document.write('<body style="background-color:rgb(0,0,0);"></body>'+title_pag);
if(table !== '')
{
	document.write(Style_black+URL+DATE_HTML+HTML1+tbody_1+table+tbody_2+HTML_end+Credits);
}*/


//document.write(Style_black+tbody_1+table_robots+tbody_2+HTML_end);
//document.write(Style_black+HTML3+tbody_1+table_headers+tbody_2+HTML_end);
//document.write(Style_black+HTML1+tbody_1+table+tbody_2+HTML_end);
//document.write(Style_black+HTML4+HTML1+tbody_1+table_mosaic+tbody_2+HTML_end+Credits);
console.log("%cTEST COMPLETE", "color: green");
},time);
time=time+1500;	
$("html, body").animate({ scrollTop: 0 });
}
setTimeout(function() {
$("tr").click(function(){
	$(this).addClass("selected").siblings().removeClass("selected");
});
},time);