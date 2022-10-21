const angulo1 = 100
const angulo2 = -40
const angulo3 = 40

if (angulo1 + angulo2 + angulo3 == 180) {
    console.log ('true')
}
else if  (angulo1 < 0 || angulo2 < 0 || angulo3 < 0) {
    console.log ('fatal error')
} 
else if (angulo1 + angulo2 + angulo3 != 180) {
    console.log ('false')
} 