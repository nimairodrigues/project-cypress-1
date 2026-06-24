// Importa os steps do Cucumber pro Cypress (Given, When, Then)
import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'

//Importando page para a classe de testes
import loginPage from '../../../support/pageObjects/loginPage'
import menuPage from '../../../support/pageObjects/menuPage'
import pimPage from '../../../support/pageObjects/pimPage'

Given('Eu estou logado no sistema', () => {
    cy.acessarSistema()
    cy.logar('Admin', 'admin123')
    loginPage.isDashboardVisible()
})

And('Estou na tela de dashboard', () => {
    loginPage.isDashboardVisible()
})

And('Tenho um usuario criado para utilizar', () => {
    pimPage.criarNovoEmployee('Marcelo', 'Freitas')
})

When('Eu clicar em {string} na barra de menu', (opcaoMenu) => {
    menuPage.acessarOpcaoMenu(opcaoMenu)
})

And('Digitar no campo de employee name de filtro', () => {
    cy.get('@firstNameUserCreated').then(firstName => {
        pimPage.typeFilterEmployeeName(firstName)
    })
})

And('Clicar no botão de pesquisar', () => {
    pimPage.clicarBotaoSearch()
})

Then('Deve aparecer alguns usuarios no resultado da pesquisa', () => {
    cy.get('@iniciaisDoNome').then(initialsName => {
        pimPage.verifyNameUsersTable(initialsName)
    })
})