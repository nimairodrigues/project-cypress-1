Feature: Recruitment

Scenario: CT-48 Apagar candidato
Given Eu estou logado no sistema
And Estou na tela de dashboard
And Tenho um candidato adicionado
When Eu clicar em "Recruitment" na barra de menu
And Clicar no ícone de lixeira de um candidato
And Clicar no botão de confirmar a exclusão
Then Deve aparecer um toast informando "Successfully Deleted"

Scenario: CT-49 Pesquisar por grupo de Titulo de trabalho “QA Lead”
Given Eu estou logado no sistema
And Estou na tela de dashboard
When Eu clicar em "Recruitment" na barra de menu
And Selecionar opcao no campo Job Title do filtro a opcao "QA Lead"
And Clicar no botão de search
Then Deve aparecer apenas usuarios do job pesquisado na tabela

Scenario: CT-50 Clicar em ver mais detalhes sobre o candidato
Given Eu estou logado no sistema
And Estou na tela de dashboard
And Tenho um candidato adicionado
When Eu clicar em "Recruitment" na barra de menu
And Clicar no ícone de olho de um candidato
Then Deve aparecer o perfil do candidato