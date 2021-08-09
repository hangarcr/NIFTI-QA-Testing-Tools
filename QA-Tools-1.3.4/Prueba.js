//Funcion abrir,extraer imagenes  y cerrar mosaico
var time_close=0;
  function mosaic_click() {
    var list=document.getElementsByClassName('c_274'); 
    return new Promise(resolve => { setTimeout(() => {resolve(list[0].click());}, 0);
    });
  }
  async function mosaic_show_images()
  {
  let num=document.getElementsByClassName("gallery-carousel-slide-content-counter"); 
      num=num[0].innerHTML.substring(0, num[0].innerHTML.indexOf('/')).trim();
      num=parseInt(num);
      let time=1500;
      time_close=time*num;
      for(let i=1;i<num;i++)
      {    await new Promise(resolve => setTimeout(resolve,0))
          setTimeout(  function() {$("button.slick-next").click(); },time);
          time=time+1500;
      }
  }  
  function mosaic_click_cerrar() {
    var list=document.getElementsByClassName('c_273_close_label'); 
    return new Promise(resolve => { setTimeout(() => {resolve(list[0].click());}, time_close);
    });
  }
  async function msg() {
    await mosaic_click();
    await mosaic_show_images();
    await mosaic_click_cerrar();
  }
  
  msg();


  //----------
  //Funcion para elimnar objeto de array
  var objetos=['hola','como','esta','ud','amigo']

  
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

var array=['hola','como','esta','ud','amigo','holape']; //expected
var copy='holap'; //pag
  function find_expected(array,copy)
  {
    var original=copy;
    var result='';
    for(let i=0;i<array.length;i++)
    {
      for(let e=0;e<copy.length;e++)
      {
          if(array[i].includes(copy))
          {
              result=array[i];
          }
          else
          {
            copy=copy.substring(0,copy.length-1);
          }
          
      }
      copy=original;
    }
    return result;
  }
  console.log(find_expected(array,copy));

  var copy='holap';
  for(let i=0;i<copy.length;i++)
    {
      console.log(copy);
      copy=copy.substring(0,copy.length-1);

    }


    // capturando prices de HELIOS json
    //Contar versiones de carro y guardarlas en un array de JSON
    var array_allversions=[];
    var myData =HELIOS.components.c059E.filteredData.grades;
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
      array_allversions.push(array_versions[e]);
      

      }

    }
    console.log(array_allversions);
    


    var myData =HELIOS.components.c059E.filteredData.grades
    var array_grades = Object.entries(myData).map(item => item[1]);
    var myData2 =array_grades[0].versions
    var array_versions = Object.entries(myData2).map(item => item[1]);
    console.log(array_versions.length);
    console.log(array_grades);
    console.log(array_versions);



//Extraer [TK]
var count_tk=0;
$(".freeEditorial.freeEditorialParsys.parsys").attr("id","page_content");
$(jQuery("#page_content").find("p:contains('[TK]')")).each(function(){
  count_tk++;
    console.log(count_tk);
    console.log(this.innerText);
  
});
$(jQuery("#page_content").find(".c_270__copy__body.usg-body:contains('[TK]')")).each(function(){
  count_tk++;
  console.log(count_tk);
  console.log(this.innerText);
});
$(jQuery("#page_content").find(".usg-body.c_256_linked-carousel_slide_body:contains('[TK]')")).each(function(){
  count_tk++;
  console.log(count_tk);
  console.log(this.innerText);
});
$(jQuery("#page_content").find(".c_001H_list_with_image_tertiary:contains('[TK]')")).each(function(){
  count_tk++;
  console.log(count_tk);
  console.log(this.innerText);
});

//Extraer disclaimer de copy de carousel
$(jQuery(".slick-list.draggable").find(".c_008.asterisk")).each( function(){
console.log(this.parentNode.innerText);

});

$(".c_274 ").each( function(){
  console.log($(this));
  
  });

  $("div.tooltip-panel.disclaimer-tooltip").each(function(){
    console.log($(this));
    console.log(this.children[1].innerText)
    var id=this.dataset.tooltipId.replace("disclaimer-", "");
    id = id.substring(0, id.indexOf('-'));
   // id= id.split('_');
    //id=id[2];
    console.log(id);
    if(id === undefined)
    {
      id=this.dataset.tooltipId.replace("disclaimer-", "");
      id = id.substring(0, id.indexOf('-')); 
    }

  });

  var oracion="Marrying digital and analog perfectly, the digital gauge cluster lets you customize your information. [[1456]] [[1189]]";
  function copy_disc_mosaic(copy) {
      var array_disc=[];
    var result='';
    if(oracopycion.includes('[['))
    {
      var array_split=copy.split('[[');
      for(let i=1;i<array_split.length;i++)
      {
        var id_array=array_split[i].replace(']]','').trim()
        console.log(id_array);
        $("div.tooltip-panel.disclaimer-tooltip").each(function(){
          //console.log($(this));
          //console.log(this.children[1].innerText)
          var id=this.dataset.tooltipId.replace("disclaimer-", "");
          id = id.substring(0, id.indexOf('-'));
        // id= id.split('_');
          //id=id[2];
        // console.log(id);
          if(id === undefined)
          {
            id=this.dataset.tooltipId.replace("disclaimer-", "");
            id = id.substring(0, id.indexOf('-')); 
          }
          if(id_array === id)
          {
            result=this.children[1].innerText;
            return false;
          }
      
        });
        console.log(result);
      }
    }
  }
  

  var link='hola | nada'; 
  link = link.substring(link.indexOf('|')+1,link.length).trim();
  console.log(link);



  var word='Powered by PlugShare, the Nissan LEAF EZ-Charge app maintains the world’s largest database of EV charging stations. The app also includes a Trip Planner, so you’ll know where to charge even before you begin your next journey. \n[[153]]';
  word.replace(/\n/g,'');
  console.log(word);

  //Headers solucion https://jira.criticalmass.com/browse/NNAH-41888

  var h1= document.getElementsByTagName('h1');
