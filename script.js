let numberOne = prompt("Digite o primeiro número: ")
let numberTwo = prompt("Digite o segundo número: ")

const soma = Number(numberOne) + Number(numberTwo);
const sub = Number(numberOne) - Number(numberTwo);
const mult = Number(numberOne) * Number(numberTwo);
const div = Number(numberOne) / Number(numberTwo);
const rest = Number(numberOne) % Number(numberTwo);
let isPar = (soma % 2).toFixed(0) == 0;
let isEquals = Number(numberOne) == Number(numberTwo);

alert(`A soma dos dois números é ${soma}`)
alert(`A subtração dos dois números é ${sub}`)
alert(`A multiplicação dos dois números é ${mult}`)
alert(`A divisão dos dois números é ${div}`)
alert(`O resto da divisão dos dois números é ${rest}`)

if(isPar){
    alert("A soma dos números é par")
}else{
    alert("A soma dos números é ímpar")
}

if(isEquals){
    alert('Os números são iguais')
}else{
    alert('Os números são diferentes')
}