
const envelope = document.querySelector("#env");

envelope.addEventListener("click", () => {

 window.location.href = "index1.html";

});





// function openLetter(){
//   document.getElementById("container1")
//     .classList.remove("hidden");
//     document.getElementById("container1")
//     .classList.add("show");

// }

function openpage(){
  // document.getElementById("page").style.removeProperty('bottom');
  document.getElementById("page").classList.toggle("pageshow");
  document.getElementById("page").classList.toggle("page5");
  document.getElementById("page").classList.toggle("page6");

}
function openLetter(){
const envelope = document.querySelector('.envelope-wrapper');
envelope.addEventListener('click', () => {
  envelope.classList.toggle('flap');
  })
envelope.addEventListener('click', () => {
  envelope.classList.toggle('shaking');
  })
}
