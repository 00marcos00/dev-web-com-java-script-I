anoNascimento = 1991
nome = "marcos"

hoje = new Date()
anoAtual = hoje.getFullYear()
idade = anoAtual - anoNascimento
mensagem = "sou " + nome + " e tenho " + idade + " anos"

alert(mensagem)