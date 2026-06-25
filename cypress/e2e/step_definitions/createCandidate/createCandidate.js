import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'

import loginPage from '../../../support/pageObjects/loginPage'
import menuPage from '../../../support/pageObjects/menuPage'
import recruitmentPage from '../../../support/pageObjects/recruitmentPage'

Given('Eu estou logado no sistema', () => {
    cy.viewport(1200, 768)
    cy.acessarSistema()
    cy.logar('Admin', 'admin123')
    loginPage.isDashboardVisible()
})

And('Estou na tela de dashboard', () => {
    loginPage.isDashboardVisible()
})

When('Eu clicar em {string} na barra de menu', menuOption => {
    menuPage.acessarOpcaoMenu(menuOption)
})

And('Clicar no botão de criar novo candidato', () => {
    recruitmentPage.clicarBotãoNewCandidate()
})

And('Digitar no campo First Name o nome {string}', firstName => {
    recruitmentPage.typeFirstNameField(firstName)
})

And('Digitar no campo Last Name o nome {string}', lastName => {
    recruitmentPage.typeLastNameField(lastName)
})

And('Digitar no campo email o email {string}', email => {
    recruitmentPage.typeEmailField(email)
})

And('Clicar no botão de salvar', () => {
    recruitmentPage.clickSaveButton()
})

And('Selecionar opcao no campo Vacancy uma opcao qualquer', () => {
    recruitmentPage.selectVacancyNumOption(4)
})

Then('Deve aparecer um toast informando {string}', msgToast => {
    recruitmentPage.msgToastContains(msgToast)
})

And('Deve aparecer uma mensagem span embaixo de first name escrito {string}', msgSpan => {
    recruitmentPage.textSpanFirstNameShouldBe(msgSpan)
})

And('Deve aparecer uma mensagem span embaixo de last name escrito {string}', msgSpan => {
    recruitmentPage.textSpanLastNameShouldBe(msgSpan)
})

And('Deve aparecer uma mensagem span embaixo de email escrito {string}', msgSpan => {
    recruitmentPage.textSpanEmailShouldBe(msgSpan)
})
