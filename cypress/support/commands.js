import loginPage from "./pageObjects/loginPage"
import menuPage from "./pageObjects/menuPage"

//Criando um comando no cypress para realizar o login
Cypress.Commands.add('logar', (username, password) => {
    loginPage.logar(username, password)
})

//Criando um comando no cypresss para acessar o sistema
Cypress.Commands.add('acessarSistema', () => {
    cy.visit("https://opensource-demo.orangehrmlive.com")
})

Cypress.Commands.add('criarReclamacao', () => {
    menuPage.acessarOpcaoMenu('Claim')
    cy.get('[class="orangehrm-paper-container"] [type="button"]').click()
    cy.get('[class="oxd-autocomplete-text-input oxd-autocomplete-text-input--active"]').type('a')
    cy.get('[role="listbox"] span:eq(0)').click()
    cy.get('[class="oxd-form-row"] [class="oxd-grid-item oxd-grid-item--gutters"]:eq(1)').click()
    cy.get('[role="listbox"] span:eq(0)').click()
    cy.get('[class="oxd-form-row"] [class="oxd-grid-item oxd-grid-item--gutters"]:eq(2)').click()
    cy.get('[role="listbox"] span:eq(0)').click()
    cy.get('.oxd-button--secondary').click()
    cy.get('.oxd-toast').should('contain', 'Successfully Saved')
})

Cypress.Commands.add('dateToday', () => {
    const today = new Date();
    const formattedDate = today.toISOString().split('T')[0];
    return formattedDate;
});