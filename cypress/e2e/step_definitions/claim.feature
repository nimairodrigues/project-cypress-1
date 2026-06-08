Feature: Claim
  
  Scenario: CT1: Busca por Nome de Funcionário.
    Given Eu estou logado no sistema
    And Estou na tela de dashboard
    And Tenho uma reclamação criada
    When Eu clicar em "Claim" na barra de menu
    And digitar no campo de empregado "" e o seleciono
    And clicar no botão de buscar
    Then deve aparecer no resultado apenas o que estiver relacionado com o empregado selecionado

  Scenario: CT2: Filtragem por Event Name.
    Given Eu estou logado no sistema
    And Estou na tela de dashboard
    When Eu clicar em "Claim" na barra de menu
    And selecionar o Event Name ""
    And clicar no botão de buscar
    Then deve aparecer no resultado apenas o que estiver relacionado com o Event name selecionado
  
  Scenario: CT3: Filtro por Reference Id.
    Given Eu estou logado no sistema
    And Estou na tela de dashboard
    When Eu clicar em "Claim" na barra de menu
    And digitar no campo de ID de referencia "" e o seleciono
    And clicar no botão de buscar
    Then deve aparecer no resultado apenas o que estiver relacionado com o ID de referencia selecionado
  
  Scenario: CT4: Filtro de Período por Data Inicial.
    Given Eu estou logado no sistema
    And Estou na tela de dashboard
    When Eu clicar em "Claim" na barra de menu
    And digito no campo de data inicial ""
    And clicar no botão de buscar
    Then deve aparecer resultados desde aquela data até hoje
  
  Scenario: CT5: Filtro de Período por Data Final.
    Given Eu estou logado no sistema
    And Estou na tela de dashboard
    When Eu clicar em "Claim" na barra de menu
    And digito no campo de data final ""
    And clicar no botão de buscar
    Then deve aparecer resultados desde a data inicial até a data de hoje
  
  Scenario: CT6: Funcionalidade do Botão Reset
    Given Eu estou logado no sistema
    And Estou na tela de dashboard
    When Eu clicar em "Claim" na barra de menu
    And digitar no campo de ID de referencia "" e o seleciono
    And clicar no botão de buscar
    And clicar no botão de reset
    Then os campos de busca devem ser resetados e o resultado deve mostrar todas as reclamações

  Scenario: CT7: Filtragem por Status.
    Given Eu estou logado no sistema
    And Estou na tela de dashboard
    When Eu clicar em "Claim" na barra de menu
    And selecionar o status ""
    And clicar no botão de buscar
    Then deve aparecer no resultado apenas o que estiver relacionado com o status selecionado
  
  Scenario: CT8: Funcionalidade botão de criar reclamação
    Given Eu estou logado no sistema
    And Estou na tela de dashboard
    When Eu clicar em "Claim" na barra de menu
    And clicar no botão de atribuir reclamação
    Then deve ser redirecionado para a tela de criação de reclamação
    And deve mostrar o formulário de criação de reclamação
  
  Scenario: CT9: Validação de Busca sem Resultados.
    Given Eu estou logado no sistema
    And Estou na tela de dashboard
    When Eu clicar em "Claim" na barra de menu
    And digito no campo de data final "2000-01-01"
    And clicar no botão de buscar
    Then deve mostrar uma toast indicando que não foram encontrados resultados para os critérios de busca
    And deve aparecer nos resultados mensagem indicando que não foram encontrados resultados
