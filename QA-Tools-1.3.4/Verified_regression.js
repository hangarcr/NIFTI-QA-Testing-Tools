function copiarAlPortapapeles(element) {
    var $temp = $("<textarea>");
    var brRegex = /<br\s*[\/]?>/gi;
    $("body").append($temp);
    $temp.val($(element).html().replace(brRegex, "\r")).select();
    document.execCommand("copy");
    $temp.remove();
  }
var comment= document.createElement("span");
        comment.setAttribute("id", "comment");
        comment.setAttribute("id", "comment");
        comment.setAttribute("hidden","true");
        document.body.insertBefore(comment,document.body.childNodes[0]);
        document.getElementById('comment').innerHTML ='{panel:title=|borderStyle=dashed|borderColor=#ccc|titleBGColor=#4B8B3B|bgColor=#89CC66}*Regression test complete*{panel}<br>'+
        '||*URLs:*||  |<br>'+
        '||*Evidence:*||  |<br>'+
        '||*Note:*|| This is Ready for sign off (/) |<br>';
        
         
          var progress=document.getElementById('comment');
           
          
            
          copiarAlPortapapeles(progress); 