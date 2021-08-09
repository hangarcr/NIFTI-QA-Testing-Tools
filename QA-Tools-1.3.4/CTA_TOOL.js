//CTA Tool
var date = new Date();

//Variables
var Style_black ='<style> table.darkTable {font-family: Arial, Helvetica, sans-serif;border: 2px solid #000000;background-color: #4A4A4A;width: 100%;height: 200px;text-align: left;border-collapse: collapse;}table.darkTable td, table.darkTable th {border: 1px solid #4A4A4A;padding: 3px 2px;}table.darkTable tbody td {font-size: 13px;color: #E6E6E6;}table.darkTable tr:nth-child(even) {background: #323232;}table.darkTable thead {background: #000000;border-bottom: 3px solid #000000;}table.darkTable thead th {font-size: 15px;font-weight: bold;color: #E6E6E6;text-align: left;border-left: 2px solid #4A4A4A;}table.darkTable thead th:first-child {border-left: none;}table.darkTable tfoot {font-size: 12px;font-weight: bold;color: #E6E6E6;background: #000000;background: -moz-linear-gradient(top, #404040 0%, #191919 66%, #000000 100%);background: -webkit-linear-gradient(top, #404040 0%, #191919 66%, #000000 100%);background: linear-gradient(to bottom, #404040 0%, #191919 66%, #000000 100%);border-top: 1px solid #4A4A4A;}table.darkTable tfoot td {font-size: 12px;}</style>';
var HTML1='<table class="darkTable"><thead><tr><th>#</th><th>CTA</th><th>LANGUAGE</th><th>URL</th><th>Status</th><th>Environment</th></tr>'; 
var HTML2='<table class="darkTable"><thead><tr><th>#</th><th>CTA</th><th>LANGUAGE</th><th>URL</th><th>Environment</th></tr>'; 
var URL='<div><table class="darkTable"><thead><tr><th width="50%">Current URL</th><th> <a href= "'+document.location.href+'"  style="color:#10A419;">'+document.location.href+'</a> </th></tr></div>'; 
var DATE_HTML='<table class="darkTable"><thead><tr><th width="50%">Date</th><th> '+date+'</th></tr>'; 


var tbody_1='<tbody>';
var tbody_2='</tbody>';
var HTML_end='</table>';
var id_row='<tr><th style="color:white; font-weight:bold;">';
var rows='<td width="30%">';
var rows2='<td width="20%">';
var asset_i='<img src="';
var asset_f='" width="250" height="130" />';
var table='';
//var title_pag='<DIV ALIGN="CENTER" STYLE="margin-top:10px; margin-bottom: 10px; margin-left:2px; color:white;background-color: black;font-size:30px; font-family:Verdana; font-weight: bold;">CTA TOOL-VLP-QA-NISSAN</DIV><DIV ALIGN="center" STYLE="margin-top:5px; margin-left:2px; color:white;background-color: black;font-size:15px; font-family:Verdana;">Created by: Jonathan Madrigal Solorzano<br><br/>  </DIV><div><div/>';
var Broken_title='<DIV ALIGN="CENTER" STYLE="margin-top:10px; margin-bottom: 10px; margin-left:2px; color:#C33415;background-color: black;font-size:20px; font-family:Verdana; font-weight: bold;">BROKEN LINKS</DIV>';
//var Credits='<DIV ALIGN="CENTER" STYLE="margin-top:5px; margin-left:2px; color:white;background-color: black;font-size:15px; font-family:Verdana;">Company: Hangar 2020 <br></br><br>Created by: Jonathan Madrigal Solorzano</br>   </DIV>';
var title_pag='<div ALIGN="CENTER"><img src="https://3.bp.blogspot.com/-DI1U2gFeQo8/XsF6uoQUANI/AAAAAAAAjHE/O7bbi-QHrG0h-akn9Bp2JyB1yz_XDTK8QCNcBGAsYHQ/s1600/CTAS%2BTOOL.png" ALIGN="CENTER" /></div>';
var Credits='<div ALIGN="CENTER"><img  src="https://3.bp.blogspot.com/-4YKtKVb0bZU/XsF6ulF8_yI/AAAAAAAAjHI/-RLxHxPrkeoni_y2XW8UW8JFqzhtw4lLgCNcBGAsYHQ/s1600/Credits.png" ALIGN="CENTER" /></div>';

 
var ctas = document.getElementsByTagName('a'); 

