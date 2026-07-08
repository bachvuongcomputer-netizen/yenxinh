const btn=document.getElementById("openBtn");

const cover=document.querySelector(".cover");

const envelope=document.getElementById("envelope");

const message=document.getElementById("message");

btn.onclick=function(){

cover.classList.add("open");

setTimeout(()=>{

envelope.style.display="none";

message.style.display="block";

},1000);

}
