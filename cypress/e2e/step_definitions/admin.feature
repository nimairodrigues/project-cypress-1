Feature: admin

Scenario: CT-14 Apagar um usuário
Given Eu estou logado no sistema
And Estou na tela de dashboard
And Tenho um usuário para utilizar
When Eu clicar em "Admin" na barra de menu
And Clicar no ícone de excluir de um usuário qualquer
And Clicar para confirmar a exclusão
Then Deve aparecer um toast informando "Successfully Deleted"

Scenario: CT-15 Editar um usuário
Given Eu estou logado no sistema
And Estou na tela de dashboard
And Tenho um usuário para utilizar
When Eu clicar em "Admin" na barra de menu
And Clicar no ícone de editar de um usuário qualquer
And Digitar no campo Username "usernameEditado"
And Clicar no botão de salvar
Then Deve aparecer um toast informando "Successfully Updated"

Scenario: CT-22 Pesquisar por grupo de Administrador
Given Eu estou logado no sistema
And Estou na tela de dashboard
When Eu clicar em "Admin" na barra de menu
And Selecionar opcao no campo User Role do filtro opcao administrador
And Clicar no botão de search
Then Deve aparecer apenas usuarios admin na tabela