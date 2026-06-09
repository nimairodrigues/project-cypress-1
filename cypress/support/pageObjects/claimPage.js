/// <reference types="cypress" />

import menuPage from './menuPage'

class ClaimPage {

    criarNovoEmployee(employeeName, eventName, currencyName) {
        menuPage.acessarOpcaoMenu('Claim')
        cy.get('[class="orangehrm-paper-container"] [type="button"]').click()
        cy.get('[class="oxd-autocomplete-text-input oxd-autocomplete-text-input--active"]').type(employeeName)
        cy.get('[role="listbox"] span:eq(0)').click()
        cy.get('[class="oxd-form-row"] [class="oxd-grid-item oxd-grid-item--gutters"]:eq(1)').click()
        cy.get('[role="listbox"] span:eq(0)').click()
        cy.get('[class="oxd-form-row"] [class="oxd-grid-item oxd-grid-item--gutters"]:eq(2)').click()
        cy.get('[role="listbox"] span:eq(0)').click()
        cy.get('.oxd-button--secondary').click()
        cy.get('.oxd-toast').should('contain', 'Successfully Saved')
    }

    clickAssignClaim() {
        cy.get('[class="oxd-button oxd-button--medium oxd-button--secondary"]').click()
    }

    typeEmployeeNameAndSelect(name) {
        if(name == "") {
            cy.get('.oxd-grid-4.orangehrm-full-width-grid .oxd-autocomplete-text-input:eq(0)').type('a')
            cy.get('[role="listbox"] span:eq(0)', { timeout: 20000 }).then($el => {
                const nome = $el.text();
                const partes = nome.trim().split(/\s+/);
                const primeiroNome = partes[0];
                const ultimoNome = partes[partes.length - 1];
                cy.wrap(`${primeiroNome} ${ultimoNome}`).as('nomeFormatado');
                cy.wrap($el).click();
            })
        } else {
            cy.get('.oxd-grid-4.orangehrm-full-width-grid .oxd-autocomplete-text-input:eq(0)').type(name)
            cy.get('[role="listbox"] span:contains('+name+')', { timeout: 20000 }).then($el => {
                const nome = $el.text();
                const partes = nome.trim().split(/\s+/);
                const primeiroNome = partes[0];
                const ultimoNome = partes[partes.length - 1];
                cy.wrap(`${primeiroNome} ${ultimoNome}`).as('nomeFormatado');
                cy.wrap($el).click();
            })
        }        
    }


    clickSearch() {
        cy.intercept('GET', '/web/index.php/api/v2/claim/employees/requests**')
            .as('reqGetClaimList')
        cy.get('.oxd-form-actions > .oxd-button--secondary').click()
        cy.wait('@reqGetClaimList').its('response.statusCode').should('eq', 200)
    }

    verifyEmployeeInTable(name) {
        cy.get('[class="oxd-table-card"] [class="oxd-table-cell oxd-padding-cell"]:nth-child(2) div')
            .each(arr => {
                cy.wrap(arr.text()).should('be.equal', name)
            })
    }
    
    selectEventName(eventName) {
        if(eventName == "") {
            cy.get('[class="oxd-select-text oxd-select-text--active"]:eq(0)').click()
            cy.get('[role="listbox"] span:eq(0)', { timeout: 20000 }).then($el => {
                cy.wrap($el).invoke('text').as('nameEvent')
                cy.wrap($el).click()
            })
        } else {
            cy.get('[class="oxd-select-text oxd-select-text--active"]:eq(0)').click()
            cy.get('[role="listbox"] span:contains('+eventName+')', { timeout: 20000 }).then($el => {
                cy.wrap($el).invoke('text').as('nameEvent')
                cy.wrap($el).click()
            })
        }
    }

    verifyEventNameInTable(name) {
        cy.get('[class="oxd-table-card"] [class="oxd-table-cell oxd-padding-cell"]:nth-child(3) div')
            .each(arr => {
                cy.wrap(arr.text())
                .should('be.equal', name)
            })
    }

    typeReferenceIdAndSelect(id) {
        if(id == "") {
            cy.get('.oxd-grid-4.orangehrm-full-width-grid .oxd-autocomplete-text-input:eq(1)').type(1)
            cy.get('[role="listbox"] span:eq(0)', { timeout: 20000 }).then($el => {
                cy.wrap($el).invoke('text').as('referenceIdSelected')
                cy.wrap($el).click()
            })
        } else {
            cy.get('.oxd-grid-4.orangehrm-full-width-grid .oxd-autocomplete-text-input:eq(1)').type(id)
            cy.get('[role="listbox"] span:contains('+id+')', { timeout: 20000 }).then($el => {
                cy.wrap($el).invoke('text').as('referenceIdSelected')
                cy.wrap($el).click()
            })
        }
        
    }

    verifyExistenceInTable(text) {
        cy.get('[class="oxd-table-card"]').should('contain', text)
    }

    typeFromDate(date) {
        if(date == "") {
            cy.get('.oxd-grid-4.orangehrm-full-width-grid .oxd-date-input:eq(0) input').type("2000-01-01")
        } else {
            cy.get('.oxd-grid-4.orangehrm-full-width-grid .oxd-date-input:eq(0) input').type(date)
        }
    }

    verifyExistenceEmployeeInTable() {
        cy.get('.oxd-table-body .oxd-table-card').should('have.length.at.least', 1)
    }

    typeToDate(date) {
        if(date == "") {
            cy.dateToday().then(today => {
                cy.get('.oxd-grid-4.orangehrm-full-width-grid .oxd-date-input:eq(1) input').type(today)
            })
        } else {
            cy.get('.oxd-grid-4.orangehrm-full-width-grid .oxd-date-input:eq(1) input').type(date)
        }
        
    }

    clickReset() {
        cy.intercept('GET', '/web/index.php/api/v2/claim/employees/requests**').as('reqGetClaimListreset')
        cy.get('.oxd-form-actions > .oxd-button.oxd-button--medium.oxd-button--ghost').click()
        cy.wait('@reqGetClaimListreset').its('response.statusCode').should('eq', 200)
    }
    
    verifyExistenceInTableMoreThanOne() {
        cy.get('[class="oxd-table-card"]').should('have.length.at.least', 2)
    }

    selectStatus(status) {
        if(status == "") {
            cy.get('[class="oxd-select-text oxd-select-text--active"]:eq(1)').click()
            cy.get('[role="listbox"] span:eq(0)', { timeout: 20000 }).then($el => {
                cy.wrap($el).invoke('text').as('statusSelected')
                cy.wrap($el).click()
            })
        } else {
            cy.get('[class="oxd-select-text oxd-select-text--active"]:eq(1)').click()
            cy.get('[role="listbox"] span:contains('+status+')', { timeout: 20000 }).then($el => {
                cy.wrap($el).invoke('text').as('statusSelected')
                cy.wrap($el).click()
            })
        }
    }
    
    verifyAllStatusInTableAreEqualTo(status) {
        cy.get('[class="oxd-table-card"] [role="row"] [role="cell"]:nth-child(7) div').each(arr => {
            cy.wrap(arr.text()).should('be.equal', status)
        })
    }

    msgToastContains(textoToast) {
        cy.get('[class="oxd-toast-container oxd-toast-container--bottom"]').should('contain', textoToast)
    }

    verifyNoResultsFound() {
        cy.get('.orangehrm-horizontal-padding > .oxd-text').should('contain', 'No Records Found')
    }
}

export default new ClaimPage()