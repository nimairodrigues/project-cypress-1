Feature: Criar candidato

Scenario: CT-44 Criar novo candidato
Given Eu estou logado no sistema
And Estou na tela de dashboard
When Eu clicar em "Recruitment" na barra de menu
And Clicar no botão de criar novo candidato
And Digitar no campo First Name o nome "Jurandir"
And Digitar no campo Last Name o nome "Marcedo"
And Digitar no campo email o email "jurandir@email.com"
And Clicar no botão de salvar
Then Deve aparecer um toast informando "Successfully Saved"

Scenario: CT-45 Criar novo candidato sem dados
Given Eu estou logado no sistema
And Estou na tela de dashboard
When Eu clicar em "Recruitment" na barra de menu
And Clicar no botão de criar novo candidato
And Clicar no botão de salvar
Then Deve aparecer uma mensagem span embaixo de first name escrito "Required"
And Deve aparecer uma mensagem span embaixo de last name escrito "Required"
And Deve aparecer uma mensagem span embaixo de email escrito "Required"

Scenario: CT-46 Criar novo candidato com e-mail formatado incorretamente
Given Eu estou logado no sistema
And Estou na tela de dashboard
When Eu clicar em "Recruitment" na barra de menu
And Clicar no botão de criar novo candidato
And Digitar no campo First Name o nome "Jurandir"
And Digitar no campo Last Name o nome "Marcedo"
And Digitar no campo email o email "jurandir#email.com"
And Clicar no botão de salvar
And Deve aparecer uma mensagem span embaixo de email escrito "Expected format: admin@example.com"

Scenario: CT-47 Criar novo candidato e atribui-lo a alguma vaga
Given Eu estou logado no sistema
And Estou na tela de dashboard
When Eu clicar em "Recruitment" na barra de menu
And Clicar no botão de criar novo candidato
And Digitar no campo First Name o nome "Jurandir"
And Digitar no campo Last Name o nome "Marcedo"
And Selecionar opcao no campo Vacancy uma opcao qualquer
And Digitar no campo email o email "jurandir@email.com"
And Clicar no botão de salvar
Then Deve aparecer um toast informando "Successfully Saved"