var cta_f=document.getElementsByClassName('c_054-2');
var enviroment='';
var env_result='';
//cta_f=cta_f[0].children[0].children[0].children[0].children[0].innerText;
var current_url= document.location.href.substring(8, 10).toUpperCase();
var num = 1;
var cta_1_num=0;
//Functions
function wait(ms)
{
var d = new Date();
var d2 = null;
do { d2 = new Date(); }
while(d2-d < ms);
}

var stats='';
var check_log_links='';
var check_count=0;
async function doSomethingIfFound(count,object,url, status) {
	check_count++;
	try
	{
        if(status == 200)
		{
			//stats='Fine';

			check_log_links='Checked: '+check_count+'/'+num_ctas+'     '+'CTA#'+count+' --> '+'Available';

		}
		if(status == 404)
		{
			//stats='Broken--> '+url;
			stats='<th style="color:#C33415;">Broken</th>';
			check_log_links='Checked: '+check_count+'/'+num_ctas+'     '+'CTA#'+count+' --> '+'Broken--> '+url;
			ROWS(count,object,url,stats);
		}
	}
	catch(e)
	{
		    check_log_links='Checked: '+check_count+'/'+num_ctas+'     '+'CTA#'+count+' --> '+'Blocked by CORS--> ';
	}
	
    console.log(check_log_links);
    if(check_count === num_ctas)
    {
    	//document.write('<body style="background-color:rgb(0,0,0);"></body>'+title_pag);
//document.write(Style_black+URL+DATE_HTML+HTML2+tbody_1+table+tbody_2+HTML_end);
//document.write(Credits);
//document.write('<body style="background-color:rgb(0,0,0);"></body>'+Broken_title);
//document.write(Style_black+HTML1+tbody_1);
    	console.log("%cTEST COMPLETE", "color: green");
    	alert("CTA TOOL - TEST COMPLETE");  
    }
  }

  async function doSomethingIfNotFound(count,object,url, status) {
    check_count++;
    try
    {
        if(status == 202)
		{
		   // stats='Fine';
			check_log_links='Checked: '+check_count+'/'+num_ctas+'     '+'CTA#'+count+' --> '+'Available';

		}
		if(status == 404)

		{
			//stats='Broken--> '+url;
			stats='<th style="color:#C33415;">Broken</th>';
			check_log_links='Checked: '+check_count+'/'+num_ctas+'     '+'CTA#'+count+' --> '+'Broken--> '+url;
			ROWS(count,object,url,stats);
		}
    }
    catch(e)
    {
    	    check_log_links='Checked: '+check_count+'/'+num_ctas+'     '+'CTA#'+count+' --> '+'Blocked by CORS--> ';
    }
    
   console.log(check_log_links);
   if(check_count === num_ctas)
    {
    	console.log("%cTEST COMPLETE", "color: green"); 
    	
    }
  }

   function test(object,url,count) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() 
    {
    try
    {
        if (xhttp.readyState == 4 && xhttp.status == 200) 
      {
         doSomethingIfFound(count,object,url, xhttp.status);
      } 
      else 
      {
      if (xhttp.readyState == 4 && xhttp.status != 200) 
      {
         doSomethingIfNotFound(count,object,url, xhttp.status);
      }
      else
      {
      	  if (xhttp.readyState == null) 
          {
             check_count++;
    	     check_log_links='Checked: '+check_count+'/'+num_ctas+'     '+'CTA#'+count+' --> '+'Blocked by CORS';
    	     console.log(check_log_links);
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
  //get position first CTA
  var num_ctas=0;
for (let e = 0; e < ctas.length; e++)
   	{ //var word= ctas[e].text.trim();
   	  
   		num_ctas++;
   		
   	}
   var count=0;

  for (let i = cta_1_num; i < ctas.length; i++)
   	{
   		count++;
   		test(ctas[i],ctas[i].href,count);
   		
					var LAN= ctas[i].href.substring(8, 10).toUpperCase();

				if (LAN === 'WW') 
				{

                    

					if(document.location.href.includes('WW'))
					{
						if(document.location.href.includes('usa'))
						{env_result='style="color:white; font-weight: bold;"';}
						else{env_result='style="color:#C33415; font-weight: bold;"';}
						
					}
					else
					{
						if(document.location.href.includes('usa'))
						{env_result='style="color:white; font-weight: bold;"';}
						else{env_result='style="color:#C33415; font-weight: bold;"';}
					}
					LAN='EN';
					enviroment='PROD';
					
				}
				else
				{
					if(document.location.href.includes('dark'))
					{
						env_result='style="color:white; font-weight: bold;"';
						enviroment='DARKPROD';
					}
					else
					{
						if(document.location.href.includes('usa'))
						{env_result='style="color:white; font-weight: bold;"'; enviroment='PROD';}
						else{env_result='style="color:#C33415; font-weight: bold;"';}
					}
					
				}
				if (current_url === 'WW') 
				{
					current_url='EN';
				}


		
				if(LAN === current_url)
				{
						if(document.location.href.includes('2021-')) //-->PATH FILTER
						{
							if(ctas[i].href.includes('2021-'))
							{
								if(ctas[i].href.includes('index')) //--> CMS FILTER
									{
								        table=table+id_row+count+'</th>'+rows+ctas[i].text.trim()+'</td width="50%"> <th style="color:white; font-weight: bold;">'+LAN+'</th><td style="color:yellow; font-weight: bold;"> <a href= "'+ctas[i].href+'" style="color:#C33415; font-weight: bold;">'+ctas[i].href+'</a> --> PATH ISSUE </td> <th '+env_result+'>'+enviroment+'</th></tr>';    

									}
									else
									{
									    table=table+id_row+count+'</th>'+rows+ctas[i].text.trim()+'</td width="50%">  <th style="color:white; font-weight: bold;">'+LAN+'</th><td> <a href= "'+ctas[i].href+'"  style="color:#10A419; font-weight: bold;">'+ctas[i].href+'</a> </td> <th '+env_result+'>'+enviroment+'</th></tr>';    
								
									} 
							}
							else
							{
									if(ctas[i].href.includes('index')) //--> CMS FILTER
									{
								        table=table+id_row+count+'</th>'+rows+ctas[i].text.trim()+'</td width="50%"> <th style="color:white; font-weight: bold;">'+LAN+'</th><td style="color:yellow; font-weight: bold;"> <a href= "'+ctas[i].href+'" style="color:#C33415; font-weight: bold;">'+ctas[i].href+'</a> --> PATH ISSUE </td> <th '+env_result+'>'+enviroment+'</th></tr>';    

									}
									else
									{
									    table=table+id_row+count+'</th>'+rows+ctas[i].text.trim()+'</td width="50%"> <th style="color:white; font-weight: bold;">'+LAN+'</th><td style="color:yellow; font-weight: bold;"> <a href= "'+ctas[i].href+'" style="color:#C33415; font-weight: bold;">'+ctas[i].href+'</a> --> PATH ISSUE </td> <th '+env_result+'>'+enviroment+'</th></tr>';    

									} 
							}
						}
						else
						{
							if(ctas[i].href.includes('2021-'))// -->PATH FILTER
							{
								if(ctas[i].href.includes('index')) //--> CMS FILTER
									{
								        table=table+id_row+count+'</th>'+rows+ctas[i].text.trim()+'</td width="50%"> <th style="color:white; font-weight: bold;">'+LAN+'</th><td style="color:yellow; font-weight: bold;"> <a href= "'+ctas[i].href+'" style="color:#C33415; font-weight: bold;">'+ctas[i].href+'</a> --> PATH ISSUE </td> <th '+env_result+'>'+enviroment+'</th></tr>';    

									}
									else
									{
									    table=table+id_row+count+'</th>'+rows+ctas[i].text.trim()+'</td width="50%"> <th style="color:white; font-weight: bold;">'+LAN+'</th><td style="color:yellow; font-weight: bold;"> <a href= "'+ctas[i].href+'" style="color:#C33415; font-weight: bold;">'+ctas[i].href+'</a> --> PATH ISSUE </td> <th '+env_result+'>'+enviroment+'</th></tr>';    

									} 
								
							}
							else
							{
								if(ctas[i].href.includes('index')) //--> CMS FILTER
									{
								        table=table+id_row+count+'</th>'+rows+ctas[i].text.trim()+'</td width="50%"> <th style="color:white; font-weight: bold;">'+LAN+'</th><td style="color:yellow; font-weight: bold;"> <a href= "'+ctas[i].href+'" style="color:#C33415; font-weight: bold;">'+ctas[i].href+'</a> --> PATH ISSUE </td> <th '+env_result+'>'+enviroment+'</th></tr>';    

									}
									else
									{
									    table=table+id_row+count+'</th>'+rows+ctas[i].text.trim()+'</td width="50%">  <th style="color:white; font-weight: bold;">'+LAN+'</th><td> <a href= "'+ctas[i].href+'"  style="color:#10A419; font-weight: bold;">'+ctas[i].href+'</a> </td> <th '+env_result+'>'+enviroment+'</th></tr>';    
								
									} 	
							}
						} // -->PATH FILTER
							
				}
				else
				{
				 
							if(ctas[i].href.includes('index')) //--> CMS FILTER
							{
						        table=table+id_row+count+'</th>'+rows+ctas[i].text.trim()+'</td width="50%">  <th style="color:#C33415; font-weight: bold;">'+LAN+'</th><td style="color:yellow; font-weight: bold;"> <a href= "'+ctas[i].href+'" style="color:#C33415; font-weight: bold;">'+ctas[i].href+'</a> --> PATH ISSUE </td> <th '+env_result+'>'+enviroment+'</th></tr>';    

							}
							else
							{
							    table=table+id_row+count+'</th>'+rows+ctas[i].text.trim()+'</td width="50%">  <th style="color:#C33415; font-weight: bold;">'+LAN+'</th><td> <a href= "'+ctas[i].href+'"  style="color:#10A419; font-weight: bold;">'+ctas[i].href+'</a> </td> <th '+env_result+'>'+enviroment+'</th></tr>';    
						
							} 
				}
                
				num++
				//if(ctas[i+1].text.trim() === cta_f.trim())
				//{    i= ctas.length;     }
   		
   		
  	}
document.write('<body></body>'+title_pag);
document.write(Style_black+URL+DATE_HTML+HTML2+tbody_1+table+tbody_2+HTML_end);
//document.write(Credits);
document.write('<body style="background-color:rgb(0,0,0);"></body>'+Broken_title);
document.write(Style_black+HTML1+tbody_1);

function ROWS(count,object,url,STATUS)
   		{
   		
   		var row_;
					var LAN= url.substring(8, 10).toUpperCase();

				if (LAN === 'WW') 
				{

                    

					if(document.location.href.includes('WW'))
					{
						if(document.location.href.includes('usa'))
						{env_result='style="color:#C33415; font-weight: bold;"';}
						else{env_result='style="color:#C33415; font-weight: bold;"';}
						
					}
					else
					{
						if(document.location.href.includes('usa'))
						{env_result='style="color:#C33415; font-weight: bold;"';}
						else{env_result='style="color:#C33415; font-weight: bold;"';}
					}
					LAN='EN';
					enviroment='PROD';
					
				}
				else
				{
					if(document.location.href.includes('dark'))
					{
						env_result='style="color:#C33415; font-weight: bold;"';
						enviroment='DARKPROD';
					}
					else
					{
						if(document.location.href.includes('usa'))
						{env_result='style="color:#C33415; font-weight: bold;"'; enviroment='PROD';}
						else{env_result='style="color:#C33415; font-weight: bold;"';}
					}
					
				}
				if (current_url === 'WW') 
				{
					current_url='EN';
				}


		
				if(LAN === current_url)
				{
						if(document.location.href.includes('2021-')) //-->PATH FILTER
						{
							if(url.includes('2021-'))
							{
								if(url.includes('index')) //--> CMS FILTER
									{
								        row_=id_row+count+'</th>'+rows+object.text.trim()+'</td width="50%"> <th style="color:#C33415; font-weight: bold;">'+LAN+'</th><td style="color:yellow; font-weight: bold;"> <a href= "'+url+'" style="color:#C33415; font-weight: bold;">'+url+'</a> --> PATH ISSUE </td>'+stats+' <th '+env_result+'>'+enviroment+'</th></tr>';    

									}
									else
									{
									    row_=id_row+count+'</th>'+rows+object.text.trim()+'</td width="50%">  <th style="color:#C33415; font-weight: bold;">'+LAN+'</th><td> <a href= "'+url+'"  style="color:#C33415; font-weight: bold;">'+url+'</a> </td>'+stats+' <th '+env_result+'>'+enviroment+'</th></tr>';    
								
									} 
							}
							else
							{
									if(ctas[i].href.includes('index')) //--> CMS FILTER
									{
								        row_=id_row+count+'</th>'+rows+object.text.trim()+'</td width="50%"> <th style="color:#C33415; font-weight: bold;">'+LAN+'</th><td style="color:yellow; font-weight: bold;"> <a href= "'+url+'" style="color:#C33415; font-weight: bold;">'+url+'</a> --> PATH ISSUE </td>'+stats+' <th '+env_result+'>'+enviroment+'</th></tr>';    

									}
									else
									{
									    row_=id_row+count+'</th>'+rows+object.text.trim()+'</td width="50%"> <th style="color:#C33415; font-weight: bold;">'+LAN+'</th><td style="color:yellow; font-weight: bold;"> <a href= "'+url+'" style="color:#C33415; font-weight: bold;">'+url+'</a> --> PATH ISSUE </td>'+stats+' <th '+env_result+'>'+enviroment+'</th></tr>';    

									} 
							}
						}
						else
						{
							if(url.includes('2021-'))// -->PATH FILTER
							{
								if(url.includes('index')) //--> CMS FILTER
									{
								        row_=id_row+count+'</th>'+rows+object.text.trim()+'</td width="50%"> <th style="color:#C33415; font-weight: bold;">'+LAN+'</th><td style="color:yellow; font-weight: bold;"> <a href= "'+url+'" style="color:#C33415; font-weight: bold;">'+url+'</a> --> PATH ISSUE </td>'+stats+' <th '+env_result+'>'+enviroment+'</th></tr>';    

									}
									else
									{
									    row_=id_row+count+'</th>'+rows+object.text.trim()+'</td width="50%"> <th style="color:#C33415; font-weight: bold;">'+LAN+'</th><td style="color:yellow; font-weight: bold;"> <a href= "'+url+'" style="color:#C33415; font-weight: bold;">'+url+'</a> --> PATH ISSUE </td> '+stats+'<th '+env_result+'>'+enviroment+'</th></tr>';    

									} 
								
							}
							else
							{
								if(url.includes('index')) //--> CMS FILTER
									{
								        row_=id_row+count+'</th>'+rows+object.text.trim()+'</td width="50%"> <th style="color:#C33415; font-weight: bold;">'+LAN+'</th><td style="color:yellow; font-weight: bold;"> <a href= "'+url+'" style="color:#C33415; font-weight: bold;">'+url+'</a> --> PATH ISSUE </td> '+stats+' <th '+env_result+'>'+enviroment+'</th></tr>';    

									}
									else
									{
									    row_=id_row+count+'</th>'+rows+object.text.trim()+'</td width="50%">  <th style="color:#C33415; font-weight: bold;">'+LAN+'</th><td> <a href= "'+url+'"  style="color:#C33415; font-weight: bold;">'+url+'</a> </td> '+stats+'<th '+env_result+'>'+enviroment+'</th></tr>';    
								
									} 	
							}
						} // -->PATH FILTER
							
				}
				else
				{
				 
							if(url.includes('index')) //--> CMS FILTER
							{
						        row_=id_row+count+'</th>'+rows+object.text.trim()+'</td width="50%">  <th style="color:#C33415; font-weight: bold;">'+LAN+'</th><td style="color:yellow; font-weight: bold;"> <a href= "'+url+'" style="color:#C33415; font-weight: bold;">'+url+'</a> --> PATH ISSUE </td> '+stats+' <th '+env_result+'>'+enviroment+'</th></tr>';    

							}
							else
							{
							    row_=id_row+count+'</th>'+rows+object.text.trim()+'</td width="50%">  <th style="color:#C33415; font-weight: bold;">'+LAN+'</th><td> <a href= "'+url+'"  style="color:#C33415; font-weight: bold;">'+url+'</a> </td>'+stats+' <th '+env_result+'>'+enviroment+'</th></tr>';    
						
							} 
				}
                
				
   		
document.write(row_);


  	}