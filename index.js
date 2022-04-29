/*
 * BY: OTTOR
 *      09/12/2017
 * 
 * ON GOOGLE CHROME, GO TO THE DESIRED COURSE CONTAINER COPY THE SCRIPT PROVIDE IN THE BROWSER CONSOLE
 * **** FOR BEST RESULTS DISABLE SAVE DESTINATION PROMPT ****
 * */

const resourceIcons = document.querySelectorAll("img")
for(let resourceIcon of resourceIcons){
    var picLink = resourceIcon["src"];
    if(
        picLink.indexOf("pdf") >= 0
        || picLink.indexOf("spreadsheet") >= 0
        || picLink.indexOf("archive") >= 0
        || picLink.indexOf("powerpoint") >= 0
        || picLink.indexOf("document") >= 0
    ){
        resourceIcon.parentElement.setAttribute("download", true)
        resourceIcon.parentElement.click();
    }
    await new Promise((resolve) => setTimeout(resolve, 100))
}
