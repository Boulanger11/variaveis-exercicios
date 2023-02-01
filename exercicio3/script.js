const nomeCompleto = prompt("Qual o seu Nome Completo?")
const nascimento = Number(prompt("Qual sua Data de nascimento?"))
let endereço = prompt("Qual seu endereço?")
const cpf = Number(prompt("Seu CPF:"))
let escolaridade = prompt("Sua escolaridade?")
let cnh = confirm("Você possui CNH?")
let filhos = Number(prompt("Quantos filhes possui?"))
let cargo = prompt("Qual seu cargo atual?")
let salario = Number(prompt("Qual seu salário?"))
let comissão = Number(prompt("Recebe comissão? Se sim, informe a porcentagem, caso não, responda com zero?"))
let anoAdmissão = Number(prompt("Informe o ano da sua admissão?"))

console.log(typeof nomeCompleto, typeof nascimento, typeof endereço, typeof cpf, typeof escolaridade, typeof cnh, typeof filhos, typeof cargo, typeof salario, typeof comissão, typeof anoAdmissão)

console.log(` 
Nome Completo: ${nomeCompleto}  
Data de Nascimento: ${nascimento}  
Seu endereço: ${endereço}  
Seu CPF: ${cpf}  
Escolaridade: ${escolaridade}  
CNH: ${cnh}  
Tem filhos: ${filhos}  
Cargo: ${cargo}
Salario: ${salario}
Comissão: ${comissão}
Ano de Admissão: ${anoAdmissão}    
`)