//h2
var h2 = document.getElementsByTagName('h2');

//h3
var h3 = document.getElementsByTagName('h3');
try
{

    if(h2.length > h3.length)
    {
      if(h3.length == 0)
      {
        for (let i = 0; i < h1.length; i++) {
         // console.table($('h1')[i].outerText+$('h2')[i].outerText);
         table_headers=table_headers+rows2+$('h1')[i].outerText+'</td width="40%"><td>'+$('h2')[i].outerText+'</td><td width="40%">'+'</td></tr>';
        }
        
        for (let e = h1.length; e < h3.length; e++) {
          //console.table($('h2')[e].outerText);
          table_headers=table_headers+rows2+'</td width="40%"><td>'+$('h2')[e].outerText+'</td><td width="40%">'+'</td></tr>';
        }
        for (let j = h3.length; j < h2.length; j++) {
          //console.table($('h2')[j].outerText);
          table_headers=table_headers+rows2+'</td width="40%"><td>'+$('h2')[j].outerText+'</td>'+'<td width="40%"></td></tr>';
        }
      }
      else
      {
        for (let i = 0; i < h1.length; i++) {
          //console.table($('h1')[i].outerText+$('h2')[i].outerText+$('h3')[i].outerText);
          table_headers=table_headers+rows2+$('h1')[i].outerText+'</td width="40%"><td>'+$('h2')[i].outerText+'</td><td width="40%">'+$('h3')[i].outerText+'</td></tr>';
        }
        
        for (let e = h1.length; e < h3.length; e++) {
          //console.table($('h2')[e].outerText+$('h3')[e].outerText);
          table_headers=table_headers+rows2+'</td width="40%"><td>'+$('h2')[e].outerText+'</td><td width="40%">'+$('h3')[e].outerText+'</td></tr>';
        }
        for (let j = h3.length; j < h2.length; j++) {
          //console.table($('h2')[j].outerText);
          table_headers=table_headers+rows2+'</td width="40%"><td>'+$('h2')[j].outerText+'</td>'+'<td width="40%"></td></tr>';
        }
      }
      
      
    }
    else
    {
      for (let i = 0; i < h1.length; i++) {
        //console.table($('h1')[i].outerText+$('h2')[i].outerText+$('h3')[i].outerText);
        table_headers=table_headers+rows2+$('h1')[i].outerText+'</td width="40%"><td>'+$('h2')[i].outerText+'</td><td width="40%">'+$('h3')[i].outerText+'</td></tr>';
      }
      for (let e = h1.length; e < h2.length; e++) {
        //console.table($('h2')[e].outerText+$('h3')[e].outerText);
        table_headers=table_headers+rows2+'</td width="40%"><td>'+$('h2')[e].outerText+'</td><td width="40%">'+$('h3')[e].outerText+'</td></tr>';
      }
      for (let j = h2.length; j < h3.length; j++) {
        //console.table($('h2')[j].outerText);
        table_headers=table_headers+rows2+'</td width="40%"><td>'+'</td><td width="40%">'+$('h3')[j].outerText+'</td></tr>';
      }
    }


	
}   catch(error){}

//Function
var text='Protect the front and rear bumpers of your Nissan LEAF from nicks and scratchesCustom-designed for a perfect fitIncludes Clear Charging Port Protector and Rear Bumper ProtectorFactory-installed';
function separate_features_accessories(features)
{
  if(features.includes('Factory-installed') || features.includes('Dealer-installed'))
  {
    var result = features.replace(/([A-Z]+)/g, ",$1").replace(/^,/, "");
    return result.split(",");
  }
}
console.log(separate_features_accessories(text));

var test='1^/2^/3^/4^/';
var copy='3';

function extract_cell(ref,text)
{
  var arr=[];
  var check=false;
  arr=ref.split('^/');
  for(let i=0;i<arr.length;i++)
  {
    if(arr[i] == text)
    {
      check=true;
      i=arr.length;
    }
    else{ if(i == arr.length-1){check=false;}}
  }
  return check;

}
console.log(extract_cell(test,copy));