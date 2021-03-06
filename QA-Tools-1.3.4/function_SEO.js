create_QA_Panel();
//create_popup();

//Global Variables
var selectedFile;
var Json;
var approved =[];
var demoted =[];
var missing_filename =[];
var missing_alttext =[];
var JSON_ROWS;
//Functions
 function create_QA_Panel() {
  $("html, body").animate({ scrollTop: 0 });
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

      function copiarAlPortapapeles(element) {
        var $temp = $("<textarea>");
        var brRegex = /<br\s*[\/]?>/gi;
        $("body").append($temp);
        $temp.val($(element).html().replace(brRegex, "\r\n")).select();
        document.execCommand("copy");
        $temp.remove();
      }
       function create_popup(sort,object,actual,expected,descrip)
      {
        console.log(sort);
        if(sort !== undefined)
        {
          //-----------------------------------------
        //https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_modal2
        //Variables HTML
        //-------------------------------------------BTN
        var button = document.createElement("button");
        button.setAttribute("type", "button");
        button.setAttribute("class", "btn btn-danger");
        button.setAttribute("id", "popup"+sort);
        button.setAttribute("value","Issue# "+sort);
        
        
        
        //-------------------------------------------div-modal
        var div = document.createElement("div");
        div.setAttribute("class","modal");
        div.setAttribute("id", "myModal"+sort);
        //-------------------------------------------div-modal-content
        var div_content = document.createElement("div");
        div_content.setAttribute("class","modal-content");
        div_content.setAttribute("id", "modal_content");
        //-------------------------------------------div-modal-header
        var div_header = document.createElement("div");
        div_header.setAttribute("class","modal-header");
        //-------------------------------------------span-close
        var span = document.createElement("span");
        span.setAttribute("id", "span-header");
        span.setAttribute("class","close");
        span.textContent='??';
        //-------------------------------------------h2
        var h2 = document.createElement("h2");
        h2.setAttribute("id", "h2-header");
        //-------------------------------------------div-modal-body
        var div_body= document.createElement("div");
        div_body.setAttribute("class","modal-body");
        //-------------------------------------------p_actual_title
        var p_actual_title= document.createElement("p");
        p_actual_title.setAttribute("id", "p_actual_title");
        p_actual_title.setAttribute("style", "color:red;");
        //-------------------------------------------p_expected_title
        var p_expected_title= document.createElement("p");
        p_expected_title.setAttribute("id", "p_expected_title");
        p_expected_title.setAttribute("style", "color:green;");
        //-------------------------------------------p-actual
        var p_actual= document.createElement("p");
        p_actual.setAttribute("id", "actual");
        
        //-------------------------------------------p-expected
        var p_expected= document.createElement("p");
        p_expected.setAttribute("id", "expected");
        
        //-------------------------------------------div-modal-footer
        var div_footer = document.createElement("div");
        div_footer.setAttribute("class","modal-footer");
        //-------------------------------------------h3-jira
        var h3 = document.createElement("h3");
        h3.setAttribute("id", "jira");
        h3.setAttribute("hidden","true");
        //-------------------------------------------btn-jira
        var jira_btn = document.createElement("button");
        jira_btn.setAttribute("type", "button");
        jira_btn.setAttribute("class", "btn btn-primary");
        jira_btn.setAttribute("id", "jira_btn"+sort);
        jira_btn.setAttribute("value","JIRA");
        //-------------ensamblando etiquetas html
        div.appendChild(div_content);

        div_content.appendChild(div_header);
        div_content.appendChild(div_body);
        div_content.appendChild(div_footer);

        div_header.appendChild(span);
        div_header.appendChild(h2);

        div_body.appendChild(p_actual_title);
        div_body.appendChild(p_actual);
        div_body.appendChild(p_expected_title);
        div_body.appendChild(p_expected);

        div_footer.appendChild(h3);
        div_footer.appendChild(jira_btn);
        //-------------Insertar en btn que llama al popup en la pag
        //document.body.insertBefore(button,document.body.childNodes[0]);
        //document.body.insertBefore(button,$(object));
        object.append('<br><br>');
        object.append(button);
        document.body.insertBefore(div,document.body.childNodes[0]);
        document.getElementById('popup'+sort).innerHTML ='Issue# '+sort;
        document.getElementById('jira_btn'+sort).innerHTML ='JIRA';
        document.getElementById('h2-header').innerHTML ='Issue# '+sort; 
        document.getElementById('p_actual_title').innerHTML ='Actual:'; 
        document.getElementById('actual').innerHTML =actual; 
        document.getElementById('p_expected_title').innerHTML ='Expected:'; 
        document.getElementById('expected').innerHTML =expected; 
        document.getElementById('jira').innerHTML =
        '{color:#d04437}*+Precondition:+*{color}<br>'+
        '* *Environment:* Dark Prod.<br>'+
        '* *Language:* EN.<br>'+
        '* *Devices:* All supported.<br>* *Browsers:* All supported.<br><br>'+
        '{color:#d04437}*+Issue:+*{color}  [please describe specific issue] .Please look the evidence below.<br><br>'+
        '*{color:#DE350B}+Actual Result:+{color}*<br>'+actual+'<br>'+
        '{color:#00875A}*+Expected Result:+*{color}<br>'+expected+'<br><br>'+
        'Reference: *'+$("#file-name").text()+'/ Tab /'+$("#sheets option:selected").text()+'* in the following row: <br>'+
        descrip+
        '{color:#d04437}*+Steps to reproduce:+*{color}<br>'+
        '*1.* Go to the testing URLs:<br>'+document.location.href+'<br>'+
        '*2.* Verify that the pages are displaying correctly<br>'+
        '*3.* Locate SEO TAG - '+actual+'<br>'+
        '*4.* Notice that it is not matching with reference.Please look the evidence below.<br><br>'+
        '{color:#d04437}*+Evidence:+*{color}'; 



        //Script
        //Get window
        var ventana=window;
        // Get the modal
          var modal = document.getElementById("myModal"+sort);

          // Get the button that opens the modal
          var btn = document.getElementById("popup"+sort);

          // Get the <span> element that closes the modal
          var span1 = document.getElementsByClassName("close")[0];

          // When the user clicks the button, open the modal 
          
          btn.onclick = function() {
            
            modal.style.display = "block";
          }

          // When the user clicks on <span> (x), close the modal
          
          span1.onclick = function() {
            
            modal.style.display = "none";
            document.getElementById('jira_btn'+sort).innerHTML ='JIRA';
          }

          // When the user clicks anywhere outside of the modal, close it
          ventana.onclick = function(event) {
            if (event.target == modal) {
              //$("#myModal").css("display","none");
              modal.style.display = "none";
              document.getElementById('jira_btn'+sort).innerHTML ='JIRA';
            }
          }
          //Get the btn jira
          var jira = document.getElementById("jira_btn"+sort);
          var copiar=document.getElementById('jira');
          jira.onclick = function(){
             copiarAlPortapapeles(copiar);
            document.getElementById('jira_btn'+sort).innerHTML ='COPIED';
            //screenshot(id_screenshot,"myModal"+sort);
          }
        } 
        

      }
        //Screenshot
        function screenshot(id,id_print) { 
          let div = 
            document.getElementById(id); 
          html2canvas(div).then( 
            function (canvas) { 
              document 
              .getElementById(id_print) 
              .appendChild(canvas); 
            }) 
        } 
      function Clear_Dropdown()
      {
        
        document.getElementById("read").removeAttribute("hidden");
        document.getElementById("sheets").setAttribute("hidden","true");
        document.getElementById("Run").setAttribute("hidden","true");
        $(sheets).empty();
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
    if(result === '')
    {
      //Comprobar texto de adelante hacia el final
      for(let i=0;i<array.length;i++)
      { var expected=array[i];
        for(let e=0;e<expected.length;e++)
        {
            if(copy.includes(expected))
              {
                  result=array[i];
                  e=expected.length;
                  i=array.length;

              }
              else
              {
                expected=expected.substring(1);
              }
        }
      }
      if(result === '')
      {
            //Comprobar texto de final hacia el adelante
            for(let i=0;i<array.length;i++)
          { var expected=array[i];
            for(let e=0;e<expected.length;e++)
            {
                if(copy.includes(expected))
                  {
                      result=array[i];
                      e=expected.length;
                      i=array.length;

                  }
                  else
                  {
                    expected=expected.substring(0,expected.length-1);
                  }
            }
          }
          if(result === '')
          {
            
            result='This is not available in reference '+$("#file-name").text()+'/ Tab /'+$("#sheets option:selected").text();
          }
        
      }

      
    }
    return result;
  }
  
        function Test(copy){
          
  
        var change=JSON.stringify(copy);
        change=change.trim();
        
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
        var text=JSON.parse(change.trim().replace('  ',' '));
        if(text.FILENAME !== undefined || text.ALTTEXT !== undefined )
          {
            if(text.FILENAME == undefined)
            {
              var filename='Clear Space in reference';
            }
            else
            {
              var filename=text.FILENAME.trim();
            }
            if(text.ALTTEXT == undefined)
            {
              var alt_text='Clear Space in reference';
            }
            else
            {
              var alt_text=text.ALTTEXT.trim();
            }
        var alt_text=text.ALTTEXT.trim();


        // SEO test 
      
      //Filenames testing
      $("td").each( function(){
       
         if ($(this).text().includes(filename)) {
           $(this).removeAttr('style');
              $(this).css("color", "Green");
              delete_item_array(missing_filename,filename);
              delete_item_array(demoted,filename);
             };
     });
     //Alt texts testing
     $("td").each( function(){
     var text_web=$(this).text().trim().replace(/(\r\n|\n|\r)/gm, "").replace(/<br\s*[\/]?>/gi, "").replace(/&nbsp;|\u00a0/g,' ').replace('  [',' [').replace('.[','. [') ;
     if (text_web == alt_text) {
      $(this).css("color", "green");
      delete_item_array(missing_alttext,alt_text);
      delete_item_array(demoted,alt_text);
     }
     else
     {
      
       if($(this).css("color") == "rgb(0, 128, 0)")//rgb(0, 128, 0) -->green
       {}
       else
       {
        
        $(this).css("color", "red");
        
       }
     }
    });
    

    
    /*console.log('APPROVED:');
    console.log(approved);
    console.log('MISSING-filename:');
    console.log(missing_filename);
    console.log('MISSING-Alt text:');
    console.log(missing_alttext);
    console.log('Demoted:');
    console.log(demoted);*/
    $("#title *").removeAttr('style');
    $("#url *").removeAttr('style');
    $("#url *").css("color", "Green");
    $("#date *").removeAttr('style');
    $("#headers *").removeAttr('style');
    

    
    

      }
    
      }
async function create_issues()
{
  //var Style_black ='<style> table.darkTable {font-family: Arial, Helvetica, sans-serif;border: 2px solid #000000;background-color: #4A4A4A;width: 100%;height: 200px;text-align: center;border-collapse: collapse;}table.darkTable td, table.darkTable th {border: 1px solid #4A4A4A;padding: 3px 2px;}table.darkTable tbody td {font-size: 13px;color: #E6E6E6;}table.darkTable tr:nth-child(even) {background: #323232;}table.darkTable thead {background: #000000;border-bottom: 3px solid #000000;}table.darkTable thead th {font-size: 15px;font-weight: bold;color: #E6E6E6;text-align: center;border-left: 2px solid #4A4A4A;}table.darkTable thead th:first-child {border-left: none;}table.darkTable tfoot {font-size: 12px;font-weight: bold;color: #E6E6E6;background: #000000;background: -moz-linear-gradient(top, #404040 0%, #191919 66%, #000000 100%);background: -webkit-linear-gradient(top, #404040 0%, #191919 66%, #000000 100%);background: linear-gradient(to bottom, #404040 0%, #191919 66%, #000000 100%);border-top: 1px solid #4A4A4A;}table.darkTable tfoot td {font-size: 12px;}</style>';
  var title_bugs='<table class="darkTable" id="title-missing"><thead><tr><th style="color: red;">MISSING ACCORDING WITH REFERENCE</th></tr>';
  var sub_title='<table class="darkTable" id="Bugs-missing"><thead><tr><th>SEO TAGS</th><th>TEXT</th><th>RESULT</th><th>#</th></tr></thead>'; 
  var tbody_1='<tbody>';
  var tbody_2='</tbody>';
  var table_end='</table>';
  function fill_missing_issue(tag,copy,issue_id)
  {
    var table_title='<tr><td style="color: red;">'+tag+'</td><td style="color: red;">'+copy+'</td><td style="color: red;">Missing</td><td id="'+issue_id+'"></td></tr>';
    return table_title;
  }
  
  //Creando popup para issues
    //Filenames
    var issues_number=0;
    
    $(jQuery("#images").find("td")).each( async function(){
      if($(this).css("color") == "rgb(0, 128, 0)")//rgb(0, 128, 0) -->green
      {}
      else
      { 
        var text_web=$(this).text().trim().replace(/(\r\n|\n|\r)/gm, "").replace(/<br\s*[\/]?>/gi, "").replace(/&nbsp;|\u00a0/g,' ').replace('  [',' [').replace('.[','. [') ;
        if(text_web !== '')
        {
          issues_number++;
          $(this).parent().attr("id","Issue"+issues_number);
          try {
            
            create_popup(issues_number,$(this),text_web,find_expected(demoted,text_web),await search_row_data(find_expected(demoted,text_web)));
          } catch (error) {
            
          }
          
          //Quitar de los issues Missing los bugs que ya se han creado
          //Filenames
          for(let i=0;i<=missing_filename.length;i++)
          {
            if(find_expected(demoted,text_web) === missing_filename[i])
            {
              delete_item_array(missing_filename,missing_filename[i]);
            }
          }
          //Alt texts
          for(let i=0;i<=missing_alttext.length;i++)
          {
            if(find_expected(demoted,text_web) === missing_alttext[i])
            {
              delete_item_array(missing_alttext,missing_alttext[i]);
            }
          }
        }
        else{}
        
      }
    
    });
  //Creando tabla para issues missing
  var table=title_bugs+sub_title+tbody_1;
  var bugs_id_missing=[];
  var bugs_issue_number=[];
  var bugs_missing_text=[];

  if(missing_filename.length>0)
  {
    
    for(let i=0;i<=missing_filename.length;i++)
    {
      if(missing_filename[i]!== undefined )
      {
        issues_number++;
        table=table+fill_missing_issue('FILENAME',missing_filename[i],"Issue-missing"+issues_number);
        bugs_id_missing.push("Issue-missing"+issues_number);
        bugs_issue_number.push(issues_number);
        bugs_missing_text.push(missing_filename[i]);
      }
      
    }
    
  }
  if(missing_alttext.length>0)
  {
    
    for(let i=0;i<=missing_alttext.length;i++)
    {
      if(missing_alttext[i]!== undefined )
      {
        issues_number++;
        table=table+fill_missing_issue('ALT-TEXT',missing_alttext[i],"Issue-missing"+issues_number);
        bugs_id_missing.push("Issue-missing"+issues_number);
        bugs_issue_number.push(issues_number);
        bugs_missing_text.push(missing_alttext[i]);
      }
      
    }
    
  }
  if(table.includes('Missing'))
  {
    table=table+tbody_2+table_end;
    $(table).insertAfter( "#images" );
  }

  for(let i=0;i<=bugs_id_missing.length;i++)
  {
    var object=$("#"+bugs_id_missing[i]);//document.getElementById(bugs_id_missing[i]);
    try {
      create_popup(bugs_issue_number[i],object,bugs_missing_text[i],'This is missing on this page according with reference '+$("#file-name").text(),'');
    } catch (error) {
      
    }
    
  }
}
function delete_btn_issues()
{
  for(let i=1;i<100;i++)
  {
    try {
      var btn=document.getElementById("popup"+i);
      btn.remove();
    } catch (error) {
      
    }
  }
}
function delete_table_missing()
{
  $('#title-missing').remove();
  $('#Bugs-missing').remove();
  missing_filename=[];
  missing_alttext=[];
}
function get_data_row(row_num,filename,alttext)
{
  var tables_title_jira='|| {color:#0747A6}ROW{color} || {color:#0747A6}PACE SHOTNUMBER{color}|| {color:#0747A6}FILENAME{color} || {color:#0747A6}ALT TEXT{color} || <br>';
  var shotnumber='Error';
  var result='';
  var description_table= '|'+row+'|'+shotnumber+'|'+filename+'|'+alttext+'|';
                result=tables_title_jira+description_table;
                return result;
}
 async function  search_row_data(copy)
{
  var tables_title_jira='\n || {color:#0747A6}ROW{color} || {color:#0747A6}PACE SHOTNUMBER{color}|| {color:#0747A6}FILENAME{color} || {color:#0747A6}ALT TEXT{color} || \n';
  var row='';
  var shotnumber='';
  var filename='';
  var alttext='';
  var result='';
  runLoop= async() =>{
          //FILENAMES and ALT TEXT
          await new Promise(resolve => setTimeout(resolve,0))
          for(let i=0;i<JSON_ROWS.length;i++)
          { 
            //console.log('json filename: '+JSON_ROWS[i].FILENAME.trim());
            //console.log('json alttext: '+JSON_ROWS[i].ALTTEXT.trim() );
            //console.log('expected: '+copy );
            
              var change=JSON.stringify(JSON_ROWS[i]);
              change=change.trim();
              var text=JSON.parse(change);
              
              if(text.FILENAME !== undefined && text.FILENAME.trim() !== '')
            {
              if(text.FILENAME.trim().includes(copy) ) 
              {
                row=i+2;
                shotnumber=text['PACE SHOTNUMBER'];
                filename=text.FILENAME;
                alttext=text.ALTTEXT;
                var description_table= '|'+row+'|'+shotnumber+'|'+filename+'|'+alttext+'| \n';
                
                result=tables_title_jira+description_table;
              }
            }
           
            if(text.ALTTEXT !== undefined && text.ALTTEXT.trim() !== '')
            {
              if(text.ALTTEXT.trim() === copy )
            {
              row=i+2;
                shotnumber=text['PACE SHOTNUMBER'];
              filename=text.FILENAME;
              alttext=text.ALTTEXT;
              var description_table= '|'+row+'|'+shotnumber+'|'+filename+'|'+alttext+'| \n';
              result=tables_title_jira+description_table;
              console.log('Resultado: '+result);
            }
            }
            
            
          } 
          return result;       
  }
 
  return runLoop(); 
            
}
function getSelectValue()
        {
            var selectedValue = document.getElementById("sheets");
            let valueSelected = selectedValue.options[selectedValue.selectedIndex].value;
            return valueSelected;
            
        }
async function Run(selectedvalue)
{
  delete_btn_issues();
  delete_table_missing();
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
         JSON_ROWS=Json;
         //Hidden tags
         //document.getElementById("sheets").setAttribute("hidden","true");
         //document.getElementById("run").setAttribute("hidden","true");
         
         //bar.setAttribute("hidden","true");
        
          var count=100/Json.length;
          var parameter=100/Json.length;
          
          var barra=document.getElementById("bar");
          document.getElementById("credits_QA").scrollIntoView();
        //LLenar arrays de la referencia
        //FILENAMES
        for(var i=0;i<Json.length;i++)
        { 
          if(Json[i].FILENAME !== undefined )
          {
            
          approved.push(Json[i].FILENAME.trim());
          missing_filename.push(Json[i].FILENAME.trim());
          demoted.push(Json[i].FILENAME.trim());
          }
        }        

        //ALT TEXT
        for(var i=0;i<Json.length;i++)
        {
          if(Json[i].ALTTEXT !== undefined )
          {
            approved.push(Json[i].ALTTEXT.trim());
            missing_alttext.push(Json[i].ALTTEXT.trim());
            demoted.push(Json[i].ALTTEXT.trim());
          }
        }
       
          runLoop= async() =>{
            for(var i=0;i<Json.length;i++)
            {
              await new Promise(resolve => setTimeout(resolve,0))
              //console.log(Json[i].Copy);
              Test(Json[i]);
              document.getElementById("bar").setAttribute("value",count.toString());
              document.getElementById('lbl_bar').innerHTML =" "+count.toString().substring(0,3).replace('.','')+"%";
              count=count+parameter;
              

           
            }
            create_issues();
            $(document).ready(  function(){
              setTimeout(  function() {
                
                $('html, body').animate({
                scrollTop: $('#images').offset().top
                }, 1000);
              }, 0);
                  }); 
            
            
           
          }
         runLoop();
         
        }
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


  