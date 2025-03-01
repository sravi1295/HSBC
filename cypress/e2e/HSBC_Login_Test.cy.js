Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});

describe('Validate the login functionality in HSBC application', () => {
    
    it('validate hsbc login page', () => {
      cy.visit('https://www.hsbc.co.in/')
      cy.get('.header-logo').should('be.visible') // Validate HSBC Bank Logo
      cy.title().should('eq', 'HSBC India - Credit Cards, NRI Services, Saving and Deposit') // Validate Home Page Title
      cy.get('.header-top-container').should('be.visible')
      cy.get('.selected-item.login-button.only-one-link').then((n)=>{
        let url=n.prop('href')
        cy.visit(url)
      })
      cy.url().should('include','https://www.hsbc.co.in/security/')
      cy.wait(5000)
      cy.get('.col-sm-12.userHeading').should('be.visible')
      cy.get('#username_submit_btn').should('be.visible')
      cy.get('.row.padding-b-2x').type('xyz@gmail.com')
      cy.get('.row.rem-unchecked').click()
      cy.get('.icon.icon-circle-help-solid.help-icon').should('be.visible').click()
      cy.wait(5000)
      cy.get('h3').contains('Username')
      cy.get('.close-btn').should('be.visible').click({force:true})

    })
})
 