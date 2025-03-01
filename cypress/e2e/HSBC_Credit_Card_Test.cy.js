Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});

describe('Credit card test in HSBC application', () => {
    
    it('validate hsbc creit card page', () => {
      cy.visit('https://www.hsbc.co.in/')
      cy.get('.header-main').contains('Banking')
      cy.get('span.header-main-navigation-title').contains('Banking') .should('be.visible') .click()
      cy.get('.doormat-heading-link').then((n)=>{
        let url=n.prop('href')
        cy.visit(url)
      })
      cy.url().should('include','https://www.hsbc.co.in/credit-cards/')
      cy.wait(5000)
      cy.get('.A-TYPS1L-RW-DEV.m-xsm-12.m-mdsm-10.m-md-8').should('be.visible','Credit cards')
      cy.get('#chp_main_link_1').should('be.visible').click()
      cy.url().should('eq','https://www.hsbc.co.in/credit-cards/products/taj/')
      cy.get('.crh-hero-banner__main-header.A-TYPS1R-RW-DEV.text-container.text').should('be.visible')
      cy.get('.header-logo.lg-2').should('be.visible').click()
      cy.url().should('eq','https://www.hsbc.co.in/')

    })
})