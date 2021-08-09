//Specs availability
//Functions
function delete_item_array(arr, value) {
    var i = 0;
    while (i < arr.length) {
      if (arr[i] === value) {
        arr.splice(i, 1);
      } else {
        ++i;
      }
    }
    return arr;
  } 
var time=0;
//Entrar solo en specs(Nissan-Infiniti)
	if((window.location.href.indexOf("compare-specs")>-1) || (window.location.href.indexOf("models-specs")>-1))
	{

//Variables

var date = new Date();
var Style_black ='<style> table.darkTable {table-layout: auto;font-family: Arial, Helvetica, sans-serif;border: 2px solid #000000;background-color: #4A4A4A;width: 100%;text-align: center;border-collapse: collapse;}table.darkTable td, table.darkTable th {border: 1px solid #4A4A4A;padding: 3px 2px;}table.darkTable tbody td {font-size: 13px;color: #E6E6E6;}table.darkTable tr:nth-child(even) {background-color: #323232;}table.darkTable thead {background: #000000;border-bottom: 3px solid #000000;}table.darkTable thead th {font-size: 15px;font-weight: bold;color: #E6E6E6;text-align: center;border-left: 2px solid #4A4A4A;}table.darkTable thead th:first-child {border-left: none;}table.darkTable tfoot {font-size: 12px;font-weight: bold;color: #E6E6E6;background: #000000;background: -moz-linear-gradient(top, #404040 0%, #191919 66%, #000000 100%);background: -webkit-linear-gradient(top, #404040 0%, #191919 66%, #000000 100%);background: linear-gradient(to bottom, #404040 0%, #191919 66%, #000000 100%);border-top: 1px solid #4A4A4A;}table.darkTable tfoot td {font-size: 12px;}</style>';
var Titulos_SPECS='<table class="darkTable" id="specs"><thead><tr><th>#</th><th>SPECS</th>';
var Titulos_ACCESSORIES='<thead><tr><th>NNA CODE</th><th>ACCESSORIES</th>';
var Titulos_PACKAGES='<thead><tr><th>NNA CODE</th><th>PACKAGES</th>';
var Titulos_END='</tr>';
var versions='';
//var HTML2='<table class="darkTable" id="title"><thead><tr><th>Title</th><th>Description</th></tr>';
//var HTML3='<table class="darkTable" id="headers"><thead><tr><th>H1</th><th>H2</th><th>H3</th></tr>';
//var HTML4='<table class="darkTable" id="title"><thead><tr><th>Mosaic</th></tr>';
var URL='<div><table class="darkTable" id="url"><thead><tr><th width="50%" id="text-current">Current URL</th><th> <a href= "'+document.location.href+'"  style="color:#10A419;">'+document.location.href+'</a> </th></tr></div>'; 
var DATE_HTML='<table class="darkTable" id="date"><thead><tr><th width="50%">Date</th><th> '+date+'</th></tr>'; 

var tbody_1='<tbody>';
var tbody_2='</tbody>';
var HTML_end='</table> ';
var rows='<tr><td width="10%">';
var rows2='<tr><td width="20%">';
var asset_i='<img src="';
var asset_f='" width="250" height="130" />';
var table='';
var table_acc='';
var table_packs='';


var title_pag='<div ALIGN="CENTER"><img src="https://1.bp.blogspot.com/-hGH9p4Uzngk/YIckMryUG_I/AAAAAAAAnBQ/xdAfxQaS9R8gRcPH4YglUF_F1e5zXExqgCNcBGAsYHQ/s0/Spes-availability%2Btool.png" ALIGN="CENTER" /></div>';
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
		//scrollTop: $('p.footer-copyright').offset().top
	  }, 5000);
	}, time);
		  }); 

	time=time+6500;	  

		  

