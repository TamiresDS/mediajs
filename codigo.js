

      
    function media(){
      
        let nomeAluno = (document.getElementById("nomealuno").value)
        let n1 = Number(document.getElementById("nota1").value)
        let n2 = Number(document.getElementById("nota2").value)
        let n3 = Number (document.getElementById("nota3").value)
   
    
    
        valorSoma =(n1 + n2 +n3) /3
       
    
if(valorSoma >= 6)
document.getElementById('valor').innerHTML = `${nomeAluno}, parabens você foi aprovado!! sua media é: ${valorSoma}`
else
document.getElementById('valor').innerHTML = `${nomeAluno}, você foi reprovado, Sua média é: ${valorSoma}`

    
  
    
   }
