// Importa os steps do Cucumber pro Cypress (Given, When, Then)
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

//Importando page para a classe de testes
import loginPage from '../../../support/pageObjects/loginPage'
import claimPage from '../../../support/pageObjects/claimPage'
import createClaimPage from '../../../support/pageObjects/createClaimPage'
import menuPage from '../../../support/pageObjects/menuPage'

Given('Eu estou logado no sistema', () => {
    cy.acessarSistema()
    cy.logar('Admin', 'admin123')
    loginPage.isDashboardVisible()
})

And('Estou na tela de dashboard', () => {
    loginPage.isDashboardVisible()
})

And('Tenho uma reclamação criada', () => {
    menuPage.acessarOpcaoMenu('Claim')
    claimPage.clickAssignClaim()
    createClaimPage.createAssignClaim("","","")
})

When('Eu clicar em {string} na barra de menu', (opcaoMenu) => {
    cy.intercept('GET', '/web/index.php/api/v2/claim/employees/requests**')
            .as('reqGetClaimList')
    menuPage.acessarOpcaoMenu(opcaoMenu)
    cy.get('@reqGetClaimList').its('response.statusCode').should('eq', 200)
})

And('digitar no campo de empregado {string} e o seleciono', (employeeName) => {
    claimPage.typeEmployeeNameAndSelect(employeeName)
})

And('clicar no botão de buscar', () => {
    claimPage.clickSearch()
})

And('selecionar o Event Name {string}', (eventName) => {
    claimPage.selectEventName(eventName)
})

And('digitar no campo de ID de referencia {string} e o seleciono', (idReference) => {
    claimPage.typeReferenceIdAndSelect(idReference)
})

And('digito no campo de data inicial {string}', (dataInicial) => {
    claimPage.typeFromDate(dataInicial)
})

And('digito no campo de data final {string}', (dataFinal) => {
    claimPage.typeToDate(dataFinal)
})

And('clicar no botão de reset', () => {
    claimPage.clickReset()
})

And('selecionar o status {string}', (status) => {
    claimPage.selectStatus(status)
})

And('clicar no botão de atribuir reclamação', () => {
    claimPage.clickAssignClaim()
})

Then('deve aparecer no resultado apenas o que estiver relacionado com o empregado selecionado', () => {
    cy.get('@nomeFormatado').then(nome => {
      claimPage.verifyEmployeeInTable(nome)
    })
})

Then('deve aparecer no resultado apenas o que estiver relacionado com o Event name selecionado', () => {
    cy.get('@nameEvent').then(nome => {
      claimPage.verifyEventNameInTable(nome)
    })
})

Then('deve aparecer no resultado apenas o que estiver relacionado com o ID de referencia selecionado', () => {
    cy.get('@referenceIdSelected').then(referenceIdSelected => {
        claimPage.verifyExistenceInTable(referenceIdSelected)
    })
})

Then('deve aparecer resultados desde aquela data até hoje', () => {
    claimPage.verifyExistenceEmployeeInTable()
})

Then('deve aparecer resultados desde a data inicial até a data de hoje', () => {
    claimPage.verifyExistenceEmployeeInTable()
})

Then('os campos de busca devem ser resetados e o resultado deve mostrar todas as reclamações', () => {
    claimPage.verifyExistenceEmployeeInTable()
})

Then('deve aparecer no resultado apenas o que estiver relacionado com o status selecionado', () => {
    cy.get('@statusSelected').then(statusSelected => {
        claimPage.verifyAllStatusInTableAreEqualTo(statusSelected)
    })
})

Then('deve ser redirecionado para a tela de criação de reclamação', () => {
    createClaimPage.verifyUrl()
})

Then('deve mostrar o formulário de criação de reclamação', () => {
    createClaimPage.verifyFormVisible()
})

Then('deve mostrar uma toast indicando que não foram encontrados resultados para os critérios de busca', () => {
    claimPage.msgToastContains('No Records Found')
})

And('deve aparecer nos resultados mensagem indicando que não foram encontrados resultados', () => {
    claimPage.verifyNoResultsFound()
})