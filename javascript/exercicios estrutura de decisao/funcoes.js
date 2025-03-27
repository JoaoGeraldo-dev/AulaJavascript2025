function ex1(){
    let n1 = Number(document.getElementById("n1").value);
    let n2 = Number(document.getElementById("n2").value);

    if(n1 == n2){
        document.getElementById("resp").innerHTML = "numeros iguais";
    }else{
        document.getElementById("resp").innerHTML = "numeros diferentes";
    }



}