
function compara(n1,n2){
  const primeirafrase = criaprimeirafrase(n1,n2);
  const segundafrase = segundafrase(n1,n2);
    return `${primeirafrase} ${segundafrase}`

}

function criaprimeirafrase(n1, n2){
     let saoiguais = '';
        
        if(n1!==n2){
            saoiguais ='não';
                 }

        return `Os números ${n1} e ${n2}
        ${saoiguais} são iguais.`

    }
    function segundafrase(n1,n2){
        const soma =n1+n2;

        let result10 ='menor';
        let result20 = 'menor';

        const compara10 = soma > 10;
        const compara20 = soma > 20;
        
        if(compara10){
            result10 ='maior';    
        }
        if(compara20){
            result20 ='maior';    
        }

        return `Sua soma é ${soma}, que é ${result10} que e ${result20} que 20`
    }
        console.log(compara(1,2));
