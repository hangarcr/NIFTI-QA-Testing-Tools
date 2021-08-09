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
        document.getElementById('comment').innerHTML ='QA Done.<br><br>'+
          '*Status:* {color:#DE350B}*Demoted*{color}<br>'+
          '*URLs:*<br><br>'+
          '{color:#00875A}+*Test complete:*+{color}<br>'+
          '|Copy |(/)|<br>'+
          '|Assets|(/)|<br>'+
          '|SEO|(/)|<br>'+
          '|Functionality|(/)|<br>'+
          '|Layout|(/)|<br>'+
          '|Mobile|(/)|<br>'+
          '|Cross-Browsing |(/)|<br>'+
          '|Pricing |N/A|<br><br>'+
          '*Evidence:*<br><br>'+
          'Tickets created:<br><br>'+
          '*Note:* {color:#DE350B}Please check all tickets created above.{color}';
         
          var progress=document.getElementById('comment');
           
          
            
          copiarAlPortapapeles(progress); 