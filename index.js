/*
 * BY: OTTOR
 *      09/12/2017
 * 
 * ON THE DESIRED COURSE PAGE COPY THE SCRIPT PROVIDE IN THE BROWSER CONSOLE
 * WORKS WITH GOOGLE CHROME, FOR BEST RESULTS DISABLE SAVE DESTINATION PROMPT
 * */

    window.setTimeout(function(){
        var usefulFiles = [
            "pdf",
            "archive",
            "powerpoint",
            "spreadsheet",
            "document"
        ];
        document.querySelectorAll("a > img").forEach((resourceIcon) => {
            var picLink = resourceIcon["src"];
            for(var x = 0; x < usefulFiles.length; x++){
                if(picLink.indexOf(usefulFiles[x]) >= 0){
                    resourceIcon.parentElement.setAttribute("download", true)
                    resourceIcon.parentElement.click();
                    break;
                }
            }            
            
        });
    }, 2000);
