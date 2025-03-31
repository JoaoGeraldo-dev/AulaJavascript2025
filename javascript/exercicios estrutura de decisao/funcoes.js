function ex1(){
    let n1 = Number(document.getElementById("n1").value);
    let n2 = Number(document.getElementById("n2").value);

    if(n1 == n2){
        document.getElementById("resp").innerHTML = "numeros iguais";
    }else{
        document.getElementById("resp").innerHTML = "numeros diferentes";
    }
}


function ex2(){

    let n1 = Number(document.getElementById("n1").value);
    let n2 = Number(document.getElementById("n2").value);
    let n3 = Number(document.getElementById("n3").value);

    let soma = n1+n2;

    if(soma > n3){
        document.getElementById("C").innerHTML = "C vale: " + n3;
        document.getElementById("resp").innerHTML = "A soma de A e B é maior q C. Sendo ela: " + soma;
        
    }else{
        document.getElementById("C").innerHTML = "C vale: " + n3;
        document.getElementById("resp").innerHTML="C é maior que a soma entre A e B. Sendo ela:" + soma;
    } 
}

function ex3(){

let salada = Number(document.getElementById("sal").value);

if(salada > 500){
    document.getElementById("reaj").innerHTML = "você NÃO tem direito ao reajuste";
}else{
    document.getElementById("reaj").innerHTML = "você TEM direito ao reajuste";

    }   
}

function ex4(){
    let salada = Number(document.getElementById("sal").value);

    let reajuste = salada * 0.30;
    let total = salada + reajuste;

    if(salada > 500){
        document.getElementById("reaj").innerHTML = "você NÃO tem direito ao reajuste, seu salario é de: " + salada;
    }else{
        document.getElementById("reaj").innerHTML = "você TEM direito ao reajuste,<br> a parcela do seu aumento é: "+ reajuste +" seu novo salario é: " + total;
     }   
}

function ex5(){
    let cod = document.getElementById("cod").value;
    let qtde = Number(document.getElementById("qtde").value);

    if(cod == 5){
        document.getElementById("desc").innerHTML = "Descrição: " + document.getElementById("d1").innerHTML;
        document.getElementById("prec").innerHTML = "Preço: " + document.getElementById("p1").innerHTML;
        document.getElementById("vt").innerHTML = "Valor total: " + qtde * document.getElementById("p1").innerHTML;
    }else if(cod == 10){
        document.getElementById("desc").innerHTML = "Descrição: " + document.getElementById("d2").innerHTML;
        document.getElementById("prec").innerHTML = "Preço: " + document.getElementById("p2").innerHTML;
        document.getElementById("vt").innerHTML = "Valor total: " + qtde * document.getElementById("p2").innerHTML;
    }else{
        alert("CODIGO INVALIDO");
    }

}
