if((window.location.href.indexOf("accessories")>-1))
{}
else
{
  create_QA_Panel();

//Global Variables
var selectedFile;
var Json;
//Functions
function Expected_copy_without_strikes(COPY)
{
var word=COPY;
if(word.includes('@strike@'))
{
    word=word.split('@strike@');
    word=word[0].trim()+word[2]; 
    if(word === '')
    {
        word=COPY.replace(/(@strike@)/gm,"");
    }

}
return word;
}
 function create_QA_Panel() {
        //Variables HTML
//-------------------------------------------BTN
var button = document.createElement("input");
button.setAttribute("type", "button");
button.setAttribute("class", "btn_action");
button.setAttribute("value", "Run");
button.setAttribute("id", "Run");
button.setAttribute("hidden","true");
//-------------------------------------------BTN
var button2 = document.createElement("input");
button2.setAttribute("type", "file");
button2.setAttribute("value", "Upload excel file");
button2.setAttribute("accept", ".xls,.xlsx");
button2.setAttribute("id", "upload");
var label= document.createElement("label");
label.setAttribute("id", "lbl");
label.setAttribute("for", "upload");
var span= document.createElement("span");
span.setAttribute("id", "file-name");

//-------------------------------------------div
var button3 = document.createElement("input");
button3.setAttribute("type", "button");
button3.setAttribute("class", "btn_action");
button3.setAttribute("value", "Read");
button3.setAttribute("id", "read");





var div = document.createElement("div");
div.setAttribute("style","background-color: black; ");
//-------------------------------------------div
var div_credits = document.createElement("div");
div_credits.setAttribute("id", "credits_QA");

//-------------------------------------------Dropdown
var dropdown=document.createElement("select");
dropdown.setAttribute("id","sheets");
dropdown.setAttribute("class","sheets");
dropdown.setAttribute("hidden","true");
dropdown.setAttribute("onchange","getSelectValue()");
//-------------------------------------------Progress bar
var bar=document.createElement("progress");
bar.setAttribute("id","bar");
bar.setAttribute("max","100");
bar.setAttribute("value","0");
//bar.setAttribute("hidden","true");
//Label for bar
var label2= document.createElement("label");
label2.setAttribute("id", "lbl_bar");
label2.setAttribute("style", "Color: green;");


        
        //div.appendChild(script);
        div.appendChild(button2);
        div.appendChild(label);
        div.appendChild(span);
        div.appendChild(button3);
        div.appendChild(dropdown);
        div.appendChild(button);
        div.appendChild(bar);
        div.appendChild(label2);
       
        


        
        div_credits.setAttribute("style", "background-color: black;");
        div_credits.innerHTML='<div ALIGN="CENTER"><img  src="https://3.bp.blogspot.com/-4YKtKVb0bZU/XsF6ulF8_yI/AAAAAAAAjHI/-RLxHxPrkeoni_y2XW8UW8JFqzhtw4lLgCNcBGAsYHQ/s1600/Credits.png" ALIGN="CENTER" /></div>';
        
       

        document.body.insertBefore(div,document.body.childNodes[0]);
        document.body.insertBefore(div_credits,document.body.childNodes[0]);

        //Ingresar libreria de iconos y titulo de boton
         document.getElementById('lbl').innerHTML ='<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"> <i class="fa fa-upload" aria-hidden="true"></i> Choose file';
         document.getElementById('file-name').innerHTML ='no file selected';
         
        
       
        
       
        
        
        document.getElementById("Run").addEventListener("click", function(){
          
          document.getElementById("bar").removeAttribute("hidden");
          Run(getSelectValue())
        });
        document.getElementById("upload").addEventListener("click", function() { Read(); Clear_Dropdown();});
        document.getElementById("read").addEventListener("click", function() { Read()});
        

      }
      function Clear_Dropdown()
      {
        
        document.getElementById("read").removeAttribute("hidden");
        document.getElementById("sheets").setAttribute("hidden","true");
        document.getElementById("Run").setAttribute("hidden","true");
        $(sheets).empty();
      }
        function Test(copy){
          
  
        var change=JSON.stringify(copy);
        change=change.trim();
        if(change.includes('\\n'))
        {
          
          change=change.split('\\n').join('');
        }
        if(change.includes(']['))
        {
          change=change.split('][').join('] [');
          
        }
        if(change.includes('.['))
        {
          change=change.split('.[').join('. [');
          
        }
        if(change.includes('  '))
        {
          
          change=change.split('  ').join(' ');
        }
        if(change.includes(' "'))
        {
          
          change=change.split(' "').join('"');
        }
        change=change.replace(/\n/g, '');
        change= Expected_copy_without_strikes(change);
        var text='';
        if(change ==''){}
        else
        {
          text=JSON.parse(change.trim());
          text=text.Copy;
        }
        
        
        
      
        var array_text=[];



        var array_elements=['h1','h2','h3','h4','p','li','span'];//['p','h2','h3','a','li','div','span'];
        
        $(jQuery("#container").find("a")).each(async function(){
           var texto=this.innerText.trim().replace(/(\r\n|\n|\r)/gm, "").replace(/<br\s*[\/]?>/gi, "").replace(/&nbsp;|\u00a0/g,' ').replace('  [',' [').replace('.[','. [');
           if(texto === "" || texto.substring(0,2) =='[['){}
           else
           {array_text.push(texto);}
           
        });
        
        
        for(let i=0;i<array_elements.length;i++)
        {
        
           $(jQuery("#container").find('div').find(array_elements[i])).each(async function(){
           var texto=this.innerText.trim().replace(/(\r\n|\n|\r)/gm, "").replace(/<br\s*[\/]?>/gi, "").replace(/&nbsp;|\u00a0/g,' ').replace('  [',' [').replace('.[','. [');
           if(texto === "" || texto.substring(0,2) =='[['){}
           else
           {
            
               eliminate_includes(texto);
            
           }
           
        });
        }
        
        $(jQuery("#container").find('div')).each(async function(){
           var texto=this.innerText.trim().replace(/(\r\n|\n|\r)/gm, "").replace(/<br\s*[\/]?>/gi, "").replace(/&nbsp;|\u00a0/g,' ').replace('  [',' [').replace('.[','. [');
           if(texto === "" || texto.substring(0,2) =='[['){}
           else
           {
            
               eliminate_includes(texto);
            
           }
           
        });
        
        array_text=remove_duplicates_safe(array_text);
        
        
        
        /*for(let x=0;x<array_text.length;x++)
        {
            console.log(array_text[x]);
        }*/
        
        
        
        function remove_duplicates_safe(arr) {
            var seen = {};
            var ret_arr = [];
            for (var i = 0; i < arr.length; i++) {
                if (!(arr[i] in seen)) {
                    ret_arr.push(arr[i]);
                    seen[arr[i]] = true;
                }
            }
            return ret_arr;
        
        }
        function eliminate_includes(texto)
        {
            var result=true;
            for(i=0;i<array_text.length;i++)
            {
                if(texto.includes(array_text[i]))
                {
                    if(result == false)
                    {}
                    else{result=true;}
                    
                }
                else
                {
                    result=false;
                }
            }
            if (result == true) {
            
            } else {
             array_text.push(texto);
            }
        }
        
        
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
        //Testear
        
        for(let x=0;x<array_text.length;x++)
        {
          if (array_text[x] == text)
          {
            //console.log('DOM: '+array_text[x]);
            //console.log('Copy-ref: '+text);

            $(jQuery("#container").find("*")).each(async function(){
            
           if (array_text[x] == this.innerText.trim().replace(/(\r\n|\n|\r)/gm, "").replace(/<br\s*[\/]?>/gi, "").replace(/&nbsp;|\u00a0/g,' ').replace('  [',' [').replace('.[','. ['))
           {
             
                   $(this).css("color", "green");
                  
           }

           else
          {
           
            //if(color=='green')
            if($(this).css("color") == "rgb(0, 128, 0)")//rgb(0, 128, 0) -->green
            {}
            else
            {
             $(this).css("color", "red");
            }
          }
            });
            
          }


            
        }
        
        
     /* var tags=["li","ul","a","p","span","div","h1","h2","h3","td"]; //["h3"];
      
     for(var x=0;x<tags.length;x++)
      {
        $(tags[x]).each( function(){
          //filtrar espacios en elementos
          var text_web=$(this).text().trim().replace(/(\r\n|\n|\r)/gm, "").replace(/<br\s*[\/]?>/gi, "").replace(/&nbsp;|\u00a0/g,' ').replace('  [',' [').replace('.[','. [') ;
          //Quitar espacios que hay entre divs y los disclaimers
      if(text_web.includes('           '))
        {
          text_web=text_web.split('           ').join('');
          
        }
        if(text_web.includes('    '))
        {
          text_web=text_web.split('    ').join('');
          
        }
        if(text_web.includes('   '))
        {
          text_web=text_web.split('   ').join('');
          
        }
        if(text_web.includes('  '))
        {
          text_web=text_web.split('  ').join(' ');
          
        }
        if(text_web.includes('.['))
        {
          text_web=text_web.split('.[').join('. [');
          
        }
        console.log('Ref: '+text_web);
        //Comparar el copy
          if (text_web == text) {
            $(this).css("color", "green");
           // console.log('DOM: '+$(this).text().trim());
           //console.log('Ref: '+text_web);
           }
           else
           {
            
             //if(color=='green')
             if($(this).css("color") == "rgb(0, 128, 0)")//rgb(0, 128, 0) -->green
             {}
             else
             {
              $(this).css("color", "red");
             }
           }
           
         });
      } */
      
      // Pricing test 
     /* $("p").each( function(){
             $(this).css("color", "Red");
            
          });

      $("p").each( function(){
        if($(this).css("color") == "red")//rgb(0, 128, 0) -->red
             {
              if ($(this).text().includes(text)) {
                $(this).removeAttr('style');
                   $(this).css("color", "Green");
                  };
             }
             else
             {
              
             }
        
          });
          /*$(".tooltip-panel.disclaimer-tooltip").each( function(){
         
            
            if ($(this).text().includes(text)) {
             $(this).css("color", "Green");
            };
          });*/
        
        
      }
     
  
    
  
      
      function Click_disclaimers(){
  
      $("div.has-tooltip.tooltip-label-central").each(function(){
            
             // $(this).click();
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
          
          $("div.c_008.asterisk").each(function(){

            //$(this).text().trim().appendTo($(this).parent().closest("div"));
            //$(this).parent().closest("div").append($(this).text().trim());
            var text= $(this).parent().closest("div").text().replace(/(\r\n|\n|\r)/gm, "");
            if(text.includes('            '))
        {
          text=text.split('            ').join('');
          
        }
        if(text.includes('    '))
        {
          text=text.split('    ').join(' ');
          
        }
        //console.log(text);   

                 
      
            
            
            });
  //Al final
  //Cerrar galerias
            $("div.c_273_close.js_modal_close").each(function(){
              $(this).click();
            });
  //Cerrar Disclaimers abiertos
            $("div.qtip.qtip-default.qtip-pos-tc.qtip-fixed.qtip-focus").each(function(){
              $(this).click();
            });
  
  

            
    
      }


//var selectedvalue;
function getSelectValue()
        {
            var selectedValue = document.getElementById("sheets");
            let valueSelected = selectedValue.options[selectedValue.selectedIndex].value;
            return valueSelected;
            
        }
async function Run(selectedvalue)
{
  let data=[{
    "name":"jayanth",
    "data":"scd",
    "abc":"sdef"
  }]
  XLSX.utils.json_to_sheet(data, 'out.xlsx');
    if(selectedFile){
        let fileReader = new FileReader();
        fileReader.readAsBinaryString(selectedFile);
        fileReader.onload = (event)=>{
         let data = event.target.result;
         let workbook = XLSX.read(data,{type:"binary"});
         fill_dropdown(workbook.SheetNames);
         console.log(workbook);
         Json = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[workbook.SheetNames[selectedvalue]]);
         console.log(Json);
         //Hidden tags
         //document.getElementById("sheets").setAttribute("hidden","true");
         //document.getElementById("run").setAttribute("hidden","true");
         
         //bar.setAttribute("hidden","true");
         Click_disclaimers();
          var count=100/Json.length;
          var parameter=100/Json.length;
          
          var barra=document.getElementById("bar");
          document.getElementById("credits_QA").scrollIntoView();
          runLoop= async() =>{
            for(var i=0;i<Json.length;i++)
            {
              await new Promise(resolve => setTimeout(resolve,0))
              //console.log(Json[i].Copy);
              Test(Json[i]);
              document.getElementById("bar").setAttribute("value",count.toString());
              document.getElementById('lbl_bar').innerHTML =" "+count.toString().substring(0,3).replace('.','')+"%";
              count=count+parameter;
              verified_colors_disclaimers();
              back_colors_menu();

              if(i == Json.length-1) // Remover colores en el nav y footer
              {
                $("div.header-next-gen.next-gen-header *").removeAttr('style');
                $("div.nextGenNav *").removeAttr('style');
                $("nav.c_054-3 *").removeAttr('style');
                $("#shop-at-home-banner").removeAttr('style');
                $("div.footer-legal *").removeAttr('style');
                $("ul.footer-options *").removeAttr('style');
                $("div.floating-lmt-container *").removeAttr('style');
                
                
                
              }
           
            }
          }
         runLoop();
         
         
         /*workbook.SheetNames.forEach(sheet => {
          Json = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[workbook.SheetNames[selectedvalue]]);
              console.log(Json);
             // document.getElementById("jsondata").innerHTML = JSON.stringify(rowObject,undefined,4)
         });*/
         //----------------------------------------------------------------------------------------------------------
         
        }
    }

    
}
function verified_colors_disclaimers()
{
  
  
  
  $("div.has-tooltip.tooltip-label-central").each(function()
  {
    $(this).removeAttr('style');
  });
  $("a.qtip-close.qtip-icon").each(function()
  {
    $(this).removeAttr('style');
  });
  $("div.c_008.asterisk").each(function()
  {
    if($(this).parent().closest("div").css("color") == "rgb(0, 128, 0)")
    {
      $(this).css("color","green");
    }
    if($(this).parent().closest("h2").css("color") == "rgb(0, 128, 0)")
    {
      $(this).css("color","green");
    }
    if($(this).parent().closest("p").css("color") == "rgb(0, 128, 0)")
    {
      $(this).css("color","green");
    }
    if($(this).parent().closest("b").css("color") == "rgb(0, 128, 0)")
    {
      $(this).css("color","green");
    }
    if($(this).parent().closest("h3").css("color") == "rgb(0, 128, 0)")
    {
      $(this).css("color","green");
    }
  });
}
function back_colors_menu()
{
//Cambiando color a estructura al menu del app
$("#file-name").each(function(){
  $(this).css("color", "white");
});

$("#lbl_bar").css("color", "green");
if($("#lbl_bar").text() === ' 99%')
{
  document.getElementById('lbl_bar').innerHTML = $("#lbl_bar").text().replace(' 99%',' 100%');
}

}
function Read()
{

  //let selectedFile;
console.log(window.XLSX);
document.getElementById('upload').addEventListener("change", (event) => {
    selectedFile = event.target.files[0].name;
    document.getElementById('file-name').innerHTML =selectedFile;
    selectedFile = event.target.files[0];
})

let data=[{
    "name":"jayanth",
    "data":"scd",
    "abc":"sdef"
}]


document.getElementById('read').addEventListener("click", () => {
   XLSX.utils.json_to_sheet(data, 'out.xlsx');
    if(selectedFile){
        let fileReader = new FileReader();
        fileReader.readAsBinaryString(selectedFile);
        fileReader.onload = (event)=>{
         let data = event.target.result;
         let workbook = XLSX.read(data,{type:"binary"});
         fill_dropdown(workbook.SheetNames);
         /*console.log(workbook);
         workbook.SheetNames.forEach(sheet => {
              let rowObject = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[workbook.SheetNames[1]]);
              console.log(rowObject);
              
             // document.getElementById("jsondata").innerHTML = JSON.stringify(rowObject,undefined,4)
         });*/
        }
    }
});
}


function fill_dropdown(arr)
{
var name_sheets=arr;
console.log(arr[0]);
var drop=document.getElementById("sheets");
for(var i=0;i<arr.length;i++)
{
  var opcion=document.createElement("option");
  opcion.setAttribute("value",i);
  opcion.setAttribute("id",i);
  document.getElementById("sheets").appendChild(opcion);
  $("#"+i).text(arr[i].toString());
}

document.getElementById("sheets").removeAttribute("hidden");
document.getElementById("Run").removeAttribute("hidden");
document.getElementById("read").setAttribute("hidden","true");

}
}


