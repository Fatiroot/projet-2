
var list_btn = document.getElementsByClassName("btn_more");
var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];

for (let index = 0; index < list_btn.length; index++) {
    list_btn[index].addEventListener("click",()=>{
        modal.style.display = "block";
        var service;
        if(index==0) service="lorem1";
        if(index==1) service="lorem2";
        if(index==2) service="lorem3";
        if(index==3) service="lorem4";
        if(index==4) service="lorem5";
        if(index==5) service="lorem6";
        document.getElementById("p_more").textContent=service;
    });
    
}
span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}