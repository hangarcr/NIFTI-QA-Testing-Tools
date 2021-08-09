var isCreate = false;
var save='';
var count_report=1;
function createReport(){
	var newdiv = document.createElement("DIV");
	newdiv.setAttribute("class", "RLC_reprot_container");
	newdiv.setAttribute("id", "RLC_content");

	var header = document.createElement("DIV");
	header.setAttribute("id", "RLC_header");
	header.appendChild(document.createTextNode("CTAS TOOL" ));
	newdiv.appendChild(header);
	var close = document.createElement("I");
	close.setAttribute("class", "RLC_close");
	close.appendChild(document.createTextNode("×"));
	newdiv.appendChild(close);

	close.addEventListener("click",function(ele){
		
		var elem=document.getElementById("RLC_content")
		elem.parentNode.removeChild(elem);

		//console.log('uu');
	})


	var table = document.createElement("table");
	var tr_0 = document.createElement("tr");
	var tdLink = document.createElement("td");
	var tdQueue = document.createElement("td");
	tdLink.innerHTML=0;
	tdQueue.innerHTML = 0;
	tdQueue.setAttribute("id", "RLC_tdQueue");
	tdLink.setAttribute("id", "RLC_tdLink");
	table.appendChild(tr_0);

	tr_0.appendChild(tdLink);
	tr_0.appendChild(tdQueue);

	var tr0 = document.createElement("tr");
	var td0 = document.createElement("td");
	var tdOk = document.createElement("td");
	tdOk.innerHTML=0;
	tdOk.setAttribute("id", "RLC_tdOk");
	table.appendChild(tr0);
	
	tr0.appendChild(td0);
	tr0.appendChild(tdOk);
	
	var node = document.createElement("div");
	node.setAttribute("class", "RLC_Ok");
	node.appendChild(document.createTextNode("Verified"));
	td0.appendChild(node);

	var tr1 = document.createElement("tr");
	var td1 = document.createElement("td");
	var tdRedirect = document.createElement("td");
	tdRedirect.innerHTML = 0;
	tdRedirect.setAttribute("id", "RLC_tdRedirect");
	table.appendChild(tr1);
	tr1.appendChild(td1);
	//tr1.setAttribute("class", "RLC_Redirect");
	tr1.appendChild(tdRedirect);

	var node = document.createElement("div");
	node.setAttribute("class", "RLC_Redirect");
	node.appendChild(document.createTextNode("Redirect"));
	td1.appendChild(node);



	var tr2 = document.createElement("tr");
	var td2 = document.createElement("td");
	var tdFail = document.createElement("td");
	tdFail.innerHTML = 0;
	tdFail.setAttribute("id", "RLC_tdFail");
	table.appendChild(tr2);
	tr2.appendChild(td2);
	tr2.appendChild(tdFail);
	//tr2.setAttribute("class", "RLC_Fail");

	var node = document.createElement("div");
	node.setAttribute("class", "RLC_Fail");
	node.appendChild(document.createTextNode("Broken"));
	td2.appendChild(node);
	var progressBarContainer = document.createElement("DIV");
	progressBarContainer.setAttribute("id","RLC_progressBarContainer");

	var progressBar  = document.createElement("PROGRESS");
	progressBar.setAttribute("max","100");
	progressBar.setAttribute("id","RLC_progressbar");
	progressBar.setAttribute("value","80");
	progressBarContainer.appendChild(progressBar);
	var percent  = document.createElement("div");
	percent.setAttribute("id","RLC_percent");
	progressBarContainer.appendChild(percent);
	newdiv.appendChild(progressBarContainer);
	newdiv.appendChild(table);
	
	document.body.appendChild(newdiv);
	
	return {newdiv:newdiv,
		tdQueue:tdQueue,
		tdLink:tdLink,
		progressBar:progressBar,
		percent:percent,
		tdOk:tdOk,
		tdRedirect:tdRedirect,
		tdFail:tdFail

	};
}

