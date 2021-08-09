/*var result='';
var date = new Date();
var Style_black ='<style> table.darkTable {font-family: Arial, Helvetica, sans-serif;border: 2px solid #000000;background-color: #323232;width: 100%;height: 200px;text-align: left;border-collapse: collapse;}table.darkTable td, table.darkTable th {border: 1px solid #4A4A4A;padding: 3px 2px;}table.darkTable tbody td {font-size: 12px;color: #E6E6E6;}table.darkTable tr:nth-child(even) {background: #323232;}table.darkTable thead {background: #000000;border-bottom: 3px solid #000000;}table.darkTable thead th {font-size: 15px;font-weight: bold;color: #E6E6E6;text-align: center;border-left: 2px solid #4A4A4A;}table.darkTable thead th:first-child {border-left: none;}table.darkTable tfoot {font-size: 12px;font-weight: bold;color: #E6E6E6;background: #000000;background: -moz-linear-gradient(top, #404040 0%, #191919 66%, #000000 100%);background: -webkit-linear-gradient(top, #404040 0%, #191919 66%, #000000 100%);background: linear-gradient(to bottom, #404040 0%, #191919 66%, #000000 100%);border-top: 1px solid #4A4A4A;}table.darkTable tfoot td {font-size: 12px;}</style>';
var Titulo_table='<table class="darkTable" id="CTAS"><thead><tr><th width="5%">#</th><th width="10%">CTA-TITLE</th><th width="75%">URL</th><th width="10%">STATUS</th><thead><tr>';

var Titulo_END='</tr>';
var URL='<div><table class="darkTable" id="url"><thead><tr><th width="50%" id="text-current">Current URL</th><th> <a href= "'+document.location.href+'"  style="color:#10A419;">'+document.location.href+'</a> </th></tr></div>'; 
var DATE_HTML='<table class="darkTable" id="date"><thead><tr><th width="50%">Date</th><th> '+date+'</th></tr>'; 

var title_pag='<div ALIGN="CENTER"><img src="https://3.bp.blogspot.com/-DI1U2gFeQo8/XsF6uoQUANI/AAAAAAAAjHE/O7bbi-QHrG0h-akn9Bp2JyB1yz_XDTK8QCNcBGAsYHQ/s1600/CTAS%2BTOOL.png" ALIGN="CENTER" /></div>';
var Credits='<div ALIGN="CENTER"><img  src="https://3.bp.blogspot.com/-4YKtKVb0bZU/XsF6ulF8_yI/AAAAAAAAjHI/-RLxHxPrkeoni_y2XW8UW8JFqzhtw4lLgCNcBGAsYHQ/s1600/Credits.png" ALIGN="CENTER" /></div>';


var tbody_1='<tbody>';
var tbody_2='</tbody>';
var HTML_end='</table> ';
var tabla='';
var report='';
var ctas_count=1;

setTimeout(function() {
 //-------------------------------------------button
var btn = document.createElement("button");
btn.setAttribute("class","btn_ctas");
btn.setAttribute("id", "btn_ctas");
btn.setAttribute('title','Status:'+'\n'+
'❌  = Broken '+'\n'+
'✅  = Available'+'\n'+
 '⚠️  = Pending to add HREF');

//-------------------------------------------div-modal
var div = document.createElement("div");
div.setAttribute("class","modal");
div.setAttribute("id", "myModal");
//-------------------------------------------div-modal-content
var div_content = document.createElement("div");
div_content.setAttribute("class","modal-content");
div_content.setAttribute("id", "modal_content");
//-------------------------------------------Contenido
var contenido= document.createElement("p");
contenido.setAttribute("id", "contenido");
//-------------------------------------------div-modal-header
var div_header = document.createElement("div");
div_header.setAttribute("class","modal-header");
//-------------------------------------------span-close
var span = document.createElement("span");
span.setAttribute("id", "span-header");
span.setAttribute("class","close");
span.textContent='×';
//-------------------------------------------h2
var h2 = document.createElement("h2");
h2.setAttribute("id", "h2-header");
//-------------------------------------------div-modal-body
var div_body= document.createElement("div");
div_body.setAttribute("class","modal-body");


//-------------------------------------------div-modal-footer
var div_footer = document.createElement("div");
div_footer.setAttribute("class","modal-footer"); 

  
  

  div.appendChild(div_content);
        div_content.appendChild(div_header);
        div_content.appendChild(div_body);
        div_body.appendChild(contenido);
        div_content.appendChild(div_footer);
        div_header.appendChild(span);
        div_header.appendChild(h2);
        document.body.insertBefore(div,document.body.childNodes[0]);
        document.body.insertBefore(btn,document.body.childNodes[0]);

        var ventana=window;

        
        // Get the modal
          var modal = document.getElementById("myModal");

          // Get the button that opens the modal
          var btn = document.getElementById("btn_ctas");
          document.getElementById("btn_ctas").innerHTML ='CTAs'; 
          btn.style.display = "block";
          
          // Get the <span> element that closes the modal
          var span1 = document.getElementsByClassName("close")[0];

          // When the user clicks the button, open the modal 
          
          btn.onclick = function() {
            
            modal.style.display = "block";
            $('.header-next-gen.next-gen-header').attr('hidden','true');
            $('.nextGenNav').attr('hidden','true');
            $('#btn_ctas').attr('hidden','true');
            full_popup();
            
          }

          // When the user clicks on <span> (x), close the modal
          
          span1.onclick = function() {
            
            modal.style.display = "none";
            $('.header-next-gen.next-gen-header').removeAttr('hidden');
            $('.nextGenNav').removeAttr('hidden');
            $('#btn_ctas').removeAttr('hidden');
            
          }
          $(document).keyup(function(event){
            if(event.which=='27'){
              modal.style.display = "none";
              $('.header-next-gen.next-gen-header').removeAttr('hidden');
            $('.nextGenNav').removeAttr('hidden');
            $('#btn_ctas').removeAttr('hidden');
            }
         });
  },5000);


  //Functions

  async function full_popup()
{
  $(jQuery("#container").find("a")).each(async function(){
    var status='';
    var color='';
    if($(this).css('background-color')=== 'rgba(61, 196, 56, 0.357)')
    {
      status='✅ ';
      color='green';
    }
    if($(this).css('background-color') === 'rgba(196, 56, 56, 0.357)')
    {
      status='❌';
      color='Red';
    }
    if($(this).css('background-color') === 'rgba(196, 182, 56, 0.357)')
    {
      status='✅ ';
      color='Green';
    }
    if(this.href === document.location.href+'#' || this.href === document.location.href+'#pending')
    {
      status='⚠️';
      color='Yellow';
    }
    

    tabla=tabla+'<tr><td style="text-align:center">'+ctas_count+
             '</td><td style="text-align:center">'+this.innerText+
             '</td><td><a style="color:'+color+';" href="'+this.href+'">'+this.href
             +'</a></td><td style="text-align:center">'+status
             +'</td></tr>';

    ctas_count++;
    
      
    });
    $(".c_054-2").find("a").each(async function(){
      var status='';
    var color='';
    if($(this).css('background-color')=== 'rgba(61, 196, 56, 0.357)')
    {
      status='✅ ';
      color='green';
    }
    if($(this).css('background-color') === 'rgba(196, 56, 56, 0.357)')
    {
      status='❌';
      color='Red';
    }
    if($(this).css('background-color') === 'rgba(196, 182, 56, 0.357)')
    {
      status='✅ ';
      color='Green';
    }
    if(this.href === document.location.href+'#' || this.href === document.location.href+'#pending')
    {
      status='⚠️';
      color='Yellow';
    }
      tabla=tabla+'<tr><td style="text-align:center">'+ctas_count+
             '</td><td style="text-align:center">'+this.innerText+
             '</td><td><a style="color:'+color+';" href="'+this.href+'">'+this.href
             +'</a></td><td style="text-align:center;">'+status
             +'</td></tr>';
    
      ctas_count++;
      
        
      });
      ctas_count=ctas_count-1;
    var Ctas_count='<table class="darkTable" id="date"><thead><tr><th width="50%">CTAS on this page </th><th> '+ctas_count+'</th></tr>'; 
    var inyectar= Style_black+title_pag+URL+DATE_HTML+Ctas_count+Titulo_table+Titulo_END+tbody_1+tabla+tbody_2+HTML_end;
 
  document.getElementById("contenido").innerHTML =inyectar; 
  ctas_count=1;
  tabla='';
}      */
async function test(object,title_cta,url) {
  
    var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = async function() 
        {
        try
        {
            if (xhttp.readyState == 4 && xhttp.status == 200) 
          {
            await new Promise(resolve => setTimeout(resolve,0))
             result= xhttp.status
             console.log(title_cta);
             console.log(url);
             console.log(result);
             
             await new Promise(resolve => setTimeout(resolve,0))
             object.css("background-color", "rgba(61, 196, 56, 0.356)", "!important");
            
             
          } 
          else 
          {
          if (xhttp.readyState == 4 && xhttp.status == 404) 
          {
            await new Promise(resolve => setTimeout(resolve,0))
            result= xhttp.status
            console.log(title_cta);
             console.log(url);
             console.log(result);
             await new Promise(resolve => setTimeout(resolve,0))
             object.css("background-color", "rgba(196, 56, 56, 0.356)", "!important");
             
          }
          else
          {
                if (xhttp.readyState == 4 && xhttp.status == 200) 
              {
                
              }
          }
          }
        }
        catch(e)
        { 
          
        }
        
        };

        xhttp.open("GET", url, true);
        xhttp.send();
  
  
        
        
}
 

