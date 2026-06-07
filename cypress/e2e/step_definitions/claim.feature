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

  Scenario: CT8: Contador de Registros Encontrados.
    Given Eu estou logado no sistema
    And Estou na tela de dashboard
    When Eu clicar em "Claim" na barra de menu
