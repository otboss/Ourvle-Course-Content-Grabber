/*
 * BY: OTTOR
 *      09/12/2017
 * 
 * ON THE DESIRED COURSE PAGE COPY THE SCRIPT PROVIDE IN THE BROWSER CONSOLE
 * WORKS WITH GOOGLE CHROME, FOR BEST RESULTS DISABLE SAVE DESTINATION PROMPT
 * */
    
    var jq = document.createElement('script');
    jq.src = "https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js";
    document.getElementsByTagName('head')[0].appendChild(jq);

    window.setTimeout(function(){
        $("section a").each(function(){
            $(this).attr("download", true);
        });  
        var usefulFiles = [
            "pdf",
            "archive",
            "powerpoint",
            "document"
        ];
        $("section a img").each(function(){
            var picLink = $(this).attr("src");
            for(var x = 0; x < usefulFiles.length; x++){
                if(picLink.search(usefulFiles[x]) >= 0){
                    this.click();
                    break;
                }
            }
        });
    }, 2000);