function getReport(){

	var result = {newdiv:document.getElementById("RLC_content"),
		tdQueue:document.getElementById("RLC_tdQueue"),
		tdLink:document.getElementById("RLC_tdLink"),
		progressBar:document.getElementById("RLC_progressbar"),
		percent:document.getElementById("RLC_percent"),
		tdOk:document.getElementById("RLC_tdOk"),
		tdRedirect:document.getElementById("RLC_tdRedirect"),
		tdFail:document.getElementById("RLC_tdFail")

	};

	return result;

}


	var report;
	var id = document.getElementById("RLC_content");
	
	if(!id){
		
		//createStyle();
		report = createReport();
	}else{
		report = getReport();
	}
	
	var count =0;
	var total = 0,queue=0;
	var okCount=0;
	var redirectCount=0;
	var failCount =0;
	var links =  $(jQuery("#container").find("a")).each(async function(){});
	$(jQuery(".c_054-2").find("a")).each(async function(){links.push(this)});//document.getElementsByTagName("a");
	var checkLinks=[];
	Array.prototype.map.call(links,function(ele){})
	
	var filterLinks = [];
	Array.prototype.forEach.call(links,function(ele){
		var url = ele.href;
		if(!url) return;
		if(url.indexOf("#")==url.length-1){
           
        }else if ((url.length <= 0)  || (url.startsWith('http')===false)){
      		
      	}else{
        	filterLinks.push(ele);
			
		}
	});
    //console.log(filterLinks);
    total = filterLinks.length;
    queue = total;
    report.tdLink.innerHTML =  "Scope: "+ total + " links";
    report.tdQueue.innerHTML =  queue + "links left" ;
	filterLinks.forEach(function(ele){
		ele.className = ele.className + " RLC_Start";
		var url = ele.href;
		var status_redirect;
		chrome.extension.sendMessage({"action": "check", "url": url,"num":filterLinks.length},async function (response) {
			//console.log(response.status);
			if(url.indexOf("/index/")>-1)
			{
				response.status=test(url);
			}
			if(response.status <=200){
				//ele.style['background-color']='green';
				ele.className = ele.className + " RLC_Ok";
				okCount++;
				report.tdOk.innerHTML = okCount;
			}else if(response.status <400){
				
				//ele.style['background-color']='blue';
				ele.className = ele.className + " RLC_Redirect";
				
				chrome.extension.sendMessage({"action": "check", "url": response.message,"num":1},async function (response) {
				if( response.status <400){
					 status_redirect='verified';
				}
				else{
				 status_redirect='broken';
				}
				 console.log(response.message+" * "+status_redirect);
				 ele.title =  url+ " | "+response.message+" * "+status_redirect;
				});
					

				redirectCount++;
				report.tdRedirect.innerHTML = redirectCount;
				if(checkLinks[url] === undefined){
					//console.log("redirect : "+url + " | "+ response.message);
					checkLinks[url] = 1;
				}
			}else{
				ele.className = ele.className + " RLC_Fail";
				failCount++;
				report.tdFail.innerHTML =failCount;
				if(checkLinks[url] === undefined){
					//console.log(response.status+ " : "+url);
					checkLinks[url] = 1;
				}
			}
			count++;
			queue--;
			report.tdQueue.innerHTML = queue + " links left" ;;
			report.percent.innerHTML = Math.floor(100*(count/filterLinks.length))+"%";
			
			report.progressBar.setAttribute('value',Math.floor(100*(count/filterLinks.length)));

			if(queue ==0){

				chrome.extension.sendMessage({"action": "done"},function (response) {
  				});
			}
			
    	});

	})

