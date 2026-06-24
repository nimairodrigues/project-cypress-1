// Importa os steps do Cucumber pro Cypress (Given, When, Then)
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

//Importando page para a classe de testes
import adminPage from "../../../support/pageObjects/adminPage";
import loginPage from '../../../support/pageObjects/loginPage';
import menuPage from '../../../support/pageObjects/menuPage';

let username = null

// G I V E N 
Given('Eu estou logado no sistema', () => {
    cy.acessarSistema()
    cy.logar('Admin', 'admin123')
    loginPage.isDashboardVisible()
})

And('Estou na tela de dashboard', () => {
    loginPage.isDashboardVisible()
})

And('Tenho um usuário para utilizar', () => {
    menuPage.acessarOpcaoMenu('Admin')
    adminPage.criarUser('a', 'Enabled', 'juliano', 'senhaqualquer1')
    menuPage.acessarOpcaoMenu('Dashboard')
})

// W H E N 
When('Eu clicar em {string} na barra de menu', (opcaoMenu) => {
    menuPage.acessarOpcaoMenu(opcaoMenu)
})

And('Clicar no ícone de excluir de um usuário qualquer', () => {
    cy.get('@usernameEscrito').then(usernameEscrito => {
        adminPage.clicarApagarUser(usernameEscrito)
    })
})

And('Clicar para confirmar a exclusão', () => {
    adminPage.clicarConfirmApagarUser()
})

And('Clicar no ícone de editar de um usuário qualquer', () => {
    cy.get('@usernameEscrito').then(usernameEscrito => {
        adminPage.clicarEditarUser(usernameEscrito)
    })
})

And('Selecionar opcao no campo User Role do filtro opcao administrador', () => {
    adminPage.selectFilterUserRole('Admin')
})

And('Clicar no botão de search', () => {
    adminPage.clicarBotaoSearch()
})

And('Digitar no campo Username {string}', username => {
    adminPage.digitarUsername(username)
})

And('Clicar no botão de salvar', () => {
    adminPage.clicarSalvar()
})

// T H E N
Then('Deve aparecer apenas usuarios admin na tabela', () => {
    adminPage.verificarUserRoleTable('Admin')
})

Then('Deve aparecer um toast informando {string}', textoToast => {
    adminPage.msgToastContains(textoToast)
})