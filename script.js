window.onload = function(){
    // Bloco de informação Experiencia Profissional
    var EPs = document.getElementsByClassName("EP");
    // Bloco de informação formação academica
    var FAs = document.getElementsByClassName("FA");

    // Tamanho da primeira linha do objetivo
    this.document.querySelector(".line").style.height = this.document.querySelector(".n2").clientHeight + 2 + "px";

    
    var vlEP = '';
    for(var x = 0; x != EPs.length; x++){
        
        if(x != 0){
            // pega o tamanho do bloco e add uma bolinha mais o linha que possui o tamanho bloco
            if(x != EPs.length - 1){
                vlEP = vlEP + "\n" + '<span class="topic"></span>' + "\n" + ('<div class="line"     style="height: ' + (document.getElementsByClassName("EP")[x].clientHeight + 33) + 'px"></div>');
            } else {
                vlEP = vlEP + "\n" + '<span class="topic"></span>' + "\n" + ('<div class="line"     style="height: ' + (document.getElementsByClassName("EP")[x].clientHeight - 13) + 'px"></div>');
            }            

        } else {
            // se for o primeiro topico recebe classe newest quem tem margen top 
            if(x != EPs.length - 1){
                vlEP = vlEP + "\n" + '<span class="topic newest"></span>' + "\n" + ('<div class="line"     style="height: ' + (document.getElementsByClassName("EP")[x].clientHeight + 32) + 'px"></div>');
            } else {
                vlEP = vlEP + "\n" + '<span class="topic newest"></span>' + "\n" + ('<div class="line"     style="height: ' + (document.getElementsByClassName("EP")[x].clientHeight - 10) + 'px"></div>');
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
