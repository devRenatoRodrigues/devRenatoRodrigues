const nota = -10

if (nota >= 100 && nota <= 90) {
    console.log ("Nota A")
} 
else if (nota < 90 && nota >= 80 ){
    console.log ("Nota B")
}
else if (nota < 80 && nota >= 70) {
    console.log ('Nota C')
}
else if (nota < 70 && nota >= 60){
    console.log ("Nota D")
}
else if (nota < 60 && nota >= 50) {
    console.log ("Nota E")
}
else if (nota >= 0 && nota < 50 ) {
    console.log ("Nota F")
} 
else if (nota < 0 || nota > 100) {
    console.log ("Fatal Error")
}