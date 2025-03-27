function ex1(){

let n1 = document.getElementById("numero1").value;    

let quadrado = Number(n1)**2;
let numero = Number(n1);
let cubo = Number(n1)**3;


document.getElementById("numero").innerHTML = "o numero é: " + numero;
document.getElementById("quadrado").innerHTML = "o quadrado do numero é: " + quadrado;
document.getElementById("cubo").innerHTML = "o cubo do numero é: " + cubo;

}


function ex2(){

let fr = document.getElementById("temp").value;
let  C = (Number(fr)-32)*5/9;

document.getElementById("grauf").innerHTML = "a temp em graus F é: " + fr;
document.getElementById("grausC").innerHTML = "a temp em graus C é: " + C.toFixed(2);
}

function ex3(){

    let v = Number(document.getElementById("atraso").value);
    let j = Number(document.getElementById("juros").value);
    let a = Number(document.getElementById("tempoA").value);

    let vp = v + v*((j**2)/100) * a;

    document.getElementById("valor").innerHTML = "Valor = " + v;
    document.getElementById("taxa").innerHTML = "Taxa = " + j;
    document.getElementById("tempo").innerHTML = "Tempo = " + a;
    document.getElementById("parcela").innerHTML = "Valor atualizado é: " + vp;

}

function ex4(){

    let b = Number(document.getElementById("base").value)
    let alt = Number(document.getElementById("altura").value)

    let at = b*alt/2;

    document.getElementById("basee").innerHTML = "A base é: " + b;
    document.getElementById("alturaa").innerHTML = "A altura é: " + alt;
    document.getElementById("areaT").innerHTML = "a area do triangulo é: " + at;

}

function ex5(){

    let lad = Number(document.getElementById("lado").value);
    let ar = lad**2;

    document.getElementById("ladoo").innerHTML = "o valor do lado é: " + lad;

    document.getElementById("area").innerHTML = "A area do quadrado é: " + ar;
    


}