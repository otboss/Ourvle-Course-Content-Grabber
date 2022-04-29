/*
 * BY: OTTOR
 *      09/12/2017
 *
 * WORKS WITH GOOGLE CHROME:
 * 1. COPY THE SCRIPT BELOW
 * 2. GO TO THE DESIRED OURVLE COURSE CONTAINER
 * 3. OPEN THE BROWSER CONSOLE BY PRESSING F12
 * 4. PASTE CODE AND PRESS ENTER
 * **** FOR BEST RESULTS DISABLE SAVE DESTINATION PROMPT ****
 * */

const resourceIcons = document.querySelectorAll("a > img")
for(let resourceIcon of resourceIcons){
    const picLink = resourceIcon["src"];
    if(
        picLink.indexOf("pdf") >= 0
        || picLink.indexOf("spreadsheet") >= 0
        || picLink.indexOf("archive") >= 0
        || picLink.indexOf("powerpoint") >= 0
        || picLink.indexOf("document") >= 0
    ){
        resourceIcon.parentElement.setAttribute("download", true)
        resourceIcon.parentElement.click()
    }
    await new Promise((resolve) => setTimeout(resolve, 100))
}