async function Run()
{
  
          runLoop= async() =>{
            //$(".freeEditorial.freeEditorialParsys.parsys").attr("id","page_content");
            
            
            $(jQuery("#container").find("a")).each(async function(){
               
                
                await new Promise(resolve => setTimeout(resolve,0))
                test($(this),this.innerText,this.href);
                
                
                
                
                  
                });
            //Ultimos Ctas arriba del footer
            $('.c_054-2').find("a").each(async function(){
              
                //await new Promise(resolve => setTimeout(resolve,0))
                var final=$(jQuery("#container").find("a")).length+$('.c_054-2').find("a").length;
                //console.log(this.innerText);
                //console.log(this.href);
                console.log(ctas_count);
                await new Promise(resolve => setTimeout(resolve,0))
                test($(this),this.innerText,this.href);
                
                //console.log(count_ctas);
                //console.log($(this));
                
                
                    
                });
            
          }
        await runLoop();
    
}
Run();
/*
//Agregar tooltip a ctas
$(document).ready(function(){
  $('[data-toggle="tooltip"]').tooltip();   
});
$('.c_063-0.next-gen.c_063-0--full-width').each(async function(){
  $(this).css( "padding-bottom", "45px" );
});
$('.c_272.c_272--large.c_272--full-width').each(async function(){
  $(this).css( "padding-bottom", "45px" );
});
$('.c_272.c_272--large').each(async function(){
  $(this).css( "padding-bottom", "45px" );
});
$('.c_283-1_slider').each(async function(){
  $(this).css( "padding-bottom", "45px" );
});*/


  

          

    
