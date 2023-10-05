import { headerShow, run } from '../../scripts/lib-franklin.js';



export default function headerShow(block) {
    run().then( function(response){
        var quote = block.querySelector(":scope > div > div");
        var html = document.createElement("html");
        html.innerHTML = response;
        var body = html.querySelector(".aem-Grid").children;
        var getHeader = quote.closet('header > div > div');
        getHeader.innerHTML = body;
    })

}



function run() {
 
    return new Promise( (resolve, reject) => {
        // Creating Our XMLHttpRequest object 
        let xhr = new XMLHttpRequest();
     
        // Making our connection  
        let url = 'https://qa.tataaia.com/content/experience-fragments/tataaia_life_insuran/en/aem_demo/xfheader/master.html';
        xhr.open("GET", url, true);
     
        // function execute after request is successful 
        xhr.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                resolve(this.responseText);
            }
        }
        // Sending our request 
        xhr.send();
    })
}

headerShow();

