let s1 = document.getElementById("s1");
let s2 = document.getElementById("s2");

const nome = window.location.hostname

    console.log("https://" + nome + "/imgs/verde.png")

function trocar(){

    if(s1.src == "https://" + nome + "/imgs/verde.png"){
        s1.src = "./imgs/amarelo.png"
        s2.src = "./imgs/vermelho.png"
    
    } else if (s1.src == "https://" + nome + "/imgs/amarelo.png"){
        s1.src = "./imgs/vermelho.png"
        s2.src = "./imgs/verde.png"
        
    } else if (s1.src == "https://" + nome + "/imgs/vermelho.png" && s2.src == "https://" + nome + "/imgs/verde.png" ){
        s2.src = "./imgs/amarelo.png"

    } else if (s2.src == "https://" + nome + "/imgs/amarelo.png"){
        s1.src = "./imgs/verde.png"
        s2.src = "./imgs/vermelho.png"
    }

}
 setInterval(() => {
    trocar()
}, 2000);


const a = { nome: "kelson"};
const b = { nome: "kelson"};
const c = "kelson";
const d = "kelson";

console.log(a)
console.log(b)
console.log(a == b, c == d);
