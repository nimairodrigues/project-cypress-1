// Importa os steps do Cucumber pro Cypress (Given, When, Then)
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

//Importando page para a classe de testes
import adminPage from "../../../support/pageObjects/adminPage";
import loginPage from '../../../support/pageObjects/loginPage';
import menuPage from '../../../support/pageObjects/menuPage';

// G I V E N 
Given('Eu estou logado no sistema', () => {
    cy.acessarSistema()
    cy.logar('Admin', 'admin123')
    loginPage.isDashboardVisible()
})

And('Estou na tela de dashboard', () => {
    loginPage.isDashboardVisible()
})

When('Eu clicar em {string} na barra de menu', (opcaoMenu) => {
    menuPage.acessarOpcaoMenu(opcaoMenu)
})

And('Clicar no botão de criar novo usuário', () => {
    adminPage.clicarBotaoNovoUsuario()
})

And('Selecionar opcao no campo User Role uma opcao qualquer', () => {
    adminPage.selectRoleNumOption(1)
})

And('Digitar no campo Employee Name {string}', name => {
    adminPage.digitarEmployeeName(name)
})

And('Selecionar opcao no campo Status uma opcao qualquer', () => {
    adminPage.selectStatusNameOption('Enabled')
})

And('Digitar no campo Username {string}', username => {
    adminPage.digitarUsername(username)
})

And('Digitar no campo Password {string}', password => {
    adminPage.digitarPassword(password)
})

And('Digitar no campo Confirm Password {string}', confirmPassword => {
    adminPage.digitarConfirmPassword(confirmPassword)
})

And('Clicar no botão de salvar', () => {
    cy.get('button:contains("Save")').click()
})

Then('Deve aparecer um toast informando {string}', textoToast => {
    adminPage.msgToastContains(textoToast)
})

Then('Deve aparecer uma mensagem span embaixo de username escrito {string}', textSpan => {
    adminPage.textSpanUsernameShouldBe(textSpan)
})