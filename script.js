const intro = document.getElementById("intro");
const letter = document.getElementById("letter");

document.getElementById("openLetter").onclick = function () {

    intro.style.display = "none";
    letter.style.display = "block";

};

document.getElementById("loveBtn").onclick = function () {

    alert("❤️ Chúc em Yến mau khỏi bệnh nhé! ❤️");

};
