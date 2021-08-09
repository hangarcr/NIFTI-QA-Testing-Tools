
var use=0;
$(function () {
  
  // Copy tool
    $("#btn_copy_tool").click(function(){
        click_copy_tool();
        
        chrome.tabs.executeScript(null, { file: "jquery-3.5.1.min.js" }, function() {
            use=localStorage.copy_tool;
            window.close();
            chrome.tabs.executeScript(null, { code:"console.log('Copy tool uses: '+"+use+");" });
            chrome.tabs.executeScript(null, { file: "open_accordions.js" });
            chrome.tabs.executeScript(null, { file: "COPY_TOOL_acc.js" });
            //chrome.tabs.executeScript(null, { file: "COPY_TOOL_new.js" });
            
            chrome.tabs.executeScript(null, { file: "xlsx.full.min.js" });
            chrome.tabs.insertCSS(null, {file:"style_tool.css"})
            chrome.tabs.insertCSS(null, {href:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"})
            //chrome.tabs
            
          
      });});
    // Disclaimers
    $("#btn_disclaimers").click(function(){
      click_disc_tool();
      chrome.tabs.executeScript(null, { file: "jquery-3.5.1.min.js" }, function() {
          use=localStorage.disc_tool;
          window.close();
          chrome.tabs.executeScript(null, { code:"console.log('Disclaimers tool uses: '+"+use+");" });
          chrome.tabs.executeScript(null, { file: "Disclaimers.js" });
          chrome.tabs.insertCSS(null, {file:"style_disclaimer_tool.css"})
          chrome.tabs.insertCSS(null, {href:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"})
          
        
        
          //chrome.tabs
          
        
    });});
    //SEO tool
    $("#btn_seo_tool").click(function(){
      click_seo_tool();
      var time=0;
      
        chrome.tabs.executeScript(null, { file: "jquery-3.5.1.min.js" }, function() {
          use=localStorage.seo_tool;
          window.close();
          chrome.tabs.executeScript(null, { code:"console.log('SEO tool uses: '+"+use+");" });
            chrome.tabs.executeScript(null, { file: "SEO_FIRST.js" });
            chrome.tabs.executeScript(null, { file: "SEO_SECOND.js" });
            
           
            chrome.tabs.insertCSS(null, {file:"style_tool.css"})
            chrome.tabs.executeScript(null, { file: "xlsx.full.min.js" });
            chrome.tabs.executeScript(null, { file: "html2canvas.min.js" });
            chrome.tabs.insertCSS(null, {href:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"});
            

      });});
    //CTAS tool
    
   /* $("#btn_cta_tool").click(function(tab){
      click_ctas_tool();
      chrome.tabs.executeScript(null, { file: "jquery-3.5.1.min.js" }, function() {
        use=localStorage.ctas_tool;
        
          chrome.tabs.executeScript(null, { code:"console.log('CTAS tool uses: '+"+use+");" });
          
          //chrome.tabs.executeScript(null, { file: "CTA_TOOL.js" });
          chrome.tabs.executeScript(null, { file: "open_accordions.js" });
          chrome.extension.onMessage.addListener(onRequest);
          function start(tab) {
          chrome.tabs.executeScript(tab.id, {file:'redirect_tool.js'}, function () {
          chrome.tabs.sendMessage(tab.id, {});
          });
          }
          start(tab);
          chrome.tabs.executeScript(null, { file: "Show_link.js" });
          //chrome.tabs.executeScript(null, { file: "CTAS_TOOL_V2.js" });
          //chrome.tabs.insertCSS(null, {file:"style_ctas_tool.css"})
          chrome.tabs.insertCSS(null, {file:"style_tool_ctas.css"})
          chrome.tabs.insertCSS(null, {file:"tooltip.css"})
          chrome.tabs.executeScript(null, { file: "tooltip.js" });
          chrome.tabs.insertCSS(null, {href:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"})
          
          
    });});*/
    //Price tool
    $("#btn_price_tool").click(function(){
      click_prices_tool();
      chrome.tabs.executeScript(null, { file: "jquery-3.5.1.min.js" }, function() {
        use=localStorage.prices_tool;
          window.close();
          chrome.tabs.executeScript(null, { code:"console.log('Prices tool uses: '+"+use+");" });
        chrome.tabs.executeScript(null, { file: "open_accordions.js" });
          chrome.tabs.executeScript(null, { file: "Prices.js" });
          chrome.tabs.insertCSS(null, {file:"style_tool.css"})
          
    });});
    //Availability tool
    $("#btn_availability_tool").click(function(){
      click_specs_tool();
      chrome.tabs.executeScript(null, { file: "jquery-3.5.1.min.js" }, function() {
        use=localStorage.specs_tool;
        chrome.tabs.executeScript(null, { code:"console.log('Specs tool uses: '+"+use+");" });
        chrome.tabs.executeScript(null, { file: "open_accordions.js" });
        chrome.tabs.executeScript(null, { file: "draganddrop.table.columns.js" }, function() {
          chrome.tabs.executeScript(null, { file: "Specs_availability.js" });
          //chrome.tabs.insertCSS(null, {file:"style_tool.css"}); 
          window.close();
        });
           
         
        
    });});
    
    
    //Open accordions utility
    $("#btn_open_accordions").click(function(){
      click_accordion();
        chrome.tabs.executeScript(null, { file: "jquery-3.5.1.min.js" }, function() {
          use=localStorage.accordion;
          chrome.tabs.executeScript(null, { code:"console.log('Accordion uses: '+"+use+");" });
            chrome.tabs.executeScript(null, { file: "open_accordions.js" });
            window.close();
          
      }); });
    //Change disclaimers utility
    $("#btn_change_disclaimers").click(function(){
      click_change_disc();
      chrome.tabs.executeScript(null, { file: "jquery-3.5.1.min.js" }, function() {
        use=localStorage.change_disc;
        chrome.tabs.executeScript(null, { code:"console.log('Change disc uses: '+"+use+");" });
        window.close();
          chrome.tabs.executeScript(null, { file: "change_disclaimers.js" });
          
        
    });});
    //Show Filename
    $("#btn_show_filename").click(function(){
      click_show_filename();
      chrome.tabs.executeScript(null, { file: "jquery-3.5.1.min.js" }, function() {
        use=localStorage.filename;
        chrome.tabs.executeScript(null, { code:"console.log('Change show link uses: '+"+use+");" });
        window.close();
          chrome.tabs.executeScript(null, { file: "open_accordions.js" });
          chrome.tabs.executeScript(null, { file: "Show_filename.js" });
          chrome.tabs.insertCSS(null, {file:"tooltip.css"})
          chrome.tabs.executeScript(null, { file: "tooltip.js" });

        
    });});
    //Show Alttext
    $("#btn_show_alttext").click(function(){
      click_show_alttext();
      chrome.tabs.executeScript(null, { file: "jquery-3.5.1.min.js" }, function() {
        use=localStorage.alttext;
        chrome.tabs.executeScript(null, { code:"console.log('Change show link uses: '+"+use+");" });
        window.close();
          chrome.tabs.executeScript(null, { file: "open_accordions.js" });
          chrome.tabs.executeScript(null, { file: "Show_alttext.js" });
          chrome.tabs.insertCSS(null, {file:"tooltip.css"})
          chrome.tabs.executeScript(null, { file: "tooltip.js" });

        
    });});
    //Show link
    $("#btn_show_link").click(function(){
      click_show_link();
      chrome.tabs.executeScript(null, { file: "jquery-3.5.1.min.js" }, function() {
        use=localStorage.link;
        chrome.tabs.executeScript(null, { code:"console.log('Change show link uses: '+"+use+");" });
        window.close();
          
          chrome.tabs.executeScript(null, { file: "Show_link.js" });
          chrome.tabs.insertCSS(null, {file:"tooltip.css"})
          chrome.tabs.executeScript(null, { file: "tooltip.js" });

        
    });});
    //Evidence approved underline
    $("#btn_evidence_approved").click(function(){
      chrome.tabs.executeScript(null, { file: "jquery-3.5.1.min.js" }, function() {
        window.close();
          chrome.tabs.executeScript(null, { file: "Evidence_approved.js" });
          
        
    });});
    //Evidence rejected underline
    $("#btn_evidence_rejected").click(function(){
      chrome.tabs.executeScript(null, { file: "jquery-3.5.1.min.js" }, function() {
        window.close();
          chrome.tabs.executeScript(null, { file: "Evidence_rejected.js" });
          
        
    });});
    //Ticket's comment templates
    //Sub-task
    $("#subtask_progress").click(function(){
      chrome.tabs.executeScript(null, { file: "jquery-3.5.1.min.js" }, function() {
        window.close();
        chrome.tabs.executeScript(null, { file: "Substask_progress_template.js" });
        
    });});
    $("#subtask_bug").click(function(){
      chrome.tabs.executeScript(null, { file: "jquery-3.5.1.min.js" }, function() {
        window.close();
        chrome.tabs.executeScript(null, { file: "Substask_bug_template.js" });
        
    });});
    $("#verified_darkprod").click(function(){
      chrome.tabs.executeScript(null, { file: "jquery-3.5.1.min.js" }, function() {
        window.close();
        chrome.tabs.executeScript(null, { file: "Verified_darkprod.js" });
        
    });});
    $("#verified_prod").click(function(){
      chrome.tabs.executeScript(null, { file: "jquery-3.5.1.min.js" }, function() {
        window.close();
        chrome.tabs.executeScript(null, { file: "Verified_prod.js" });
        
    });});
    $("#verified_qa2").click(function(){
      chrome.tabs.executeScript(null, { file: "jquery-3.5.1.min.js" }, function() {
        window.close();
        chrome.tabs.executeScript(null, { file: "Verified_qa2.js" });
        
    });});
    $("#verified_regression").click(function(){
      chrome.tabs.executeScript(null, { file: "jquery-3.5.1.min.js" }, function() {
        window.close();
        chrome.tabs.executeScript(null, { file: "Verified_regression.js" });
        
    });});
    $("#demoted_darkprod").click(function(){
      chrome.tabs.executeScript(null, { file: "jquery-3.5.1.min.js" }, function() {
        window.close();
        chrome.tabs.executeScript(null, { file: "Demoted_darkprod.js" });
        
    });});
    $("#demoted_prod").click(function(){
      chrome.tabs.executeScript(null, { file: "jquery-3.5.1.min.js" }, function() {
        window.close();
        chrome.tabs.executeScript(null, { file: "Demoted_prod.js" });
        
    });});
    $("#demoted_qa2").click(function(){
      chrome.tabs.executeScript(null, { file: "jquery-3.5.1.min.js" }, function() {
        window.close();
        chrome.tabs.executeScript(null, { file: "Demoted_qa2.js" });
        
    });});
    
    $("#demoted_regression").click(function(){
      chrome.tabs.executeScript(null, { file: "jquery-3.5.1.min.js" }, function() {
        window.close();
        chrome.tabs.executeScript(null, { file: "Demoted_regression.js" });
        
    });});



});
//Count clicks
//Tools
function click_copy_tool() {
  if(typeof(Storage) !== "undefined") {
      if (localStorage.copy_tool) {
          localStorage.copy_tool = Number(localStorage.copy_tool)+1;
      } else {
          localStorage.copy_tool = 1;
      }
  } 
}
function click_disc_tool() {
  if(typeof(Storage) !== "undefined") {
      if (localStorage.disc_tool) {
          localStorage.disc_tool = Number(localStorage.disc_tool)+1;
      } else {
          localStorage.disc_tool = 1;
      }
  } 
}
function click_seo_tool() {
  if(typeof(Storage) !== "undefined") {
      if (localStorage.seo_tool) {
          localStorage.seo_tool = Number(localStorage.seo_tool)+1;
      } else {
          localStorage.seo_tool = 1;
      }
  } 
}
function click_ctas_tool() {
  if(typeof(Storage) !== "undefined") {
      if (localStorage.ctas_tool) {
          localStorage.ctas_tool = Number(localStorage.ctas_tool)+1;
      } else {
          localStorage.ctas_tool = 1;
      }
  } 
}
function click_prices_tool() {
  if(typeof(Storage) !== "undefined") {
      if (localStorage.prices_tool) {
          localStorage.prices_tool = Number(localStorage.prices_tool)+1;
      } else {
          localStorage.prices_tool = 1;
      }
  } 
}
function click_specs_tool() {
  if(typeof(Storage) !== "undefined") {
      if (localStorage.specs_tool) {
          localStorage.specs_tool = Number(localStorage.specs_tool)+1;
      } else {
          localStorage.specs_tool = 1;
      }
  } 
  
}
//Utilities
function click_show_filename() {
  if(typeof(Storage) !== "undefined") {
      if (localStorage.filename) {
          localStorage.filename = Number(localStorage.filename)+1;
      } else {
          localStorage.filename = 1;
      }
  }
  else{ localStorage.filename = 0;}
}
function click_show_alttext() {
  if(typeof(Storage) !== "undefined") {
      if (localStorage.alttext) {
          localStorage.alttext = Number(localStorage.alttext)+1;
      } else {
          localStorage.alttext = 1;
      }
  }
  else{ localStorage.alttext = 0;}
}
function click_show_link() {
  if(typeof(Storage) !== "undefined") {
      if (localStorage.link) {
          localStorage.link = Number(localStorage.link)+1;
      } else {
          localStorage.link = 1;
      }
  }
  else{ localStorage.link = 0;}
}
function click_accordion() {
  if(typeof(Storage) !== "undefined") {
      if (localStorage.accordion) {
          localStorage.accordion = Number(localStorage.accordion)+1;
      } else {
          localStorage.accordion = 1;
      }
  }
  else{ localStorage.accordion = 0;}
}
function click_change_disc() {
  if(typeof(Storage) !== "undefined") {
      if (localStorage.change_disc) {
          localStorage.change_disc = Number(localStorage.change_disc)+1;
      } else {
          localStorage.change_disc = 1;
      }
  } 
  else{ localStorage.accordion = 0;}
}
// Version
$(function () {
$("#logo").click(function(){
  
  chrome.tabs.executeScript(null, { code:'console.log("TOOL USES");' });
  chrome.tabs.executeScript(null, { code:"console.log('COPY: '+"+localStorage.copy_tool+");" });
  chrome.tabs.executeScript(null, { code:"console.log('Disc: '+"+localStorage.disc_tool+");" });
  chrome.tabs.executeScript(null, { code:"console.log('SEO : '+"+localStorage.seo_tool+");" });
  chrome.tabs.executeScript(null, { code:"console.log('CTAS: '+"+localStorage.ctas_tool+");" });
  chrome.tabs.executeScript(null, { code:"console.log('PRIC: '+"+localStorage.prices_tool+");" });
  chrome.tabs.executeScript(null, { code:"console.log('SPEC: '+"+localStorage.specs_tool+");" });

  chrome.tabs.executeScript(null, { code:'console.log("UTILITY USES");' });
  chrome.tabs.executeScript(null, { code:"console.log('Show link: '+"+localStorage.link+");" });
  chrome.tabs.executeScript(null, { code:"console.log('Show filename: '+"+localStorage.filename+");" });
  chrome.tabs.executeScript(null, { code:"console.log('Show alttext: '+"+localStorage.alttext+");" });
  chrome.tabs.executeScript(null, { code:"console.log('Open accord: '+"+localStorage.accordion+");" });
  chrome.tabs.executeScript(null, { code:"console.log('Change disc: '+"+localStorage.change_disc+");" });
  

  
});
});



/*
//Function test CTAS
var requestPromises = {};
var cache = {};
var publishers = [];


function Observable(){
	this.observers = [];
	this.addObserver = function(callback){
		this.observers.push(callback);
	};
	this.notifyObservers = function(message){
		this.observers.forEach(function(ele){
	    	ele(message);
	    });
	};

}
function getUpdate(cb){
	cb({"total":num,"c":count});
}
function clearData(){
	requestPromises={};
	cache ={};
	publishers =[];
	timeout=10000;
}

function onRequest(request, sender, callback) {	
    if(request.action ==='update'){
    	getUpdate(callback);
    }else if(request.action =='done'){
    	clearData();
    	callback();
	}else if (request.action == "check") { 	

    	if(requestPromises[request.url]===undefined){
    		requestPromises[request.url] = function(){ 
    			var promise = new Promise(function(resolve,reject){
			    	$http(request.url).get().then(function(response){		
		    			resolve(response);
		    		});
	    		});
	    		return promise;
    		}
	    	
	    	requestPromises[request.url]().then(function(response){
	    		callback(response);
	    		cache[request.url] = response;
	    		if(publishers[request.url] !== undefined){
	    			publishers[request.url].notifyObservers(response);
	    		}

	    	});
    	}else{
    		if(cache[request.url] === undefined){
    			if(publishers[request.url] === undefined){
    				publishers[request.url] = new Observable();
    			}
    			publishers[request.url].addObserver(function(response){
    				callback(response);
    			});
    		
    		}else{
    			callback(cache[request.url]);
    		}
    	}
    	//count++;
    }
    return true;

}

var timeout = 10000;

// A-> $http function is implemented in order to follow the standard Adapter pattern
function $http(url){
 
  // A small example of object
  var core = {

    // Method that performs the ajax request
    ajax : function (method, url, args) {

      // Creating a promise
      	var promise = new Promise( function (resolve, reject) {

        // Instantiates the XMLHttpRequest
	        var XMLHttpTimeout,client = new XMLHttpRequest();
	        var uri = url;

	        if (args && (method === 'POST' || method === 'PUT')) {
	          uri += '?';
	          var argcount = 0;
	          for (var key in args) {
	            if (args.hasOwnProperty(key)) {
	              if (argcount++) {
	                uri += '&';
	              }
	              uri += encodeURIComponent(key) + '=' + encodeURIComponent(args[key]);
	            }
	          }
	        }
	        XMLHttpTimeout=setTimeout(function (){
				console.log("TIMEOUT "+ url)
				client.abort();
				resolve(
					{ status:408, message:"timeout",timeout:timeout}
				);
				//return callback({ status:408, message:"timeout"}); 
			}, timeout+=1000);

	        try {
    	
      			client.open(method, uri,true);
	        	client.send();
		    }
		    catch(e){
		    	console.log(url);
      			console.log(e);
		    }
	        
	        client.onload = function () {
	        	clearTimeout(XMLHttpTimeout);
	        	var status = this.status;
	        	if(this.responseURL !== url){
                    status = 302;
                }
	            resolve({status : status,
	          		message : this.responseURL,
	          		timeout:timeout
	          	});
	          	timeout-=1000;
	        };
	        client.onerror = function () {
	        	console.log("errror "+ url);
	        	clearTimeout(XMLHttpTimeout);
	          	//reject(this.statusText);
	          	resolve({status : 400,
	          	message : this.responseURL,
	          	timeout:timeout
	          	});
	          	timeout-=1000;
	      	};
	      	
		});
      // Return the promise
      return promise;
    }
  };

  // Adapter pattern
  return {
    'get' : function() {
      return core.ajax('GET', url);
    }
  };
};

*/