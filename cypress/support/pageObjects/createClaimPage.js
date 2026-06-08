/// <reference types="cypress" />

class createClaimPage {

    typeAndSelectEmployeeName(name) {
        //Lógica para clicar na primeira opção que aparecer caso o nome seja vazio
        if(name == "") {
            cy.get('[class="oxd-autocomplete-text-input oxd-autocomplete-text-input--active"]').type('a')
            cy.get('[role="listbox"] span:eq(0)').click()
        } else {
            cy.get('[class="oxd-autocomplete-text-input oxd-autocomplete-text-input--active"]').type(name)
            cy.get('[role="listbox"] span:contains('+name+')').click()
        }
    }

    selectEvent(eventName) {
        if(eventName == "") {
            cy.get('[class="oxd-form-row"] [class="oxd-grid-item oxd-grid-item--gutters"]:eq(1)').click()
            cy.get('[role="listbox"] span:eq(0)').click()
        } else {
            cy.get('[class="oxd-form-row"] [class="oxd-grid-item oxd-grid-item--gutters"]:eq(1)').click()
            cy.get('[role="listbox"] span:contains('+eventName+')').click()
        }
    }
    
    selectCurrency(currencyName) {
        if(currencyName == "") {
            cy.get('[class="oxd-form-row"] [class="oxd-grid-item oxd-grid-item--gutters"]:eq(2)').click()
            cy.get('[role="listbox"] span:eq(0)').click()
        } else {
            cy.get('[class="oxd-form-row"] [class="oxd-grid-item oxd-grid-item--gutters"]:eq(2)').click()
            cy.get('[role="listbox"] span:contains('+currencyName+')').click()
        }
    }

    clickCreateButton() {
        cy.get('.oxd-button--secondary').click()
        cy.get('.oxd-toast').should('contain', 'Successfully Saved')
    }

    createAssignClaim(employeeName, eventName, currencyName) {
        this.typeAndSelectEmployeeName(employeeName)
        this.selectEvent(eventName)
        this.selectCurrency(currencyName)
        this.clickCreateButton()
    }

    verifyUrl() {
        cy.url().should('include', '/web/index.php/claim/assignClaim')
    }

    verifyFormVisible() {
        cy.get('[class="oxd-autocomplete-text-input oxd-autocomplete-text-input--active"]').should('be.visible')
        cy.get('[class="oxd-form-row"] [class="oxd-grid-item oxd-grid-item--gutters"]:eq(1)').should('be.visible')
        cy.get('[class="oxd-form-row"] [class="oxd-grid-item oxd-grid-item--gutters"]:eq(2)').should('be.visible')
        cy.get('.oxd-button--secondary').should('be.visible')
    }
}

export default new createClaimPage()