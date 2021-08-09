$("div.c_008.asterisk").each(function(){
            
    //$(this).click();
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

//$("html, body").animate({ scrollTop: 0 });
