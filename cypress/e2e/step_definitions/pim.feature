Feature: Pim

Scenario: CT-32 Fazer pesquisa de nome de usuário na lista de empregados
Given Eu estou logado no sistema
And Estou na tela de dashboard
And Tenho um usuario criado para utilizar
When Eu clicar em "PIM" na barra de menu
And Digitar no campo de employee name de filtro
And Clicar no botão de pesquisar 
Then Deve aparecer alguns usuarios no resultado da pesquisa