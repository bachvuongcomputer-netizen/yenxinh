const envelope=document.getElementById("envelope");

const message=document.getElementById("message");

const cover=document.querySelector(".cover");

document.getElementById("openBtn").onclick=function(){

cover.style.transform="rotateX(180deg)";

setTimeout(()=>{

envelope.style.display="none";

message.style.display="block";

},1000);

}