setTimeout(function(){  


//Specs
//Inyectar script para extraer HELIOS
//Versions
var array_allversions=[];
var span= document.createElement("span");
span.setAttribute("id", "HELIOS_json");
span.setAttribute("hidden","true");
document.body.insertBefore(span,document.body.childNodes[0]);
    const injectedCode = "var json=JSON.stringify(HELIOS.components.c059E.filteredData.grades);"+
    "document.getElementById('HELIOS_json').innerHTML =json;";
var script = document.createElement("script");
    script.textContent = injectedCode;

    (document.head).appendChild(script);
    //Contar versiones de carro y guardarlas en un array_allversions (filtered.grades)
//console.log($('#HELIOS_json').text());
var myData =JSON.parse($('#HELIOS_json').text());
var array_grades = Object.entries(myData).map(item => item[1]);
//console.log(array_grades.length);
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
//leer array all versions
for(let i=0;i<array_allversions.length;i++)
{
    //console.log(array_allversions[i]['name']);
}
//----------------------------------------------------
//Versions,specs,accessories
var array_allversions_specs=[];
	var span_specs= document.createElement("span");
	span_specs.setAttribute("id", "HELIOS_json_specs");
	span_specs.setAttribute("hidden","true");
	document.body.insertBefore(span_specs,document.body.childNodes[0]);
		const injectedCode1 = "var json=JSON.stringify(HELIOS.components.c059E.grades);"+
		"document.getElementById('HELIOS_json_specs').innerHTML =json;";
	var script1 = document.createElement("script");
		script1.textContent = injectedCode1;
	
		(document.head).appendChild(script1);
//Contar versiones de carro y guardarlas en un array_allversions (grades)
//console.log($('#HELIOS_json_specs').text());
var myData =JSON.parse($('#HELIOS_json_specs').text());
var array_grades = Object.entries(myData).map(item => item[1]);
//console.log(array_grades.length);
for(let i=0;i<array_grades.length;i++)
{
  var myData2 =array_grades[i].versions
  var grade_name=array_grades[i]['name'];
  var array_versions = Object.entries(myData2).map(item => item[1]);
  for(let e=0;e<array_versions.length;e++)
  {
    
    array_allversions_specs.push(array_versions[e]);
  }
}
//Ordenar versiones por MODEL CODE
array_allversions_specs.sort((a, b) => a.versionKey - b.versionKey );

//leer array all versions specs
if((window.location.href.indexOf("compare-specs")>-1)) // En infiniti no se ocupa nombre real porque lo extrae del array original.
{
for(let i=0;i<array_allversions_specs.length;i++)
{
    var found=false;
    for(let e=0;e<array_allversions.length;e++) //Recorrer el json all versions para inyectar nombre real de versiones en all vrsions specs.
    {
        if(array_allversions[e]['versionKey']=== array_allversions_specs[i]['versionKey'])
        {
        found=true;
        array_allversions_specs[i]['name']=array_allversions[e]['name'];
        }
    }
    
    //console.log(array_allversions_specs[i]['name']);
    //console.log(array_allversions_specs[i]['versionKey']);
   // console.log(array_allversions_specs[i]['specifications'][0]['specs'][0]['value']);
}
}
//----------------------------------------------------
$(".freeEditorial.freeEditorialParsys.parsys").attr("id","page_content");
$(".c_059E.nissan_nu.sticky-titles").attr("id","page_content");
$(".vehicleComparisonExtended.vehicleComparisonWithDefaultFilters").attr("id","page_content");
var array_specs=[];
var array_accessories=[];
var array_accessories_codes=[];
var array_packages=[];
var array_specs_codes=[];

//Quitar disclaimers
$(jQuery("#page_content").find("div.c_008.asterisk")).each( function(){
	try {
        this.remove();
	  } catch (error) {}
});
//Guardar Specs en array_specs
$(jQuery("#page_content").find(".data-row")).each( function(){
	try {
        if(this.childNodes[1].innerText.trim() !== 'Key Features'&& this.childNodes[1].innerText.trim() !== 'Características principales'&& this.childNodes[1].innerText.trim() !== 'SPECIFICATIONS'&&
        this.childNodes[1].innerText.trim() !== '' && this.childNodes[1].innerText.trim() !== undefined)
        {   
        array_specs_codes.push(this);
       //array_specs_codes.push(this.dataset.sectionId);
       array_specs.push(this.childNodes[1].innerText.trim());
        }
    } catch (error) {
        
    }

});
//Guardar accessories en array_accessories
$(jQuery("#page_content").find(".specs-type.accessory-row")).each( function(){
	try {
		array_accessories.push(this.childNodes[1].childNodes[1].innerText);
        array_accessories_codes.push($(this).attr('data-section-id').substring($(this).attr('data-section-id').indexOf('-')+1,$(this).attr('data-section-id').length));
	  } catch (error) {}
});
//Guardar packages en array_packages
$(".data-tab-section.packs-section").attr("id","packages");
$(jQuery("#packages").find(".accordion-child-header")).each( function(){
	try {
       // console.log(this.innerText.trim());
		array_packages.push(this.innerText.trim().replace(/&nbsp;|\u00a0/g," "));
	  } catch (error) {}
});
//Borrar accessories del array de specs
for(let i=0;i<array_specs.length;i++)
{
    for(let e=0;e<array_accessories.length;e++)
    {
        if(array_specs[i] === array_accessories[e])
        {
            delete_item_array(array_specs, array_specs[i]);
        }
        if(array_specs[i] === 'SPECIFICATIONS' || array_specs[i] === 'Standard Key Features') // solo en infiniti
        {
            delete_item_array(array_specs, array_specs[i]);
        }
    }
}


//Poner titulos de versiones a columnas
for(let i=0;i<array_allversions_specs.length;i++)
{
    versions=versions+'<th>'+array_allversions_specs[i]['name']+'</th>';
    
}


//Mostrar specs y extraer data de specs
var value='N/A';// 1: N/A -> Not available 2: X ->STANDARD 3: O ->Optional
var specifications;
var accessoriesSpecs;
var consumptionSpecs;
var packs;
var specs;
var cod_packs=[];
var found=false;
//Specs
//console.log(array_specs.length);
//console.log(array_specs_codes.length);
for(let m=0;m<array_specs_codes.length;m++)
{

    table=table+'<tr><td>'+(m+1)+'</td><td>'+array_specs_codes[m].childNodes[1].innerText.trim();//+'</td><td>'+'</td></tr>'
    for(let i=0;i<array_allversions_specs.length;i++)
    {
        specifications=array_allversions_specs[i].specifications;
        consumptionSpecs=array_allversions_specs[i].consumptionSpecs;
        try {
            packs=array_allversions_specs[i].packs.packs;
        } catch (error) {
            
        } 
        for(let e=0;e<specifications.length;e++) //Specs
        {
            specs=specifications[e].specs;
            for(let j=0;j<specs.length;j++)
            {
                
               
               if(specs[j]['customKey'] === array_specs_codes[m].dataset.sectionId)//Specs
                {  
                    if(specs[j]['specType'] === 'technical')
                    {
                        
                        found=true;
                            value=specs[j]['value'];
                            if(i === array_allversions_specs.length-1)
                            {
                            table=table+'</td><td>'+value+'</td></tr>';
                            }
                            else
                            {
                            table=table+'</td><td>'+value+'</td>';
                            }
                            j=specs.length;
                            e=specifications.length;
                       
                    }
                    else
                    {
                        if(specs[j]['type']==="Included")
                        {   found=true;
                            value='X';
                            if(i === array_allversions_specs.length-1)
                            {
                            table=table+'</td><td>'+value+'</td></tr>';
                            }
                            else
                            {
                            table=table+'</td><td>'+value+'</td>';
                            }
                            j=specs.length;
                            e=specifications.length;
                        }
                        else
                        {
                         
                           if(specs[j]['type']==="Optional")
                            //if(specs[j]['specStatus']==="PACK")
                            {   found=true;
                                value='O';
                                if(i === array_allversions_specs.length-1)
                                {
                                    table=table+'</td><td>'+value+'</td></tr>';
                                }
                                else
                                {
                                    table=table+'</td><td>'+value+'</td>';
                                }
                                j=specs.length;
                                e=specifications.length;
                            }
                          
                            
                        
                        }
                    }
                    
                }
                
               
                
                
            }
        }
        

        
       if(packs.length>=1 && found !== true ) //packages specs
        {

        
            for(let j=0;j<packs.length;j++) //packs
            {
                try {
                    for(let e=0;e<packs[j].specs.length;e++) //packs.specs
                    {
                
                       if(packs[j].specs[e]['key'] === array_specs_codes[m].dataset.sectionId)//Specs
                        {   
                            
                    
                                found=true;
                                value='O';
                                if(i === array_allversions_specs.length-1)
                                {
                                    table=table+'</td><td>'+value+'</td></tr>';
                                }
                                else
                                {
                                    table=table+'</td><td>'+value+'</td>';
                                }
                                e=packs[j].specs.length;
                                j=packs.length;
    
                            
                            
                        
                        }
                        
                    } 
                } catch (error) {
                    
                }
                
                
                
            
            }
        
        
            
        } 
        
        
      
        if(found === false)
        {  // console.log('entrando');
            value='N/A';
                                if(i === array_allversions_specs.length-1)
                                {
                                    table=table+'</td><td>'+value+'</td></tr>';
                                }
                                else
                                {
                                    table=table+'</td><td>'+value+'</td>';
                                }
        }
        found=false;
    }

}
//Accessories
for(let m=0;m<array_accessories.length;m++)
{

    table_acc=table_acc+'<tr><td>'+array_accessories_codes[m]+'</td><td>'+array_accessories[m];//+'</td><td>'+'</td></tr>'
    for(let i=0;i<array_allversions_specs.length;i++)
    {
        accessoriesSpecs=array_allversions_specs[i].accessoriesSpecs;
        
        for(let e=0;e<accessoriesSpecs.length;e++) //Accessories
        {
            specs=accessoriesSpecs[e].specs;
            for(let j=0;j<specs.length;j++)
            {
                var key =specs[j]['customKey'].substring(specs[j]['customKey'].indexOf('-')+1,specs[j]['customKey'].length).trim();
                //if(specs[j]['customKey'].substring(specs[j]['customKey'].indexOf('-')+1,specs[j]['customKey'].length).includes(array_accessories_codes[m]))
                if(key === array_accessories_codes[m])
                {   
                    if(specs[j]['type']==="Included") //update infiniti anterior "SYSTEMATIC"
                    {   found=true;
                        value='X';
                        if(i === array_allversions_specs.length-1)
                        {
                            table_acc=table_acc+'</td><td>'+value+'</td></tr>';
                        }
                        else
                        {
                            table_acc=table_acc+'</td><td>'+value+'</td>';
                        }
                        j=specs.length;
                        e=accessoriesSpecs.length;
                    }
                    if(j != specs.length){
                        if(specs[j]['type']==="Optional")
                            {   found=true;
                                value='O';
                                if(i === array_allversions_specs.length-1)
                                {
                                    table_acc=table_acc+'</td><td>'+value+'</td></tr>';
                                }
                                else
                                {
                                    table_acc=table_acc+'</td><td>'+value+'</td>';
                                }
                                j=specs.length;
                                e=accessoriesSpecs.length;
                            }
                            else
                            {   
                            }
                    }
                    
                        
                    
                     
                            
                    
                }
                
                
            }
        }
        if(found === false)
        {   //console.log('entrando');
            value='N/A';
                                if(i === array_allversions_specs.length-1)
                                {
                                    table_acc=table_acc+'</td><td>'+value+'</td></tr>';
                                }
                                else
                                {
                                    table_acc=table_acc+'</td><td>'+value+'</td>';
                                }
        }
        found=false;
    }

}
//Packages obtener codigos cod_packs
for(let m=0;m<array_packages.length;m++)
{
    //table_packs=table_packs+'<tr><td>'+array_packages[m];
    for(let i=0;i<array_allversions_specs.length;i++)
    {
        
            packs=array_allversions_specs[i].packs.packs;
            
        if(packs.length>=1) //packages specs
        {
        
            for(let j=0;j<packs.length;j++) //packs
            {
                    
                    if(packs[j]['name'].substring(0,packs[j]['name'].indexOf('[')).trim().replace(/&nbsp;|\u00a0/g," ").toLowerCase() === array_packages[m].toLowerCase()  || packs[j]['name'].replace(/&nbsp;|\u00a0/g," ").toLowerCase() === array_packages[m].toLowerCase()  ) 
                    {   
                        
                        if(cod_packs.includes(packs[j]['key'].substring(packs[j]['key'].indexOf('-'),packs[j]['key'].length)))
                        {}
                        else
                        {
                            
                            cod_packs.push(packs[j]['key'].substring(packs[j]['key'].indexOf('-'),packs[j]['key'].length));
                            
                            j=packs.length;
                        }
        
                    }
            
            }
        }
      
    }

}
console.log(cod_packs);
//Packages
for(let m=0;m<array_packages.length;m++)
{
    table_packs=table_packs+'<tr><td>'+cod_packs[m].replace('-','')+'</td><td>'+array_packages[m];
    for(let i=0;i<array_allversions_specs.length;i++)
    {
        
            packs=array_allversions_specs[i].packs.packs;
            
        if(packs.length>=1) //packages specs
        {
        
            for(let j=0;j<packs.length;j++) //packs
            {
                    
                var key_pack=  packs[j]['key'].substring(packs[j]['key'].indexOf('-')+1,packs[j]['key'].length).trim();
                //if(packs[j]['key'].includes(cod_packs[m]))
                if(key_pack === cod_packs[m].replace('-','').trim())
                    {   
                        
                            found=true;
                            value='O';
                            if(packs[j]['type'] === 'SYSTEMATIC')
                            {
                                value='X';
                            }
                            if(i === array_allversions_specs.length-1)
                            {
                                table_packs=table_packs+'</td><td>'+value+'</td></tr>';
                            }
                            else
                            {
                                table_packs=table_packs+'</td><td>'+value+'</td>';
                            }
                            
                            j=packs.length;
                        

                        
                            
                    
                    }
                    
                
                
                
            
            }
        }
        if(found === false)
        {   //console.log('entrando');
        value='N/A';
        if(i === array_allversions_specs.length-1)
        {
            table_packs=table_packs+'</td><td>'+value+'</td></tr>';
        }
        else
        {
            table_packs=table_packs+'</td><td>'+value+'</td>';
        }
        }
        found=false;
      
    }

}

}, time);
time=time+1500;	
setTimeout(function() {
document.write('<body style="background-color:rgb(0,0,0);"></body>'+title_pag);
document.write(Style_black+URL+DATE_HTML+Titulos_SPECS+versions+Titulos_END+tbody_1+table+tbody_2);
document.write(Titulos_PACKAGES+versions+Titulos_END+tbody_1+table_packs+tbody_2);
document.write(Titulos_ACCESSORIES+versions+Titulos_END+tbody_1+table_acc+tbody_2+HTML_end+Credits);


console.log("%cTEST COMPLETE", "color: green");
},time);
time=time+1500;	
$("html, body").animate({ scrollTop: 0 });
setTimeout(function() {
//Agregar funcionalidad de swap de columnas
    $('#specs').find('tr').not('[style]').each(function(){
        $(this).attr("class","moved-specs");
    });

    $('#specs').dragableColumns({
        drag: true,
   dragClass: 'drag',
   overClass: 'over',
   movedContainerSelector: '.moved-specs'
    });
    $("tr").click(function(){
        $(this).addClass("selected").siblings().removeClass("selected");
    });
},time);
}


