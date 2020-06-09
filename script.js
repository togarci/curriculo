window.onload = function(){
    var EPs = document.getElementsByClassName("EP");
    var FAs = document.getElementsByClassName("FA");
    this.document.querySelector(".line").style.height = this.document.querySelector(".n2").clientHeight + 2 + "px";
    var vlEP = '';
    for(var x = 0; x != EPs.length; x++){
        if(x != 0){
            if(x != EPs.length - 1){
                vlEP = vlEP + "\n" + '<span class="topic"></span>' + "\n" + ('<div class="line"     style="height: ' + (document.getElementsByClassName("EP")[x].clientHeight + 33) + 'px"></div>');
            } else {
                vlEP = vlEP + "\n" + '<span class="topic"></span>' + "\n" + ('<div class="line"     style="height: ' + (document.getElementsByClassName("EP")[x].clientHeight - 13) + 'px"></div>');
            }            

        } else {
            if(x != EPs.length - 1){
                vlEP = vlEP + "\n" + '<span class="topic newest"></span>' + "\n" + ('<div class="line"     style="height: ' + (document.getElementsByClassName("EP")[x].clientHeight + 33) + 'px"></div>');
            } else {
                vlEP = vlEP + "\n" + '<span class="topic newest"></span>' + "\n" + ('<div class="line"     style="height: ' + (document.getElementsByClassName("EP")[x].clientHeight - 13) + 'px"></div>');
            }
            
        }
    }
    this.document.getElementsByTagName("img")[2].insertAdjacentHTML("afterend", vlEP);   

    var vlFA = '';
    for(var x = 0; x != FAs.length; x++){
        if(x != 0){
            if(x != FAs.length - 1){
                vlEP = vlFA + "\n" + '<span class="topic"></span>' + "\n" + ('<div class="line"     style="height: ' + (document.getElementsByClassName("FA")[x].clientHeight + 33) + 'px"></div>');
            } else {
                vlFA = vlFA + "\n" + '<span class="topic"></span>' + "\n" + ('<div class="line"     style="height: ' + (document.getElementsByClassName("FA")[x].clientHeight - 13) + 'px"></div>');
            }            

        } else {
            if(x != FAs.length - 1){
                vlFA = vlFA + "\n" + '<span class="topic newest"></span>' + "\n" + ('<div class="line"     style="height: ' + (document.getElementsByClassName("FA")[x].clientHeight + 33) + 'px"></div>');
            } else {
                vlFA = vlFA + "\n" + '<span class="topic newest"></span>' + "\n" + ('<div class="line"     style="height: ' + (document.getElementsByClassName("FA")[x].clientHeight - 13) + 'px"></div>');
            }
            
        }
    }
    this.document.getElementsByTagName("img")[3].insertAdjacentHTML("afterend", vlFA);  
}
