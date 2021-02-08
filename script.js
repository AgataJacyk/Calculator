alert("Hello, World!");

function fordisplay(value){
    document.getElementById("output").innerHTML += value
}
function clear(){
    document.getElementById("output").innerHTML = "0";
}
function solve(){
    const l3 = document.getElementById("output").innerHTML;
    const solved = eval(l3);
    document.getElementById("output").innerHTML=solved;
}