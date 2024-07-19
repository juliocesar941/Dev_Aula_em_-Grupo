console.log("=======CONTADOR DE 0 A 5=======")

for(i=1; i <=5; i++)
{
console.log(i)

}






console.log("=======SOMANDO OS RRESULTADOS=========")

for(i=1; i <= 5; i++)
  {
    
  console.log(i+i)
  
  }


  console.log("=======FATORIAL DE UM NUMERO=======")
var num = 6;                                                // numero a ser calculado
var result = num;                                          //  result recebe o valor de num
for (var i = 1; i < num; i++) {                           //   i = 5, 4, 3, 3, 1
    result *= i;                                         //    result * 5 * 4 * 3 * 2 * 1            
}
console.log("O fatorial de ", num, "e =>", result);      //     imprime o resultado