setTimeout(function() {
	var result='';
	var date = new Date();
	var Style_black ='<style> table.darkTable {table-layout: auto; font-family: Arial, Helvetica, sans-serif;border: 2px solid #000000;background-color: #323232;width: 100%;text-align: left;border-collapse: collapse;}table.darkTable td, table.darkTable th {border: 1px solid #4A4A4A;padding: 3px 2px;}table.darkTable tbody td {font-size: 12px;color: #E6E6E6;}table.darkTable tr:nth-child(even) {background: #323232;}table.darkTable thead {background: #000000;border-bottom: 3px solid #000000;}table.darkTable thead th {font-size: 15px;font-weight: bold;color: #E6E6E6;text-align: center;border-left: 2px solid #4A4A4A;}table.darkTable thead th:first-child {border-left: none;}table.darkTable tfoot {font-size: 12px;font-weight: bold;color: #E6E6E6;background: #000000;background: -moz-linear-gradient(top, #404040 0%, #191919 66%, #000000 100%);background: -webkit-linear-gradient(top, #404040 0%, #191919 66%, #000000 100%);background: linear-gradient(to bottom, #404040 0%, #191919 66%, #000000 100%);border-top: 1px solid #4A4A4A;}table.darkTable tfoot td {font-size: 12px;}</style>';
	/*var Titulo_table='<table class="darkTable" id="CTAS"><thead><tr><th width="5%">#</th><th width="10%">CTA-TITLE</th><th width="5%">IDIOM URL</th><th width="40%">URL</th><th width="5%">STATUS URL</th>'+
					 '<th width="5%">IDIOM REDIRECT</th><th width="35%">REDIRECT URL</th><th width="5%">STATUS REDIRECT</th><thead><tr>';*/
	var Titulo_table='<table class="darkTable" id="CTAS"><thead><tr><th>#</th><th>CTA-TITLE</th><th>IDIOM URL</th><th>URL</th><th>STATUS URL</th>'+
					 '<th>IDIOM REDIRECT</th><th>REDIRECT URL</th><th>STATUS REDIRECT</th><thead><tr>';
	var Style_black2 ='<style> table.darkTable {table-layout: auto;font-family: Arial, Helvetica, sans-serif;border: 2px solid #000000;background-color: #4A4A4A;width: 100%;text-align: center;border-collapse: collapse;}table.darkTable td, table.darkTable th {border: 1px solid #4A4A4A;padding: 3px 2px;}table.darkTable tbody td {font-size: 13px;color: #E6E6E6;}table.darkTable tr:nth-child(even) {background: #323232;}table.darkTable thead {background: #000000;border-bottom: 3px solid #000000;}table.darkTable thead th {font-size: 15px;font-weight: bold;color: #E6E6E6;text-align: center;border-left: 2px solid #4A4A4A;}table.darkTable thead th:first-child {border-left: none;}table.darkTable tfoot {font-size: 12px;font-weight: bold;color: #E6E6E6;background: #000000;background: -moz-linear-gradient(top, #404040 0%, #191919 66%, #000000 100%);background: -webkit-linear-gradient(top, #404040 0%, #191919 66%, #000000 100%);background: linear-gradient(to bottom, #404040 0%, #191919 66%, #000000 100%);border-top: 1px solid #4A4A4A;}table.darkTable tfoot td {font-size: 12px;}</style>';

	var Titulo_END='</tr>';
	var URL='<div><table class="darkTable" id="url"><thead><tr><th width="50%" id="text-current">Current URL</th><th> <a href= "'+document.location.href+'"  style="color:#10A419;">'+document.location.href+'</a> </th></tr></div>'; 
	var DATE_HTML='<table class="darkTable" id="date"><thead><tr><th width="50%">Date</th><th> '+date+'</th></tr>'; 
	
	var title_pag='<div ALIGN="CENTER"><img src="https://1.bp.blogspot.com/-6sc9EyCfnqk/YKZ2_dMXLUI/AAAAAAAAnPw/v2q8r8H9lucWeBrTNd95-x29DyOsl9N1gCNcBGAsYHQ/s0/CTAS%2BTOOL%2B2.png" ALIGN="CENTER" /></div>';
	var Credits='<div ALIGN="CENTER"><img  src="https://3.bp.blogspot.com/-4YKtKVb0bZU/XsF6ulF8_yI/AAAAAAAAjHI/-RLxHxPrkeoni_y2XW8UW8JFqzhtw4lLgCNcBGAsYHQ/s1600/Credits.png" ALIGN="CENTER" /></div>';
	
	
	var tbody_1='<tbody>';
	var tbody_2='</tbody>';
	var HTML_end='</table> ';
	var tabla='';
	var report='';
	var ctas_count=1;

	
		//-------------------------------------------button
	   var btn = document.createElement("button");
	   btn.setAttribute("class","btn_ctas");
	   btn.setAttribute("id", "btn_ctas");
	   btn.setAttribute('title','Status:'+'\n'+
	   '❌  = Broken '+'\n'+
	   '✅  = Verified'+'\n'+
		'⚠️  = Pending to add HREF'+'\n'+
		'Idioms:'+'\n'+
		'🏴󠁧󠁢󠁥󠁮󠁧󠁿  = English '+'\n'+
	   '🇪🇸 = Spanish'+'\n'+
		'🇨🇳  = Mandarin');
	   
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
	   //-------------------------------------------span-expand
	   var span2 = document.createElement("span");
	   span2.setAttribute("id", "span-expand");
	   span2.setAttribute("class","close");
	   span2.textContent='◩';
	   //-------------------------------------------span-space
	   var span3 = document.createElement("span");
	   span3.setAttribute("id", "span-space");
	   span3.setAttribute("class","close");
	   span3.textContent='';
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
			   div_header.appendChild(span3);
			   div_header.appendChild(span2);
			   div_header.appendChild(h2);
			   document.body.insertBefore(div,document.body.childNodes[0]);
			   document.body.insertBefore(btn,document.body.childNodes[0]);
	   
			   var ventana=window;
	   
			   
			   // Get the modal
				 var modal = document.getElementById("myModal");
	   
				 // Get the button that opens the modal
				 var btn = document.getElementById("btn_ctas");
				 document.getElementById("btn_ctas").innerHTML ='Report'; 
				 document.getElementById("span-space").innerHTML ='&nbsp;';
				 
				 btn.style.display = "block";
				 
				 // Get the <span> element that closes the modal
				 var span1 = document.getElementsByClassName("close")[0];
				 var span2 = document.getElementsByClassName("close")[2];
	   
				 // When the user clicks the button, open the modal 
				 
				 btn.onclick = function() {
					
					$('#RLC_content').attr('hidden','true');
				   modal.style.display = "block";
				  /* $('.header-next-gen.next-gen-header').attr('hidden','true');
				   $('.nextGenNav').attr('hidden','true');
				   $('#btn_ctas').attr('hidden','true');*/
				   full_popup();
				   
				 }
	   
				 // When the user clicks on <span> (x), close the modal
				 
				 span1.onclick = function() {
					
					$('#RLC_content').removeAttr('hidden');
				   modal.style.display = "none";
				   $('.header-next-gen.next-gen-header').removeAttr('hidden');
				   $('.nextGenNav').removeAttr('hidden');
				   $('#btn_ctas').removeAttr('hidden');
				   
				 }
				 span2.onclick = function() {
					var Ctas_count='<table class="darkTable" id="date"><thead><tr><th width="50%">CTAS on this page </th><th> '+count_report+'</th></tr>'; 
		   			var report= Style_black2+title_pag+URL+DATE_HTML+Ctas_count+Titulo_table+Titulo_END+tbody_1+save+tbody_2+HTML_end+Credits;
					document.write('<body style="background-color:rgb(0,0,0);"></body>');
					document.write(report);
				   
				 }
				 $(document).keyup(function(event){
				   if(event.which=='27'){
					
					$('#RLC_content').removeAttr('hidden');
					 modal.style.display = "none";
					 $('.header-next-gen.next-gen-header').removeAttr('hidden');
				   $('.nextGenNav').removeAttr('hidden');
				   $('#btn_ctas').removeAttr('hidden');
				   }
				});
		 
	   
	   
		 //Functions
	   function idiom(link)
	   { var language;
		if(link !== 'zh' || link !== 'es' || 
		link !== 'en' || link !== 'ww') 
		{
		  language='󠁧❓';
		}
		if(link === 'en' || link === 'ww')
		{
		  language='🏴󠁧󠁢󠁥󠁮󠁧󠁿';
		}
		if(link === 'es')
		{
		  language='󠁧🇪🇸';
		}
		if(link === 'zh')
		{
		  language='󠁧🇨🇳';
		}
		return language;
	   }
		 async function full_popup()
	   {
		 $(jQuery("#container").find("a")).each(async function(){
		   var status='';
		   var color='';
		   var redirect_color='';
		   var redirect='';
		   var language='';
		   var redirect_idiom='';
		   var redirect_status='';
		   var link_language=this.href.replace('https://','').replace('http://','').substring(0,2);
		   
		   if($(this).css('background-color')=== 'rgba(61, 196, 56, 0.357)')
		   {
			 status='✅ ';
			 color='#6fe26f';
		   }
		   if($(this).css('background-color') === 'rgba(196, 56, 56, 0.357)')
		   {
			 status='❌';
			 color='Red';
		   }
		   if($(this).css('background-color') === 'rgba(196, 182, 56, 0.357)')
		   {
			 status='✅ ';
			 color='#6fe26f';
			 redirect= this.title;
			 redirect=redirect.substring(redirect.indexOf('|')+1,redirect.length).trim();
			 redirect_status=redirect.substring(redirect.indexOf('*')+1,redirect.length).trim();
			 redirect=redirect.substring(0,redirect.indexOf('*')).trim();
			 redirect_idiom=redirect.replace('https://','').replace('http://','').substring(0,2);
			 redirect_idiom=idiom(redirect_idiom);
			 if(redirect_status === 'verified')
			 {
				redirect_status='✅ ';
				redirect_color='#6fe26f';
			 }
			 else{
				redirect_status='❌';
				redirect_color='Red';
			 }
		   }
		   if(this.href === document.location.href+'#' || this.href === document.location.href+'#pending')
		   {
			 status='⚠️';
			 color='Yellow';
		   }
		   language=idiom(link_language);
		   
		   
	   
		   tabla=tabla+'<tr><td style="text-align:center">'+ctas_count //#
					+'</td><td style="text-align:center">'+this.innerText //CTA-TITLE
					+'</td><td style="text-align:center">'+language // IDIOM URL
					+'</td><td><a style="color:'+color+';" href="'+this.href+'">'+this.href//URL
					+'</a></td><td style="text-align:center">'+status //URL STATUS
					+'</td><td style="text-align:center">'+redirect_idiom //IDIOM REDIRECT
					+'</td><td><a style="color:'+redirect_color+';" href="'+redirect+'">'+redirect//REDIRECT URL
					+'</a></td><td style="text-align:center">'+redirect_status //REDIRECT STATUS
					+'</td></tr>';
	   
		   ctas_count++;
		   
			 
		   });
		   $(".c_054-2").find("a").each(async function(){
			 var status='';
		   var color='';
		   var redirect_color='';
		   var redirect='';
		   var language='';
		   var redirect_status='';
		   var redirect_idiom='';
		   var link_language=this.href.replace('https://','').replace('http://','').substring(0,2);
		   if($(this).css('background-color')=== 'rgba(61, 196, 56, 0.357)')
		   {
			 status='✅ ';
			 color='#6fe26f';
		   }
		   if($(this).css('background-color') === 'rgba(196, 56, 56, 0.357)')
		   {
			 status='❌';
			 color='Red';
		   }
		   if($(this).css('background-color') === 'rgba(196, 182, 56, 0.357)')
		   {
			 status='✅ ';
			 color='#6fe26f';
			 redirect= this.title;
			 redirect=redirect.substring(redirect.indexOf('|')+1,redirect.length).trim();
			 redirect_status=redirect.substring(redirect.indexOf('*')+1,redirect.length).trim();
			 redirect=redirect.substring(0,redirect.indexOf('*')).trim();
			 redirect_idiom=redirect.replace('https://','').replace('http://','').substring(0,2);
			 redirect_idiom=idiom(redirect_idiom);
			 if(redirect_status === 'verified')
			 {
				redirect_status='✅ ';
				redirect_color='#6fe26f';
			 }
			 else{
				redirect_status='❌';
				redirect_color='Red';
			 }
		   }
		   if(this.href === document.location.href+'#' || this.href === document.location.href+'#pending')
		   {
			 status='⚠️';
			 color='Yellow';
		   }
		   language=idiom(link_language);
		   
		   
	   
		   tabla=tabla+'<tr><td style="text-align:center">'+ctas_count //#
					+'</td><td style="text-align:center">'+this.innerText //CTA-TITLE
					+'</td><td style="text-align:center">'+language // IDIOM URL
					+'</td><td><a style="color:'+color+';" href="'+this.href+'">'+this.href//URL
					+'</a></td><td style="text-align:center">'+status //URL STATUS
					+'</td><td style="text-align:center">'+redirect_idiom //IDIOM REDIRECT
					+'</td><td><a style="color:'+redirect_color+';" href="'+redirect+'">'+redirect//REDIRECT URL
					+'</a></td><td style="text-align:center">'+redirect_status //REDIRECT STATUS
					+'</td></tr>';
		   
			 ctas_count++;
			 
			   
			 });
			 ctas_count=ctas_count-1;
		   var Ctas_count='<table class="darkTable" id="date"><thead><tr><th width="50%">CTAS on this page </th><th> '+ctas_count+'</th></tr>'; 
		   var inyectar= Style_black+title_pag+URL+DATE_HTML+Ctas_count+Titulo_table+Titulo_END+tbody_1+tabla+tbody_2+HTML_end;
			 save=tabla;
			 count_report=ctas_count;
		 document.getElementById("contenido").innerHTML =inyectar; 
		 ctas_count=1;
		 tabla='';
	   }  
	},2000);

	async function test(url) {
  
		var xhttp = new XMLHttpRequest();
			xhttp.onreadystatechange = async function() 
			{
			try
			{
				if (xhttp.readyState == 4 && xhttp.status == 200) 
			  {
				await new Promise(resolve => setTimeout(resolve,0))
				 return xhttp.status
				 
				
				 
			  } 
			  else 
			  {
			  if (xhttp.readyState == 4 && xhttp.status == 404) 
			  {
				return xhttp.status
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