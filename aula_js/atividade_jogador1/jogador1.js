var jogador1= 0;
var jogador2=0;
var placar;

if(jogador1>0){
    console.log('Jogador 1 Marcou Ponto');
}
else if(jogador2>0){
    console.log('Jogador 2 marcou ponto');
}
else{
    console.log('empate')
}
switch(placar){
    case placar = jogador1>jogador2:
        console.log("jogador 1 ganhou o jogo");
        break;
    case placar= jogador2>jogador1:
        console.log('Jogador 2 ganhou o Jogo ');
        break;
    default:
        console.log('placar invalido');

    
}

function funcao(){
    console.log('testd');

}
funcao();

function messagem(primeiro, segundo){
    console.log(primeiro,segundo)
}
messagem();
