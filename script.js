let nomeHeroi = "Batman"
let xpHeroi = 2000

if(xpHeroi <= 1000 ){
    console.log("O Herói de nome " + nomeHeroi + " está no nível Ferro." )
}else if(xpHeroi >= 1001 && xpHeroi <= 2000){
    console.log("O Herói de nome " + nomeHeroi + " está no nível Bronze." )
}else if(xpHeroi >= 2001 && xpHeroi <= 5000){
    console.log("O Herói de nome " + nomeHeroi + " está no nível Prata." )
}else if(xpHeroi >= 5001 && xpHeroi <= 6000){
    console.log("O Herói de nome " + nomeHeroi + " está no nível Ouro." )
}else if(xpHeroi >= 6001 && xpHeroi <= 7000){
    console.log("O Herói de nome " + nomeHeroi + " está no nível Platina." )
}else if(xpHeroi >= 7001 && xpHeroi <= 8000){
    console.log("O Herói de nome " + nomeHeroi + " está no nível Ascendente." )
}else if(xpHeroi >= 9001 && xpHeroi <= 10.000){
    console.log("O Herói de nome " + nomeHeroi + " está no nível Imortal." )
}else {
    console.log("O Herói de nome " + nomeHeroi + " está no nível Radiante." )
}