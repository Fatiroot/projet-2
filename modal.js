
var list_btn = document.getElementsByClassName("btn_more");
var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];

for (let index = 0; index < list_btn.length; index++) {
    list_btn[index].addEventListener("click",()=>{
        modal.style.display = "block";
        var service;
        if(index==0) service="lorem 1";
        if(index==1) service="lorem 2";
        if(index==2) service="lorem 3";
        if(index==3) service="lorem 4";
        if(index==4) service="lorem 5";
        if(index==5) service="lorem 6";
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