
const envelope = document.querySelector("#env");

envelope.addEventListener("click", () => {

 window.location.href = "index1.html";

});





function openLetter(){
  document.getElementById("container1")
    .classList.remove("hidden");
    document.getElementById("container1")
    .classList.add("show");

}

function openpage(){
  document.getElementById("page").style.removeProperty('bottom')
  document.getElementById("page").classList.add("pageshow");
  document.getElementById("page").classList.remove("show")
}


