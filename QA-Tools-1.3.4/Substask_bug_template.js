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
        document.getElementById('comment').innerHTML ='{color:#d04437}*+Precondition:+*{color}<br>'+
        '* *Environment:* Dark Prod.<br>'+
        '* *Language:* EN.<br>'+
        '* *Devices:* All supported.<br>* *Browsers:* All supported.<br><br>'+
        '{color:#d04437}*+Issue:+*{color}<br><br>'+
        '*{color:#DE350B}+Actual Result:+{color}*<br><br>'+
        '{color:#00875A}*+Expected Result:+*{color}<br><br>'+
        
        '{color:#d04437}*+Steps to reproduce:+*{color}<br>'+
        '*1.* Go to the testing URLs:<br><br>'+
        '*2.* Verify that the pages are displaying correctly<br>'+
        '*3.* Locate <br>'+
        '*4.* Notice that it is not matching with reference.Please look the evidence below.<br><br>'+
        '{color:#d04437}*+Evidence:+*{color}'; 
         
          var progress=document.getElementById('comment');
           
          
            
          copiarAlPortapapeles(progress); 