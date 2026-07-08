const intro = document.getElementById("intro");
const letter = document.getElementById("letter");

document.getElementById("openLetter").onclick = () => {

    intro.style.display = "none";
    letter.style.display = "block";

    createHearts();

};

document.getElementById("loveBtn").onclick = () => {

    createHearts(120);

};

function createHearts(amount=40){

    for(let i=0;i<amount;i++){

        let heart=document.createElement("div");

        heart.innerHTML="❤️";

        heart.style.position="fixed";

        heart.style.left=Math.random()*100+"vw";

        heart.style.top="100vh";

        heart.style.fontSize=(20+Math.random()*30)+"px";

        heart.style.pointerEvents="none";

        heart.style.transition="all 5s linear";

        document.body.appendChild(heart);

        setTimeout(()=>{

            heart.style.top="-50px";

            heart.style.transform=`translateX(${Math.random()*200-100}px)`;

            heart.style.opacity=0;

        },50);

        setTimeout(()=>{

            heart.remove();

        },5000);

    }

}
