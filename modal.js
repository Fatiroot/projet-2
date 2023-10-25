
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
        // other services
        document.getElementById("p_more").textContent=service;
    });
    
}
// btn.onclick = function() {
//   modal.style.display = "block";
// }

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}