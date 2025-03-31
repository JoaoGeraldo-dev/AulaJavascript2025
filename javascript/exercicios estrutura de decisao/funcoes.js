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
        document.getElementById("resp").innerHTML = "A soma de A e B é maior q C." + soma;
        
    }else{
        document.getElementById("C").innerHTML = "C vale: " + n3;
        document.getElementById("resp").innerHTML="C é maior que a soma entre A e B." + soma;
    }
    

}